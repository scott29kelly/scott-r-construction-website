import { Service, PortfolioItem, Testimonial, ProcessStep, ContactInfo } from '@/types';

export const SITE_INFO = {
  name: 'Scott Romanoski Construction',
  tagline: 'Building Better Spaces for Bucks County Families',
  description: 'Remodeling, additions, decks, and patios — crafted with 18+ years of hands-on experience. Your home deserves a contractor who treats it like his own.',
  yearsExperience: '18+',
  licensedIn: 'PA & NJ',
  bbbRating: 'A+',
  certifications: 'Bilco Certified Installer',
};

export const SERVICES: Service[] = [
  {
    id: 'remodeling',
    title: 'Home Remodeling',
    description: 'Complete interior renovations — kitchens, bathrooms, basements, and whole-home transformations. We modernize your living space while respecting the character of your home.',
    icon: 'Hammer' // We will map these to lucide-react icons in the component
  },
  {
    id: 'additions',
    title: 'Additions',
    description: 'Need more room? We design and build home additions that blend seamlessly with your existing structure — from extra bedrooms to expanded living areas.',
    icon: 'Home'
  },
  {
    id: 'decks-patios',
    title: 'Decks & Patios',
    description: 'Custom-built outdoor living spaces tailored to your property and lifestyle. Composite, wood, and stone options with lasting craftsmanship.',
    icon: 'TreePine'
  },
  {
    id: 'bilco',
    title: 'Bilco Door Installation',
    description: 'As a Certified Bilco Installer, we provide expert basement door replacement and installation — ensuring proper fit, waterproofing, and code compliance.',
    icon: 'DoorOpen'
  },
  {
    id: 'windows-doors',
    title: 'Windows & Doors',
    description: 'Energy-efficient window and door replacements that improve comfort, security, and curb appeal. Professional installation backed by manufacturer warranties.',
    icon: 'AppWindow'
  },
  {
    id: 'contracting',
    title: 'General Contracting',
    description: 'Full-service project management from permits to final walkthrough. One point of contact, transparent communication, and work done right the first time.',
    icon: 'HardHat'
  }
];

export const ABOUT_CONTENT = {
  heading: 'Built on Integrity.\nProven by Results.',
  paragraphs: [
    'For over 18 years, Scott Romanoski has been helping Bucks County families transform their homes. What started as a passion for building has grown into a trusted construction business known for honest communication, quality craftsmanship, and projects delivered right.',
    'As an owner-operator, Scott is on every job site — not in a back office. When you hire Scott Romanoski Construction, you\'re getting the person whose name is on the business, personally invested in the outcome of your project.'
  ],
  credentials: [
    'Licensed Contractor — Pennsylvania (PA012701)',
    'Licensed Contractor — New Jersey',
    'Certified Bilco Installer',
    'A+ BBB Rating — Zero Complaints',
    'Fully Insured'
  ]
};

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'kitchen-langhorne',
    title: 'Kitchen Remodel',
    location: 'Langhorne, PA',
    imageAlt: 'Kitchen Remodel in Langhorne, PA',
    isTall: true
  },
  {
    id: 'deck-newtown',
    title: 'Custom Composite Deck',
    location: 'Newtown, PA',
    imageAlt: 'Custom Composite Deck in Newtown, PA'
  },
  {
    id: 'addition-yardley',
    title: 'Two-Story Addition',
    location: 'Yardley, PA',
    imageAlt: 'Two-Story Addition in Yardley, PA'
  },
  {
    id: 'bath-morrisville',
    title: 'Master Bath Renovation',
    location: 'Morrisville, PA',
    imageAlt: 'Master Bath Renovation in Morrisville, PA'
  },
  {
    id: 'bilco-levittown',
    title: 'Bilco Door Replacement',
    location: 'Levittown, PA',
    imageAlt: 'Bilco Door Replacement in Levittown, PA'
  },
  {
    id: 'patio-doylestown',
    title: 'Stone Patio & Hardscaping',
    location: 'Doylestown, PA',
    imageAlt: 'Stone Patio & Hardscaping in Doylestown, PA'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: "Placeholder testimonial — replace with actual client review. Scott and his team were professional, communicative, and delivered exactly what was promised. Our kitchen looks incredible.",
    author: 'Client Name',
    location: 'Langhorne, PA — Kitchen Remodel',
    stars: 5
  },
  {
    id: 't2',
    quote: "Placeholder testimonial — replace with actual client review. We've used Scott for three different projects now. Honest pricing, shows up when he says he will, and the work quality is top-notch.",
    author: 'Client Name',
    location: 'Newtown, PA — Deck & Patio',
    stars: 5
  },
  {
    id: 't3',
    quote: "Placeholder testimonial — replace with actual client review. Scott treated our home like it was his own. The addition blends seamlessly with the original structure. Couldn't be happier.",
    author: 'Client Name',
    location: 'Yardley, PA — Home Addition',
    stars: 5
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'step-1',
    number: '01',
    title: 'Free Consultation',
    description: 'We visit your home, discuss your vision, assess the space, and answer your questions. No pressure, no obligation.'
  },
  {
    id: 'step-2',
    number: '02',
    title: 'Detailed Estimate',
    description: 'You receive a transparent, itemized estimate. We walk through every line item so you know exactly where your money goes.'
  },
  {
    id: 'step-3',
    number: '03',
    title: 'Build Phase',
    description: 'Work begins on the agreed timeline. Scott is on-site managing every detail, and you get regular progress updates throughout.'
  },
  {
    id: 'step-4',
    number: '04',
    title: 'Final Walkthrough',
    description: 'We walk the completed project together. Every detail is reviewed, and the job isn\'t done until you\'re completely satisfied.'
  }
];

export const CONTACT_INFO: ContactInfo = {
  phone: '(215) 519-1795',
  email: 'sroman2@verizon.net',
  address: 'Langhorne, PA 19047',
  hours: ['Mon–Fri 7:00 AM – 5:00 PM', 'Sat by Appointment']
};

export const SERVICE_AREAS = [
  'Langhorne', 'Newtown', 'Yardley', 'Morrisville', 'Levittown', 'Doylestown', 'Warminster', 'Bensalem', 'Bristol', 'Fairless Hills', 'and surrounding Bucks County & South Jersey communities'
];
