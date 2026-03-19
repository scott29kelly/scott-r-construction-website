import React from 'react';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { PROCESS_STEPS, SCHEDULING_SIGNALS } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { buildContactHref } from '@/lib/contact-link';

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden section-padding text-charcoal">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(181,123,67,0.08),transparent_22%),linear-gradient(180deg,rgba(249,245,238,0.86),rgba(243,238,229,0.92))]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <div className="max-w-3xl">
            <ScrollReveal>
              <SectionLabel>How It Works</SectionLabel>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2 className="font-display text-4xl leading-[1.02] text-charcoal md:text-5xl lg:text-6xl">
                A straightforward path from first call to final walkthrough.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.16}>
              <p className="mt-6 text-lg leading-relaxed text-steel">
                The process is meant to feel clear, human, and accountable. You always know
                who you are talking to, what the next step is, and how the project is moving.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2}>
            <div className="site-panel p-7 md:p-8">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-accent">
                Scheduling note
              </p>
              <h3 className="mt-4 font-display text-3xl leading-tight text-charcoal">
                Reach out early if timing matters.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-steel">
                {SCHEDULING_SIGNALS.processMessage}
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, index) => (
            <ScrollReveal key={step.id} delay={0.08 * index} className="relative h-full">
              <div className="site-panel flex h-full flex-col p-7">
                <p className="font-display text-6xl leading-none text-accent/22">{step.number}</p>
                <h3 className="mt-6 font-display text-3xl leading-tight text-charcoal">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-steel">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.12}>
          <div className="site-panel mt-12 grid gap-8 p-8 text-charcoal md:grid-cols-[1.15fr_0.85fr] md:p-10">
            <div>
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-accent">
                Need clarity before you commit?
              </p>
              <h3 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-charcoal">
                Ask about budget, timing, or whether your project is a good fit before you
                spend weeks chasing quotes.
              </h3>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-steel">
                Scott can usually tell you quickly whether the scope, location, and timeline
                sound realistic, and what the best next step should be.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-accent-dark">
                {SCHEDULING_SIGNALS.processMessage}
              </p>
            </div>

            <div className="flex flex-col justify-between gap-6 border-t border-sand/25 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
              <div className="space-y-3 text-sm leading-relaxed text-steel">
                <p>Best for homeowners wondering:</p>
                <p>&ldquo;Should I do this now or wait?&rdquo;</p>
                <p>&ldquo;Is my budget in the right ballpark?&rdquo;</p>
                <p>&ldquo;Do you work in my town?&rdquo;</p>
              </div>

              <div className="flex flex-col gap-3">
                <Button asChild>
                  <Link href={buildContactHref({ leadSource: 'process-guidance' })}>
                    Request Project Guidance
                    <ArrowRight size={16} />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <a href="tel:2155191795">
                    <Phone size={16} />
                    Call Scott
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
