import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FEATURED_PROJECT_STORY } from '@/content';

export function FeaturedProject() {
  const project = FEATURED_PROJECT_STORY;

  return (
    <section className="relative flex min-h-[500px] md:min-h-[680px] items-center overflow-hidden">
      {/* Full-width background image */}
      <Image
        src={project.image}
        alt={project.imageAlt}
        fill
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Text overlay */}
      <div className="relative z-10 mx-auto w-full max-w-site section-padding-x py-section-y">
        <div className="max-w-content-md">
          <p className="section-label text-white/70">Featured Project</p>

          <h2 className="mt-4 font-display text-section-heading text-white">
            {project.title} — {project.location}
          </h2>

          <p className="mt-6 text-body-lg font-light text-white/80">
            {project.summary}
          </p>

          {/* Highlight tags */}
          <div className="mt-8 flex flex-wrap gap-3">
            {project.projectHighlights.map((highlight) => (
              <span
                key={highlight}
                className="border border-white/30 px-4 py-2 text-btn-sm uppercase text-white/90"
              >
                {highlight}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={`/portfolio/${project.id}`}
              className="btn-primary btn-primary-light"
            >
              View This Project
              <ArrowRight className="btn-arrow" />
            </Link>
            <Link
              href="/portfolio"
              className="btn-outline btn-outline-light"
            >
              See All Projects
              <ArrowRight className="btn-arrow" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
