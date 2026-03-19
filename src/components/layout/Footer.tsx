import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CONTACT_INFO, SITE_INFO } from '@/lib/constants';
import { buildContactHref } from '@/lib/contact-link';
import { PRIMARY_NAV_LINKS } from '@/lib/navigation';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-sand/20 bg-[linear-gradient(180deg,rgba(249,245,238,0.96),rgba(243,238,229,0.98))] text-charcoal">
      <div className="container relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Link href="/" className="group inline-flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden border border-sand/25 bg-white">
                <Image
                  src="/images/logo.webp"
                  alt="Scott Romanoski Construction Logo"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div>
                <p className="font-display text-2xl font-semibold text-charcoal">Scott Romanoski</p>
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-accent-dark">
                  Construction
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-base leading-relaxed text-steel">
              Owner-led remodeling, additions, decks, patios, and Bilco door work for homeowners
              who want direct communication and dependable craftsmanship.
            </p>

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
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-accent">
              Contact
            </p>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-steel">
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="block transition-colors hover:text-charcoal"
              >
                {CONTACT_INFO.phone}
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="block transition-colors hover:text-charcoal"
              >
                {CONTACT_INFO.email}
              </a>
              <p>{CONTACT_INFO.address}</p>
              <p>Serving lower Bucks County and nearby South Jersey.</p>
            </div>
          </div>

          <div>
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-accent">
              Navigate
            </p>
            <ul className="mt-4 space-y-3">
              {PRIMARY_NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm leading-relaxed text-steel transition-colors hover:text-charcoal"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-sand/20 pt-6 text-xs text-steel md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {currentYear} {SITE_INFO.name}. All rights reserved. PA License #PA012701.
          </p>
          <p>Website by Kelly Digital LLC</p>
        </div>
      </div>
    </footer>
  );
}
