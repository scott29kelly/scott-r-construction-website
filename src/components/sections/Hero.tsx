'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { SITE_INFO } from '@/lib/constants';
import { buildContactHref } from '@/lib/contact-link';

const heroFacts = [
  { value: SITE_INFO.yearsExperience, label: 'Years experience' },
  { value: SITE_INFO.licensedIn, label: 'Licensed' },
  { value: '1 day', label: 'Typical reply' },
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden border-b border-sand/20 pt-32 md:pt-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(181,123,67,0.12),transparent_24%),radial-gradient(circle_at_88%_10%,rgba(216,197,168,0.32),transparent_22%),linear-gradient(180deg,rgba(249,245,238,0.94),rgba(243,238,229,0.96))]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6 pb-16 md:pb-20 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.88fr)_minmax(380px,1.12fr)] lg:items-center">
          <div>
            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-3 border border-sand/30 bg-white/72 px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent-dark"
            >
              Bucks County remodeling
            </motion.div>

            <motion.h1
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-4xl text-balance font-display text-5xl leading-[0.96] text-charcoal sm:text-6xl lg:text-7xl"
            >
              Clean remodeling work with the owner still involved.
            </motion.h1>

            <motion.p
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-steel md:text-xl"
            >
              Kitchens, baths, additions, decks, and patios for homeowners who want direct
              communication, thoughtful craftsmanship, and a finished result that feels right
              for everyday life.
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

            <motion.dl
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
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
            <div className="site-panel overflow-hidden p-3 md:p-4">
              <div className="relative aspect-[4/5] overflow-hidden border border-sand/20 bg-white md:aspect-[5/4.6]">
                <Image
                  src="/images/Projects/710 Parker St. Langhorne, Pa/kitchen-island-wide.jpg"
                  alt="Completed kitchen remodeling project by Scott Romanoski Construction"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 52vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/44 via-transparent to-white/10" />

                <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
                  <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_220px] md:items-end">
                    <div className="border border-white/35 bg-white/88 p-4 backdrop-blur-sm md:p-5">
                      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                        Featured remodel
                      </p>
                      <p className="mt-2 font-display text-2xl leading-tight text-charcoal md:text-3xl">
                        Langhorne kitchen remodel
                      </p>
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-steel">
                        Custom cabinetry, brighter finishes, and a layout built for real daily
                        family use.
                      </p>
                    </div>

                    <div className="border border-charcoal/10 bg-charcoal/88 p-4 text-cream backdrop-blur-sm">
                      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-warm-sand">
                        Owner on every job
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-cream/88">
                        The same person you talk to about the estimate stays close to the work.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
