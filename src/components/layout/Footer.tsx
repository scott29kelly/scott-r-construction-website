import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CONTACT_INFO, SERVICE_AREAS, SITE_INFO } from '@/lib/constants';
import { buildContactHref } from '@/lib/contact-link';
import { PRIMARY_NAV_LINKS } from '@/lib/navigation';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-sand/15 bg-warm-black bg-noise text-cream">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(181,123,67,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(216,197,168,0.08),transparent_26%)]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.7fr_1.25fr]">
          <div>
            <Link href="/" className="group inline-flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden border border-sand/20 bg-white/5">
                <Image
                  src="/images/logo.webp"
                  alt="Scott Romanoski Construction Logo"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div>
                <p className="font-display text-2xl font-semibold text-cream">Scott Romanoski</p>
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.26em] text-warm-sand">
                  Construction
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-base leading-relaxed text-ash">
              {SITE_INFO.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="site-chip-dark">Established {SITE_INFO.established}</span>
              <span className="site-chip-dark">Licensed in {SITE_INFO.licensedIn}</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={buildContactHref({ leadSource: 'footer-primary' })}
                className="inline-flex items-center justify-center border border-accent bg-accent px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-warm-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-light"
              >
                Request Estimate
              </Link>
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="inline-flex items-center justify-center border border-sand/20 px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-light hover:bg-white/5"
              >
                Call Scott
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-accent-light">
                Contact
              </p>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-ash">
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="block transition-colors hover:text-cream"
                >
                  {CONTACT_INFO.phone}
                </a>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="block transition-colors hover:text-cream"
                >
                  {CONTACT_INFO.email}
                </a>
                <p>{CONTACT_INFO.address}</p>
              </div>
            </div>

            <div>
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-accent-light">
                Navigate
              </p>
              <ul className="mt-4 space-y-3">
                {PRIMARY_NAV_LINKS.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm leading-relaxed text-ash transition-colors hover:text-cream"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="site-panel-dark p-7 md:p-8">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-accent-light">
              Service area clarity
            </p>
            <h3 className="mt-4 max-w-xl font-display text-3xl leading-tight text-cream">
              Working across lower Bucks County and nearby South Jersey communities.
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-ash">
              Share the town, project type, and timing window and Scott can quickly tell you
              whether the project is a fit and what the next step should be.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {SERVICE_AREAS.map((area, index) => (
                <span
                  key={`${area}-${index}`}
                  className="border border-white/10 bg-white/5 px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-warm-sand"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-ash md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {currentYear} {SITE_INFO.name}. All rights reserved. PA License #PA012701.
          </p>
          <p>Website by Kelly Digital LLC</p>
        </div>
      </div>
    </footer>
  );
}
