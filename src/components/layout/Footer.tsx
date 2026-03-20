import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CONTACT_INFO, SCHEDULING_SIGNALS, SERVICE_AREAS, SITE_INFO } from '@/lib/constants';
import { buildContactHref } from '@/lib/contact-link';
import { PRIMARY_NAV_LINKS } from '@/lib/navigation';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[linear-gradient(180deg,rgba(40,34,30,0.98),rgba(23,20,18,1))] text-cream">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(183,126,73,0.16),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(221,183,132,0.08),transparent_24%)]" />
      <div className="container relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-6 border border-white/10 bg-white/5 p-6 md:p-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Link href="/" className="group inline-flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden border border-white/12 bg-white/92">
                <Image
                  src="/images/logo.webp"
                  alt="Scott Romanoski Construction Logo"
                  fill
                  sizes="64px"
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div>
                <p className="font-display text-2xl font-semibold text-cream">Scott Romanoski</p>
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-warm-sand">
                  Construction
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-base leading-relaxed text-ash">
              Owner-led remodeling, additions, decks, patios, and Bilco door work for homeowners
              who want direct communication and dependable craftsmanship.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="site-chip-dark">Established {SITE_INFO.established}</span>
              <span className="site-chip-dark">Licensed in {SITE_INFO.licensedIn}</span>
              <span className="site-chip-dark">{SITE_INFO.bbbRating} BBB rating</span>
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
                className="inline-flex items-center justify-center border border-sand/35 bg-white/70 px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-charcoal transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-white"
              >
                Call Scott
              </a>
            </div>
          </div>

          <div>
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-warm-sand">
              Contact + Credentials
            </p>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-ash">
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="block transition-colors hover:text-white"
              >
                {CONTACT_INFO.phone}
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="block transition-colors hover:text-white"
              >
                {CONTACT_INFO.email}
              </a>
              <p>{CONTACT_INFO.address}</p>
              <p>PA License #PA012701</p>
              <p>Bilco Certified Installer</p>
              <p>{SCHEDULING_SIGNALS.navMessage}</p>
            </div>
          </div>

          <div>
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-warm-sand">
              Navigate + Service Area
            </p>
            <ul className="mt-4 space-y-3">
              {PRIMARY_NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm leading-relaxed text-ash transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm leading-relaxed text-ash">
              Serving {SERVICE_AREAS.slice(0, -1).join(', ')}, and nearby South Jersey.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-ash md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {currentYear} {SITE_INFO.name}. All rights reserved. PA License #PA012701.
          </p>
          <p>Website by Kelly Digital LLC</p>
        </div>
      </div>
    </footer>
  );
}
