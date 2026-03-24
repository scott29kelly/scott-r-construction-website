import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { Process } from '@/components/sections/Process';
import { PageClosingCTA } from '@/components/ui/PageClosingCTA';
import { PageHero } from '@/components/ui/PageHero';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Process',
  description:
    'Understand how estimate conversations, scope review, scheduling, and the build process work with Scott Romanoski Construction.',
};

export default function ProcessPage() {
  return (
    <SiteShell>
      <Breadcrumbs items={[{ label: 'Our Process' }]} />
      <PageHero
        eyebrow="Process"
        title="A straightforward path from first conversation to final walkthrough."
        description="See how Scott handles early fit checks, estimate conversations, project planning, and owner-led execution so you know what to expect before reaching out."
        leadSource="process-page-hero"
        chips={['Fit first', 'Clear communication', 'Owner-led execution']}
        facts={[
          {
            label: 'Before you commit',
            value: 'Scott helps confirm whether the project, location, and timing sound like a real fit.',
          },
          {
            label: 'During the work',
            value: 'Communication stays direct and practical instead of being filtered through layers.',
          },
          {
            label: 'At the end',
            value: 'The walkthrough matters just as much as the estimate because details still count then.',
          },
        ]}
        asideEyebrow="What this page should answer"
        asideTitle="How the job feels to live through is part of the quality."
        asideDescription="This page is meant to clarify expectations around timing, communication, and project fit before you spend energy chasing multiple bids."
      />
      <Process />
      <PageClosingCTA
        eyebrow="Ready for the first step?"
        title="Share your scope, timing, and location and Scott can tell you whether an estimate, site visit, or later follow-up makes the most sense."
        description="This is especially helpful if you are still deciding whether to move now, compare timing, or get clarity before chasing multiple bids."
        leadSource="process-page-cta"
      />
    </SiteShell>
  );
}
