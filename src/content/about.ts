import type { AboutContent, HomeownerSafeguard } from '@/types';

export const ABOUT_CONTENT: AboutContent = {
  heading: 'Built on Integrity.\nProven by Results.',
  paragraphs: [
    'For over 18 years, Scott Romanoski has been helping Bucks County families transform their homes. What started as a passion for building has grown into a trusted construction business known for honest communication, quality craftsmanship, and projects delivered right.',
    "As an owner-operator, Scott is on every job site, not in a back office. When you hire Scott Romanoski Construction, you're getting the person whose name is on the business, personally invested in the outcome of your project.",
  ],
  credentials: [
    'Licensed Contractor - Pennsylvania (PA012701)',
    'Licensed Contractor - New Jersey',
    'Certified Bilco Installer',
    'A+ BBB Rating - Zero Complaints',
    'Fully Insured',
  ],
};

export const HOMEOWNER_SAFEGUARDS: HomeownerSafeguard[] = [
  {
    id: 'owner-contact',
    title: 'You deal directly with the owner',
    description:
      'The person discussing your estimate is the same person whose name and reputation are attached to the work.',
  },
  {
    id: 'credentials',
    title: 'Credentials are clear before the job starts',
    description:
      'PA license PA012701, New Jersey licensing, insurance coverage, and Bilco certification are all part of the trust picture homeowners can verify.',
  },
  {
    id: 'fit-first',
    title: 'Fit is discussed before anyone wastes time',
    description:
      'Town, timing, and scope are addressed early so the first conversation is honest about whether the project makes sense now.',
  },
];
