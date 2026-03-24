import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { FaqStructuredData } from '@/components/FaqStructuredData';
import { Contact } from '@/components/sections/Contact';
import { Faq } from '@/components/sections/Faq';
import { PageHero } from '@/components/ui/PageHero';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
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
        facts={[
          {
            label: 'Best first details',
            value: 'Project type, town, timeline, and a short note about what is not working now.',
          },
          {
            label: 'What you get back',
            value: 'A direct response about fit, timing, and the most sensible next step.',
          },
          {
            label: 'Who responds',
            value: 'The same owner-led business you are hiring, not a detached intake team.',
          },
        ]}
        asideEyebrow="Before you submit"
        asideTitle="A little context up front makes the consult feel more useful right away."
        asideDescription="If you already know your town, rough scope, and timing window, Scott can usually answer fit and scheduling questions much faster."
      />
      <Faq />
      <Contact
        initialLeadSource={leadSource}
        initialProjectType={projectType}
      />
    </SiteShell>
  );
}
