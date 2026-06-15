import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { fname, lname, email, phone, service, message } = data;

    // Basic validation
    if (!fname || !email || !phone) {
      return NextResponse.json(
        { error: 'Required fields missing' },
        { status: 400 }
      );
    }

    const name = `${fname} ${lname}`;

    // Create transporter
    // Note: In production, these should be in .env files
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.hostinger.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Rank Spiders" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL || 'info.rankspiders@gmail.com',
      replyTo: email,
      subject: 'Rank Spiders – New Contact Form Submission',
      html: `
        <h3>New Lead Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Save lead to Supabase via FastAPI — non-fatal
    const apiBase = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
    const payload = new URLSearchParams({
      fname,
      lname: lname || '',
      email,
      phone,
      service: service || 'General Enquiry',
      message: message || '',
      source: 'contact_form',
      website_url: '',
    });
    fetch(`${apiBase}/api/submit`, { method: 'POST', body: payload })
      .catch(err => console.error('Lead DB save failed (non-fatal):', err));

    return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Mailer Error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
