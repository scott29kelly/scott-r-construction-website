import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { FeaturedProject } from '@/components/sections/FeaturedProject';
import { Proof } from '@/components/sections/Proof';
import { TestimonialsTeaser } from '@/components/sections/TestimonialsTeaser';
import { HomeCTA } from '@/components/sections/HomeCTA';

export const metadata: Metadata = {
  title: 'Owner-Led Remodeling in Langhorne, PA',
  description:
    'Owner-led remodeling, additions, decks, patios, and Bilco door work for Bucks County homeowners who want clear communication and quality craftsmanship.',
};

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <About />
      <Services />
      <FeaturedProject />
      <Proof />
      <TestimonialsTeaser />
      <HomeCTA />
    </SiteShell>
  );
}
