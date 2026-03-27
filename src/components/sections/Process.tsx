'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { PROCESS_STEPS } from '@/content';
import { buildContactHref } from '@/lib/contact-link';

export function Process() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="process" className="bg-sand section-padding relative z-10">
      <div className="mx-auto max-w-site section-padding-x">
        {/* Header */}
        <motion.div
          className="text-center mb-24"
          initial={
            shouldReduceMotion
              ? undefined
              : { opacity: 0, y: 24 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: 'spring', damping: 25, stiffness: 120 }}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-accent" />
            <p className="font-body text-label text-accent uppercase tracking-widest">
              How It Works
            </p>
            <div className="h-px w-12 bg-accent" />
          </div>
          <h2 className="mx-auto mt-4 max-w-content-xl font-display text-section-heading text-charcoal leading-tight">
            A Straightforward Process from First Call to Final Walkthrough
          </h2>
        </motion.div>

        {/* Sticky Stacking Cards */}
        <div className="relative mx-auto mt-20 max-w-content-2xl flex flex-col gap-6 md:gap-12 pb-32">
          {PROCESS_STEPS.map((step, index) => {
            return (
              <div 
                key={step.id} 
                className="sticky flex flex-col md:flex-row bg-cream border border-accent/20 rounded-2xl p-8 md:p-16 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-transform duration-500 ease-out hover:scale-[1.01]"
                style={{ 
                  top: `calc(120px + ${index * 30}px)`,
                  zIndex: index,
                }}
              >
                <div className="md:w-1/3 border-b md:border-b-0 md:border-r border-accent/20 pb-8 md:pb-0 md:pr-12 flex flex-col justify-between">
                  <span className="font-display text-[80px] leading-none text-accent/30 block mb-4">
                    {step.number}
                  </span>
                  <h3 className="font-display text-card-heading text-charcoal">
                    {step.title}
                  </h3>
                </div>
                
                <div className="md:w-2/3 pt-8 md:pt-0 md:pl-12 flex items-center">
                  <p className="text-body-lg text-concrete">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center relative z-20">
          <Link
            href={buildContactHref({ leadSource: 'process-cta' })}
            className="cursor-interact group relative inline-flex items-center gap-6 overflow-hidden rounded-full bg-charcoal px-8 py-5 text-sm font-medium uppercase tracking-[2px] text-white transition-transform hover:scale-105"
          >
            <span className="relative z-10 transition-colors">Start With a Free Consultation</span>
            <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-white/20">
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
            <div className="absolute inset-0 z-0 h-full w-full translate-y-full bg-accent transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-y-0" />
          </Link>
        </div>
      </div>
    </section>
  );
}
