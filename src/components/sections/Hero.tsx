'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { buildContactHref } from '@/lib/contact-link';

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/Projects/710 Parker St. Langhorne, Pa/kitchen-island-wide.jpg"
        alt="Completed kitchen remodeling project"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-site section-padding-x text-center text-white">
        <motion.p
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ type: 'spring', damping: 25, stiffness: 120, delay: 0.1 }}
          className="section-label text-white"
        >
          Owner-Led Remodeling in Bucks County
        </motion.p>

        <motion.h1
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ type: 'spring', damping: 25, stiffness: 120, delay: 0.2 }}
          className="mx-auto mt-6 max-w-content-3xl font-display text-hero-headline uppercase"
        >
          Building Your Vision with Craftsmanship & Care
        </motion.h1>

        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ type: 'spring', damping: 25, stiffness: 120, delay: 0.4 }}
          className="mt-10"
        >
          <Link
            href={buildContactHref({ leadSource: 'hero-primary' })}
            className="btn-primary btn-primary-light"
          >
            Book a Consult
            <ArrowRight className="btn-arrow" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
