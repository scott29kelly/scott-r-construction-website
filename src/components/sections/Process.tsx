'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { PROCESS_STEPS } from '@/content';
import { buildContactHref } from '@/lib/contact-link';

const viewportOnce = { once: true, amount: 0.3 } as const;

export function Process() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="process" className="bg-cream section-padding">
      <div className="mx-auto max-w-site px-[50px] max-lg:px-6">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={
            shouldReduceMotion
              ? undefined
              : { opacity: 0, y: 24, filter: 'blur(8px)' }
          }
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: 'spring', damping: 25, stiffness: 120 }}
        >
          <p className="section-label text-steel">How It Works</p>
          <h2 className="mx-auto mt-4 max-w-[800px] font-display text-section-heading text-charcoal max-lg:text-[40px] max-lg:leading-[44px] max-md:text-[30px] max-md:leading-[34px]">
            A Straightforward Process from First Call to Final Walkthrough
          </h2>
          <p className="mx-auto mt-6 max-w-[600px] text-body-lg text-concrete">
            No surprises, no runaround. Here&apos;s how every project moves
            forward — clearly, on schedule, and with Scott personally involved
            at every step.
          </p>
        </motion.div>

        {/* Vertical timeline */}
        <div className="relative mx-auto mt-20 max-w-[900px]">
          <div className="space-y-16 lg:space-y-24">
            {PROCESS_STEPS.map((step, index) => {
              const isEven = index % 2 === 0;
              const delay = index * 0.2;

              return (
                <div key={step.id} className="relative lg:grid lg:grid-cols-2 lg:gap-16">
                  {/* Connecting line segment between dots */}
                  {index < PROCESS_STEPS.length - 1 && (
                    shouldReduceMotion ? (
                      <div className="absolute left-1/2 top-14 hidden h-[calc(100%+theme(spacing.24)-3.5rem)] w-px -translate-x-1/2 bg-gradient-to-b from-sand/40 to-sand/20 lg:block" />
                    ) : (
                      <motion.div
                        className="absolute left-1/2 top-14 hidden h-[calc(100%+theme(spacing.24)-3.5rem)] w-px -translate-x-1/2 origin-top bg-gradient-to-b from-sand/40 to-sand/20 lg:block"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
                      />
                    )
                  )}

                  {/* Timeline dot — ring reveal with glow */}
                  {shouldReduceMotion ? (
                    <div className="absolute left-1/2 top-0 z-10 hidden h-14 w-14 -translate-x-1/2 items-center justify-center rounded-lg border-2 border-accent bg-warm-black shadow-lg shadow-accent/20 lg:flex">
                      <span className="font-display text-[22px] text-white">
                        {step.number}
                      </span>
                    </div>
                  ) : (
                    <motion.div
                      className="absolute left-1/2 top-0 z-10 hidden h-14 w-14 -translate-x-1/2 items-center justify-center rounded-lg border-2 border-accent bg-warm-black shadow-lg shadow-accent/20 lg:flex"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={viewportOnce}
                      transition={{
                        type: 'spring',
                        damping: 20,
                        stiffness: 200,
                        delay: delay + 0.1,
                      }}
                    >
                      <span className="font-display text-[22px] text-white">
                        {step.number}
                      </span>
                    </motion.div>
                  )}

                  {/* Content — blur-up reveal */}
                  <motion.div
                    className={
                      isEven
                        ? 'lg:col-start-1 lg:text-right lg:pr-12'
                        : 'lg:col-start-2 lg:text-left lg:pl-12'
                    }
                    initial={
                      shouldReduceMotion
                        ? undefined
                        : { opacity: 0, y: 24, filter: 'blur(8px)' }
                    }
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={viewportOnce}
                    transition={{
                      type: 'spring',
                      damping: 25,
                      stiffness: 120,
                      delay: delay + 0.15,
                    }}
                  >
                    {/* Mobile step number */}
                    <div className="mb-3 flex h-12 w-12 items-center justify-center border border-sand/30 bg-white lg:hidden">
                      <span className="font-display text-[20px] text-charcoal">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="font-display text-card-heading text-charcoal">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-body-sm text-concrete">
                      {step.description}
                    </p>
                  </motion.div>
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
