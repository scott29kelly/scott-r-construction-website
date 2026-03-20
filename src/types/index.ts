export interface SiteInfo {
  name: string;
  tagline: string;
  description: string;
  yearsExperience: string;
  licensedIn: string;
  bbbRating: string;
  certifications: string;
  established: string;
}

export interface AboutContent {
  heading: string;
  paragraphs: string[];
  credentials: string[];
}

export interface SchedulingSignals {
  eyebrow: string;
  heroMessage: string;
  navMessage: string;
  processMessage: string;
}

export interface ContentImage {
  src: string;
  alt: string;
  caption: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  bestFit: string;
  qualificationPrompt: string;
  ctaLabel: string;
  contactProjectType: string;
}

export interface ServiceDetail extends Service {
  narrativePreview: string;
  listeningPoints: string[];
  projectTypeOptions: string[];
  relatedProjectIds: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  location: string;
  image: string;
  imageAlt: string;
  scope: string;
  homeownerGoal: string;
  outcome: string;
  summary: string;
  projectStory: string;
  projectHighlights: string[];
  tags: string[];
  isTall?: boolean;
}

export interface ProjectCaseStudy extends PortfolioItem {
  eyebrow: string;
  serviceId: Service['id'];
  homeownerNeed: string;
  scottApproach: string;
  result: string;
  outcomePoints: string[];
  images: ContentImage[];
}

export type FeaturedProjectStory = ProjectCaseStudy;

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  stars: number;
  highlight: string;
  concern: string;
  sourceLabel: string;
  sourceDetail: string;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  hours: string[];
}

export interface TrustPoint {
  id: string;
  title: string;
  description: string;
}

export interface ProofStat {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface ReassurancePoint {
  id: string;
  title: string;
  description: string;
}

export interface AuthoritySignal {
  id: string;
  title: string;
  detail: string;
  description: string;
}

export interface ReviewTheme {
  id: string;
  title: string;
  description: string;
}

export interface HomeownerSafeguard {
  id: string;
  title: string;
  description: string;
}

export interface ComparisonPoint {
  id: string;
  title: string;
  scottApproach: string;
  homeownerConcern: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FitChecklistItem {
  id: string;
  title: string;
  description: string;
}

export interface FitExpectation {
  id: string;
  heading: string;
  points: string[];
}
