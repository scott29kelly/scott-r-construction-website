'use client';

import React from 'react';
import { Phone } from 'lucide-react';

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-sand/15 bg-warm-black/95 px-4 py-3 shadow-2xl backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-md items-center gap-3">
        <a
          href="tel:2155191795"
          className="flex min-w-0 flex-1 items-center justify-center gap-2 border border-sand/20 px-4 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-cream"
        >
          <Phone size={16} />
          Call Scott
        </a>
        <a
          href="#contact"
          className="flex-1 bg-accent px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.1em] text-warm-black"
        >
          Free Estimate
        </a>
      </div>
    </div>
  );
}
