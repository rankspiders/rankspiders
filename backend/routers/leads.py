import csv
import html
import io
import os
import secrets
import smtplib
from datetime import date, datetime, timezone
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from typing import Annotated, Literal

from fastapi import APIRouter, Form, Header, HTTPException
from fastapi.responses import StreamingResponse
from pydantic import BaseModel, EmailStr, Field

from db import supabase

router = APIRouter()


# ── Admin auth dependency ────────────────────────────────────────────────────

def require_admin(authorization: str = Header(...)):
    """Protect admin-only endpoints with ADMIN_SECRET env var."""
    admin_secret = os.environ.get("ADMIN_SECRET", "")
    if not admin_secret:
        raise HTTPException(status_code=500, detail="ADMIN_SECRET not configured")
    token = authorization.removeprefix("Bearer ").strip()
    if not secrets.compare_digest(token, admin_secret):
        raise HTTPException(status_code=403, detail="Forbidden")


# ── Schemas ──────────────────────────────────────────────────────────────────

class LeadSchema(BaseModel):
    fname:       Annotated[str, Field(max_length=100)]
    lname:       Annotated[str, Field(max_length=100)]
    email:       EmailStr
    phone:       Annotated[str, Field(max_length=20)]
    service:     Annotated[str, Field(max_length=100)]
    message:     Annotated[str, Field(max_length=5000)]
    source:      Literal[
        "contact_form", "popup", "seo_audit", "speed_checker",
        "rank_tracker", "meta_tags", "keyword_density",
        "robots_tester", "sitemap_validator"
    ] = "contact_form"
    website_url: Annotated[str, Field(max_length=2048)] = ""


class ScorePatch(BaseModel):
    audit_score: int


# ── Email helper ─────────────────────────────────────────────────────────────

def send_email(lead: LeadSchema):
    smtp_host = os.environ.get("SMTP_HOST")
    smtp_port = int(os.environ.get("SMTP_PORT", "465"))
    smtp_user = os.environ.get("SMTP_USER")
    smtp_pass = os.environ.get("SMTP_PASS")
    receiver_email = os.environ.get("RECEIVER_EMAIL")

    name = html.escape(f"{lead.fname} {lead.lname}".strip())

    msg = MIMEMultipart()
    msg["From"] = f"Rank Spiders <{smtp_user}>"
    msg["To"] = receiver_email
    msg["Subject"] = f"Rank Spiders – New Lead ({html.escape(lead.source)})"

    body = f"""
    <h3>New Lead Details</h3>
    <p><strong>Source:</strong> {html.escape(lead.source)}</p>
    <p><strong>Name:</strong> {name}</p>
    <p><strong>Email:</strong> {html.escape(str(lead.email))}</p>
    <p><strong>Phone:</strong> {html.escape(lead.phone)}</p>
    <p><strong>Website URL:</strong> {html.escape(lead.website_url) or '—'}</p>
    <p><strong>Service:</strong> {html.escape(lead.service)}</p>
    <p><strong>Message:</strong><br>{html.escape(lead.message)}</p>
    """
    msg.attach(MIMEText(body, "html"))

    try:
        with smtplib.SMTP_SSL(smtp_host, smtp_port) as server:
            server.login(smtp_user, smtp_pass)
            server.send_message(msg)
    except Exception as e:
        print(f"Error sending email: {e}")


# ── Routes ───────────────────────────────────────────────────────────────────

@router.post("/submit")
async def submit_lead(
    fname:       str = Form(...),
    lname:       str = Form(default=""),
    email:       str = Form(...),
    phone:       str = Form(default=""),
    service:     str = Form(default=""),
    message:     str = Form(default=""),
    source:      str = Form(default="contact_form"),
    website_url: str = Form(default=""),
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

    try:
        data = {
            "fname":       lead.fname,
            "lname":       lead.lname,
            "email":       str(lead.email),
            "phone":       lead.phone,
            "service":     lead.service,
            "message":     lead.message,
            "source":      lead.source,
            "website_url": lead.website_url,
            "created_at":  datetime.now(timezone.utc).isoformat(),
        }
        res = supabase.table("leads").insert(data).execute()
        lead_id = res.data[0].get("id") if res.data else None
    except Exception as e:
        print(f"Supabase insert error: {e}")
        raise HTTPException(status_code=500, detail="Failed to save lead. Please try again.")

    send_email(lead)
    return {"status": "success", "message": "Form submitted successfully", "lead_id": lead_id}


@router.patch("/leads/{lead_id}/score")
async def patch_lead_score(lead_id: str, body: ScorePatch, authorization: str = Header(...)):
    require_admin(authorization)
    try:
        supabase.table("leads").update({"audit_score": body.audit_score}).eq("id", lead_id).execute()
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Score update failed: {e}")
    return {"status": "ok"}


@router.get("/leads/export")
async def export_leads(authorization: str = Header(...)):
    require_admin(authorization)
    try:
        res = supabase.table("leads").select("*").order("created_at", desc=True).execute()
        rows = res.data or []
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Export failed: {e}")

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
