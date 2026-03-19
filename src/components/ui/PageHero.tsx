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
    label: 'Response',
    value: 'Most estimate requests hear back within one business day.',
  },
  {
    label: 'Service area',
    value: 'Bucks County and nearby South Jersey communities.',
  },
];

export function PageHero({ eyebrow, title, description, leadSource }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-sand/20 pt-32 md:pt-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(181,123,67,0.1),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(216,197,168,0.24),transparent_26%),linear-gradient(180deg,rgba(249,245,238,0.96),rgba(243,238,229,0.98))]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6 pb-18 md:pb-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end">
          <div>
            <SectionLabel>{eyebrow}</SectionLabel>
            <h1 className="max-w-5xl text-balance font-display text-5xl leading-[0.98] text-charcoal sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel md:text-xl">
              {description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={buildContactHref({ leadSource })}>Request an Estimate</Link>
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

          <aside className="site-panel p-6 text-charcoal md:p-7">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-accent">
              Quick facts
            </p>

            <div className="mt-5 grid gap-3">
              {pageHeroFacts.map((fact) => (
                <div key={fact.label} className="border border-sand/25 bg-white/70 px-4 py-4">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent-dark">
                    {fact.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-steel">{fact.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-sand/20 pt-5">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent-dark">
                Timing note
              </p>
              <p className="mt-2 text-sm leading-relaxed text-steel">
                {SCHEDULING_SIGNALS.processMessage}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
