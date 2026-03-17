import React from 'react';
import { ArrowRight, BadgeCheck, MapPinned, MessageSquareQuote, type LucideIcon } from 'lucide-react';
import { HOMEOWNER_REASSURANCE_POINTS, PORTFOLIO, PROOF_STATS } from '@/lib/constants';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';

const reassuranceIcons: Record<string, LucideIcon> = {
  'owner-led': BadgeCheck,
  'service-area': MapPinned,
  'testimonial-framing': MessageSquareQuote,
};

const featuredCaseStudies = PORTFOLIO.slice(0, 3);

export function Proof() {
  return (
    <section className="relative overflow-hidden bg-cream section-padding">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(176,141,87,0.08),transparent_42%)]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
          <ScrollReveal>
            <SectionLabel className="justify-center">Homeowner Confidence</SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-4xl leading-tight text-charcoal md:text-5xl lg:text-6xl">
              Clear proof for homeowners who want the job done right.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-steel">
              Before you invite a contractor into your home, you want to know who will be
              on-site, how communication works, and whether the project fits your area,
              timeline, and goals.
            </p>
          </ScrollReveal>
        </div>

        <div className="mb-10 grid gap-6 lg:grid-cols-3">
          {PROOF_STATS.map((stat, index) => (
            <ScrollReveal key={stat.id} delay={0.08 * index} className="h-full">
              <div className="flex h-full flex-col border border-sand/30 bg-white p-8 shadow-sm shadow-charcoal/5">
                <p className="font-display text-4xl text-accent md:text-5xl">{stat.value}</p>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-charcoal">
                  {stat.label}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-steel">{stat.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-6">
            {HOMEOWNER_REASSURANCE_POINTS.map((point, index) => {
              const Icon = reassuranceIcons[point.id];

              return (
                <ScrollReveal key={point.id} delay={0.1 + index * 0.08}>
                  <div className="flex gap-5 border border-sand/30 bg-white p-6 shadow-sm shadow-charcoal/5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-charcoal">{point.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-steel">{point.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal delay={0.18} direction="left" className="h-full">
            <div className="flex h-full flex-col justify-between border border-charcoal bg-charcoal p-8 text-cream shadow-2xl shadow-charcoal/10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-light">
                  What homeowners can expect
                </p>
                <h3 className="mt-4 font-display text-3xl leading-tight">
                  Straight answers, realistic timing, and work led by the person whose name
                  is on the company.
                </h3>
              </div>

              <div className="mt-8 space-y-4 text-sm leading-relaxed text-ash">
                <p>
                  Share your town, project type, target timing, and budget range up front and
                  Scott can quickly confirm fit, availability, and the best next step.
                </p>
                <p>
                  That means fewer back-and-forth emails, a more useful estimate conversation,
                  and a better fit for both sides.
                </p>
              </div>

              <div className="mt-8">
                <Button asChild variant="secondary">
                  <a href="#contact">
                    Check Project Fit
                    <ArrowRight size={16} />
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-16 md:mt-20">
          <ScrollReveal>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  Case-study snapshots
                </p>
                <h3 className="mt-3 font-display text-3xl leading-tight text-charcoal md:text-4xl">
                  Real projects, real homeowner goals, and the kind of results people call
                  about.
                </h3>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-steel">
                These examples add context beyond photos by showing what the homeowners were
                trying to improve and how the finished spaces support daily life.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {featuredCaseStudies.map((project, index) => (
              <ScrollReveal key={project.id} delay={0.08 * index} className="h-full">
                <article className="flex h-full flex-col border border-sand/30 bg-white p-7 shadow-sm shadow-charcoal/5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                      {project.location}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-steel">
                      {project.scope}
                    </span>
                  </div>

                  <h4 className="mt-4 font-display text-2xl text-charcoal">{project.title}</h4>

                  <div className="mt-6 space-y-4 text-sm leading-relaxed text-steel">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-charcoal">
                        Homeowner goal
                      </p>
                      <p className="mt-2">{project.homeownerGoal}</p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-charcoal">
                        Result
                      </p>
                      <p className="mt-2 text-charcoal">{project.outcome}</p>
                    </div>

                    <p>{project.projectStory}</p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2 border-t border-sand/30 pt-5">
                    {project.projectHighlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="border border-sand/30 bg-cream px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-charcoal"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
