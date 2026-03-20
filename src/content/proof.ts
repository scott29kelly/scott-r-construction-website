import type { AuthoritySignal, ProofStat, ReassurancePoint } from '@/types';

export const PROOF_STATS: ProofStat[] = [
  {
    id: 'experience',
    value: '18+',
    label: 'Years of hands-on experience',
    description:
      'Owner-led residential remodeling and exterior improvement work across Bucks County.',
  },
  {
    id: 'licensed-insured',
    value: 'PA + NJ',
    label: 'Licensed and fully insured',
    description:
      'Homeowners get a contractor who is credentialed for local work and protected for the job.',
  },
  {
    id: 'response',
    value: '1 business day',
    label: 'Typical response window',
    description:
      'Most estimate requests get a direct follow-up from Scott within one business day.',
  },
];

export const HOMEOWNER_REASSURANCE_POINTS: ReassurancePoint[] = [
  {
    id: 'owner-led',
    title: 'Scott stays involved from estimate to walkthrough',
    description:
      'You are not handed off to a sales team after the first call. The owner who prices the work stays accountable through the build.',
  },
  {
    id: 'service-area',
    title: 'Clear service area for faster scheduling',
    description:
      'Serving Langhorne, Newtown, Yardley, Levittown, Bensalem, and surrounding Bucks County and South Jersey communities.',
  },
  {
    id: 'testimonial-framing',
    title: 'Recommendations built on workmanship and trust',
    description:
      'Client feedback consistently highlights careful craftsmanship, respectful job sites, and the confidence of working with someone who treats the home like his own.',
  },
];

export const AUTHORITY_SIGNALS: AuthoritySignal[] = [
  {
    id: 'established',
    title: 'Owner-operated since 2007',
    detail: 'Established June 2007',
    description:
      'The business has been operating locally for nearly two decades, which adds stability beyond a brand-new lead-generation site.',
  },
  {
    id: 'pa-license',
    title: 'Pennsylvania licensed contractor',
    detail: 'PA012701',
    description:
      'Licensing clarity matters when homeowners want to confirm they are talking to a legitimate local contractor before inviting someone into the house.',
  },
  {
    id: 'insurance',
    title: 'Fully insured for residential work',
    detail: 'Coverage in place',
    description:
      'Insurance and credentialing help reduce the uncertainty homeowners feel when comparing serious bids for work around the home.',
  },
  {
    id: 'bbb',
    title: 'BBB rating and complaint history',
    detail: 'A+ rating, zero complaints',
    description:
      'This adds a third-party trust signal beyond marketing copy and reinforces a track record homeowners can feel better about.',
  },
  {
    id: 'bilco-certified',
    title: 'Bilco Certified Installer',
    detail: 'Product-specific expertise',
    description:
      'Certification gives added confidence on basement-entry projects where fit, waterproofing, and installation details matter.',
  },
];
