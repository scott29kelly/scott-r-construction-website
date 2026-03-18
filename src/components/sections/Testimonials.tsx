import React from 'react';
import { TESTIMONIALS, WHY_HOMEOWNERS_CHOOSE_SCOTT } from '@/lib/constants';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { TestimonialCard } from '@/components/ui/TestimonialCard';

export function Testimonials() {
  const recommendationCountLabel = `${TESTIMONIALS.length} public recommendations shown`;

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-24">
          <ScrollReveal>
            <SectionLabel className="justify-center">What Clients Say</SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-4xl leading-tight text-charcoal md:text-5xl lg:text-6xl">
              Trusted by Homeowners Across Bucks County
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-steel">
              These recommendations line up with the same questions serious homeowners ask before reaching out: who will really be involved, how the work will be handled, and whether the result will be worth the investment.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.05}>
          <div className="mb-12 flex flex-col gap-4 border border-sand/30 bg-cream px-6 py-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Review credibility
              </p>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-steel">
                These quotes are presented as public Facebook recommendations and are paired
                with the homeowner concern they help answer, so the proof is easier to scan
                and more useful before an estimate request.
              </p>
            </div>
            <div className="shrink-0 border border-charcoal/10 bg-white px-4 py-3 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-steel">
                At a glance
              </p>
              <p className="mt-1 text-sm font-semibold text-charcoal">{recommendationCountLabel}</p>
            </div>
          </div>
        </ScrollReveal>

        <div className="mb-12 grid gap-6 lg:grid-cols-3">
          {WHY_HOMEOWNERS_CHOOSE_SCOTT.map((item, index) => (
            <ScrollReveal key={item.id} delay={0.08 * index} className="h-full">
              <div className="flex h-full flex-col border border-sand/30 bg-cream p-7 shadow-sm shadow-charcoal/5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  Why homeowners choose Scott
                </p>
                <h3 className="mt-4 text-xl font-semibold text-charcoal">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-charcoal">{item.scottApproach}</p>
                <p className="mt-4 border-t border-sand/30 pt-4 text-sm leading-relaxed text-steel">
                  {item.homeownerConcern}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {TESTIMONIALS.map((testimonial, index) => (
            <ScrollReveal
              key={testimonial.id}
              delay={0.1 * index}
              className="h-full"
            >
              <TestimonialCard testimonial={testimonial} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
