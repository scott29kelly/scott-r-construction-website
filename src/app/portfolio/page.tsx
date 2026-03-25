import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { Portfolio } from '@/components/sections/Portfolio';
import { PageClosingCTA } from '@/components/ui/PageClosingCTA';
import { PageHero } from '@/components/ui/PageHero';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Browse featured remodeling and finish projects from Langhorne and nearby Bucks County communities to see the kind of homeowner outcomes Scott delivers.',
};

export default function PortfolioPage() {
  return (
    <SiteShell>
      <Breadcrumbs items={[{ label: 'Portfolio' }]} />
      <PageHero
        eyebrow="Portfolio"
        title="See the spaces homeowners trusted Scott to improve."
        description="These featured projects show the rooms, goals, and practical outcomes behind the finished work, not just polished photos."
        leadSource="portfolio-page-hero"
        chips={['Curated local projects', 'Outcome-led stories', 'Everyday-use focused']}
        heroImage="/images/Projects/251 Warnock St. Philadelphia, Pa/exterior-front-brick-shutters.jpg"
      />
      <Portfolio hideViewAll />
      <PageClosingCTA
        eyebrow="Like what you see?"
        title="Tell Scott what space you want to upgrade and what outcome you are hoping for."
        description="The most helpful estimate requests usually include the room or exterior area involved, what is not working now, and when you would ideally like to start."
        leadSource="portfolio-page-cta"
      />
    </SiteShell>
  );
}
