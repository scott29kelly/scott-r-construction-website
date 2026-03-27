import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CONTACT_INFO, SERVICE_AREAS, SITE_INFO } from '@/content';
import { buildContactHref } from '@/lib/contact-link';
import { PRIMARY_NAV_LINKS } from '@/lib/navigation';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-warm-black text-white">
      {/* Gold accent line */}
      <div className="border-t-2 border-accent" />

      <div className="mx-auto max-w-site section-padding px-[50px] max-lg:px-6">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Col 1: Logo + description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block transition-opacity hover:opacity-80">
              <Image
                src="/images/logo.webp"
                alt="Scott Romanoski Construction"
                width={187}
                height={50}
                className="h-auto w-[160px]"
              />
            </Link>
            <p className="mt-6 max-w-sm text-body-sm font-light text-white/70">
              Owner-led remodeling, additions, decks, patios, and Bilco door work for
              homeowners who want direct communication and dependable craftsmanship.
            </p>
          </div>

          {/* Col 2: Service Areas */}
          <div>
            <p className="section-label text-white/60">Service Areas</p>
            <ul className="mt-4 columns-2 gap-x-4 space-y-1.5 text-body-sm font-light text-white/80">
              {SERVICE_AREAS.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          {/* Col 3: Location */}
          <div>
            <p className="section-label text-white/60">Location</p>
            <div className="mt-4 space-y-3 text-body-sm font-light text-white/80">
              <p>{CONTACT_INFO.address}</p>
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
            </div>
          </div>

          {/* Col 4: Company links */}
          <div>
            <p className="section-label text-white/60">Company</p>
            <ul className="mt-4 space-y-3">
              {PRIMARY_NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-body-sm font-light text-white/80 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div
        className="mx-auto max-w-site px-[50px] max-lg:px-6"
        style={{ borderTop: '0.667px solid rgba(255,255,255,0.36)' }}
      >
        <div className="flex flex-col gap-3 py-6 text-sm max-md:text-center md:flex-row md:items-center md:justify-between"
          style={{ color: 'rgba(255,255,255,0.78)' }}
        >
          <p>
            &copy; {currentYear} {SITE_INFO.name}. All rights reserved.
          </p>
          <p>Website by Kelly Digital LLC</p>
          <p>PA License #PA012701 | Bilco Certified Installer</p>
        </div>
      </div>
    </footer>
  );
}
