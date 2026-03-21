import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { ProjectCaseStudy } from '@/types';

interface ProjectNavigationProps {
  prev: ProjectCaseStudy | null;
  next: ProjectCaseStudy | null;
}

export function ProjectNavigation({ prev, next }: ProjectNavigationProps) {
  if (!prev && !next) return null;

  return (
    <section className="border-t border-border bg-white">
      <div className="mx-auto grid max-w-site sm:grid-cols-2">
        {prev ? (
          <Link
            href={`/portfolio/${prev.id}`}
            className="group flex items-center gap-4 px-[50px] py-8 transition-colors hover:bg-cream max-lg:px-6"
          >
            <ArrowLeft
              size={20}
              className="shrink-0 text-navy/40 transition-transform group-hover:-translate-x-1"
            />
            <div>
              <p className="text-btn-sm uppercase text-navy/50">Previous Project</p>
              <p className="mt-1 font-display text-card-heading text-navy">
                {prev.title}
              </p>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={`/portfolio/${next.id}`}
            className="group flex items-center justify-end gap-4 border-t border-border px-[50px] py-8 text-right transition-colors hover:bg-cream max-lg:px-6 sm:border-l sm:border-t-0"
          >
            <div>
              <p className="text-btn-sm uppercase text-navy/50">Next Project</p>
              <p className="mt-1 font-display text-card-heading text-navy">
                {next.title}
              </p>
            </div>
            <ArrowRight
              size={20}
              className="shrink-0 text-navy/40 transition-transform group-hover:translate-x-1"
            />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </section>
  );
}
