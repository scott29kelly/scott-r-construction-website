import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { buildContactEmail } from '@/lib/email-template';
import { formatLeadSource } from '@/lib/contact-source';

interface ContactRequestBody {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  projectLocation?: string;
  targetTimeline?: string;
  budgetRange?: string;
  message?: string;
  companyName?: string;
  leadSource?: string;
  entryPage?: string;
}

function normalizeValue(value: string | undefined): string {
  return value?.trim() ?? '';
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequestBody;

    const firstName = normalizeValue(body.firstName);
    const lastName = normalizeValue(body.lastName);
    const email = normalizeValue(body.email);
    const phone = normalizeValue(body.phone);
    const projectType = normalizeValue(body.projectType);
    const projectLocation = normalizeValue(body.projectLocation);
    const targetTimeline = normalizeValue(body.targetTimeline);
    const budgetRange = normalizeValue(body.budgetRange);
    const message = normalizeValue(body.message);
    const companyName = normalizeValue(body.companyName);
    const leadSource = normalizeValue(body.leadSource);
    const entryPage = normalizeValue(body.entryPage);

    if (companyName) {
      return NextResponse.json({ success: true });
    }

    if (!firstName || !lastName || !email || !projectType || !projectLocation || !targetTimeline) {
      return NextResponse.json(
        {
          error:
            'First name, last name, email, project type, project location, and target timeline are required.',
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

    if (phone && phone.replace(/\D/g, '').length < 10) {
      return NextResponse.json(
        { error: 'Please provide a valid phone number or leave that field blank.' },
        { status: 400 }
      );
    }

    if (!message || message.length < 20) {
      return NextResponse.json(
        {
          error: 'Please share a few details about the project so the follow-up can be helpful.',
        },
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
      leadSource,
      entryPage,
    });

    await resend.emails.send({
      from: 'Scott Romanoski Construction <onboarding@resend.dev>',
      to: 'sroman2@verizon.net',
      replyTo: email,
      subject: `[${formatLeadSource(leadSource)}] ${firstName} ${lastName} - ${projectType}`,
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
