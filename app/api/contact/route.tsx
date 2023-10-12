import { NextRequest, NextResponse } from 'next/server';

import { render } from '@react-email/render';

import { smtpEmail, transporter } from '@/helpers/nodemailer';
import { Email } from '@/components/contact/Email';

export async function POST(req: NextRequest, res: NextResponse) {
	const body = await req.json();
	const { name, email, message } = body;

	const emailHtml = render(
		<Email name={name} email={email} message={message} />,
	);

	const options = {
		from: smtpEmail,
		to: smtpEmail,
		subject: `Portfolio 💼 - Mensaje de ${name}`,
		html: emailHtml,
	};

	try {
		await transporter.sendMail(options);
	} catch (error) {
		console.error('Failed to send email:', error);
	}
	return new Response('OK');
}
