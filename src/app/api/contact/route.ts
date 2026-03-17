import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { buildContactEmail } from '@/lib/email-template';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      projectType,
      projectLocation,
      targetTimeline,
      budgetRange,
      message,
    } = body;

    if (!firstName || !lastName || !email || !projectLocation || !targetTimeline) {
      return NextResponse.json(
        {
          error:
            'First name, last name, email, project location, and target timeline are required.',
        },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const html = buildContactEmail({
      firstName,
      lastName,
      email,
      phone,
      projectType,
      projectLocation,
      targetTimeline,
      budgetRange,
      message,
    });

    await resend.emails.send({
      from: 'Scott Romanoski Construction <onboarding@resend.dev>',
      to: 'sroman2@verizon.net',
      replyTo: email,
      subject: `New Inquiry from ${firstName} ${lastName}${projectType ? ` - ${projectType}` : ''}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again or call us directly.' },
      { status: 500 }
    );
  }
}
