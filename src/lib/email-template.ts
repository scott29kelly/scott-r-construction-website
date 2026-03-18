import { formatLeadSource } from '@/lib/contact-source';

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
  const leadSource = formatLeadSource(data.leadSource);
  const leadPriority = buildLeadPriority(data);

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
          <p style="margin: 0; font-size: 15px; font-weight: 600;">${data.projectType}</p>
        </div>
        <div style="border: 1px solid #e7dfd4; background: #f8f6f3; padding: 14px;">
          <p style="margin: 0 0 6px; font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #6b6b6b;">Project Location</p>
          <p style="margin: 0; font-size: 15px; font-weight: 600;">${data.projectLocation}</p>
        </div>
        <div style="border: 1px solid #e7dfd4; background: #f8f6f3; padding: 14px;">
          <p style="margin: 0 0 6px; font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #6b6b6b;">Timeline</p>
          <p style="margin: 0; font-size: 15px; font-weight: 600;">${data.targetTimeline}</p>
        </div>
        <div style="border: 1px solid #e7dfd4; background: #f8f6f3; padding: 14px;">
          <p style="margin: 0 0 6px; font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #6b6b6b;">Budget Range</p>
          <p style="margin: 0; font-size: 15px; font-weight: 600;">${data.budgetRange || 'Not provided'}</p>
        </div>
      </div>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
        <tr>
          <td style="padding: 8px 0; font-size: 13px; color: #6b6b6b; width: 120px; vertical-align: top;">Name</td>
          <td style="padding: 8px 0; font-size: 15px; font-weight: 600;">${data.firstName} ${data.lastName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-size: 13px; color: #6b6b6b; vertical-align: top;">Email</td>
          <td style="padding: 8px 0; font-size: 15px;"><a href="mailto:${data.email}" style="color: #B08D57;">${data.email}</a></td>
        </tr>
        ${
          data.phone
            ? `
        <tr>
          <td style="padding: 8px 0; font-size: 13px; color: #6b6b6b; vertical-align: top;">Phone</td>
          <td style="padding: 8px 0; font-size: 15px;"><a href="tel:${data.phone}" style="color: #B08D57;">${data.phone}</a></td>
        </tr>`
            : ''
        }
        ${
          data.entryPage
            ? `
        <tr>
          <td style="padding: 8px 0; font-size: 13px; color: #6b6b6b; vertical-align: top;">Entry Page</td>
          <td style="padding: 8px 0; font-size: 15px;">${data.entryPage}</td>
        </tr>`
            : ''
        }
      </table>

      <div style="background: #f8f6f3; border-left: 3px solid #B08D57; padding: 16px; margin-bottom: 24px;">
        <p style="margin: 0 0 6px; font-size: 13px; color: #6b6b6b;">Project Notes</p>
        <p style="margin: 0; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
      </div>

      <p style="font-size: 12px; color: #9a9a9a; margin-top: 32px;">
        Reply directly to this email to respond to ${data.firstName}.
      </p>
    </div>
  `;
}
