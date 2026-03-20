'use client';

import React from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { buildContactHref } from '@/lib/contact-link';

export function StickyMobileCTA() {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[rgba(23,20,18,0.9)] px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 shadow-[0_-14px_32px_rgba(23,20,18,0.18)] backdrop-blur-xl md:hidden">
        <div className="mx-auto max-w-md">
          <div className="site-panel-dark bg-noise px-4 py-4">
            <p className="text-center font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-warm-sand">
              Free estimate. Reply within 1 business day.
            </p>

            <div className="mt-4 flex items-center gap-3">
              <a
                href="tel:2155191795"
                className="flex min-w-0 flex-1 items-center justify-center gap-2 border border-white/12 bg-white/8 px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-cream"
              >
                <Phone size={16} />
                Call Scott
              </a>
              <Link
                href={buildContactHref({ leadSource: 'sticky-mobile-cta' })}
                className="flex-1 border border-accent bg-accent px-4 py-3 text-center font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-warm-black"
              >
                Estimate
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-50 hidden md:block">
        <div className="flex items-center gap-3 border border-white/10 bg-[rgba(29,25,22,0.9)] p-3 shadow-[0_20px_48px_rgba(23,20,18,0.24)] backdrop-blur-xl">
          <div className="hidden border-r border-white/10 pr-3 lg:block">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-warm-sand">
              Owner-led estimate
            </p>
            <p className="mt-1 text-sm text-ash">Direct follow-up within 1 business day</p>
          </div>
          <Link
            href={buildContactHref({ leadSource: 'floating-desktop-cta' })}
            className="inline-flex items-center justify-center border border-accent bg-accent px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-warm-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-light"
          >
            Request Estimate
          </Link>
          <a
            href="tel:2155191795"
            aria-label="Call Scott"
            className="inline-flex h-11 w-11 items-center justify-center border border-white/12 bg-white/10 text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-white/14"
          >
            <Phone size={18} />
          </a>
        </div>
      </div>
    </>
  );
}
