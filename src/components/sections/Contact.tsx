'use client';

import React from 'react';
import { CONTACT_INFO } from '@/lib/constants';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('This is a demo — form submission will be connected to email/CRM when the site goes live.');
  };

  return (
    <section id="contact" className="section-padding bg-cream relative">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <ScrollReveal>
            <SectionLabel className="justify-center">Get In Touch</SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight">
              Ready to Start Your Project?
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Info */}
          <div className="order-2 lg:order-1">
            <ScrollReveal direction="right">
              <h3 className="font-display text-3xl text-charcoal mb-6">
                Let's Talk About Your Home
              </h3>
              <p className="text-steel text-lg leading-relaxed mb-12">
                Whether you're planning a major renovation or just exploring ideas, we're happy to talk it through. Reach out for a free, no-obligation consultation.
              </p>

              <div className="space-y-8">
                
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-charcoal text-accent flex items-center justify-center shrink-0 rounded-sm group-hover:bg-accent group-hover:text-warm-black transition-colors duration-300">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold tracking-widest uppercase text-steel mb-1">Phone</span>
                    <a href={`tel:${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`} className="text-charcoal font-medium text-lg hover:text-accent transition-colors">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-charcoal text-accent flex items-center justify-center shrink-0 rounded-sm group-hover:bg-accent group-hover:text-warm-black transition-colors duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold tracking-widest uppercase text-steel mb-1">Email</span>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-charcoal font-medium text-lg hover:text-accent transition-colors">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-charcoal text-accent flex items-center justify-center shrink-0 rounded-sm group-hover:bg-accent group-hover:text-warm-black transition-colors duration-300">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold tracking-widest uppercase text-steel mb-1">Location</span>
                    <p className="text-charcoal font-medium text-lg">
                      {CONTACT_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-charcoal text-accent flex items-center justify-center shrink-0 rounded-sm group-hover:bg-accent group-hover:text-warm-black transition-colors duration-300">
                    <Clock size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold tracking-widest uppercase text-steel mb-1">Hours</span>
                    {CONTACT_INFO.hours.map((hour, i) => (
                      <p key={i} className="text-charcoal font-medium text-lg">
                        {hour}
                      </p>
                    ))}
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Form */}
          <div className="order-1 lg:order-2">
            <ScrollReveal direction="left" delay={0.2}>
              <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 border border-sand/30 shadow-2xl shadow-charcoal/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="fname" className="text-xs font-semibold tracking-widest uppercase text-steel">First Name</label>
                    <input type="text" id="fname" required className="px-4 py-3 bg-cream/50 border border-sand/50 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-charcoal" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="lname" className="text-xs font-semibold tracking-widest uppercase text-steel">Last Name</label>
                    <input type="text" id="lname" required className="px-4 py-3 bg-cream/50 border border-sand/50 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-charcoal" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-semibold tracking-widest uppercase text-steel">Email</label>
                    <input type="email" id="email" required className="px-4 py-3 bg-cream/50 border border-sand/50 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-charcoal" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-xs font-semibold tracking-widest uppercase text-steel">Phone</label>
                    <input type="tel" id="phone" className="px-4 py-3 bg-cream/50 border border-sand/50 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-charcoal" />
                  </div>
                </div>

                <div className="flex flex-col gap-2 mb-6">
                  <label htmlFor="service" className="text-xs font-semibold tracking-widest uppercase text-steel">Project Type</label>
                  <select id="service" className="px-4 py-3 bg-cream/50 border border-sand/50 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-charcoal appearance-none">
                    <option value="">Select a service...</option>
                    <option>Home Remodeling</option>
                    <option>Addition</option>
                    <option>Deck</option>
                    <option>Patio / Hardscaping</option>
                    <option>Bilco Door Installation</option>
                    <option>Windows & Doors</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2 mb-8">
                  <label htmlFor="message" className="text-xs font-semibold tracking-widest uppercase text-steel">Tell Us About Your Project</label>
                  <textarea id="message" rows={5} placeholder="Describe your project, timeline, and any questions you have..." className="px-4 py-3 bg-cream/50 border border-sand/50 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-charcoal resize-y min-h-[120px]"></textarea>
                </div>

                <Button type="submit" className="w-full md:w-auto">
                  Send Request
                </Button>
              </form>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
