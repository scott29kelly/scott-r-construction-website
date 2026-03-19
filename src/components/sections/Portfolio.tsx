import React from 'react';
import Image from 'next/image';
import { Camera } from 'lucide-react';
import { PORTFOLIO } from '@/lib/constants';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { cn } from '@/lib/utils';

export function Portfolio() {
  return (
    <section id="portfolio" className="relative overflow-hidden section-padding bg-cream">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sand/30 to-transparent" />

      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col justify-between gap-8 md:mb-24 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <ScrollReveal>
              <SectionLabel>Our Work</SectionLabel>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-4xl leading-tight text-charcoal md:text-5xl lg:text-6xl">
                Projects built around how homeowners actually live.
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2} className="md:max-w-sm">
            <p className="text-base leading-relaxed text-steel">
              These featured projects show more than finishes. They show the goals homeowners
              had, the spaces they wanted to improve, and the kind of practical outcome Scott
              is hired to deliver.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid auto-rows-[320px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO.map((item, index) => (
            <ScrollReveal
              key={item.id}
              delay={0.08 * (index % 3)}
              className={cn(
                'group relative block overflow-hidden border border-sand/20 bg-slate/5 shadow-sm shadow-charcoal/5',
                item.isTall ? 'md:row-span-2' : 'row-span-1'
              )}
            >
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-steel/50 transition-transform duration-700 group-hover:scale-105">
                  <Camera size={48} strokeWidth={1} className="mb-4 opacity-50" />
                  <span className="text-xs font-semibold uppercase tracking-widest opacity-70">
                    Awaiting Photo
                  </span>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-warm-black via-warm-black/55 to-warm-black/10" />

              <div className="absolute inset-x-0 top-0 z-10 flex flex-wrap gap-2 p-5 md:p-6">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-white/20 bg-warm-black/45 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-cream backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-8">
                <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                  {item.location}
                </span>
                <h4 className="mt-2 font-display text-2xl text-cream">{item.title}</h4>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-sand/90">
                  Homeowner goal
                </p>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-cream">
                  {item.homeownerGoal}
                </p>

                <div className="mt-4 border-t border-white/15 pt-4">
                  <p className="text-sm font-medium leading-relaxed text-cream">{item.outcome}</p>
                </div>

                <div className="mt-4 space-y-4 md:max-h-0 md:overflow-hidden md:opacity-0 md:transition-all md:duration-500 md:ease-out md:group-hover:max-h-64 md:group-hover:opacity-100">
                  <p className="max-w-md text-sm leading-relaxed text-ash">{item.projectStory}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.projectHighlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="border border-white/15 bg-white/5 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-cream"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
