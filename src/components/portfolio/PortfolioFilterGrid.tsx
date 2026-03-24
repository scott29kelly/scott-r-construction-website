'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import type { ProjectCaseStudy } from '@/types';

interface PortfolioFilterGridProps {
  projects: ProjectCaseStudy[];
  services: { id: string; title: string }[];
}

export function PortfolioFilterGrid({ projects, services }: PortfolioFilterGridProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const shouldReduceMotion = useReducedMotion();

  const serviceIds = new Set(projects.map((p) => p.serviceId));
  const visibleServices = services.filter((s) => serviceIds.has(s.id));

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.serviceId === activeFilter);

  return (
    <>
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 mt-10 justify-center">
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-4 py-2 text-btn-sm uppercase transition-colors ${
            activeFilter === 'all'
              ? 'bg-navy text-white'
              : 'border border-border text-navy/60 hover:text-navy'
          }`}
        >
          All
        </button>
        {visibleServices.map((service) => (
          <button
            key={service.id}
            onClick={() => setActiveFilter(service.id)}
            className={`px-4 py-2 text-btn-sm uppercase transition-colors ${
              activeFilter === service.id
                ? 'bg-navy text-white'
                : 'border border-border text-navy/60 hover:text-navy'
            }`}
          >
            {service.title}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => {
            const span = index === 0 ? 'lg:col-span-2 lg:row-span-2' : '';

            return (
              <motion.div
                key={project.id}
                layout={!shouldReduceMotion}
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={span}
              >
                <Link
                  href={`/portfolio/${project.id}`}
                  className="group relative block overflow-hidden"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes={
                        index === 0
                          ? '(max-width: 1024px) 100vw, 66vw'
                          : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                      }
                    />
                    <div className="absolute inset-0 flex flex-col justify-end bg-navy/0 p-6 transition-all duration-300 group-hover:bg-navy/60">
                      <div className="translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="section-label text-white/70">{project.location}</p>
                        <h3 className="mt-2 font-display text-card-heading text-white">
                          {project.title}
                        </h3>
                        <p className="mt-2 text-body-sm text-white/80">
                          {project.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </>
  );
}
