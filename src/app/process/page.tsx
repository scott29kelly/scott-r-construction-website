import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { Process } from '@/components/sections/Process';
import { PageClosingCTA } from '@/components/ui/PageClosingCTA';
import { PageHero } from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'Process | Scott Romanoski Construction',
  description:
    'Understand how estimate conversations, scope review, scheduling, and the build process work with Scott Romanoski Construction.',
};

export default function ProcessPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Process"
        title="A straightforward path from first conversation to final walkthrough."
        description="See how Scott handles early fit checks, estimate conversations, project planning, and owner-led execution so you know what to expect before reaching out."
        leadSource="process-page-hero"
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
