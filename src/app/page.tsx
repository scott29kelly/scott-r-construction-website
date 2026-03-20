import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { FeaturedProject } from '@/components/sections/FeaturedProject';
import { Team } from '@/components/sections/Team';
import { Process } from '@/components/sections/Process';
import { Proof } from '@/components/sections/Proof';
import { Testimonials } from '@/components/sections/Testimonials';
import { Portfolio } from '@/components/sections/Portfolio';
import { Faq } from '@/components/sections/Faq';
import { Contact } from '@/components/sections/Contact';

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
      <Process />
      <Proof />
      <Testimonials />
      <Portfolio />
      <Faq />
      <Contact />
    </SiteShell>
  );
}
