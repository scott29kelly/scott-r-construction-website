import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICE_DETAILS } from '@/content';
import { SiteShell } from '@/components/layout/SiteShell';
import { PageHero } from '@/components/ui/PageHero';
import { PageClosingCTA } from '@/components/ui/PageClosingCTA';
import { ServiceNarrative } from '@/components/sections/ServiceNarrative';
import { ListeningPoints } from '@/components/sections/ListeningPoints';
import { RelatedProjects } from '@/components/sections/RelatedProjects';
import { ServiceFaq } from '@/components/sections/ServiceFaq';
import { ServiceStructuredData } from '@/components/ServiceStructuredData';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { getServiceBySlug, getFaqsForService } from '@/lib/services';

const SERVICE_IMAGES: Record<string, string> = {
  remodeling: '/images/Projects/710 Parker St. Langhorne, Pa/kitchen-island-wide.jpg',
  additions: '/images/Projects/kitchen-2020/dining-nook-french-doors.jpg',
  'decks-patios': '/images/Projects/front-porch-2019-aug/porch-finished-wide-front.jpg',
  bilco: '/images/Projects/251 Warnock St. Philadelphia, Pa/basement-staircase-laundry.jpg',
  'windows-doors': '/images/Projects/710 Parker St. Langhorne, Pa/window-plantation-shutters.jpg',
  contracting: '/images/Projects/710 Parker St. Langhorne, Pa/staircase-newel-entry.jpg',
};

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SERVICE_DETAILS.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: `${service.title} Services`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Scott Romanoski Construction`,
      description: service.description,
      url: `https://scottromconstruction.com/services/${service.id}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const faqs = getFaqsForService(service.id);

  return (
    <SiteShell>
      <ServiceStructuredData service={service} faqs={faqs} />
      <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: service.title }]} />
      <PageHero
        eyebrow={service.title}
        title={`${service.title} for Bucks County homeowners.`}
        description={service.description}
        leadSource={`service-detail-${service.id}`}
        chips={service.projectTypeOptions}
        heroImage={SERVICE_IMAGES[service.id]}
      />
      <ScrollReveal>
        <ServiceNarrative service={service} />
      </ScrollReveal>
      <ScrollReveal>
        <ListeningPoints points={service.listeningPoints} />
      </ScrollReveal>
      <ScrollReveal>
        <RelatedProjects projectIds={service.relatedProjectIds} />
      </ScrollReveal>
      <ScrollReveal>
        <ServiceFaq items={faqs} serviceTitle={service.title} />
      </ScrollReveal>
      <ScrollReveal>
        <PageClosingCTA
        eyebrow={`Ready to discuss ${service.title.toLowerCase()}?`}
        title="Share your project goals and Scott will follow up with practical next steps."
        description="Include the room or area, your timing window, and what is driving the project to get the most useful first reply."
        leadSource={`service-detail-${service.id}-cta`}
        projectType={service.contactProjectType}
      />
      </ScrollReveal>
    </SiteShell>
  );
}
