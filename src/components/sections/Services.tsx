import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { SERVICE_DETAILS } from '@/content';
import { buildContactHref } from '@/lib/contact-link';

/* Map each service to a representative project image */
const SERVICE_IMAGES: Record<string, string> = {
  remodeling: '/images/Projects/710 Parker St. Langhorne, Pa/kitchen-island-wide.jpg',
  additions: '/images/Projects/710 Parker St. Langhorne, Pa/kitchen-island-seating.jpg',
  'decks-patios': '/images/Projects/710 Parker St. Langhorne, Pa/window-plantation-shutters.jpg',
  bilco: '/images/Projects/710 Parker St. Langhorne, Pa/bathroom-full-room.jpg',
  'windows-doors': '/images/Projects/710 Parker St. Langhorne, Pa/kitchen-floor-detail.jpg',
  contracting: '/images/Projects/710 Parker St. Langhorne, Pa/staircase-newel-entry.jpg',
};

export function Services() {
  return (
    <section id="services" className="bg-cream section-padding">
      <div className="mx-auto max-w-site px-[50px] max-lg:px-6">
        {/* Header row */}
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="section-label text-navy/60">What We Do</p>
            <h2 className="mt-4 font-display text-section-heading text-navy max-lg:text-[40px] max-lg:leading-[44px] max-md:text-[30px] max-md:leading-[34px]">
              Services Built Around How You Actually Live
            </h2>
          </div>

          <p className="max-w-[520px] text-body-lg text-navy/70 lg:ml-auto">
            Every project starts with a conversation about what isn&apos;t working
            and what you&apos;d like your home to feel like when we&apos;re done.
            Pick the service that fits and we&apos;ll take it from there.
          </p>
        </div>

        {/* 3-column card grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_DETAILS.map((service) => (
            <article
              key={service.id}
              className="group flex flex-col overflow-hidden border border-border bg-white"
            >
              {/* Card image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={SERVICE_IMAGES[service.id] ?? '/images/logo.webp'}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Card body */}
              <div className="flex flex-1 flex-col p-[35px]">
                <h3 className="font-display text-card-heading text-navy">
                  {service.title}
                </h3>

                <p className="mt-3 flex-1 text-body-sm text-navy/70">
                  {service.description}
                </p>

                <div className="mt-6">
                  <Link
                    href={buildContactHref({
                      leadSource: `services-${service.id}`,
                      projectType: service.contactProjectType,
                    })}
                    className="btn-sm-card"
                  >
                    {service.ctaLabel}
                    <ArrowRight className="btn-arrow" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
