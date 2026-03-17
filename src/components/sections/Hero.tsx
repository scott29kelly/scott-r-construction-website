'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Clock3, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SCHEDULING_SIGNALS, SITE_INFO } from '@/lib/constants';

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100vh] items-center overflow-hidden bg-warm-black bg-noise"
    >
      <Image
        src="/images/Projects/710 Parker St. Langhorne, Pa/kitchen-island-cabinetry.jpg"
        alt="Kitchen remodel by Scott Romanoski Construction"
        fill
        priority
        className="object-cover opacity-25"
        sizes="100vw"
      />

      <div className="absolute inset-0 z-0">
        <div className="absolute left-[-10%] top-[-20%] h-[50%] w-[50%] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[60%] w-[60%] rounded-full bg-slate/50 blur-[150px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-black/60 via-warm-black/30 to-warm-black" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-6 pb-32 pt-24 md:pb-40 md:pt-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="mb-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent"
          >
            <span className="h-px w-12 bg-accent" />
            Licensed in {SITE_INFO.licensedIn}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="mb-8 text-balance font-display text-4xl leading-[1.05] tracking-tight text-cream sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          >
            Building Better Spaces <br />
            <span className="font-light italic tracking-normal text-sand/90">for Bucks County</span> Families.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
            className="mb-10 max-w-2xl text-lg font-light leading-relaxed text-ash md:text-xl"
          >
            Remodeling, additions, decks, and patios crafted with 18+ years of hands-on experience. Your home deserves a contractor who treats it like his own.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
            className="mb-8 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-sand/85"
          >
            <span className="border border-sand/20 bg-white/5 px-4 py-2">Owner on every job</span>
            <span className="border border-sand/20 bg-white/5 px-4 py-2">Free estimates</span>
            <span className="border border-sand/20 bg-white/5 px-4 py-2">Replies within 1 business day</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
            className="flex flex-wrap items-center gap-6"
          >
            <Button asChild size="lg">
              <a href="#contact">Request a Free Estimate</a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="tel:2155191795">
                <Phone size={18} />
                Call (215) 519-1795
              </a>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
            className="mt-5 text-sm text-ash"
          >
            Planning a kitchen, bath, addition, deck, or Bilco door project? Call now or request an estimate and we&apos;ll help you figure out the next step.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1 }}
            className="mt-6 max-w-2xl border border-sand/15 bg-white/5 p-5 backdrop-blur-sm"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Clock3 size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  {SCHEDULING_SIGNALS.eyebrow}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ash">
                  {SCHEDULING_SIGNALS.heroMessage}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 1.2 }}
        className="absolute bottom-0 left-0 z-20 w-full border-t border-sand/10 bg-warm-black/60 backdrop-blur-xl"
      >
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 divide-x divide-sand/10 md:grid-cols-4">
            {[
              { value: SITE_INFO.yearsExperience, label: 'Years Experience' },
              { value: SITE_INFO.licensedIn, label: 'Licensed' },
              { value: SITE_INFO.bbbRating, label: 'BBB Rating' },
              { value: 'Bilco', label: 'Certified Installer' },
            ].map((stat, index) => (
              <div key={index} className="group cursor-default px-4 py-8 text-center">
                <span className="mb-1 block font-display text-2xl text-accent transition-transform duration-500 group-hover:-translate-y-1 sm:text-3xl md:text-4xl">
                  {stat.value}
                </span>
                <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-ash transition-colors duration-300 group-hover:text-cream">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
