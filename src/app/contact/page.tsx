import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { Contact } from '@/components/sections/Contact';
import { PageHero } from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'Contact | Scott Romanoski Construction',
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

  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact"
        title="Request an estimate with the details that make the first reply more useful."
        description="Share your project type, town, timing, and a short scope summary to help Scott confirm fit, answer early questions, and recommend the best next step."
        leadSource="contact-page-hero"
      />
      <Contact
        initialLeadSource={leadSource}
        initialProjectType={projectType}
      />
    </SiteShell>
  );
}
