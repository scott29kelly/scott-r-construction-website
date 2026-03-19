'use client';

import React from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { buildContactHref } from '@/lib/contact-link';

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-sand/15 bg-warm-black/92 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 shadow-[0_-18px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl md:hidden">
      <div className="mx-auto max-w-md">
        <div className="site-panel-dark px-4 py-4">
          <p className="text-center font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-warm-sand">
            Free estimate. Reply within 1 business day.
          </p>

          <div className="mt-4 flex items-center gap-3">
            <a
              href="tel:2155191795"
              className="flex min-w-0 flex-1 items-center justify-center gap-2 border border-sand/20 bg-white/5 px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-cream"
            >
              <Phone size={16} />
              Call Scott
            </a>
            <Link
              href={buildContactHref({ leadSource: 'sticky-mobile-cta' })}
              className="flex-1 border border-accent bg-accent px-4 py-3 text-center font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-warm-black"
            >
              Free Estimate
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
