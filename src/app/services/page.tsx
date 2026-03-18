import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { Services } from '@/components/sections/Services';
import { PageClosingCTA } from '@/components/ui/PageClosingCTA';
import { PageHero } from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'Services | Scott Romanoski Construction',
  description:
    'Explore remodeling, additions, decks, patios, Bilco door installation, windows, doors, and general contracting services for Bucks County homes.',
};

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Services"
        title="Residential construction services built around real homeowner goals."
        description="Explore the work Scott handles most often, see what makes each project a better fit, and reach out with clearer estimate details from the start."
        leadSource="services-page-hero"
      />
      <Services />
      <PageClosingCTA
        eyebrow="Need help choosing the right service?"
        title="Describe the room, structure, or exterior area you want to improve and Scott can point you toward the best next step."
        description="You do not need a fully finalized scope yet. A short note about the project type, town, and target timing is usually enough to start a more useful estimate conversation."
        leadSource="services-page-cta"
      />
    </SiteShell>
  );
}
