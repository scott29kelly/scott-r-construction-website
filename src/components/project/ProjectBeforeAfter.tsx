'use client';

import React from 'react';
import type { BeforeAfterPair } from '@/types';
import { BeforeAfterSlider } from './BeforeAfterSlider';

interface ProjectBeforeAfterProps {
  pairs: BeforeAfterPair[];
}

export function ProjectBeforeAfter({ pairs }: ProjectBeforeAfterProps) {
  if (pairs.length === 0) return null;

  return (
    <section className="bg-cream section-padding">
      <div className="mx-auto max-w-content-xl section-padding-x">
        <h2 className="font-display text-section-heading text-charcoal">
          Before &amp; After
        </h2>

        <div className="mt-12 space-y-12">
          {pairs.map((pair) => (
            <div key={pair.label}>
              <h3 className="mb-4 font-display text-card-heading text-charcoal">
                {pair.label}
              </h3>
              <BeforeAfterSlider before={pair.before} after={pair.after} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
