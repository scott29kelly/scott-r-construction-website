import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PROJECT_CASE_STUDIES } from '@/content';

interface RelatedProjectsProps {
  projectIds: string[];
}

export function RelatedProjects({ projectIds }: RelatedProjectsProps) {
  const projects = PROJECT_CASE_STUDIES.filter((p) =>
    projectIds.includes(p.id)
  );

  if (projects.length === 0) return null;

  return (
    <section className="bg-white section-padding">
      <div className="mx-auto max-w-site px-[50px] max-lg:px-6">
        <div className="text-center">
          <p className="section-label text-navy/60">Related Work</p>
          <h2 className="mx-auto mt-4 max-w-[700px] font-display text-sub-heading text-navy max-md:text-[28px] max-md:leading-[34px]">
            Projects in This Category
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/portfolio/${project.id}`}
              className="group overflow-hidden border border-border bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-[35px]">
                <h3 className="font-display text-card-heading text-navy">
                  {project.title}
                </h3>
                <p className="mt-3 text-body-sm text-navy/70">
                  {project.outcome}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-btn-sm font-medium uppercase text-navy">
                  View Project
                  <ArrowRight size={14} className="btn-arrow" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
