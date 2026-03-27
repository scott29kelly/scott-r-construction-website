'use client';

import React from 'react';

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
  const items = [...BADGES, ...BADGES, ...BADGES, ...BADGES];

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
      `}} />
      <div className="flex w-fit min-w-full animate-marquee items-center whitespace-nowrap">
        {items.map((badge, i) => (
          <div key={i} className="flex items-center">
            <span className="mx-8 font-body text-[11px] font-bold uppercase tracking-[4px] text-charcoal">
              {badge}
            </span>
            <span className="text-charcoal opacity-30 text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
