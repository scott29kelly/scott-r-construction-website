import type { ContactInfo, SchedulingSignals, SiteInfo } from '@/types';

export const SITE_INFO: SiteInfo = {
  name: 'Scott Romanoski Construction',
  tagline: 'Building Better Spaces for Bucks County Families',
  description:
    'Remodeling, additions, decks, and patios crafted with 18+ years of hands-on experience. Your home deserves a contractor who treats it like his own.',
  yearsExperience: '18+',
  licensedIn: 'PA & NJ',
  bbbRating: 'A+',
  certifications: 'Bilco Certified Installer',
  established: '2007',
};

export const CONTACT_INFO: ContactInfo = {
  phone: '(215) 519-1795',
  email: 'sroman2@verizon.net',
  address: '710 Parker St, Langhorne, PA 19047',
  hours: ['Mon-Fri 7:00 AM - 5:00 PM', 'Sat by Appointment'],
};

export const SERVICE_AREAS: string[] = [
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

export const SCHEDULING_SIGNALS: SchedulingSignals = {
  eyebrow: 'Scheduling clarity',
  heroMessage:
    'If you are hoping to start this season or want to compare timing before getting too far, reaching out sooner makes it easier to talk through fit and availability.',
  navMessage: 'Now booking estimate conversations',
  processMessage:
    'Homeowners who already know their town, timing, and project goals usually get the clearest next-step guidance fastest.',
};
