import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { FeaturedProject } from '@/components/sections/FeaturedProject';
import { Team } from '@/components/sections/Team';

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
      <Team />
      {/* Process, Why Choose Us, Gallery, Testimonials, Contact
          sections will be added in Sessions 3-4 */}
    </SiteShell>
  );
}
