// ── Contact API Route ─────────────────────────────────────────────────────────
// POST /api/contact  →  sends an email via Nodemailer
import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mailer";
import type { ContactFormData } from "@/types";

function validateBody(body: Partial<ContactFormData>): string | null {
  if (!body.name?.trim())    return "Name is required.";
  if (!body.email?.trim())   return "Email address is required.";
  if (!body.message?.trim()) return "Message is required.";
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(body.email)) return "Please enter a valid email address.";
  return null;
}

export async function POST(req: NextRequest) {
  try {
    const body: Partial<ContactFormData> = await req.json();

    const validationError = validateBody(body);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const formData: ContactFormData = {
      name:    body.name!.trim(),
      email:   body.email!.trim(),
      phone:   body.phone?.trim() ?? "",
      subject: body.subject?.trim() ?? "",
      message: body.message!.trim(),
    };

    await sendContactEmail(formData);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Contact API]", err);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later or contact us directly." },
      { status: 500 }
    );
  }
}
