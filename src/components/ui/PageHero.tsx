'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { SITE_INFO, CONTACT_INFO } from '@/content';
import { buildContactHref } from '@/lib/contact-link';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  leadSource: string;
  chips?: string[];
  heroImage?: string;
  heroVideo?: string;
  heroVideoPoster?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  leadSource,
  chips,
  heroImage,
  heroVideo,
  heroVideoPoster,
}: PageHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  const heroChips = chips ?? [
    `Established ${SITE_INFO.established}`,
    `Licensed in ${SITE_INFO.licensedIn}`,
    `${SITE_INFO.bbbRating} BBB rating`,
  ];

  return (
    <section className="relative overflow-hidden bg-warm-black pt-28 md:pt-44 text-white min-h-[400px] md:min-h-[480px]">
      {heroVideo ? (
        <>
          {shouldReduceMotion && heroVideoPoster ? (
            <Image
              src={heroVideoPoster}
              alt=""
              fill
              priority
              className="object-cover object-top"
              sizes="100vw"
            />
          ) : (
            <video
              src={heroVideo}
              poster={heroVideoPoster}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              ref={(el) => {
                if (el) el.playbackRate = 0.7;
              }}
              onLoadedMetadata={(e) => {
                e.currentTarget.playbackRate = 0.7;
              }}
              className="absolute top-0 left-0 w-full min-h-full object-cover object-top"
            />
          )}
          <div className="absolute inset-0 bg-black/60" />
        </>
      ) : heroImage ? (
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
      ) : null}

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
            href={`tel:${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`}
            className="btn-outline btn-outline-light"
          >
            <Phone size={14} />
            Call {CONTACT_INFO.phone}
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
