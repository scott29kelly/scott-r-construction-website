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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(183,126,73,0.08),transparent_22%),radial-gradient(circle_at_88%_12%,rgba(221,183,132,0.1),transparent_18%),linear-gradient(180deg,rgba(251,248,242,0.92),rgba(243,238,229,0.96))]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div className="max-w-3xl">
            <ScrollReveal>
              <SectionLabel>How It Works</SectionLabel>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2 className="font-display text-4xl leading-[0.96] text-charcoal md:text-5xl lg:text-[4.1rem]">
                A straightforward path that still feels thoughtful and premium.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.16}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel">
                The process is designed to reduce uncertainty early, keep communication direct,
                and make sure timing and fit are discussed before the work ever starts.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2}>
            <div className="site-panel-dark bg-noise p-7 md:p-8">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-warm-sand">
                Scheduling note
              </p>
              <h3 className="mt-4 font-display text-3xl leading-tight text-cream">
                Reach out early if your timeline matters.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ash">
                {SCHEDULING_SIGNALS.processMessage}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="site-chip-dark">Fit check first</span>
                <span className="site-chip-dark">Realistic timing</span>
                <span className="site-chip-dark">Direct owner reply</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, index) => (
            <ScrollReveal key={step.id} delay={0.08 * index} className="relative h-full">
              <div className="site-panel flex h-full flex-col p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                      Step {step.number}
                    </p>
                    <h3 className="mt-3 font-display text-3xl leading-tight text-charcoal">
                      {step.title}
                    </h3>
                  </div>
                  <span className="font-display text-5xl leading-none text-accent/20">
                    {step.number}
                  </span>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-steel">{step.description}</p>
                <div className="mt-6 border-t border-sand/20 pt-5">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent-dark">
                    What this reduces
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal">
                    Less guessing, fewer handoffs, and a clearer sense of when to move forward.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.12}>
          <div className="site-panel mt-12 grid gap-8 p-8 text-charcoal md:grid-cols-[1.12fr_0.88fr] md:p-10">
            <div>
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-accent">
                Before you commit
              </p>
              <h3 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-charcoal">
                Ask about fit, budget, and timing before you spend weeks chasing quotes.
              </h3>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-steel">
                Scott can usually tell you quickly whether the scope, location, and schedule
                sound realistic, and whether a phone call, site visit, or later follow-up is
                the better move.
              </p>
            </div>

            <div className="flex flex-col justify-between gap-6 border-t border-sand/25 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
              <div className="space-y-3 text-sm leading-relaxed text-steel">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent-dark">
                  Best for homeowners asking:
                </p>
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
