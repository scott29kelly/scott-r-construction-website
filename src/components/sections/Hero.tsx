'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Clock3, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { SITE_INFO, SCHEDULING_SIGNALS } from '@/lib/constants';
import { buildContactHref } from '@/lib/contact-link';

const heroHighlights = [
  'Owner on every job',
  'A+ BBB rating',
  'Replies within 1 business day',
];

const heroStats = [
  { value: SITE_INFO.yearsExperience, label: 'Years experience' },
  { value: SITE_INFO.licensedIn, label: 'Licensed' },
  { value: 'Bilco', label: 'Certified installer' },
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden pt-32 text-cream md:pt-40">
      <div className="absolute inset-0 bg-warm-black bg-noise" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(181,123,67,0.22),transparent_30%),radial-gradient(circle_at_88%_16%,rgba(216,197,168,0.12),transparent_24%)]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6 pb-16 md:pb-20 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:items-end">
          <div>
            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-3"
            >
              <span className="site-chip-dark">Owner-led since {SITE_INFO.established}</span>
              <span className="site-chip-dark">Serving Bucks County homeowners</span>
            </motion.div>

            <motion.h1
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 max-w-5xl text-balance font-display text-5xl leading-[0.96] text-cream sm:text-6xl lg:text-7xl xl:text-[5.35rem]"
            >
              Crafted remodeling with the owner still on the job.
            </motion.h1>

            <motion.p
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-ash md:text-xl"
            >
              Remodeling, additions, decks, and patios for homeowners who want clear
              communication, thoughtful craftsmanship, and a contractor who still feels
              accountable from the first call to the final walkthrough.
            </motion.p>

            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button asChild size="lg">
                <Link href={buildContactHref({ leadSource: 'hero-primary' })}>
                  Request a Free Estimate
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
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {heroHighlights.map((highlight) => (
                <span key={highlight} className="site-chip-dark">
                  {highlight}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="site-frame">
              <div className="site-panel-dark bg-noise p-4 md:p-5">
                <div className="grid gap-4 sm:grid-cols-[1.05fr_0.95fr]">
                  <figure className="relative min-h-[24rem] overflow-hidden border border-white/10 bg-white/5">
                    <Image
                      src="/images/Projects/710 Parker St. Langhorne, Pa/kitchen-island-wide.jpg"
                      alt="Kitchen remodel by Scott Romanoski Construction"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-warm-black via-warm-black/70 to-transparent p-5">
                      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-warm-sand">
                        Featured remodel
                      </p>
                      <p className="mt-2 font-display text-2xl leading-tight text-cream">
                        Langhorne kitchen built for real family traffic.
                      </p>
                    </div>
                  </figure>

                  <div className="grid gap-4">
                    <div className="site-panel p-5 text-charcoal">
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-accent/20 bg-accent/10 text-accent">
                          <Clock3 size={18} />
                        </div>
                        <div>
                          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                            {SCHEDULING_SIGNALS.eyebrow}
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-charcoal">
                            {SCHEDULING_SIGNALS.heroMessage}
                          </p>
                        </div>
                      </div>
                    </div>

                    <figure className="relative min-h-[15rem] overflow-hidden border border-white/10 bg-white/5">
                      <Image
                        src="/images/Projects/710 Parker St. Langhorne, Pa/kitchen-floor-detail.jpg"
                        alt="Kitchen floor detail"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 24vw"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-warm-black to-transparent p-4">
                        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-warm-sand">
                          Finish detail
                        </p>
                      </div>
                    </figure>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {heroStats.map((stat) => (
                    <div key={stat.label} className="border border-white/10 bg-white/5 px-4 py-4">
                      <p className="font-display text-3xl leading-none text-cream">{stat.value}</p>
                      <p className="mt-2 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-warm-sand">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, x: -12, y: 12 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.55, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-6 -left-4 hidden max-w-xs border border-sand/30 bg-cream/96 p-5 text-charcoal shadow-[0_22px_55px_rgba(20,22,21,0.18)] md:block"
            >
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                Why homeowners reach out
              </p>
              <p className="mt-3 text-sm leading-relaxed text-charcoal">
                You get straightforward guidance on scope, fit, and timing before the project
                turns into weeks of chasing quotes.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
