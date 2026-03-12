import React from 'react';
import { PROCESS_STEPS } from '@/lib/constants';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

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
        
      </div>
    </section>
  );
}
