import { formatLeadSource } from '@/lib/contact-source';

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  projectType: string;
  projectLocation: string;
  targetTimeline: string;
  budgetRange?: string;
  message: string;
  leadSource?: string;
  entryPage?: string;
}

/**
 * Creates a quick inbox-friendly label so Scott can triage follow-up order faster.
 */
function buildLeadPriority(data: ContactFormData): string {
  const urgentTimeline = ['As soon as possible', 'Within 1 month'];
  const qualifiedBudget = ['$25,000-$50,000', '$50,000-$100,000', '$100,000+'];

  if (
    urgentTimeline.includes(data.targetTimeline) &&
    qualifiedBudget.includes(data.budgetRange || '')
  ) {
    return 'High priority fit';
  }

  if (urgentTimeline.includes(data.targetTimeline) || Boolean(data.phone)) {
    return 'Quick follow-up recommended';
  }

  return 'Standard estimate follow-up';
}

export function buildContactEmail(data: ContactFormData): string {
  const leadSource = escapeHtml(formatLeadSource(data.leadSource));
  const leadPriority = escapeHtml(buildLeadPriority(data));

  const firstName = escapeHtml(data.firstName);
  const lastName = escapeHtml(data.lastName);
  const email = escapeHtml(data.email);
  const phone = data.phone ? escapeHtml(data.phone) : '';
  const projectType = escapeHtml(data.projectType);
  const projectLocation = escapeHtml(data.projectLocation);
  const targetTimeline = escapeHtml(data.targetTimeline);
  const budgetRange = data.budgetRange ? escapeHtml(data.budgetRange) : '';
  const message = escapeHtml(data.message);
  const entryPage = data.entryPage ? escapeHtml(data.entryPage) : '';

  return `
    <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; padding: 24px; color: #2e2e2e;">
      <div style="border-bottom: 3px solid #B08D57; padding-bottom: 16px; margin-bottom: 24px;">
        <h1 style="margin: 0; font-size: 22px; color: #2e2e2e;">New Project Inquiry</h1>
        <p style="margin: 4px 0 0; font-size: 14px; color: #6b6b6b;">via scottromconstruction.com</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; margin-bottom: 24px;">
        <div style="border: 1px solid #e7dfd4; background: #ffffff; padding: 14px;">
          <p style="margin: 0 0 6px; font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #6b6b6b;">Lead Source</p>
          <p style="margin: 0; font-size: 15px; font-weight: 600;">${leadSource}</p>
        </div>
        <div style="border: 1px solid #e7dfd4; background: #ffffff; padding: 14px;">
          <p style="margin: 0 0 6px; font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #6b6b6b;">Follow-up Priority</p>
          <p style="margin: 0; font-size: 15px; font-weight: 600;">${leadPriority}</p>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; margin-bottom: 24px;">
        <div style="border: 1px solid #e7dfd4; background: #f8f6f3; padding: 14px;">
          <p style="margin: 0 0 6px; font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #6b6b6b;">Project Type</p>
          <p style="margin: 0; font-size: 15px; font-weight: 600;">${projectType}</p>
        </div>
        <div style="border: 1px solid #e7dfd4; background: #f8f6f3; padding: 14px;">
          <p style="margin: 0 0 6px; font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #6b6b6b;">Project Location</p>
          <p style="margin: 0; font-size: 15px; font-weight: 600;">${projectLocation}</p>
        </div>
        <div style="border: 1px solid #e7dfd4; background: #f8f6f3; padding: 14px;">
          <p style="margin: 0 0 6px; font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #6b6b6b;">Timeline</p>
          <p style="margin: 0; font-size: 15px; font-weight: 600;">${targetTimeline}</p>
        </div>
        <div style="border: 1px solid #e7dfd4; background: #f8f6f3; padding: 14px;">
          <p style="margin: 0 0 6px; font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #6b6b6b;">Budget Range</p>
          <p style="margin: 0; font-size: 15px; font-weight: 600;">${budgetRange || 'Not provided'}</p>
        </div>
      </div>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
        <tr>
          <td style="padding: 8px 0; font-size: 13px; color: #6b6b6b; width: 120px; vertical-align: top;">Name</td>
          <td style="padding: 8px 0; font-size: 15px; font-weight: 600;">${firstName} ${lastName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-size: 13px; color: #6b6b6b; vertical-align: top;">Email</td>
          <td style="padding: 8px 0; font-size: 15px;"><a href="mailto:${encodeURIComponent(data.email)}" style="color: #B08D57;">${email}</a></td>
        </tr>
        ${
          phone
            ? `
        <tr>
          <td style="padding: 8px 0; font-size: 13px; color: #6b6b6b; vertical-align: top;">Phone</td>
          <td style="padding: 8px 0; font-size: 15px;"><a href="tel:${encodeURIComponent(data.phone!)}" style="color: #B08D57;">${phone}</a></td>
        </tr>`
            : ''
        }
        ${
          entryPage
            ? `
        <tr>
          <td style="padding: 8px 0; font-size: 13px; color: #6b6b6b; vertical-align: top;">Entry Page</td>
          <td style="padding: 8px 0; font-size: 15px;">${entryPage}</td>
        </tr>`
            : ''
        }
      </table>

      <div style="background: #f8f6f3; border-left: 3px solid #B08D57; padding: 16px; margin-bottom: 24px;">
        <p style="margin: 0 0 6px; font-size: 13px; color: #6b6b6b;">Project Notes</p>
        <p style="margin: 0; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
      </div>

      <p style="font-size: 12px; color: #9a9a9a; margin-top: 32px;">
        Reply directly to this email to respond to ${firstName}.
      </p>
    </div>
  `;
}
