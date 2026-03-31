'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import type { ProjectCaseStudy } from '@/types';

// Subcomponent for individual card parallax
function ProjectCard({ project, index }: { project: ProjectCaseStudy, index: number }) {
  const shouldReduceMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Inner image parallax - moving down slightly as we scroll down
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <motion.div
      ref={cardRef}
      layout={!shouldReduceMotion}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, type: 'spring', damping: 20 }}
      className={`group relative overflow-hidden bg-charcoal rounded-xl ${index === 0 ? 'lg:col-span-2 lg:row-span-2 min-h-[500px]' : 'min-h-[350px]'}`}
    >
      <Link href={`/portfolio/${project.id}`} className="block h-full w-full">
        {/* Parallax Image Container */}
        <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
          <motion.div style={shouldReduceMotion ? undefined : { y }} className="absolute inset-0 h-[130%] w-full top-[-15%]">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              className="object-cover opacity-80 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.05] group-hover:opacity-60"
              sizes={
                index === 0
                  ? '(max-width: 1024px) 100vw, 66vw'
                  : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
              }
            />
          </motion.div>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 md:p-12">
          {/* Subtle gradient to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
          
          <div className="relative z-20 translate-y-6 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-y-0 group-hover:opacity-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-accent" />
              <p className="font-body text-[11px] font-bold tracking-[3px] uppercase text-accent hover:text-white transition-colors">{project.location}</p>
            </div>
            <h3 className="font-display text-[28px] md:text-[36px] text-white leading-tight mb-3">
              {project.title}
            </h3>
            <p className="text-body-sm text-sand/90 line-clamp-2 max-w-md font-light">
              {project.outcome}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// Main Component
interface PortfolioFilterGridProps {
  projects: ProjectCaseStudy[];
  services: { id: string; title: string }[];
}

export function PortfolioFilterGrid({ projects, services }: PortfolioFilterGridProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const serviceIds = new Set(projects.map((p) => p.serviceId));
  const visibleServices = services.filter((s) => serviceIds.has(s.id));

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.serviceId === activeFilter);

  return (
    <>
      {/* Filter bar - Premium Pill styling */}
      <div className="flex flex-wrap gap-3 mt-12 justify-center mb-16 px-4">
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-8 py-3 rounded-full text-[11px] font-bold tracking-[2px] uppercase transition-all duration-300 ${
            activeFilter === 'all'
              ? 'bg-charcoal text-white shadow-[0_8px_20px_-6px_rgba(0,0,0,0.3)]'
              : 'bg-white text-steel hover:text-charcoal hover:bg-cream border border-sand/40 hover:border-charcoal/20'
          }`}
        >
          All Projects
        </button>
        {visibleServices.map((service) => (
          <button
            key={service.id}
            onClick={() => setActiveFilter(service.id)}
            className={`px-8 py-3 rounded-full text-[11px] font-bold tracking-[2px] uppercase transition-all duration-300 ${
              activeFilter === service.id
                ? 'bg-charcoal text-white shadow-[0_8px_20px_-6px_rgba(0,0,0,0.3)]'
                : 'bg-white text-steel hover:text-charcoal hover:bg-cream border border-sand/40 hover:border-charcoal/20'
            }`}
          >
            {service.title}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 auto-rows-min">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
