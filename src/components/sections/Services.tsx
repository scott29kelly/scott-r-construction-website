import React from 'react';
import { SERVICES } from '@/lib/constants';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ServiceCard } from '@/components/ui/ServiceCard';

export function Services() {
  return (
    <section id="services" className="section-padding bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="max-w-3xl mb-16 md:mb-24">
          <ScrollReveal>
            <SectionLabel>What We Do</SectionLabel>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight mb-6">
              Comprehensive Home Construction Services
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-steel text-lg leading-relaxed max-w-2xl">
              From concept to completion, we handle every detail of your home improvement project with the uncompromising craftsmanship it deserves.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, index) => (
            <ScrollReveal 
              key={service.id} 
              delay={0.1 * (index % 3)} // Stagger based on column
              className="h-full"
            >
              <ServiceCard service={service} className="h-full" />
            </ScrollReveal>
          ))}
        </div>
        
      </div>
    </section>
  );
}
