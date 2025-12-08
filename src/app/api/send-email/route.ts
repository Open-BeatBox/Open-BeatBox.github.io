import { NextResponse } from "next/server";
import { sanitizeField } from "@/lib/utils";

type IncomingField = {
  name: string;
  label?: string;
  value?: string;
};

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const fields: IncomingField[] = Array.isArray(payload?.fields)
      ? payload.fields
      : [];

    if (!fields.length) {
      return NextResponse.json({ message: "No fields provided" }, { status: 400 });
    }

    const cleaned = fields.map((field) => ({
      name: sanitizeField(field.name),
      label: sanitizeField(field.label || field.name),
      value: sanitizeField(field.value || ""),
    }));

    const text = cleaned
      .filter((field) => field.name !== "recaptcha")
      .map((field) => `${field.label}: ${field.value}`)
      .join("\n");

    const apiKey = process.env.MAILGUN_API_KEY;
    const domain = process.env.MAILGUN_DOMAIN;
    const apiUrl = process.env.MAILGUN_API_URL || "https://api.mailgun.net/v3";
    const fromEmail = process.env.MAILGUN_FROM_EMAIL || `noreply@${domain}`;
    const toEmail = process.env.MAILGUN_TO_EMAIL || fromEmail;

    if (!apiKey || !domain || !fromEmail || !toEmail) {
      return NextResponse.json(
        { message: "Mailgun configuration is incomplete" },
        { status: 500 }
      );
    }

    const mailgunEndpoint = `${apiUrl.replace(/\/$/, "")}/${domain}/messages`;
    const form = new URLSearchParams({
      from: fromEmail,
      to: toEmail,
      subject: "Beatbox contact form submission",
      text,
    });

    const auth = Buffer.from(`api:${apiKey}`).toString("base64");

    const response = await fetch(mailgunEndpoint, {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: form,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Mailgun error", errorText);
      return NextResponse.json({ message: "Failed to send" }, { status: 502 });
    }

    return NextResponse.json({ message: "Sent" });
  } catch (error) {
    console.error("Send email error", error);
    return NextResponse.json({ message: "Unexpected error" }, { status: 500 });
  }
}
