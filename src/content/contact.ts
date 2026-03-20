import type { FitChecklistItem, FitExpectation, TrustPoint } from '@/types';

export const TARGET_TIMELINE_OPTIONS: string[] = [
  'As soon as possible',
  'Within 1 month',
  '1-3 months',
  '3-6 months',
  '6+ months',
  'Just planning / researching',
];

export const BUDGET_RANGE_OPTIONS: string[] = [
  'Under $10,000',
  '$10,000-$25,000',
  '$25,000-$50,000',
  '$50,000-$100,000',
  '$100,000+',
  'Prefer to discuss',
];

export const CONTACT_TRUST_POINTS: TrustPoint[] = [
  {
    id: 'owner-led',
    title: 'Owner-led projects',
    description:
      'Scott stays directly involved so communication stays clear from estimate to final walkthrough.',
  },
  {
    id: 'licensed-insured',
    title: 'Licensed, insured, and accountable',
    description:
      'PA licensure, New Jersey licensing, insurance coverage, and an owner-led process give homeowners clearer accountability.',
  },
  {
    id: 'response-time',
    title: 'Fast follow-up',
    description: 'Most inquiries receive a response within one business day.',
  },
  {
    id: 'service-area',
    title: 'Local service area',
    description:
      'Serving Bucks County and nearby South Jersey communities with clear scheduling expectations.',
  },
];

export const ESTIMATE_FIT_CHECKLIST: FitChecklistItem[] = [
  {
    id: 'location',
    title: 'You are in Bucks County or nearby South Jersey',
    description:
      'Local-fit projects are easier to schedule and easier to support throughout the job.',
  },
  {
    id: 'timing',
    title: 'You have a rough timeline in mind',
    description:
      'Even a general target helps Scott quickly confirm availability and the right next step.',
  },
  {
    id: 'scope',
    title: 'You can describe the space or project goal',
    description:
      'You do not need a full plan yet, but knowing the room, issue, or upgrade you want keeps the conversation productive.',
  },
];

export const ESTIMATE_EXPECTATIONS: FitExpectation[] = [
  {
    id: 'good-fit',
    heading: 'A strong estimate fit usually looks like:',
    points: [
      'You want straightforward feedback on whether the project makes sense now.',
      'You are comparing timing, scope, or investment ranges before committing.',
      'You want to work with an owner-led contractor instead of a high-pressure sales process.',
    ],
  },
  {
    id: 'first-call',
    heading: 'On the first follow-up, expect help with:',
    points: [
      'Confirming whether the project is in the service area and schedule window.',
      'Talking through budget range and practical options for the space.',
      'Clarifying whether an estimate, site visit, or later follow-up is the best next move.',
    ],
  },
];
