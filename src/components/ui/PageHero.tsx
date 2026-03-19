import React from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { SCHEDULING_SIGNALS, SITE_INFO } from '@/lib/constants';
import { buildContactHref } from '@/lib/contact-link';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  leadSource: string;
}

const pageHeroFacts = [
  {
    label: 'Owner led',
    value: 'Scott stays directly involved from estimate to final walkthrough.',
  },
  {
    label: 'Response window',
    value: 'Most estimate requests get a reply within one business day.',
  },
  {
    label: 'Service area',
    value: 'Bucks County and nearby South Jersey communities.',
  },
];

export function PageHero({ eyebrow, title, description, leadSource }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-sand/15 pt-32 text-cream md:pt-40">
      <div className="absolute inset-0 bg-warm-black bg-noise" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(181,123,67,0.22),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(216,197,168,0.14),transparent_26%)]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6 pb-20 md:pb-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-end">
          <div>
            <SectionLabel light>{eyebrow}</SectionLabel>
            <h1 className="max-w-5xl text-balance font-display text-5xl leading-[0.98] text-cream sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ash md:text-xl">
              {description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={buildContactHref({ leadSource })}>Request a Free Estimate</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href="tel:2155191795">
                  <Phone size={18} />
                  Call (215) 519-1795
                </a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="site-chip-dark">Established {SITE_INFO.established}</span>
              <span className="site-chip-dark">Licensed in {SITE_INFO.licensedIn}</span>
              <span className="site-chip-dark">{SITE_INFO.bbbRating} BBB rating</span>
            </div>
          </div>

          <aside className="site-panel-dark bg-noise p-6 md:p-8">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-accent-light">
              Project fit
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-cream">
              Start with the details that make the first conversation useful.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ash">
              {SCHEDULING_SIGNALS.processMessage}
            </p>

            <div className="mt-6 grid gap-4">
              {pageHeroFacts.map((fact) => (
                <div key={fact.label} className="border border-white/10 bg-white/5 px-5 py-4">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-warm-sand">
                    {fact.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-cream/90">{fact.value}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
