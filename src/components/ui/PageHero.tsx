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
  chips?: string[];
  facts?: {
    label: string;
    value: string;
  }[];
  asideEyebrow?: string;
  asideTitle?: string;
  asideDescription?: string;
}

const defaultPageHeroFacts = [
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

export function PageHero({
  eyebrow,
  title,
  description,
  leadSource,
  chips,
  facts = defaultPageHeroFacts,
  asideEyebrow = 'Quick facts',
  asideTitle = 'What homeowners can expect before the next step.',
  asideDescription = SCHEDULING_SIGNALS.processMessage,
}: PageHeroProps) {
  const heroChips = chips ?? [
    `Established ${SITE_INFO.established}`,
    `Licensed in ${SITE_INFO.licensedIn}`,
    `${SITE_INFO.bbbRating} BBB rating`,
  ];

  return (
    <section className="relative overflow-hidden border-b border-sand/20 pt-36 md:pt-44">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(183,126,73,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(221,183,132,0.18),transparent_24%),linear-gradient(180deg,rgba(251,248,242,0.98),rgba(244,239,231,0.98))]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6 pb-20 md:pb-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end">
          <div>
            <SectionLabel>{eyebrow}</SectionLabel>
            <h1 className="max-w-5xl text-balance font-display text-5xl leading-[0.94] text-charcoal sm:text-6xl lg:text-[4.8rem]">
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
              {heroChips.map((chip) => (
                <span key={chip} className="site-chip">
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <aside className="site-panel-dark bg-noise p-6 text-cream md:p-7">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-warm-sand">
              {asideEyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-cream">
              {asideTitle}
            </h2>

            <div className="mt-5 grid gap-3">
              {facts.map((fact) => (
                <div key={fact.label} className="border border-white/10 bg-white/6 px-4 py-4">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-warm-sand">
                    {fact.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ash">{fact.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-warm-sand">
                Timing note
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ash">{asideDescription}</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
