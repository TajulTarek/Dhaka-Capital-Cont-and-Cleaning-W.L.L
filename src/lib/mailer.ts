// ── Nodemailer helper ───────────────────────────────────────────────────────
// Reads SMTP credentials from environment variables.
// Configure in .env.local (never commit that file).

import nodemailer from "nodemailer";
import type { ContactFormData } from "@/types";

/** Create a reusable transporter configured from environment variables. */
function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT ?? "465", 10),
    secure: process.env.SMTP_SECURE !== "false", // true for port 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

/** Send the contact form email and return void on success. */
export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const transporter = createTransporter();

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #39b2be; padding: 20px; border-radius: 8px 8px 0 0;">
        <h2 style="color: #ffffff; margin: 0;">New Contact Form Submission</h2>
        <p style="color: rgba(255,255,255,0.85); margin: 4px 0 0;">Dhaka Capital Cont and Cleaning W.L.L</p>
      </div>
      <div style="background: #f8f7f5; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; color: #64748b; width: 120px;">Name</td>
            <td style="padding: 8px 12px; color: #1e293b;">${data.name}</td>
          </tr>
          <tr style="background: #ffffff;">
            <td style="padding: 8px 12px; font-weight: bold; color: #64748b;">Email</td>
            <td style="padding: 8px 12px; color: #1e293b;">${data.email}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; color: #64748b;">Phone</td>
            <td style="padding: 8px 12px; color: #1e293b;">${data.phone || "—"}</td>
          </tr>
          <tr style="background: #ffffff;">
            <td style="padding: 8px 12px; font-weight: bold; color: #64748b;">Subject</td>
            <td style="padding: 8px 12px; color: #1e293b;">${data.subject || "—"}</td>
          </tr>
        </table>
        <div style="margin-top: 16px; padding: 16px; background: #ffffff; border-radius: 6px; border: 1px solid #e2e8f0;">
          <p style="font-weight: bold; color: #64748b; margin: 0 0 8px;">Message</p>
          <p style="color: #1e293b; white-space: pre-wrap; margin: 0;">${data.message}</p>
        </div>
        <p style="margin-top: 20px; font-size: 12px; color: #94a3b8;">
          Sent from the contact form at dcc-contracting.com
        </p>
      </div>
    </div>
  `.trim();

  await transporter.sendMail({
    from: `"Dhaka Capital Website" <${process.env.SMTP_USER}>`,
    to: process.env.TO_EMAIL ?? process.env.SMTP_USER,
    replyTo: data.email,
    subject: `[Website Enquiry] ${data.subject || data.name}`,
    html: htmlBody,
    text: `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nSubject: ${data.subject}\n\n${data.message}`,
  });
}
