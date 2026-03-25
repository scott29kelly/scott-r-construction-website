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
      <div className="mx-auto max-w-[800px] px-[50px] max-lg:px-6">
        <h2 className="font-display text-section-heading text-navy max-lg:text-[40px] max-lg:leading-[44px] max-md:text-[30px] max-md:leading-[34px]">
          Before &amp; After
        </h2>

        <div className="mt-12 space-y-12">
          {pairs.map((pair) => (
            <div key={pair.label}>
              <h3 className="mb-4 font-display text-card-heading text-navy">
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
