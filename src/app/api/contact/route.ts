import { NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  message: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim();
    const email = body.email?.trim();
    const company = body.company?.trim() ?? "";
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters." },
        { status: 400 }
      );
    }

    // Ready for Resend / SendGrid — set RESEND_API_KEY and CONTACT_TO_EMAIL in production
    if (process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL ?? "Voultrex <onboarding@resend.dev>",
          to: [process.env.CONTACT_TO_EMAIL],
          reply_to: email,
          subject: `New project inquiry from ${name}`,
          text: [
            `Name: ${name}`,
            `Email: ${email}`,
            company ? `Company: ${company}` : null,
            "",
            message,
          ]
            .filter(Boolean)
            .join("\n"),
        }),
      });

      if (!res.ok) {
        console.error("Resend error:", await res.text());
        return NextResponse.json(
          { error: "Failed to send message. Please email us directly." },
          { status: 502 }
        );
      }
    } else {
      console.info("[contact] New inquiry:", { name, email, company, message });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
