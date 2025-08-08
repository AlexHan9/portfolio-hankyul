// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function esc(s: string) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" } as any)[c]
  );
}

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const to = process.env.EMAIL_TO ?? "hankyulbaik@gmail.com";
    const from = process.env.EMAIL_FROM ?? "Portfolio Contact <onboarding@resend.dev>";

    await resend.emails.send({
      from,
      to,
      subject: `Portfolio Contact — ${name}`,
      html: `
        <div>
          <p><strong>Name:</strong> ${esc(name)}</p>
          <p><strong>Email:</strong> ${esc(email)}</p>
          <p><strong>Message:</strong></p>
          <p>${esc(message).replace(/\n/g, "<br/>")}</p>
        </div>
      `,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    } as any);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal Error" }, { status: 500 });
  }
}
