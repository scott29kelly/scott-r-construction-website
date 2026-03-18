import React from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { PORTFOLIO, SERVICE_AREAS } from '@/lib/constants';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { buildContactHref } from '@/lib/contact-link';

const featuredProjects = PORTFOLIO.slice(0, 4);

export function LocalFit() {
  return (
    <section className="relative overflow-hidden bg-white section-padding">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sand/30 to-transparent" />

      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <ScrollReveal>
              <SectionLabel>Nearby Projects</SectionLabel>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="max-w-3xl font-display text-4xl leading-tight text-charcoal md:text-5xl lg:text-6xl">
                See the kinds of projects homeowners near you are already trusting Scott to
                handle.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel">
                If you are planning a kitchen, bath, trim upgrade, or larger remodel in or
                around Langhorne, this is the kind of work and service-area fit Scott is known
                for.
              </p>
            </ScrollReveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {featuredProjects.map((project, index) => (
                <ScrollReveal key={project.id} delay={0.08 * index} className="h-full">
                  <div className="flex h-full flex-col justify-between border border-sand/30 bg-cream p-6 shadow-sm shadow-charcoal/5">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                        <MapPin size={14} />
                        {project.location}
                      </div>
                      <h3 className="mt-4 text-2xl font-display text-charcoal">{project.title}</h3>
                      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-charcoal">
                        Typical homeowner goal
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-steel">
                        {project.homeownerGoal}
                      </p>
                    </div>

                    <div className="mt-5 border-t border-sand/30 pt-4">
                      <p className="text-sm font-medium leading-relaxed text-charcoal">
                        {project.outcome}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal delay={0.18} direction="left">
            <div className="border border-charcoal bg-charcoal p-8 text-cream shadow-2xl shadow-charcoal/10 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-light">
                Service area clarity
              </p>
              <h3 className="mt-4 font-display text-3xl leading-tight">
                Working with homeowners across lower Bucks County and nearby South Jersey
                communities.
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-ash">
                A quick location check helps Scott tell you early whether the project is a fit
                and how soon he can realistically schedule a conversation or site visit.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {SERVICE_AREAS.map((area, index) => (
                  <span
                    key={`${area}-${index}`}
                    className="border border-sand/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-sand/90"
                  >
                    {area}
                  </span>
                ))}
              </div>

              <div className="mt-8 border-t border-sand/15 pt-8">
                <p className="text-sm leading-relaxed text-ash">
                  Not sure if your town is in range? Reach out anyway. A quick note with your
                  location and scope is enough to get a clear answer.
                </p>
                <div className="mt-6">
                  <Button asChild variant="secondary">
                    <Link href={buildContactHref({ leadSource: 'local-fit-check' })}>
                      Check Project Fit
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
