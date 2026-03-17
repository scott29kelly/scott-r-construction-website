import {
  ComparisonPoint,
  ContactInfo,
  FaqItem,
  FitChecklistItem,
  FitExpectation,
  PortfolioItem,
  ProcessStep,
  ProofStat,
  ReassurancePoint,
  Service,
  Testimonial,
  TrustPoint,
} from '@/types';

export const SITE_INFO = {
  name: 'Scott Romanoski Construction',
  tagline: 'Building Better Spaces for Bucks County Families',
  description:
    'Remodeling, additions, decks, and patios crafted with 18+ years of hands-on experience. Your home deserves a contractor who treats it like his own.',
  yearsExperience: '18+',
  licensedIn: 'PA & NJ',
  bbbRating: 'A+',
  certifications: 'Bilco Certified Installer',
};

export const SERVICES: Service[] = [
  {
    id: 'remodeling',
    title: 'Home Remodeling',
    description:
      'Complete interior renovations for kitchens, bathrooms, basements, and whole-home transformations. We modernize your living space while respecting the character of your home.',
    icon: 'Hammer',
  },
  {
    id: 'additions',
    title: 'Additions',
    description:
      'Need more room? We design and build home additions that blend seamlessly with your existing structure, from extra bedrooms to expanded living areas.',
    icon: 'Home',
  },
  {
    id: 'decks-patios',
    title: 'Decks & Patios',
    description:
      'Custom-built outdoor living spaces tailored to your property and lifestyle. Composite, wood, and stone options with lasting craftsmanship.',
    icon: 'TreePine',
  },
  {
    id: 'bilco',
    title: 'Bilco Door Installation',
    description:
      'As a Certified Bilco Installer, we provide expert basement door replacement and installation with proper fit, waterproofing, and code compliance.',
    icon: 'DoorOpen',
  },
  {
    id: 'windows-doors',
    title: 'Windows & Doors',
    description:
      'Energy-efficient window and door replacements that improve comfort, security, and curb appeal. Professional installation backed by manufacturer warranties.',
    icon: 'AppWindow',
  },
  {
    id: 'contracting',
    title: 'General Contracting',
    description:
      'Full-service project management from permits to final walkthrough. One point of contact, transparent communication, and work done right the first time.',
    icon: 'HardHat',
  },
];

export const ABOUT_CONTENT = {
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

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'kitchen-remodel',
    title: 'Kitchen Remodel',
    location: 'Langhorne, PA',
    image: '/images/Projects/710 Parker St. Langhorne, Pa/kitchen-island-wide.jpg',
    imageAlt: 'Complete kitchen remodel with custom island and cabinetry in Langhorne, PA',
    scope: 'Full kitchen remodel',
    homeownerGoal:
      'Open up the main floor for easier cooking, seating, and everyday family traffic.',
    outcome: 'Opened up daily flow for cooking, seating, and family gathering.',
    summary:
      'A full kitchen refresh with custom cabinetry, expanded prep space, and a more welcoming layout for everyday use.',
    projectStory:
      'This remodel focused on making the kitchen work harder for real daily life, with better circulation, more prep room, and a finished look that feels natural to the home.',
    projectHighlights: [
      'Custom cabinetry',
      'Expanded island workspace',
      'Better family flow',
    ],
    tags: ['Better layout', 'Custom finishes', 'Family-friendly'],
    isTall: true,
  },
  {
    id: 'bathroom-renovation',
    title: 'Bathroom Renovation',
    location: 'Langhorne, PA',
    image: '/images/Projects/710 Parker St. Langhorne, Pa/bathroom-full-room.jpg',
    imageAlt: 'Full bathroom renovation with custom vanity and tile work in Langhorne, PA',
    scope: 'Bathroom renovation',
    homeownerGoal:
      'Replace an outdated bathroom with something cleaner, brighter, and easier to use every day.',
    outcome: 'Turned an outdated bath into a cleaner, more comfortable daily routine space.',
    summary:
      'Updated finishes, better storage, and durable materials helped this bathroom feel brighter and easier to maintain.',
    projectStory:
      'The finished room improves comfort without overcomplicating the design, giving the homeowners a space that feels refreshed, durable, and easier to keep up.',
    projectHighlights: [
      'Brighter finish palette',
      'Improved storage',
      'Durable everyday materials',
    ],
    tags: ['Updated finishes', 'More comfort', 'Easy upkeep'],
  },
  {
    id: 'custom-staircase',
    title: 'Custom Staircase & Entry',
    location: 'Langhorne, PA',
    image: '/images/Projects/710 Parker St. Langhorne, Pa/staircase-newel-entry.jpg',
    imageAlt: 'Custom oak staircase with turned newel post and marble entry floor',
    scope: 'Entry and staircase upgrade',
    homeownerGoal:
      'Make the front entry feel more finished and create a stronger first impression.',
    outcome: 'Created a stronger first impression the moment guests walk through the door.',
    summary:
      'Custom trim, woodwork, and entry details elevated the home character while tying the space together.',
    projectStory:
      'Architectural details and finish carpentry gave this entry more presence and helped connect the surrounding spaces with a more intentional look.',
    projectHighlights: [
      'Custom oak staircase detail',
      'Refined entry finishes',
      'Stronger curb-to-interior impression',
    ],
    tags: ['Curb appeal', 'Custom millwork', 'Refined entry'],
  },
  {
    id: 'fireplace-trim',
    title: 'Fireplace & Trim Work',
    location: 'Langhorne, PA',
    image: '/images/Projects/710 Parker St. Langhorne, Pa/fireplace-mantel.jpg',
    imageAlt: 'Custom fireplace mantel with crown molding and brick surround',
    scope: 'Living room focal-point upgrade',
    homeownerGoal: 'Give the main gathering space a warmer, more built-in look.',
    outcome: 'Gave the living space a true focal point with warmer, more finished detail.',
    summary:
      'A custom mantel and trim package brought visual weight and polish to the main gathering room.',
    projectStory:
      'Finish carpentry and mantel detailing helped the room feel more complete, making the fireplace read like a designed centerpiece instead of an unfinished surround.',
    projectHighlights: [
      'Custom mantel build',
      'Trim integration',
      'More polished gathering space',
    ],
    tags: ['Living room focal point', 'Finish carpentry', 'Custom detail'],
  },
  {
    id: 'tray-ceiling',
    title: 'Tray Ceiling & Crown Molding',
    location: 'Langhorne, PA',
    image: '/images/Projects/710 Parker St. Langhorne, Pa/bedroom-tray-ceiling.jpg',
    imageAlt: 'Master bedroom with custom tray ceiling and crown molding detail',
    scope: 'Primary bedroom detail upgrade',
    homeownerGoal: 'Make the bedroom feel more custom, restful, and complete.',
    outcome: 'Made the primary bedroom feel more custom, finished, and restful.',
    summary:
      'Architectural ceiling detail and crown molding added depth, character, and a more upscale feel.',
    projectStory:
      'Small architectural details changed the feel of the room in a big way, giving the primary suite more depth and a cleaner, more custom finish.',
    projectHighlights: [
      'Tray ceiling detail',
      'Crown molding finish',
      'More custom primary suite',
    ],
    tags: ['Primary suite upgrade', 'Architectural detail', 'Custom finish'],
  },
  {
    id: 'powder-room',
    title: 'Powder Room',
    location: 'Langhorne, PA',
    image: '/images/Projects/710 Parker St. Langhorne, Pa/powder-room-vanity.jpg',
    imageAlt: 'Powder room renovation with dark wood vanity and granite countertop',
    scope: 'Powder room refresh',
    homeownerGoal: 'Turn a small, overlooked room into a polished guest-ready space.',
    outcome: 'Turned a small room into a polished space guests actually notice.',
    summary:
      'The updated vanity, countertop, and finishes gave this compact powder room more style and function.',
    projectStory:
      'This project shows how smaller spaces can still carry real visual impact when the materials, layout, and finish details are handled carefully.',
    projectHighlights: [
      'Compact-space efficiency',
      'Guest-ready finish',
      'Vanity and countertop upgrade',
    ],
    tags: ['Small-space impact', 'Guest-ready', 'Finish upgrade'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote:
      "Scott is without a doubt the best all around contractor I've come across from framing to finish work, masonry the list goes on. Many contractors claim to treat your house like their own but Scott truly does treat every house like it's his own.",
    author: 'Josh Sharpe',
    location: 'Facebook Recommendation',
    stars: 5,
    highlight: 'Treats every home like his own',
    concern: 'For homeowners worried about workmanship and trust inside their home.',
  },
  {
    id: 't2',
    quote: "Love Scott's work!",
    author: 'Tom Aquilone',
    location: 'Facebook Recommendation',
    stars: 5,
    highlight: 'Work that stands out right away',
    concern: 'A quick endorsement of the finished result and overall quality.',
  },
  {
    id: 't3',
    quote: 'I know who to call when I do my master bath!',
    author: 'Kelley Graff McConnell',
    location: 'Facebook Recommendation',
    stars: 5,
    highlight: 'The kind of work people remember for their own project',
    concern: 'Signals confidence strong enough to earn future renovation calls.',
  },
  {
    id: 't4',
    quote: 'Beautiful work. Wow!',
    author: 'Maria Anderson',
    location: 'Facebook Recommendation',
    stars: 5,
    highlight: 'Beautiful finished spaces',
    concern: 'Reinforces the visual impact homeowners want from a remodel.',
  },
];

export const WHY_HOMEOWNERS_CHOOSE_SCOTT: ComparisonPoint[] = [
  {
    id: 'owner-involved',
    title: 'Owner involvement',
    scottApproach:
      'The same person estimating the work stays connected through the job and final walkthrough.',
    homeownerConcern: 'Homeowners often worry about being handed off after the first call.',
  },
  {
    id: 'clear-fit',
    title: 'Project fit upfront',
    scottApproach:
      'Town, timing, and budget expectations are discussed early so both sides can move forward clearly.',
    homeownerConcern:
      'Many estimate requests drag on before anyone confirms whether the project is a fit.',
  },
  {
    id: 'craftsmanship-trust',
    title: 'Craftsmanship you can feel confident in',
    scottApproach:
      'Recommendations repeatedly point to detail-oriented work and respect for the home.',
    homeownerConcern:
      'Homeowners want more than promises when inviting a contractor into lived-in spaces.',
  },
];

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

export const CONTACT_INFO: ContactInfo = {
  phone: '(215) 519-1795',
  email: 'sroman2@verizon.net',
  address: '710 Parker St, Langhorne, PA 19047',
  hours: ['Mon-Fri 7:00 AM - 5:00 PM', 'Sat by Appointment'],
};

export const SERVICE_AREAS = [
  'Langhorne',
  'Newtown',
  'Yardley',
  'Morrisville',
  'Levittown',
  'Doylestown',
  'Warminster',
  'Bensalem',
  'Bristol',
  'Fairless Hills',
  'and surrounding Bucks County & South Jersey communities',
];

export const PROOF_STATS: ProofStat[] = [
  {
    id: 'experience',
    value: '18+',
    label: 'Years of hands-on experience',
    description: 'Owner-led residential remodeling and exterior improvement work across Bucks County.',
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
    description: 'Most estimate requests get a direct follow-up from Scott within one business day.',
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
    title: 'Licensed and insured',
    description:
      'Homeowners get peace of mind knowing the job is handled by a properly credentialed contractor.',
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

export const FAQ_ITEMS: FaqItem[] = [
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
];

export const SCHEDULING_SIGNALS = {
  eyebrow: 'Scheduling clarity',
  heroMessage:
    'If you are hoping to start this season or want to compare timing before getting too far, reaching out sooner makes it easier to talk through fit and availability.',
  navMessage: 'Now booking estimate conversations',
  processMessage:
    'Homeowners who already know their town, timing, and project goals usually get the clearest next-step guidance fastest.',
};

export const ESTIMATE_FIT_CHECKLIST: FitChecklistItem[] = [
  {
    id: 'location',
    title: 'You are in Bucks County or nearby South Jersey',
    description: 'Local-fit projects are easier to schedule and easier to support throughout the job.',
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
