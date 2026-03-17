import React from 'react';
import { TESTIMONIALS } from '@/lib/constants';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { TestimonialCard } from '@/components/ui/TestimonialCard';

export function Testimonials() {
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
              These recommendations reflect the same themes homeowners ask about most: craftsmanship, reliability, and the confidence that Scott is personally invested in the outcome.
            </p>
          </ScrollReveal>
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
