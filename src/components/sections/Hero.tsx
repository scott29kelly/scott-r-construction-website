'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { buildContactHref } from '@/lib/contact-link';

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Text split animation variants
  const wordAnimation = {
    hidden: { y: '120%', opacity: 0, rotate: 2 },
    visible: (i: number) => ({
      y: '0%',
      opacity: 1,
      rotate: 0,
      transition: {
        type: 'spring' as const,
        damping: 20,
        stiffness: 100,
        delay: 0.1 + i * 0.08,
      },
    }),
  };

  const titleWords = "Building Your Vision with Craftsmanship & Care".split(' ');

  return (
    <section ref={containerRef} className="relative flex min-h-screen md:min-h-[105vh] items-center justify-center overflow-hidden bg-charcoal">
      {/* Background image container with parallax */}
      <motion.div 
        style={{ y, scale, opacity }} 
        className="absolute inset-0 z-0 h-full w-full"
      >
        <video
          src="/videos/kitchen-island-wide-animated-orbit-pingpong.mp4"
          poster="/images/Projects/710 Parker St. Langhorne, Pa/kitchen-island-full.jpg"
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
          className="absolute inset-0 h-full w-full scale-110 object-cover"
        />
        {/* Dark overlay engineered for 'editorial dark mode' contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/30 to-charcoal/90" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-site section-padding-x lg:pl-20 text-cream pt-20">
        
        <div className="flex flex-col items-start max-w-content-3xl">
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px w-12 bg-accent" />
            <p className="font-body text-label text-accent uppercase tracking-widest">
              Owner-Led Remodeling in Bucks County
            </p>
          </motion.div>

          <h1 className="font-display text-hero-headline text-white text-left leading-[1.1] mb-12 flex flex-wrap gap-x-4 gap-y-2 lg:gap-x-6 overflow-hidden">
            {titleWords.map((word, i) => (
              <span key={i} className="overflow-hidden inline-flex py-2">
                <motion.span
                  custom={i}
                  variants={wordAnimation}
                  initial="hidden"
                  animate="visible"
                  className="origin-left"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 120, delay: 0.8 }}
            className="mt-6"
          >
            <Link
              href={buildContactHref({ leadSource: 'hero-primary' })}
              className="group relative inline-flex items-center gap-6 overflow-hidden rounded-full bg-white px-8 py-5 text-sm font-medium uppercase tracking-[2px] text-charcoal transition-transform hover:scale-105"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-white">Book a Consult</span>
              <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-charcoal/10 transition-colors duration-500 group-hover:bg-white/20">
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:text-white" />
              </div>
              <div className="absolute inset-0 z-0 h-full w-full translate-y-full bg-accent transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-y-0" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
