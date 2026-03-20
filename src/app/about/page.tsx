import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { About } from '@/components/sections/About';
import { PageClosingCTA } from '@/components/ui/PageClosingCTA';
import { PageHero } from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'About',
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
        chips={['Owner-operated since 2007', 'PA License #PA012701', 'Direct communication']}
        facts={[
          {
            label: 'Working style',
            value: 'Scott stays involved from estimate to walkthrough instead of handing you off.',
          },
          {
            label: 'Credentials',
            value: 'Licensed in Pennsylvania and New Jersey, fully insured, and Bilco certified.',
          },
          {
            label: 'Best fit',
            value: 'Homeowners who want a capable builder and a calmer, more accountable process.',
          },
        ]}
        asideEyebrow="Why homeowners reach out"
        asideTitle="A clearer picture of who is actually showing up for the work."
        asideDescription="This page is built to answer the trust, communication, and accountability questions homeowners usually have before they reach out."
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
