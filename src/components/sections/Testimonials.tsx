import React from 'react';
import { REVIEW_THEMES, SITE_INFO, TESTIMONIALS, WHY_HOMEOWNERS_CHOOSE_SCOTT } from '@/content';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { TestimonialCard } from '@/components/ui/TestimonialCard';

export function Testimonials() {
  const recommendationCountLabel = `${TESTIMONIALS.length} public recommendations shown`;
  const featuredTestimonial = TESTIMONIALS[0];

  return (
    <section id="testimonials" className="relative section-padding">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sand/30 to-transparent" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-[0.84fr_1.16fr]">
          <div className="space-y-6">
            <div className="max-w-2xl">
              <ScrollReveal>
                <SectionLabel>What Clients Say</SectionLabel>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <h2 className="font-display text-4xl leading-[1.02] text-charcoal md:text-5xl lg:text-6xl">
                  Trust built the old-fashioned way: with work people remember.
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.16}>
                <p className="mt-6 text-lg leading-relaxed text-steel">
                  These recommendations line up with the same questions serious homeowners ask
                  before reaching out: who will be involved, how the work will be handled, and
                  whether the result will be worth the investment.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.2}>
              <div className="site-panel-dark bg-noise p-7 md:p-8">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-accent-light">
                  Featured recommendation
                </p>
                <blockquote className="mt-5 font-display text-3xl leading-tight text-cream md:text-4xl">
                  &ldquo;{featuredTestimonial.quote}&rdquo;
                </blockquote>
                <p className="mt-6 text-sm leading-relaxed text-ash">
                  This quote directly answers one of the biggest homeowner concerns before a
                  remodel starts: whether the contractor will respect the home, the work, and
                  the people living there.
                </p>
                <div className="mt-8 border-t border-white/10 pt-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cream">
                    {featuredTestimonial.author}
                  </p>
                  <p className="mt-1 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-warm-sand">
                    {featuredTestimonial.sourceLabel}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.24}>
              <div className="site-panel p-6">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-accent">
                  Review credibility
                </p>
                <p className="mt-4 text-sm leading-relaxed text-steel">
                  These quotes are presented as public Facebook recommendations and paired with
                  the homeowner concern they help answer, so the proof is easier to scan before
                  an estimate request.
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="border border-sand/25 bg-white/55 px-4 py-4">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                      At a glance
                    </p>
                    <p className="mt-2 text-sm font-semibold text-charcoal">
                      {recommendationCountLabel}
                    </p>
                  </div>
                  <div className="border border-sand/25 bg-white/55 px-4 py-4">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                      Established
                    </p>
                    <p className="mt-2 text-sm font-semibold text-charcoal">
                      Serving Bucks County since {SITE_INFO.established}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
              {REVIEW_THEMES.map((theme, index) => (
                <ScrollReveal key={theme.id} delay={0.08 * index}>
                  <div className="site-panel h-full p-5">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                      What the reviews support
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-charcoal">{theme.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-steel">{theme.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {TESTIMONIALS.map((testimonial, index) => (
                <ScrollReveal key={testimonial.id} delay={0.08 * index} className="h-full">
                  <TestimonialCard testimonial={testimonial} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {WHY_HOMEOWNERS_CHOOSE_SCOTT.map((item, index) => (
            <ScrollReveal key={item.id} delay={0.08 * index} className="h-full">
              <div className="site-panel flex h-full flex-col p-7">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                  Why homeowners choose Scott
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-charcoal">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-charcoal">{item.scottApproach}</p>
                <p className="mt-4 border-t border-sand/25 pt-4 text-sm leading-relaxed text-steel">
                  {item.homeownerConcern}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
