import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  BriefcaseBusiness,
  Home,
  MapPinned,
  Ruler,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { SERVICE_DETAILS } from '@/content';
import { buildContactHref } from '@/lib/contact-link';

const serviceIcons = [Home, BriefcaseBusiness, MapPinned, ShieldCheck, Ruler, Wrench];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden section-padding">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(183,126,73,0.08),transparent_24%),linear-gradient(180deg,rgba(249,245,238,0.88),rgba(243,238,229,0.94))]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div className="max-w-3xl">
            <ScrollReveal>
              <SectionLabel>Services</SectionLabel>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <h2 className="font-display text-4xl leading-[0.96] text-charcoal md:text-5xl lg:text-[4.1rem]">
                Service narratives that make the next conversation feel easier.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.16}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel">
                Each service is presented as a real project conversation, not just a card. That
                gives homeowners a better sense of scope, fit, and how Scott approaches the work
                before the estimate process starts.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2}>
            <div className="site-panel p-6 md:p-8">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-accent">
                Better estimate requests start here
              </p>
              <h3 className="mt-4 font-display text-3xl leading-tight text-charcoal">
                Choose the closest service, then use the details to tell the fuller story.
              </h3>
              <div className="mt-5 grid gap-4 text-sm leading-relaxed text-steel sm:grid-cols-2">
                <p>
                  Scott can respond with better questions about timing, scope, and fit when the
                  project lands in the right category from the start.
                </p>
                <p>
                  If your project sits between services, pick the nearest match and describe the
                  bigger goal in the message field.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-12 grid gap-6">
          {SERVICE_DETAILS.map((service, index) => {
            const Icon = serviceIcons[index] ?? Wrench;

            return (
              <ScrollReveal key={service.id} delay={0.05 * index}>
                <article className="site-panel overflow-hidden p-0">
                  <div className="grid gap-0 lg:grid-cols-[0.72fr_1.28fr]">
                    <div className="border-b border-sand/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(243,238,229,0.9))] p-6 lg:border-b-0 lg:border-r lg:p-8">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-accent">
                            Service {String(index + 1).padStart(2, '0')}
                          </p>
                          <h3 className="mt-3 font-display text-3xl leading-tight text-charcoal">
                            {service.title}
                          </h3>
                        </div>
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-accent/20 bg-accent/10 text-accent">
                          <Icon size={22} strokeWidth={1.7} />
                        </div>
                      </div>

                      <p className="mt-5 text-base leading-relaxed text-steel">
                        {service.description}
                      </p>

                      <div className="mt-6 space-y-3">
                        <div className="border border-sand/30 bg-white/72 px-4 py-4">
                          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent-dark">
                            Best fit
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-charcoal">
                            {service.bestFit}
                          </p>
                        </div>
                        <div className="border border-sand/30 bg-white/72 px-4 py-4">
                          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent-dark">
                            Helpful for the first call
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-steel">
                            {service.qualificationPrompt}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 lg:p-8">
                      <div className="grid gap-4 md:grid-cols-[1fr_0.82fr]">
                        <div>
                          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-accent">
                            Narrative preview
                          </p>
                          <h4 className="mt-3 max-w-2xl font-display text-2xl leading-tight text-charcoal">
                            {service.narrativePreview}
                          </h4>
                          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-steel">
                            The story stays focused on scope, fit, and the way the space needs to
                            work for the homeowner, which gives us stronger content now without
                            launching thin service-detail routes.
                          </p>
                        </div>

                        <div className="site-panel-dark bg-noise p-5 text-cream">
                          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-warm-sand">
                            What Scott is listening for
                          </p>
                          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ash">
                            {service.listeningPoints.map((item) => (
                              <li key={item} className="flex items-start gap-3">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-warm-sand" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-sand/20 pt-5">
                        <div className="flex flex-wrap gap-3">
                          <span className="site-chip">{service.contactProjectType}</span>
                          <span className="site-chip">Owner-led estimate</span>
                        </div>
                        <Button asChild variant="secondary">
                          <Link
                            href={buildContactHref({
                              leadSource: `services-${service.id}`,
                              projectType: service.contactProjectType,
                            })}
                          >
                            {service.ctaLabel}
                            <ArrowRight size={16} />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
