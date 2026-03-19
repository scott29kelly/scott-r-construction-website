import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { Hero } from '@/components/sections/Hero';

export const metadata: Metadata = {
  title: 'Scott Romanoski Construction | Langhorne, PA',
  description:
    'Owner-led remodeling, additions, decks, patios, and Bilco door work for Bucks County homeowners who want clear communication and quality craftsmanship.',
};

export default function Home() {
  return (
    <SiteShell>
      <Hero />
    </SiteShell>
  );
}
