import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { ProjectCaseStudy } from '@/types';

interface ProjectHeroProps {
  project: ProjectCaseStudy;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="relative flex min-h-[560px] items-end overflow-hidden">
      <Image
        src={project.image}
        alt={project.imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(11, 21, 49, 0.6)' }}
      />
      <div className="relative z-10 mx-auto w-full max-w-site px-[50px] pb-16 pt-44 max-lg:px-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-btn-sm uppercase text-white/50">
            <li>
              <Link href="/portfolio" className="transition-colors hover:text-white/80">
                Portfolio
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-white/80">{project.title}</li>
          </ol>
        </nav>

        <p className="section-label text-white/60">{project.scope}</p>
        <h1 className="mt-4 max-w-[800px] font-display text-section-heading text-white max-lg:text-[40px] max-lg:leading-[44px] max-md:text-[30px] max-md:leading-[34px]">
          {project.title} — {project.location}
        </h1>
        <p className="mt-6 max-w-[600px] text-body-lg font-light text-white/80">
          {project.summary}
        </p>

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
      </div>
    </section>
  );
}
