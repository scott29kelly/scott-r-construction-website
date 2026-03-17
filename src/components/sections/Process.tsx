import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { PROCESS_STEPS, SCHEDULING_SIGNALS } from '@/lib/constants';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';

export function Process() {
  return (
    <section id="process" className="section-padding bg-charcoal bg-noise relative border-t border-sand/10">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <ScrollReveal>
            <SectionLabel light className="justify-center">How It Works</SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-6">
              From First Call to Final Walkthrough
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-ash text-lg leading-relaxed">
              A straightforward process with clear communication at every step. No surprises, no runaround.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {PROCESS_STEPS.map((step, index) => (
            <ScrollReveal 
              key={step.id} 
              delay={0.1 * index}
              className="relative"
            >
              {/* Connector line for desktop */}
              {index < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-px bg-sand/10" />
              )}
              
              <div className="relative z-10 flex flex-col md:items-start lg:items-center text-left lg:text-center">
                <span className="font-display text-6xl md:text-7xl text-accent/10 leading-none mb-6 block font-bold">
                  {step.number}
                </span>
                <h4 className="font-display text-2xl text-cream mb-4">
                  {step.title}
                </h4>
                <p className="text-steel text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.15} className="mt-20 md:mt-24">
          <div className="grid gap-6 border border-sand/15 bg-white/5 p-8 backdrop-blur-sm md:grid-cols-[1.2fr_0.8fr] md:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-light">
                Need clarity before you commit?
              </p>
              <h3 className="mt-4 font-display text-3xl leading-tight text-cream md:text-4xl">
                Ask about budget, timing, or whether your project is a good fit before you spend weeks chasing quotes.
              </h3>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-ash">
                Scott can usually tell you quickly whether the scope, location, and timeline sound realistic, and what the best next step should be.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-accent-light">
                {SCHEDULING_SIGNALS.processMessage}
              </p>
            </div>

            <div className="flex flex-col justify-between gap-6 border-t border-sand/15 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
              <div className="space-y-3 text-sm leading-relaxed text-ash">
                <p>Best for homeowners wondering:</p>
                <p>&ldquo;Should I do this now or wait?&rdquo;</p>
                <p>&ldquo;Is my budget in the right ballpark?&rdquo;</p>
                <p>&ldquo;Do you work in my town?&rdquo;</p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
                <Button asChild>
                  <a href="#contact">
                    Request Project Guidance
                    <ArrowRight size={16} />
                  </a>
                </Button>
                <Button asChild variant="secondary">
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
