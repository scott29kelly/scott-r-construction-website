import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { buildContactEmail } from '@/lib/email-template';
import { formatLeadSource } from '@/lib/contact-source';

/* ------------------------------------------------------------------ */
/*  In-memory IP rate limiter                                         */
/* ------------------------------------------------------------------ */
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX = 5;

const ipHits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipHits.get(ip);

  if (!entry || now > entry.resetAt) {
    ipHits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

// Periodic cleanup so the Map doesn't grow indefinitely
if (typeof globalThis !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [ip, entry] of ipHits) {
      if (now > entry.resetAt) ipHits.delete(ip);
    }
  }, RATE_LIMIT_WINDOW_MS);
}

/* ------------------------------------------------------------------ */
/*  Attachment validation                                             */
/* ------------------------------------------------------------------ */
const MAX_ATTACHMENTS = 5;
const MAX_ATTACHMENT_BYTES = 10 * 1024 * 1024; // 10 MB decoded
const ALLOWED_EXTENSIONS = /\.(jpe?g|png|gif|webp)$/i;

interface PhotoAttachment {
  filename: string;
  content: string;
}

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
  photoAttachments?: PhotoAttachment[];
}

function normalizeValue(value: string | undefined): string {
  return value?.trim() ?? '';
}

export async function POST(request: Request) {
  try {
    // Rate limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded?.split(',')[0]?.trim() || 'unknown';
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a few minutes and try again.' },
        { status: 429 }
      );
    }

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

    // Validate attachments before decoding
    const rawAttachments = body.photoAttachments?.filter((a) => a.filename && a.content) ?? [];

    if (rawAttachments.length > MAX_ATTACHMENTS) {
      return NextResponse.json(
        { error: `You can attach up to ${MAX_ATTACHMENTS} images.` },
        { status: 400 }
      );
    }

    for (const a of rawAttachments) {
      if (!ALLOWED_EXTENSIONS.test(a.filename)) {
        return NextResponse.json(
          { error: `File "${a.filename}" is not an allowed image type. Use JPG, PNG, GIF, or WebP.` },
          { status: 400 }
        );
      }
      // Base64 string length ≈ decoded bytes * 4/3
      const estimatedBytes = a.content.length * 0.75;
      if (estimatedBytes > MAX_ATTACHMENT_BYTES) {
        return NextResponse.json(
          { error: `File "${a.filename}" exceeds the 10 MB size limit.` },
          { status: 400 }
        );
      }
    }

    const attachments = rawAttachments.map((a) => ({
      filename: a.filename,
      content: Buffer.from(a.content, 'base64'),
    }));

    await resend.emails.send({
      from: 'Scott Romanoski Construction <onboarding@resend.dev>',
      to: 'sroman2@verizon.net',
      replyTo: email,
      subject: `[${formatLeadSource(leadSource)}] ${firstName} ${lastName} - ${projectType}`,
      html,
      ...(attachments && attachments.length > 0 ? { attachments } : {}),
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
