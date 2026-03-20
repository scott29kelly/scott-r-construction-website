import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';
import { SCHEDULING_SIGNALS, SITE_INFO } from '@/content';
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
    <section className="bg-navy pt-36 text-white md:pt-44">
      <div className="mx-auto max-w-site px-[50px] pb-20 max-lg:px-6 md:pb-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-end">
          {/* Main content */}
          <div>
            <p className="section-label text-white/60">{eyebrow}</p>

            <h1 className="mt-4 max-w-[900px] text-balance font-display text-section-heading max-lg:text-[40px] max-lg:leading-[44px] max-md:text-[30px] max-md:leading-[34px]">
              {title}
            </h1>

            <p className="mt-6 max-w-[640px] text-body-lg text-white/75">
              {description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={buildContactHref({ leadSource })}
                className="btn-primary btn-primary-light"
              >
                Request an Estimate
                <ArrowRight className="btn-arrow" />
              </Link>
              <a
                href="tel:2155191795"
                className="btn-outline btn-outline-light"
              >
                <Phone size={14} />
                Call (215) 519-1795
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {heroChips.map((chip) => (
                <span
                  key={chip}
                  className="border border-white/30 px-4 py-2 text-btn-sm uppercase text-white/90"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Aside panel */}
          <aside className="border border-white/15 bg-white/5 p-6 md:p-7">
            <p className="section-label text-white/50">{asideEyebrow}</p>

            <h2 className="mt-4 font-display text-card-heading text-white max-md:text-[24px] max-md:leading-[30px]">
              {asideTitle}
            </h2>

            <div className="mt-5 grid gap-3">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="border border-white/10 bg-white/5 px-4 py-4"
                >
                  <p className="section-label text-white/50">{fact.label}</p>
                  <p className="mt-2 text-body-sm text-white/70">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="section-label text-white/50">Timing note</p>
              <p className="mt-2 text-body-sm text-white/70">
                {asideDescription}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
