import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  ClipboardCheck,
  History,
  MapPinned,
  MessageSquareQuote,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import {
  AUTHORITY_SIGNALS,
  FEATURED_PROJECT_STORY,
  HOMEOWNER_REASSURANCE_POINTS,
  PORTFOLIO,
  PROOF_STATS,
} from '@/lib/constants';
import { buildContactHref } from '@/lib/contact-link';

const reassuranceIcons: Record<string, LucideIcon> = {
  'owner-led': BadgeCheck,
  'service-area': MapPinned,
  'testimonial-framing': MessageSquareQuote,
};

const authorityIcons: Record<string, LucideIcon> = {
  established: History,
  'pa-license': ClipboardCheck,
  insurance: ShieldCheck,
  bbb: BadgeCheck,
  'bilco-certified': BadgeCheck,
};

const featuredCaseStudies = PORTFOLIO.slice(0, 3);

export function Proof() {
  return (
    <section className="relative overflow-hidden section-padding">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(181,123,67,0.08),transparent_36%)]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div className="max-w-3xl">
            <ScrollReveal>
              <SectionLabel>Homeowner Confidence</SectionLabel>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <h2 className="font-display text-4xl leading-[1.02] text-charcoal md:text-5xl lg:text-6xl">
                Proof for homeowners who want the job handled with care.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.16}>
              <p className="mt-6 text-lg leading-relaxed text-steel">
                Before you invite a contractor into your home, you want to know who will be
                involved, how the project will be communicated, and whether the scope is a real
                fit for your town, timeline, and priorities.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2}>
            <div className="site-panel-dark bg-noise p-7 md:p-8">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-accent-light">
                What homeowners can expect
              </p>
              <h3 className="mt-4 max-w-2xl font-display text-3xl leading-tight text-cream md:text-4xl">
                Straight answers, realistic timing, and work led by the person whose name is on
                the company.
              </h3>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="border border-white/10 bg-white/5 px-5 py-4">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-warm-sand">
                    Fit first
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-cream/90">
                    Share your town, project type, and target timing up front and Scott can
                    quickly tell you what makes sense next.
                  </p>
                </div>
                <div className="border border-white/10 bg-white/5 px-5 py-4">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-warm-sand">
                    No handoff
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-cream/90">
                    The person estimating the work stays connected through the build and final
                    walkthrough.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild variant="secondary">
                  <Link href={buildContactHref({ leadSource: 'proof-fit-check' })}>
                    Check Project Fit
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PROOF_STATS.map((stat, index) => (
            <ScrollReveal key={stat.id} delay={0.08 * index}>
              <div className="site-panel h-full p-7 md:p-8">
                <p className="font-display text-5xl leading-none text-accent">{stat.value}</p>
                <p className="mt-4 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-charcoal">
                  {stat.label}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-steel">{stat.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="grid gap-4">
            {HOMEOWNER_REASSURANCE_POINTS.map((point, index) => {
              const Icon = reassuranceIcons[point.id];

              return (
                <ScrollReveal key={point.id} delay={0.08 * index}>
                  <div className="site-panel flex gap-5 p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-accent/20 bg-accent/10 text-accent">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-charcoal">{point.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-steel">{point.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal delay={0.18}>
            <div className="site-panel p-6 md:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-accent">
                    Credentials homeowners can verify
                  </p>
                  <h3 className="mt-4 font-display text-3xl leading-tight text-charcoal md:text-4xl">
                    Authority signals that go beyond marketing language.
                  </h3>
                </div>
                <p className="max-w-md text-sm leading-relaxed text-steel">
                  When homeowners compare contractors, they are usually looking for signs that
                  the business is real, accountable, and equipped to carry the project through.
                </p>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {AUTHORITY_SIGNALS.map((signal) => {
                  const Icon = authorityIcons[signal.id];

                  return (
                    <div key={signal.id} className="border border-sand/30 bg-white/55 px-5 py-5">
                      <div className="flex h-11 w-11 items-center justify-center border border-accent/20 bg-accent/10 text-accent">
                        <Icon size={18} />
                      </div>
                      <p className="mt-5 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                        {signal.detail}
                      </p>
                      <h4 className="mt-2 text-lg font-semibold text-charcoal">{signal.title}</h4>
                      <p className="mt-3 text-sm leading-relaxed text-steel">
                        {signal.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-16 md:mt-20">
          <div className="site-panel grid gap-10 p-6 md:p-8 lg:grid-cols-[1fr_0.95fr]">
            <ScrollReveal>
              <div className="flex h-full flex-col">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-accent">
                  {FEATURED_PROJECT_STORY.eyebrow}
                </p>
                <h3 className="mt-4 font-display text-4xl leading-tight text-charcoal">
                  {FEATURED_PROJECT_STORY.title}
                </h3>
                <p className="mt-3 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-steel">
                  {FEATURED_PROJECT_STORY.location}
                </p>
                <p className="mt-6 text-base leading-relaxed text-steel">
                  {FEATURED_PROJECT_STORY.summary}
                </p>

                <div className="mt-8 grid gap-5">
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                      What the homeowner needed
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-steel">
                      {FEATURED_PROJECT_STORY.homeownerNeed}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                      How the project was handled
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-steel">
                      {FEATURED_PROJECT_STORY.scottApproach}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                      Result
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal">
                      {FEATURED_PROJECT_STORY.result}
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {FEATURED_PROJECT_STORY.outcomePoints.map((point) => (
                    <div key={point} className="border border-sand/30 bg-white/55 px-4 py-4 text-sm leading-relaxed text-steel">
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-2">
              {FEATURED_PROJECT_STORY.images.map((image, index) => (
                <ScrollReveal
                  key={image.src}
                  delay={0.08 * index}
                  className={index === 0 ? 'sm:col-span-3 lg:col-span-2' : ''}
                >
                  <figure className="overflow-hidden border border-sand/30 bg-white/55 p-3">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes={
                          index === 0
                            ? '(max-width: 1024px) 100vw, 50vw'
                            : '(max-width: 768px) 100vw, 25vw'
                        }
                      />
                    </div>
                    <figcaption className="mt-3 text-sm leading-relaxed text-steel">
                      {image.caption}
                    </figcaption>
                  </figure>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <ScrollReveal>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-accent">
                  Case-study snapshots
                </p>
                <h3 className="mt-4 font-display text-3xl leading-tight text-charcoal md:text-4xl">
                  Real projects, real homeowner goals, and the kinds of outcomes people call
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
                <article className="site-panel flex h-full flex-col p-7">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                      {project.location}
                    </span>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-steel">
                      {project.scope}
                    </span>
                  </div>

                  <h4 className="mt-4 font-display text-3xl leading-tight text-charcoal">
                    {project.title}
                  </h4>

                  <div className="mt-6 space-y-4 text-sm leading-relaxed text-steel">
                    <div>
                      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                        Homeowner goal
                      </p>
                      <p className="mt-2">{project.homeownerGoal}</p>
                    </div>

                    <div>
                      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                        Result
                      </p>
                      <p className="mt-2 text-charcoal">{project.outcome}</p>
                    </div>

                    <p>{project.projectStory}</p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2 border-t border-sand/25 pt-5">
                    {project.projectHighlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="border border-sand/30 bg-white/55 px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-charcoal"
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
