import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { Testimonials } from '@/components/sections/Testimonials';
import { PageClosingCTA } from '@/components/ui/PageClosingCTA';
import { PageHero } from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'Testimonials',
  description:
    'Read what homeowners say about working with Scott Romanoski Construction — craftsmanship, communication, and trust built on real project results.',
};

export default function TestimonialsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Testimonials"
        title="Trust built the old-fashioned way: with work people remember."
        description="These recommendations come from homeowners who experienced the work firsthand — the craftsmanship, the communication, and the follow-through."
        leadSource="testimonials-page-hero"
        chips={['5-star reviews', 'Facebook recommendations', 'Real homeowner feedback']}
        facts={[
          {
            label: 'What clients notice',
            value: 'Craftsmanship, respect for the home, and communication that stays direct throughout.',
          },
          {
            label: 'Trust signal',
            value: 'A+ BBB rating with zero complaints — a third-party record homeowners can verify.',
          },
          {
            label: 'What it means for you',
            value: 'The same care and accountability these homeowners experienced is what you can expect.',
          },
        ]}
        asideEyebrow="Why this matters"
        asideTitle="Recommendations that answer the questions you are already asking."
        asideDescription="Before reaching out, most homeowners want to know: will the contractor respect my home, communicate clearly, and deliver quality work? These reviews answer that."
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
