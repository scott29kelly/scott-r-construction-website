'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { FEATURED_PROJECT_STORY, SCHEDULING_SIGNALS, SITE_INFO } from '@/lib/constants';
import { buildContactHref } from '@/lib/contact-link';

const heroFacts = [
  { value: SITE_INFO.yearsExperience, label: 'Years hands-on' },
  { value: SITE_INFO.licensedIn, label: 'Licensed' },
  { value: SITE_INFO.bbbRating, label: 'BBB rating' },
];

const trustStrip = [
  {
    title: 'One direct point of contact',
    description: 'The same person pricing the project stays accountable through the walkthrough.',
  },
  {
    title: 'Fit gets discussed early',
    description: 'Town, timing, and scope are addressed before anyone wastes time on the wrong next step.',
  },
  {
    title: 'Craftsmanship with restraint',
    description: 'Projects are built to feel finished, durable, and natural to the home instead of overdone.',
  },
  {
    title: 'Local confidence',
    description: 'Serving Bucks County and nearby South Jersey with realistic scheduling and direct follow-up.',
  },
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden border-b border-sand/20 pt-36 md:pt-44">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(183,126,73,0.18),transparent_24%),radial-gradient(circle_at_88%_8%,rgba(221,183,132,0.22),transparent_20%),linear-gradient(180deg,rgba(251,248,242,0.98),rgba(244,239,231,0.98))]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6 pb-16 md:pb-20 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.86fr)_minmax(380px,1.14fr)] lg:items-center">
          <div>
            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-3 border border-sand/35 bg-white/72 px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent-dark"
            >
              Langhorne, PA | Owner-led since {SITE_INFO.established}
            </motion.div>

            <motion.h1
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-5xl text-balance font-display text-5xl leading-[0.92] text-charcoal sm:text-6xl lg:text-[5.3rem]"
            >
              Owner-led remodeling for homeowners who want the process to feel as refined as the result.
            </motion.h1>

            <motion.p
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-steel md:text-xl"
            >
              Kitchens, baths, additions, decks, patios, and Bilco door projects for Bucks County
              homeowners who value clear communication, careful execution, and a builder who stays
              directly involved from estimate to final walkthrough.
            </motion.p>

            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button asChild size="lg">
                <Link href={buildContactHref({ leadSource: 'hero-primary' })}>
                  Request an Estimate
                  <ArrowRight size={16} />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href="tel:2155191795">
                  <Phone size={18} />
                  Call (215) 519-1795
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <span className="site-chip">Free estimate</span>
              <span className="site-chip">Bilco certified installer</span>
              <span className="site-chip">{SCHEDULING_SIGNALS.navMessage}</span>
            </motion.div>

            <motion.dl
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 grid gap-3 sm:grid-cols-3"
            >
              {heroFacts.map((fact) => (
                <div key={fact.label} className="site-panel px-4 py-4">
                  <dt className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent-dark">
                    {fact.label}
                  </dt>
                  <dd className="mt-2 font-display text-3xl leading-none text-charcoal">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <motion.figure
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="site-frame">
              <div className="site-panel overflow-hidden p-3 md:p-4">
                <div className="relative aspect-[4/5] overflow-hidden border border-sand/20 bg-white md:aspect-[5/4.8]">
                  <Image
                    src="/images/Projects/710 Parker St. Langhorne, Pa/kitchen-island-wide.jpg"
                    alt="Completed kitchen remodeling project by Scott Romanoski Construction"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 52vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-charcoal/10 to-white/10" />

                  <div className="absolute inset-x-0 top-0 p-4 md:p-6">
                    <div className="inline-flex items-center gap-3 border border-white/20 bg-charcoal/72 px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-warm-sand backdrop-blur-sm">
                      Featured project story
                    </div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
                    <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_220px] md:items-end">
                      <div className="border border-white/28 bg-white/88 p-4 backdrop-blur-sm md:p-5">
                        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                          {FEATURED_PROJECT_STORY.location}
                        </p>
                        <p className="mt-2 font-display text-2xl leading-tight text-charcoal md:text-3xl">
                          {FEATURED_PROJECT_STORY.title}
                        </p>
                        <p className="mt-2 max-w-md text-sm leading-relaxed text-steel">
                          {FEATURED_PROJECT_STORY.summary}
                        </p>
                      </div>

                      <div className="border border-white/10 bg-charcoal/88 p-4 text-cream backdrop-blur-sm">
                        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-warm-sand">
                          Start with fit
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-cream/88">
                          Share your town, timing, and project goals to get a more useful first
                          reply.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.figure>
        </div>

        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 grid gap-4 lg:grid-cols-4"
        >
          {trustStrip.map((item) => (
            <div key={item.title} className="site-panel h-full px-5 py-5">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                Trusted by local homeowners
              </p>
              <h2 className="mt-3 text-xl font-semibold text-charcoal">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-steel">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
