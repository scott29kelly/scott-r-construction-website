import React from 'react';
import Image from 'next/image';
import { ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';
import { SITE_INFO } from '@/content';
import { buildContactHref } from '@/lib/contact-link';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  leadSource: string;
  chips?: string[];
  heroImage?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  leadSource,
  chips,
  heroImage,
}: PageHeroProps) {
  const heroChips = chips ?? [
    `Established ${SITE_INFO.established}`,
    `Licensed in ${SITE_INFO.licensedIn}`,
    `${SITE_INFO.bbbRating} BBB rating`,
  ];

  return (
    <section className="relative overflow-hidden bg-navy pt-44 text-white md:pt-52 min-h-[480px] md:min-h-[560px]">
      {heroImage && (
        <>
          <Image
            src={heroImage}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'rgba(11, 21, 49, 0.65)' }}
          />
        </>
      )}

      <div className="relative z-10 mx-auto max-w-site px-[50px] pb-24 max-lg:px-6 md:pb-28">
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
    </section>
  );
}
