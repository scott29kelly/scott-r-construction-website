'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { SITE_INFO } from '@/content';
import { buildContactHref } from '@/lib/contact-link';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  leadSource: string;
  chips?: string[];
  heroImage?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  leadSource,
  chips,
  heroImage,
}: PageHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  const heroChips = chips ?? [
    `Established ${SITE_INFO.established}`,
    `Licensed in ${SITE_INFO.licensedIn}`,
    `${SITE_INFO.bbbRating} BBB rating`,
  ];

  return (
    <section className="relative overflow-hidden bg-warm-black pt-44 text-white md:pt-52 min-h-[480px] md:min-h-[560px]">
      {heroImage && (
        <>
          <Image
            src={heroImage}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
        </>
      )}

      <div className="relative z-10 mx-auto max-w-site section-padding-x pb-24 md:pb-28">
        <motion.p
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ type: 'spring', damping: 25, stiffness: 120, delay: 0.1 }}
          className="section-label text-white/60"
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ type: 'spring', damping: 25, stiffness: 120, delay: 0.2 }}
          className="mt-4 max-w-content-2xl text-balance font-display text-section-heading"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ type: 'spring', damping: 25, stiffness: 120, delay: 0.3 }}
          className="mt-6 max-w-content-md text-body-lg text-white/75"
        >
          {description}
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ type: 'spring', damping: 25, stiffness: 120, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            href={buildContactHref({ leadSource })}
            className="btn-primary btn-primary-light"
          >
            Request an Estimate
            <ArrowRight className="btn-arrow" />
          </Link>
          <a
            href="tel:2155191795"
            className="btn-outline btn-outline-light"
          >
            <Phone size={14} />
            Call (215) 519-1795
          </a>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ type: 'spring', damping: 25, stiffness: 120, delay: 0.5 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          {heroChips.map((chip) => (
            <span
              key={chip}
              className="border border-white/30 px-4 py-2 text-btn-sm uppercase text-white/90"
            >
              {chip}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
