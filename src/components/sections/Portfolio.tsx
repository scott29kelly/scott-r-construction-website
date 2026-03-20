import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PORTFOLIO } from '@/content';

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-cream section-padding">
      <div className="mx-auto max-w-site px-[50px] max-lg:px-6">
        {/* Header */}
        <div className="text-center">
          <p className="section-label text-navy/60">Our Work</p>
          <h2 className="mx-auto mt-4 max-w-[800px] font-display text-section-heading text-navy max-lg:text-[40px] max-lg:leading-[44px] max-md:text-[30px] max-md:leading-[34px]">
            Projects That Speak for Themselves
          </h2>
          <p className="mx-auto mt-6 max-w-[600px] text-body-lg text-navy/70">
            Every project tells a story about what the homeowner needed and how
            the finished space supports their daily life.
          </p>
        </div>

        {/* Image grid — masonry-style with varying aspect ratios */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO.map((project, index) => {
            /* First item spans 2 columns on lg */
            const span = index === 0 ? 'lg:col-span-2 lg:row-span-2' : '';
            const aspect = index === 0 ? 'aspect-[4/3]' : 'aspect-[4/3]';

            return (
              <article
                key={project.id}
                className={`group relative overflow-hidden ${span}`}
              >
                <div className={`relative ${aspect} w-full overflow-hidden`}>
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

                  {/* Hover overlay */}
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
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/portfolio"
            className="btn-outline btn-outline-dark"
          >
            View All Projects
            <ArrowRight className="btn-arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
