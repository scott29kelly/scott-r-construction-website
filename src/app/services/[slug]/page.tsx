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
import { getServiceBySlug, getFaqsForService } from '@/lib/services';

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
        facts={[
          {
            label: 'Best fit',
            value: service.bestFit,
          },
          {
            label: 'What helps',
            value: service.qualificationPrompt,
          },
          {
            label: 'Next step',
            value: 'Share your project details for a more useful first conversation.',
          },
        ]}
        asideEyebrow="Service details"
        asideTitle="What to know before reaching out."
        asideDescription={service.qualificationPrompt}
      />
      <ServiceNarrative service={service} />
      <ListeningPoints points={service.listeningPoints} />
      <RelatedProjects projectIds={service.relatedProjectIds} />
      <ServiceFaq items={faqs} serviceTitle={service.title} />
      <PageClosingCTA
        eyebrow={`Ready to discuss ${service.title.toLowerCase()}?`}
        title="Share your project goals and Scott will follow up with practical next steps."
        description="Include the room or area, your timing window, and what is driving the project to get the most useful first reply."
        leadSource={`service-detail-${service.id}-cta`}
        projectType={service.contactProjectType}
      />
    </SiteShell>
  );
}
