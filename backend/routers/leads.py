import csv
import io
import os
import smtplib
from datetime import date, datetime
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

from fastapi import APIRouter, Form
from fastapi.responses import StreamingResponse
from pydantic import BaseModel, EmailStr

from db import supabase

router = APIRouter()


class LeadSchema(BaseModel):
    fname: str
    lname: str
    email: EmailStr
    phone: str
    service: str
    message: str
    source: str = 'contact_form'
    website_url: str = ''


class ScorePatch(BaseModel):
    audit_score: int


def send_email(lead: LeadSchema):
    smtp_host = os.environ.get("SMTP_HOST")
    smtp_port = int(os.environ.get("SMTP_PORT"))
    smtp_user = os.environ.get("SMTP_USER")
    smtp_pass = os.environ.get("SMTP_PASS")
    receiver_email = os.environ.get("RECEIVER_EMAIL")

    name = f"{lead.fname} {lead.lname}".strip()

    msg = MIMEMultipart()
    msg["From"] = f"Rank Spiders <{smtp_user}>"
    msg["To"] = receiver_email
    msg["Subject"] = f"Rank Spiders – New Lead ({lead.source})"

    body = f"""
    <h3>New Lead Details</h3>
    <p><strong>Source:</strong> {lead.source}</p>
    <p><strong>Name:</strong> {name}</p>
    <p><strong>Email:</strong> {lead.email}</p>
    <p><strong>Phone:</strong> {lead.phone}</p>
    <p><strong>Website URL:</strong> {lead.website_url or '—'}</p>
    <p><strong>Service:</strong> {lead.service}</p>
    <p><strong>Message:</strong><br>{lead.message}</p>
    """
    msg.attach(MIMEText(body, "html"))

    try:
        with smtplib.SMTP_SSL(smtp_host, smtp_port) as server:
            server.login(smtp_user, smtp_pass)
            server.send_message(msg)
    except Exception as e:
        print(f"Error sending email: {e}")


@router.post("/submit")
async def submit_lead(
    fname:       str = Form(...),
    lname:       str = Form(default=''),
    email:       str = Form(...),
    phone:       str = Form(default=''),
    service:     str = Form(default=''),
    message:     str = Form(default=''),
    source:      str = Form(default='contact_form'),
    website_url: str = Form(default=''),
):
    lead = LeadSchema(
        fname=fname,
        lname=lname,
        email=email,
        phone=phone,
        service=service,
        message=message,
        source=source,
        website_url=website_url,
    )

    lead_id = None
    try:
        data = {
            "fname":       lead.fname,
            "lname":       lead.lname,
            "email":       lead.email,
            "phone":       lead.phone,
            "service":     lead.service,
            "message":     lead.message,
            "source":      lead.source,
            "website_url": lead.website_url,
            "created_at":  datetime.utcnow().isoformat(),
        }
        res = supabase.table("leads").insert(data).execute()
        if res.data:
            lead_id = res.data[0].get("id")
    except Exception as e:
        print(f"Supabase error with new columns, trying fallback: {e}")
        # Fallback: insert with original columns only (before SQL migration is run)
        try:
            fallback_data = {
                "fname":      lead.fname,
                "lname":      lead.lname,
                "email":      lead.email,
                "phone":      lead.phone,
                "service":    lead.service,
                "message":    lead.message,
                "created_at": datetime.utcnow().isoformat(),
            }
            res = supabase.table("leads").insert(fallback_data).execute()
            if res.data:
                lead_id = res.data[0].get("id")
            print("Fallback insert succeeded. Run the SQL migration to enable full lead tracking.")
        except Exception as e2:
            print(f"Supabase fallback error (non-fatal): {e2}")

    send_email(lead)

    return {"status": "success", "message": "Form submitted successfully", "lead_id": lead_id}


@router.patch("/leads/{lead_id}/score")
async def patch_lead_score(lead_id: str, body: ScorePatch):
    try:
        supabase.table("leads").update({"audit_score": body.audit_score}).eq("id", lead_id).execute()
    except Exception as e:
        print(f"Score patch error (non-fatal): {e}")
    return {"status": "ok"}


@router.get("/leads/export")
async def export_leads():
    try:
        res = supabase.table("leads").select("*").order("created_at", desc=True).execute()
        rows = res.data or []
    except Exception as e:
        print(f"Export error: {e}")
        rows = []

    output = io.StringIO()
    writer = csv.writer(output)
    writer.writerow([
        "ID", "First Name", "Last Name", "Email", "Phone",
        "Lead Source", "Website URL", "Service", "Message",
        "Audit Score", "Date",
    ])
    for r in rows:
        writer.writerow([
            r.get("id", ""),
            r.get("fname", ""),
            r.get("lname", ""),
            r.get("email", ""),
            r.get("phone", ""),
            r.get("source", "contact_form"),
            r.get("website_url", ""),
            r.get("service", ""),
            r.get("message", ""),
            r.get("audit_score", ""),
            r.get("created_at", ""),
        ])

    output.seek(0)
    filename = f"rankspiders-leads-{date.today().isoformat()}.csv"
    return StreamingResponse(
        iter([output.getvalue()]),
        media_type="text/csv",
        headers={"Content-Disposition": f'attachment; filename="{filename}"'},
    )
