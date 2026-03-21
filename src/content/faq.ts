import type { FaqItem } from '@/types';

export const FAQ_ITEMS: FaqItem[] = [
  // General FAQs (no serviceId)
  {
    id: 'faq-estimates',
    question: 'Do you offer free estimates?',
    answer:
      'Yes. Scott offers free estimate conversations so homeowners can ask questions, confirm project fit, and understand realistic next steps before committing.',
  },
  {
    id: 'faq-budget',
    question: 'Can I reach out if I am still figuring out budget or scope?',
    answer:
      'Yes. If you have a rough idea of the space, timeline, and investment range, Scott can help clarify what makes sense and whether the project is ready for an estimate now.',
  },
  {
    id: 'faq-schedule',
    question: 'How quickly will I hear back?',
    answer:
      'Most contact requests receive a response within one business day. Sharing your town, timing, and project type helps speed up that first conversation.',
  },
  {
    id: 'faq-service-area',
    question: 'What areas do you serve?',
    answer:
      'Scott Romanoski Construction serves Langhorne, Newtown, Yardley, Levittown, Bensalem, and surrounding Bucks County and nearby South Jersey communities.',
  },

  // Remodeling FAQs
  {
    id: 'faq-remodeling-timeline',
    serviceId: 'remodeling',
    question: 'How long does a typical kitchen or bathroom remodel take?',
    answer:
      'Most kitchen remodels run four to eight weeks depending on scope. Bathrooms typically take two to four weeks. Scott walks through the expected timeline during the estimate so there are no surprises once work begins.',
  },
  {
    id: 'faq-remodeling-live-in',
    serviceId: 'remodeling',
    question: 'Do I need to move out during a remodel?',
    answer:
      'In most cases, no. Scott plans the work in phases so disruption stays manageable. For larger whole-home projects, he will let you know upfront if temporary arrangements make sense.',
  },
  {
    id: 'faq-remodeling-layout',
    serviceId: 'remodeling',
    question: 'Can I keep my existing layout or do I need to change it?',
    answer:
      'Either approach works. Some homeowners want a completely new layout while others prefer to update finishes and fixtures within the current footprint. Scott helps you decide what delivers the most value for your goals.',
  },

  // Additions FAQs
  {
    id: 'faq-additions-permits',
    serviceId: 'additions',
    question: 'Do home additions require separate permits?',
    answer:
      'Yes. Additions require building permits and often zoning review. Scott handles the full permit process so you do not have to navigate municipal requirements on your own.',
  },
  {
    id: 'faq-additions-match',
    serviceId: 'additions',
    question: 'How do you make a new addition match the existing home?',
    answer:
      'Matching rooflines, siding, trim details, and interior finishes is a core part of the design process. The goal is for the addition to look and feel like it was always part of the house.',
  },
  {
    id: 'faq-additions-timeline',
    serviceId: 'additions',
    question: 'How long does it take to build an addition?',
    answer:
      'Most additions take two to four months from permit approval to completion depending on size and complexity. Scott provides a realistic timeline during the estimate conversation.',
  },

  // Decks & Patios FAQs
  {
    id: 'faq-decks-materials',
    serviceId: 'decks-patios',
    question: 'Composite or wood — which is better for a deck?',
    answer:
      'Composite decking costs more upfront but requires almost no maintenance over time. Natural wood costs less initially but needs periodic staining and sealing. Scott helps you weigh the tradeoffs based on your budget and how you plan to use the space.',
  },
  {
    id: 'faq-decks-permit',
    serviceId: 'decks-patios',
    question: 'Do I need a permit to build a deck or patio?',
    answer:
      'Most deck projects require a building permit. Patios at grade level sometimes do not, but it depends on your municipality. Scott confirms permit requirements as part of the estimate process.',
  },
  {
    id: 'faq-decks-timeline',
    serviceId: 'decks-patios',
    question: 'What is the best time of year to build a deck?',
    answer:
      'Spring and early summer are the most popular seasons, but decks can be built almost year-round in the Bucks County area. Starting the conversation in late winter helps lock in a good spot on the schedule.',
  },

  // Bilco Door FAQs
  {
    id: 'faq-bilco-duration',
    serviceId: 'bilco',
    question: 'How long does a Bilco door installation take?',
    answer:
      'Most Bilco door replacements are completed in one to two days. New installations that require cutting into the foundation take longer and Scott will provide a specific timeline after assessing the opening.',
  },
  {
    id: 'faq-bilco-waterproofing',
    serviceId: 'bilco',
    question: 'What about waterproofing around a Bilco door?',
    answer:
      'Proper drainage and waterproofing are built into every Bilco installation. Scott addresses grading, well drainage, and sealant details so the door keeps water out from day one.',
  },
  {
    id: 'faq-bilco-certified',
    serviceId: 'bilco',
    question: 'What does it mean to be a Certified Bilco Installer?',
    answer:
      'Bilco certification means Scott has been trained and approved by the manufacturer to install their products to specification. This ensures correct fit, proper hardware, and warranty compliance.',
  },

  // Windows & Doors FAQs
  {
    id: 'faq-windows-signs',
    serviceId: 'windows-doors',
    question: 'How do I know if my windows need replacing?',
    answer:
      'Common signs include drafts, condensation between panes, difficulty opening or closing, and noticeable noise from outside. If your windows are over fifteen to twenty years old, replacement often makes sense for comfort and energy savings.',
  },
  {
    id: 'faq-windows-energy',
    serviceId: 'windows-doors',
    question: 'Will new windows lower my energy bills?',
    answer:
      'Modern double- and triple-pane windows with low-E coatings significantly reduce heat transfer. Most homeowners notice a meaningful difference in comfort and energy costs, especially in older homes with single-pane windows.',
  },
  {
    id: 'faq-windows-brands',
    serviceId: 'windows-doors',
    question: 'What window and door brands do you work with?',
    answer:
      'Scott works with several trusted manufacturers and helps you choose the right product based on your budget, style preferences, and performance needs. Brand recommendations are part of the estimate conversation.',
  },

  // General Contracting FAQs
  {
    id: 'faq-contracting-when',
    serviceId: 'contracting',
    question: 'When do I need a general contractor instead of a specialist?',
    answer:
      'If your project involves multiple trades — framing, electrical, plumbing, finishes — a general contractor coordinates everything under one scope. This avoids scheduling conflicts and keeps one person accountable for the result.',
  },
  {
    id: 'faq-contracting-permits',
    serviceId: 'contracting',
    question: 'Do you handle permits and inspections?',
    answer:
      'Yes. Scott manages the full permit process and coordinates all required inspections so you have one point of contact from start to final walkthrough.',
  },
  {
    id: 'faq-contracting-scope',
    serviceId: 'contracting',
    question: 'What if I do not have detailed plans yet?',
    answer:
      'That is common and completely fine. Many projects start with a general idea. Scott helps refine the scope during the estimate conversation and can connect you with design resources if drawings are needed.',
  },
];
