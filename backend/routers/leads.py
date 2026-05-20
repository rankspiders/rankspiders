import os
import smtplib
from datetime import datetime
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

from fastapi import APIRouter, Form, HTTPException
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


def send_email(lead: LeadSchema):
    smtp_host = os.environ.get("SMTP_HOST")
    smtp_port = int(os.environ.get("SMTP_PORT"))
    smtp_user = os.environ.get("SMTP_USER")
    smtp_pass = os.environ.get("SMTP_PASS")
    receiver_email = os.environ.get("RECEIVER_EMAIL")

    name = f"{lead.fname} {lead.lname}"

    msg = MIMEMultipart()
    msg["From"] = f"Rank Spiders <{smtp_user}>"
    msg["To"] = receiver_email
    msg["Subject"] = "Rank Spiders – New Contact Form Submission"

    body = f"""
    <h3>New Lead Details</h3>
    <p><strong>Name:</strong> {name}</p>
    <p><strong>Email:</strong> {lead.email}</p>
    <p><strong>Phone:</strong> {lead.phone}</p>
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
    fname: str = Form(...),
    lname: str = Form(...),
    email: str = Form(...),
    phone: str = Form(...),
    service: str = Form(...),
    message: str = Form(...),
):
    lead = LeadSchema(
        fname=fname,
        lname=lname,
        email=email,
        phone=phone,
        service=service,
        message=message,
    )

    try:
        data = {
            "fname": lead.fname,
            "lname": lead.lname,
            "email": lead.email,
            "phone": lead.phone,
            "service": lead.service,
            "message": lead.message,
            "created_at": datetime.utcnow().isoformat(),
        }
        supabase.table("leads").insert(data).execute()
    except Exception as e:
        print(f"Supabase error: {e}")
        raise HTTPException(status_code=500, detail="Failed to save lead to database")

    send_email(lead)

    return {"status": "success", "message": "Form submitted successfully"}
