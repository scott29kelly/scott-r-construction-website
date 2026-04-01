'use client';

import React from 'react';
import { useReducedMotion } from 'framer-motion';

const BADGES = [
  "Licensed in PA & NJ",
  "18+ Years Experience",
  "A+ BBB Rating",
  "Owner-Led Approach",
  "Fully Insured",
  "Premium Craftsmanship",
  "Fully Licensed"
];

export function MarqueeText() {
  const shouldReduceMotion = useReducedMotion();
  const items = [...BADGES, ...BADGES, ...BADGES, ...BADGES];

  if (shouldReduceMotion) {
    return (
      <div className="relative flex w-full overflow-hidden bg-accent py-4 border-y border-charcoal/10">
        <div className="flex w-full items-center justify-center flex-wrap gap-y-2">
          {BADGES.map((badge, i) => (
            <div key={i} className="flex items-center">
              <span className="mx-8 font-body text-[11px] font-bold uppercase tracking-[4px] text-charcoal">
                {badge}
              </span>
              <span className="text-charcoal opacity-30 text-xs">&#10022;</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex w-full overflow-hidden bg-accent py-4 border-y border-charcoal/10">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation-play-state: paused;
          }
        }
      `}} />
      <div className="flex w-fit min-w-full animate-marquee items-center whitespace-nowrap">
        {items.map((badge, i) => (
          <div key={i} className="flex items-center">
            <span className="mx-8 font-body text-[11px] font-bold uppercase tracking-[4px] text-charcoal">
              {badge}
            </span>
            <span className="text-charcoal opacity-30 text-xs">&#10022;</span>
          </div>
        ))}
      </div>
    </div>
  );
}
