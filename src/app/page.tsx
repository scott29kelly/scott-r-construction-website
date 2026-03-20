import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { Hero } from '@/components/sections/Hero';
import { LocalFit } from '@/components/sections/LocalFit';
import { Process } from '@/components/sections/Process';
import { Proof } from '@/components/sections/Proof';
import { Services } from '@/components/sections/Services';
import { Testimonials } from '@/components/sections/Testimonials';
import { PageClosingCTA } from '@/components/ui/PageClosingCTA';

export const metadata: Metadata = {
  title: 'Owner-Led Remodeling in Langhorne, PA',
  description:
    'Owner-led remodeling, additions, decks, patios, and Bilco door work for Bucks County homeowners who want clear communication and quality craftsmanship.',
};

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <Services />
      <Proof />
      <Process />
      <Testimonials />
      <LocalFit />
      <PageClosingCTA
        eyebrow="Start with a clear conversation"
        title="Tell Scott what space you want to improve, where the home is, and when you would ideally like to start."
        description="That is usually enough to confirm fit, talk through realistic next steps, and decide whether an estimate conversation or site visit makes the most sense."
        leadSource="home-closing-cta"
      />
    </SiteShell>
  );
}
