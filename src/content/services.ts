import type { Service, ServiceDetail } from '@/types';

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    id: 'remodeling',
    title: 'Home Remodeling',
    description:
      'Complete interior renovations for kitchens, bathrooms, basements, and whole-home transformations. We modernize your living space while respecting the character of your home.',
    icon: 'Hammer',
    bestFit:
      'Best fit for kitchens, baths, basements, and larger interior upgrades with a clear space in mind.',
    qualificationPrompt:
      'Helpful to know which room you want to improve, what is not working now, and your ideal start window.',
    ctaLabel: 'Plan my remodel estimate',
    contactProjectType: 'Home Remodeling',
    narrativePreview:
      'This service works best when the conversation starts with how the room needs to function differently every day, not just the finishes you hope to swap in.',
    listeningPoints: [
      'Which room is driving the project and what is not working now',
      'Whether the goal is layout change, finish update, or both',
      'How much disruption the household can realistically absorb',
      'What timing window would make the remodel feel worth starting now',
    ],
    projectTypeOptions: ['Home Remodeling'],
    relatedProjectIds: [
      'kitchen-remodel',
      'bathroom-renovation',
      'fireplace-trim',
      'tray-ceiling',
      'powder-room',
      'kitchen-remodel-2019',
    ],
  },
  {
    id: 'additions',
    title: 'Additions',
    description:
      'Need more room? We design and build home additions that blend seamlessly with your existing structure, from extra bedrooms to expanded living areas.',
    icon: 'Home',
    bestFit:
      'A strong fit when you need meaningful square footage and want the new space to feel original to the home.',
    qualificationPrompt:
      'Estimate requests move faster when you can share the planned use, approximate size, and target timing.',
    ctaLabel: 'Talk through my addition',
    contactProjectType: 'Addition',
    narrativePreview:
      'Addition projects usually begin with a family need: one more room, more breathing space, or a layout that no longer matches how the home is being used.',
    listeningPoints: [
      'What the added square footage needs to solve for the household',
      'Whether the new space must tie into an existing kitchen, living area, or bedroom wing',
      'How important exterior matching is to the finished result',
      'What kind of schedule and permit coordination the project may require',
    ],
    projectTypeOptions: ['Addition'],
    relatedProjectIds: [],
  },
  {
    id: 'decks-patios',
    title: 'Decks & Patios',
    description:
      'Custom-built outdoor living spaces tailored to your property and lifestyle. Composite, wood, and stone options with lasting craftsmanship.',
    icon: 'TreePine',
    bestFit:
      'Ideal for homeowners improving outdoor living, entertaining space, backyard flow, or access to the yard.',
    qualificationPrompt:
      'Sharing the yard layout, preferred materials, and whether it is a deck or patio helps qualify the first conversation.',
    ctaLabel: 'Price out my outdoor project',
    contactProjectType: 'Patio / Hardscaping',
    narrativePreview:
      'Outdoor projects go better when the story includes how the family wants to use the yard, where circulation breaks down now, and what materials make sense for upkeep.',
    listeningPoints: [
      'Whether the project is a deck, patio, or a combination of both',
      'How the outdoor area should connect to doors, grade, and gathering space',
      'What material expectations matter most for maintenance and lifespan',
      'Whether drainage, access, or slope issues need to be solved along the way',
    ],
    projectTypeOptions: ['Deck', 'Patio / Hardscaping'],
    relatedProjectIds: [],
  },
  {
    id: 'bilco',
    title: 'Bilco Door Installation',
    description:
      'As a Certified Bilco Installer, we provide expert basement door replacement and installation with proper fit, waterproofing, and code compliance.',
    icon: 'DoorOpen',
    bestFit:
      'Best for basement-entry replacements where fit, drainage, waterproofing, and product-specific installation details matter.',
    qualificationPrompt:
      'A photo of the current opening, any water concerns, and whether this is replacement or new access helps Scott assess fit quickly.',
    ctaLabel: 'Request a Bilco estimate',
    contactProjectType: 'Bilco Door Installation',
    narrativePreview:
      'Bilco work is less about choosing a product and more about getting the opening, water management, and installation details right the first time.',
    listeningPoints: [
      'Whether the current basement entry is failing, leaking, or hard to use safely',
      'If the request is a direct replacement or part of broader access work',
      'What the existing opening looks like and whether drainage is a concern',
      'How quickly the homeowner needs the issue resolved before weather changes',
    ],
    projectTypeOptions: ['Bilco Door Installation'],
    relatedProjectIds: [],
  },
  {
    id: 'windows-doors',
    title: 'Windows & Doors',
    description:
      'Energy-efficient window and door replacements that improve comfort, security, and curb appeal. Professional installation backed by manufacturer warranties.',
    icon: 'AppWindow',
    bestFit:
      'A good fit when drafts, failing units, exterior wear, or curb-appeal upgrades are pushing the project forward.',
    qualificationPrompt:
      'The first reply is more useful when you know roughly how many openings are involved and what issues you are seeing.',
    ctaLabel: 'Get window and door guidance',
    contactProjectType: 'Windows & Doors',
    narrativePreview:
      'These projects are easiest to scope when the homeowner can explain whether the problem is comfort, performance, appearance, or a combination of all three.',
    listeningPoints: [
      'How many windows or doors are involved in this round of work',
      'Whether drafts, water intrusion, or security concerns are part of the decision',
      'If the goal is a focused replacement or a larger exterior refresh',
      'What finish and curb-appeal expectations the homeowner has in mind',
    ],
    projectTypeOptions: ['Windows & Doors'],
    relatedProjectIds: [],
  },
  {
    id: 'contracting',
    title: 'General Contracting',
    description:
      'Full-service project management from permits to final walkthrough. One point of contact, transparent communication, and work done right the first time.',
    icon: 'HardHat',
    bestFit:
      'Useful when the job spans multiple trades and you want one accountable contractor managing the full scope.',
    qualificationPrompt:
      'Share the overall project goal, the major work involved, and whether you already have plans or are still shaping scope.',
    ctaLabel: 'Discuss my project scope',
    contactProjectType: 'Other / Not sure yet',
    narrativePreview:
      'General contracting becomes the right lane when the project story spans multiple rooms, trades, or unknowns and needs one person keeping the sequence clear.',
    listeningPoints: [
      'What the overall project is trying to accomplish across trades or spaces',
      'Which parts of scope are already defined and which still need to be clarified',
      'Whether plans, permits, or outside selections already exist',
      'How much coordination the homeowner wants one contractor to own',
    ],
    projectTypeOptions: ['Other / Not sure yet'],
    relatedProjectIds: ['custom-staircase'],
  },
];

export const SERVICES: Service[] = SERVICE_DETAILS;

export const SERVICE_PROJECT_TYPE_OPTIONS: string[] = Array.from(
  new Set(SERVICE_DETAILS.flatMap((service) => service.projectTypeOptions))
);
