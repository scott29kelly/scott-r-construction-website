import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { PROCESS_STEPS } from '@/content';
import { buildContactHref } from '@/lib/contact-link';

export function Process() {
  return (
    <section id="process" className="bg-cream section-padding">
      <div className="mx-auto max-w-site px-[50px] max-lg:px-6">
        {/* Header */}
        <div className="text-center">
          <p className="section-label text-navy/60">How It Works</p>
          <h2 className="mx-auto mt-4 max-w-[800px] font-display text-section-heading text-navy max-lg:text-[40px] max-lg:leading-[44px] max-md:text-[30px] max-md:leading-[34px]">
            A Straightforward Process from First Call to Final Walkthrough
          </h2>
          <p className="mx-auto mt-6 max-w-[600px] text-body-lg text-navy/70">
            No surprises, no runaround. Here&apos;s how every project moves
            forward — clearly, on schedule, and with Scott personally involved
            at every step.
          </p>
        </div>

        {/* Vertical timeline */}
        <div className="relative mx-auto mt-20 max-w-[900px]">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border lg:block" />

          <div className="space-y-16 lg:space-y-24">
            {PROCESS_STEPS.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.id}
                  className="relative lg:grid lg:grid-cols-2 lg:gap-16"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 top-0 z-10 hidden h-14 w-14 -translate-x-1/2 items-center justify-center border border-border bg-cream lg:flex">
                    <span className="font-display text-[22px] text-navy">
                      {step.number}
                    </span>
                  </div>

                  {/* Content — alternates sides */}
                  <div
                    className={
                      isEven
                        ? 'lg:col-start-1 lg:text-right lg:pr-12'
                        : 'lg:col-start-2 lg:text-left lg:pl-12'
                    }
                  >
                    {/* Mobile step number */}
                    <div className="mb-3 flex h-12 w-12 items-center justify-center border border-border bg-white lg:hidden">
                      <span className="font-display text-[20px] text-navy">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="font-display text-card-heading text-navy">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-body-sm text-navy/70">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Link
            href={buildContactHref({ leadSource: 'process-cta' })}
            className="btn-primary btn-primary-dark"
          >
            Start With a Free Consultation
            <ArrowRight className="btn-arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
