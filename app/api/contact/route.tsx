import { NextRequest, NextResponse } from "next/server";

import { render } from "@react-email/render";

import { smtpEmail, transporter } from "@/helpers/nodemailer";
import { EmailToMe, EmailToClient } from "@/components/contact/Email";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const { name, email, message } = body;

  const emailHtmlToMe = render(
    <EmailToMe name={name} email={email} message={message} />,
  );

  const emailHtmlToClient = render(
    <EmailToClient name={name} email={email} message={message} />,
  );

  const optionsToMe = {
    from: smtpEmail,
    to: smtpEmail,
    subject: `Portfolio 💼 - Mensaje de ${name}`,
    html: emailHtmlToMe,
  };

  const optionsToClient = {
    from: smtpEmail,
    to: email,
    subject: `Mensaje recibido ✅`,
    html: emailHtmlToClient,
  };

  try {
    await transporter.sendMail(optionsToMe);
    await transporter.sendMail(optionsToClient);
  } catch (error) {
    console.error("Failed to send email:", error);
  }
  return new Response("OK");
}
