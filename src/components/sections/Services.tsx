'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SERVICE_DETAILS } from '@/content';

const SERVICE_IMAGES: Record<string, string> = {
  remodeling: '/images/Projects/710 Parker St. Langhorne, Pa/kitchen-island-wide.jpg',
  additions: '/images/Projects/kitchen-2020/dining-nook-french-doors.jpg',
  'decks-patios': '/images/Projects/front-porch-2019-aug/porch-finished-wide-front.jpg',
  bilco: '/images/Projects/251 Warnock St. Philadelphia, Pa/basement-staircase-laundry.jpg',
  'windows-doors': '/images/Projects/710 Parker St. Langhorne, Pa/window-plantation-shutters.jpg',
  contracting: '/images/Projects/710 Parker St. Langhorne, Pa/staircase-newel-entry.jpg',
};

const BENTO_CLASSES: Record<number, string> = {
  0: 'md:col-span-2 md:row-span-2 min-h-[450px]',
  1: 'md:col-span-2 md:row-span-1 min-h-[280px]',
  2: 'md:col-span-1 md:row-span-1 min-h-[280px]',
  3: 'md:col-span-1 md:row-span-1 min-h-[280px]',
  4: 'md:col-span-2 md:row-span-1 min-h-[280px]',
  5: 'md:col-span-2 md:row-span-1 min-h-[280px]',
};

export function Services() {
  return (
    <section id="services" className="bg-sand section-padding relative z-10">
      <div className="mx-auto max-w-site section-padding-x">
        {/* Header row */}
        <div className="grid items-end gap-10 md:grid-cols-[1fr_1fr] mb-16">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-accent" />
              <p className="font-body text-label text-accent uppercase tracking-widest">
                Our Capabilities
              </p>
            </div>
            <h2 className="font-display text-section-heading text-charcoal leading-tight">
              Spaces Designed for How You Live
            </h2>
          </div>

          <p className="max-w-content-md text-body-lg text-concrete md:ml-auto md:text-right">
            Every project starts with a conversation about what isn&apos;t working
            and what you&apos;d like your home to feel like. We handle the rest.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-min">
          {SERVICE_DETAILS.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group cursor-interact relative flex flex-col overflow-hidden rounded-[32px] bg-cream border border-accent/10 transition-transform duration-500 hover:scale-[1.01] hover:shadow-2xl ${BENTO_CLASSES[index] || 'col-span-1 row-span-1 min-h-[250px]'}`}
            >
              {/* Background Image with animated overlay */}
              <div className="absolute inset-0 z-0 h-full w-full overflow-hidden bg-charcoal">
                <Image
                  src={SERVICE_IMAGES[service.id] ?? '/images/logo.webp'}
                  alt={service.title}
                  fill
                  className="object-cover opacity-60 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 group-hover:opacity-80"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/40 to-transparent transition-opacity duration-500" />
              </div>

              {/* Card content */}
              <div className="relative z-10 flex flex-1 flex-col justify-end p-8 md:p-10 text-cream">
                <h3 className="font-display text-card-heading text-white">
                  {service.title}
                </h3>
                
                <p className="mt-3 text-body-sm text-sand/80 max-w-sm line-clamp-2 md:line-clamp-none md:translate-y-4 md:opacity-0 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-y-0 group-hover:opacity-100">
                  {service.description}
                </p>

                <div className="mt-6 md:mt-8 flex items-center justify-between">
                  <Link
                    href={`/services/${service.id}`}
                    className="inline-flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[2px] text-white after:content-[''] after:absolute after:inset-0"
                  >
                    Explore
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-accent">
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-charcoal" />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
