import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { FaqStructuredData } from '@/components/FaqStructuredData';
import { Contact } from '@/components/sections/Contact';
import { Faq } from '@/components/sections/Faq';
import { ServiceAreaMap } from '@/components/ServiceAreaMap';
import { PageHero } from '@/components/ui/PageHero';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { FAQ_ITEMS } from '@/content';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Request an estimate for remodeling, additions, decks, patios, Bilco door installation, and other residential construction projects in Bucks County and nearby South Jersey.',
};

interface ContactPageProps {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const resolvedSearchParams = (await searchParams) ?? {};
  const leadSource = Array.isArray(resolvedSearchParams.leadSource)
    ? resolvedSearchParams.leadSource[0]
    : resolvedSearchParams.leadSource;
  const projectType = Array.isArray(resolvedSearchParams.projectType)
    ? resolvedSearchParams.projectType[0]
    : resolvedSearchParams.projectType;

  const generalFaqs = FAQ_ITEMS.filter((item) => !item.serviceId);

  return (
    <SiteShell>
      <FaqStructuredData items={generalFaqs} />
      <Breadcrumbs items={[{ label: 'Contact' }]} />
      <PageHero
        eyebrow="Contact"
        title="Request an estimate with the details that make the first reply more useful."
        description="Share your project type, town, timing, and a short scope summary to help Scott confirm fit, answer early questions, and recommend the best next step."
        leadSource="contact-page-hero"
        chips={['Free estimate', '1 business day reply', 'No sales handoff']}
        heroImage="/images/Projects/front-porch-2019-aug/porch-columns-finished-angle.jpg"
      />
      <ScrollReveal>
        <Faq />
      </ScrollReveal>
      <ScrollReveal>
        <Contact
          initialLeadSource={leadSource}
          initialProjectType={projectType}
        />
      </ScrollReveal>
      <ScrollReveal>
        <ServiceAreaMap />
      </ScrollReveal>
    </SiteShell>
  );
}
