import type { ProcessStep } from '@/types';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'step-1',
    number: '01',
    title: 'Free Consultation',
    description:
      'We visit your home, discuss your vision, assess the space, and answer your questions. No pressure, no obligation.',
  },
  {
    id: 'step-2',
    number: '02',
    title: 'Detailed Estimate',
    description:
      'You receive a transparent, itemized estimate. We walk through every line item so you know exactly where your money goes.',
  },
  {
    id: 'step-3',
    number: '03',
    title: 'Build Phase',
    description:
      'Work begins on the agreed timeline. Scott is on-site managing every detail, and you get regular progress updates throughout.',
  },
  {
    id: 'step-4',
    number: '04',
    title: 'Final Walkthrough',
    description:
      "We walk the completed project together. Every detail is reviewed, and the job isn't done until you're completely satisfied.",
  },
];
