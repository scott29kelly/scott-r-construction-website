import React from 'react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { SERVICES } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Services() {
  return (
    <section id="services" className="relative section-padding">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sand/30 to-transparent" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div className="max-w-3xl">
            <ScrollReveal>
              <SectionLabel>What We Do</SectionLabel>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <h2 className="font-display text-4xl leading-[1.02] text-charcoal md:text-5xl lg:text-6xl">
                Built for the spaces homeowners actually live in every day.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.16}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel">
                From kitchens and baths to additions, decks, and Bilco door work, Scott takes
                on projects where accountability, communication, and clean execution still
                matter as much as the finished look.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2}>
            <div className="site-panel p-6 md:p-8">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-accent">
                Better estimate requests start here
              </p>
              <h3 className="mt-4 font-display text-3xl leading-tight text-charcoal">
                Pick the service closest to your goal so the next conversation starts with real
                context.
              </h3>
              <div className="mt-5 grid gap-4 text-sm leading-relaxed text-steel sm:grid-cols-2">
                <p>
                  That helps Scott respond with the right questions about scope, timing, and fit
                  instead of sending a generic follow-up.
                </p>
                <p>
                  If you are between categories, choose the closest match and use the message
                  field to explain the bigger picture.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ScrollReveal
              key={service.id}
              delay={0.08 * (index % 3)}
              className={cn(
                'h-full',
                index % 3 === 1 ? 'lg:translate-y-10' : '',
                index % 3 === 2 ? 'lg:translate-y-4' : ''
              )}
            >
              <ServiceCard service={service} index={index} className="h-full" />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
