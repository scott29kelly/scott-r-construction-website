import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { Testimonials } from '@/components/sections/Testimonials';
import { PageClosingCTA } from '@/components/ui/PageClosingCTA';
import { PageHero } from '@/components/ui/PageHero';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Testimonials',
  description:
    'Read what homeowners say about working with Scott Romanoski Construction — craftsmanship, communication, and trust built on real project results.',
};

export default function TestimonialsPage() {
  return (
    <SiteShell>
      <Breadcrumbs items={[{ label: 'Testimonials' }]} />
      <PageHero
        eyebrow="Testimonials"
        title="Trust built the old-fashioned way: with work people remember."
        description="These recommendations come from homeowners who experienced the work firsthand — the craftsmanship, the communication, and the follow-through."
        leadSource="testimonials-page-hero"
        chips={['5-star reviews', 'Facebook recommendations', 'Real homeowner feedback']}
        heroImage="/images/Projects/front-porch-2019-may/porch-entry-steps-front.jpg"
      />
      <Testimonials />
      <PageClosingCTA
        eyebrow="Ready to experience it yourself?"
        title="Start with a conversation about your project and see why homeowners keep coming back."
        description="Share your project type, town, and timing and Scott will follow up within one business day with clear next steps."
        leadSource="testimonials-page-cta"
      />
    </SiteShell>
  );
}
