import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { About } from '@/components/sections/About';
import { PageClosingCTA } from '@/components/ui/PageClosingCTA';
import { PageHero } from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'About | Scott Romanoski Construction',
  description:
    'Learn more about Scott Romanoski Construction, the owner-led approach, credentials, and the trust signals behind the work.',
};

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About Scott"
        title="Owner-led construction with accountability homeowners can actually feel."
        description="Get a clearer sense of who is handling the work, how Scott stays involved, and why homeowners reach out when they want straightforward answers and quality craftsmanship."
        leadSource="about-page-hero"
      />
      <About />
      <PageClosingCTA
        eyebrow="Work with the owner directly"
        title="If the person estimating the work matters to you, this is the right time to start the conversation."
        description="Reach out with your project type, location, and timing goals and Scott will let you know what makes sense next without handing you off to a sales process."
        leadSource="about-page-cta"
      />
    </SiteShell>
  );
}
