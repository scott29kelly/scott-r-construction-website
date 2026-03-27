'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import type { ProjectCaseStudy } from '@/types';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

interface ProjectHeroProps {
  project: ProjectCaseStudy;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[480px] items-end overflow-hidden md:min-h-[560px]">
      <Image
        src={project.image}
        alt={project.imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 mx-auto w-full max-w-site section-padding-x pb-24 pt-44 md:pb-28 md:pt-52">
        <motion.div
          className="mb-6"
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ type: 'spring', damping: 25, stiffness: 120, delay: 0.1 }}
        >
          <Breadcrumbs
            items={[
              { label: 'Portfolio', href: '/portfolio' },
              { label: project.title },
            ]}
            variant="light"
          />
        </motion.div>

        <motion.p
          className="section-label text-white/60"
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ type: 'spring', damping: 25, stiffness: 120, delay: 0.2 }}
        >
          {project.scope}
        </motion.p>
        <motion.h1
          className="mt-4 max-w-content-xl font-display text-section-heading text-white"
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ type: 'spring', damping: 25, stiffness: 120, delay: 0.3 }}
        >
          {project.title} — {project.location}
        </motion.h1>
        <motion.p
          className="mt-6 max-w-content-md text-body-lg font-light text-white/80"
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ type: 'spring', damping: 25, stiffness: 120, delay: 0.4 }}
        >
          {project.summary}
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap gap-3"
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ type: 'spring', damping: 25, stiffness: 120, delay: 0.5 }}
        >
          {project.projectHighlights.map((highlight) => (
            <span
              key={highlight}
              className="border border-white/30 px-4 py-2 text-btn-sm uppercase text-white/90"
            >
              {highlight}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
