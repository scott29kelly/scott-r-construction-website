'use client';

import React, { useState } from 'react';
import { ArrowRight, ZoomIn } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
import { PROJECT_CASE_STUDIES } from '@/content';
import { GalleryLightbox } from '@/components/project/GalleryLightbox';
import type { ContentImage } from '@/types';

interface RelatedProjectsProps {
  projectIds: string[];
}

export function RelatedProjects({ projectIds }: RelatedProjectsProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const projects = PROJECT_CASE_STUDIES.filter((p) =>
    projectIds.includes(p.id)
  );

  if (projects.length === 0) return null;

  const lightboxImages: ContentImage[] = projects.map((p) => ({
    src: p.image,
    alt: p.imageAlt,
    caption: `${p.title} — ${p.location}`,
  }));

  return (
    <section className="bg-white section-padding">
      <div className="mx-auto max-w-site section-padding-x">
        <div className="text-center">
          <p className="section-label text-steel">Related Work</p>
          <h2 className="mx-auto mt-4 max-w-content-lg font-display text-sub-heading text-charcoal">
            Projects in This Category
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group overflow-hidden border border-sand/30 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              {/* Clickable image — opens lightbox */}
              <button
                type="button"
                onClick={() => setLightboxIndex(index)}
                className="relative block w-full aspect-[4/3] overflow-hidden img-shimmer cursor-zoom-in"
                aria-label={`Enlarge ${project.title} image`}
              >
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/20">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/0 text-white opacity-0 transition-all duration-300 group-hover:bg-white/90 group-hover:opacity-100">
                    <ZoomIn size={20} className="text-charcoal" />
                  </span>
                </div>
              </button>

              {/* Card content */}
              <div className="p-card-pad">
                <h3 className="font-display text-card-heading text-charcoal">
                  {project.title}
                </h3>
                <p className="mt-3 text-body-sm text-concrete">
                  {project.outcome}
                </p>
                <Link
                  href={`/portfolio/${project.id}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-btn-sm font-medium uppercase text-charcoal transition-colors hover:text-accent"
                >
                  View Project
                  <ArrowRight size={14} className="btn-arrow" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <GalleryLightbox
            images={lightboxImages}
            initialIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
