import React from 'react';
import { FAQ_ITEMS } from '@/lib/constants';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function Faq() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="max-w-2xl">
            <ScrollReveal>
              <SectionLabel>Common Questions</SectionLabel>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-4xl leading-tight text-charcoal md:text-5xl">
                A few answers homeowners usually want before reaching out
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg leading-relaxed text-steel">
                This is meant to make the first conversation easier. If your project is still early, that is completely fine.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid gap-4">
            {FAQ_ITEMS.map((item, index) => (
              <ScrollReveal key={item.id} delay={0.08 * index}>
                <div className="border border-sand/30 bg-cream p-6 shadow-sm shadow-charcoal/5">
                  <h3 className="text-lg font-semibold text-charcoal">{item.question}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-steel">{item.answer}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
