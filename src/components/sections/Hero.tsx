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
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(0, 0, 0, 0.3)' }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-site px-[50px] text-center text-white max-lg:px-6">
        <motion.p
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-label text-white"
        >
          Owner-Led Remodeling in Bucks County
        </motion.p>

        <motion.h1
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-[1100px] font-display text-hero-headline uppercase max-lg:text-[52px] max-lg:leading-[58px] max-md:text-[38px] max-md:leading-[44px]"
        >
          Building Your Vision with Craftsmanship & Care
        </motion.h1>

        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
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
