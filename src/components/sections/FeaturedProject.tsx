import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FEATURED_PROJECT_STORY } from '@/content';

export function FeaturedProject() {
  const project = FEATURED_PROJECT_STORY;

  return (
    <section className="relative flex min-h-[680px] items-center overflow-hidden">
      {/* Full-width background image */}
      <Image
        src={project.image}
        alt={project.imageAlt}
        fill
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(11, 21, 49, 0.55)' }}
      />

      {/* Text overlay */}
      <div className="relative z-10 mx-auto w-full max-w-site px-[50px] py-section-y max-lg:px-6">
        <div className="max-w-[620px]">
          <p className="section-label text-white/70">Featured Project</p>

          <h2 className="mt-4 font-display text-section-heading text-white max-lg:text-[40px] max-lg:leading-[44px] max-md:text-[30px] max-md:leading-[34px]">
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
              href="/portfolio"
              className="btn-primary btn-primary-light"
            >
              View Our Work
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
