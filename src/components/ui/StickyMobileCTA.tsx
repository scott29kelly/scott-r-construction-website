'use client';

import React from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-sand/15 bg-warm-black/95 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 shadow-2xl backdrop-blur md:hidden">
      <div className="mx-auto max-w-md">
        <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-sand/85">
          Free estimate. Reply within 1 business day.
        </p>

        <div className="flex items-center gap-3">
          <a
            href="tel:2155191795"
            className="flex min-w-0 flex-1 items-center justify-center gap-2 border border-sand/20 px-4 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-cream"
          >
            <Phone size={16} />
            Call Scott
          </a>
          <Link
            href="/?leadSource=sticky-mobile-cta#contact"
            className="flex-1 bg-accent px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.1em] text-warm-black"
          >
            Free Estimate
          </Link>
        </div>
      </div>
    </div>
  );
}
