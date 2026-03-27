'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { AUTHORITY_SIGNALS, PROOF_STATS } from '@/content';
import { buildContactHref } from '@/lib/contact-link';
import { AnimatedValue } from '@/components/ui/AnimatedValue';

export function Proof() {
  return (
    <section className="bg-warm-black section-padding text-white">
      <div className="mx-auto max-w-site section-padding-x">
        {/* Header */}
        <div className="text-center">
          <p className="section-label text-white/50">Why Choose Us</p>
          <h2 className="mx-auto mt-4 max-w-content-xl font-display text-section-heading">
            The Proof Behind the Promise
          </h2>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {PROOF_STATS.map((stat) => (
            <div
              key={stat.id}
              className="border border-white/15 p-card-pad text-center"
            >
              <p className="font-display text-[56px] leading-none tracking-tight">
                <AnimatedValue value={stat.value} />
              </p>
              <p className="section-label mt-4 text-white/60">{stat.label}</p>
              <p className="mt-4 text-body-sm text-white/70">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Authority signals */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {AUTHORITY_SIGNALS.map((signal) => (
            <div
              key={signal.id}
              className="border border-white/10 bg-white/5 p-6"
            >
              <p className="text-label font-body text-[12px] uppercase tracking-label text-white/50">
                {signal.detail}
              </p>
              <h3 className="mt-3 font-display text-[20px] leading-[26px]">
                {signal.title}
              </h3>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href={buildContactHref({ leadSource: 'proof-cta' })}
            className="btn-outline btn-outline-light"
          >
            Get a Free Estimate
            <ArrowRight className="btn-arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
