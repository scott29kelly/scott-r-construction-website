import React from 'react';
import Image from 'next/image';
import { BadgeCheck, MapPin } from 'lucide-react';
import { PORTFOLIO } from '@/lib/constants';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const featuredProject = PORTFOLIO[0];
const supportingProjects = PORTFOLIO.slice(1);

export function Portfolio() {
  return (
    <section id="portfolio" className="relative overflow-hidden section-padding bg-cream">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sand/30 to-transparent" />
      <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-accent/8 blur-3xl" />
      <div className="absolute right-0 top-[28rem] h-96 w-96 rounded-full bg-warm-sand/12 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-end">
          <div className="max-w-3xl">
            <ScrollReveal>
              <SectionLabel>Curated Project Stories</SectionLabel>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2 className="font-display text-4xl leading-[1.02] text-charcoal md:text-5xl lg:text-6xl">
                Projects selected for the decisions behind them, not just the finished photo.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.16}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel">
                Each project below is presented the way a homeowner thinks about a remodel:
                what was not working, what needed to change, and how the final space supports
                everyday life once the dust settles.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2}>
            <div className="site-panel p-6 md:p-7">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-accent">
                What this page is for
              </p>
              <h3 className="mt-4 font-display text-3xl leading-tight text-charcoal">
                A fast read on the kind of results Scott is trusted to deliver.
              </h3>
              <div className="mt-5 grid gap-4 text-sm leading-relaxed text-steel">
                <p>
                  You will see the homeowner goal, the project scope, the finish outcome, and a
                  short story about why the work mattered.
                </p>
                <p>
                  That makes it easier to compare fit before reaching out, especially if you are
                  choosing between a few rooms or project types.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {featuredProject && (
          <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:items-stretch">
            <ScrollReveal className="h-full">
              <div className="site-frame h-full">
                <div className="site-panel overflow-hidden p-3 md:p-4">
                  <div className="relative min-h-[28rem] overflow-hidden border border-sand/20 bg-white">
                    <Image
                      src={featuredProject.image ?? ''}
                      alt={featuredProject.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/18 to-white/10" />

                    <div className="absolute inset-x-0 top-0 z-10 flex flex-wrap gap-2 p-5 md:p-6">
                      {featuredProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-white/20 bg-warm-black/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-cream backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="absolute inset-x-0 bottom-0 z-10 p-5 md:p-6">
                      <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_220px] md:items-end">
                        <div className="border border-white/25 bg-white/92 p-5 backdrop-blur-sm md:p-6">
                          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                            Featured project story
                          </p>
                          <p className="mt-2 font-display text-2xl leading-tight text-charcoal md:text-3xl">
                            {featuredProject.title}
                          </p>
                          <p className="mt-2 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.14em] text-accent-dark">
                            <MapPin size={14} />
                            {featuredProject.location}
                          </p>
                          <p className="mt-3 text-sm leading-relaxed text-steel">
                            {featuredProject.summary}
                          </p>
                        </div>

                        <div className="border border-charcoal/10 bg-charcoal/90 p-4 text-cream backdrop-blur-sm md:p-5">
                          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-warm-sand">
                            Scope
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-cream/88">
                            {featuredProject.scope}
                          </p>
                          <p className="mt-4 border-t border-white/10 pt-4 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-warm-sand">
                            Homeowner goal
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-cream/88">
                            {featuredProject.homeownerGoal}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.12} className="h-full">
              <div className="site-panel-dark bg-noise flex h-full flex-col p-7 text-cream md:p-8">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-warm-sand">
                  Why this one matters
                </p>
                <h3 className="mt-4 font-display text-3xl leading-tight text-cream md:text-4xl">
                  The story is about how the room works, not only how it looks.
                </h3>
                <p className="mt-5 text-base leading-relaxed text-ash">
                  This featured project is a good example of how Scott approaches a remodel:
                  making circulation easier, preserving a natural fit with the house, and giving
                  the homeowners a result that feels calmer to live with every day.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="border border-white/10 bg-white/6 px-5 py-4">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-warm-sand">
                      What changed
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ash">
                      {featuredProject.projectStory}
                    </p>
                  </div>

                  <div className="border border-white/10 bg-white/6 px-5 py-4">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-warm-sand">
                      Result
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ash">
                      {featuredProject.outcome}
                    </p>
                  </div>
                </div>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-warm-sand">
                    Outcome points
                  </p>
                  <ul className="mt-4 space-y-3">
                    {featuredProject.projectHighlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3 text-sm leading-relaxed text-ash">
                        <BadgeCheck size={16} className="mt-0.5 shrink-0 text-accent-light" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        )}

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {supportingProjects.map((item, index) => (
            <ScrollReveal key={item.id} delay={0.08 * (index % 2)} className="h-full">
              <article className="site-panel group flex h-full flex-col overflow-hidden">
                <div className="grid gap-0 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
                  <div className="relative min-h-[18rem] overflow-hidden bg-charcoal">
                    <Image
                      src={item.image ?? ''}
                      alt={item.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="border border-white/20 bg-warm-black/45 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cream backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col p-6 md:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                          {item.location}
                        </p>
                        <h3 className="mt-3 font-display text-3xl leading-tight text-charcoal">
                          {item.title}
                        </h3>
                      </div>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-steel">
                        0{index + 2}
                      </span>
                    </div>

                    <div className="mt-6 grid gap-4">
                      <div>
                        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent-dark">
                          Homeowner goal
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-steel">
                          {item.homeownerGoal}
                        </p>
                      </div>

                      <div>
                        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent-dark">
                          Project story
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-charcoal">
                          {item.projectStory}
                        </p>
                      </div>

                      <div>
                        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent-dark">
                          Outcome
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-steel">
                          {item.outcome}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 border-t border-sand/25 pt-5">
                      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                        What was delivered
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-steel">{item.summary}</p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.projectHighlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="border border-sand/30 bg-white/60 px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-charcoal"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-16">
          <div className="site-panel grid gap-8 p-7 md:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-accent">
                Read the work like a homeowner
              </p>
              <h3 className="mt-4 max-w-3xl font-display text-3xl leading-tight text-charcoal md:text-4xl">
                A good portfolio should help you judge fit, not just admire finishes.
              </h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="border border-sand/25 bg-white/60 px-4 py-4">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent-dark">
                  Goal
                </p>
                <p className="mt-2 text-sm leading-relaxed text-steel">
                  What the homeowner wanted to improve.
                </p>
              </div>
              <div className="border border-sand/25 bg-white/60 px-4 py-4">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent-dark">
                  Scope
                </p>
                <p className="mt-2 text-sm leading-relaxed text-steel">
                  The kind of work Scott actually handled.
                </p>
              </div>
              <div className="border border-sand/25 bg-white/60 px-4 py-4">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent-dark">
                  Outcome
                </p>
                <p className="mt-2 text-sm leading-relaxed text-steel">
                  The practical result the family lives with now.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
