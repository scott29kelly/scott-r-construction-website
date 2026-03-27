import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { PROJECT_CASE_STUDIES } from '@/content';
import { SERVICE_DETAILS } from '@/content';
import { PortfolioFilterGrid } from '@/components/portfolio/PortfolioFilterGrid';

interface PortfolioProps {
  hideViewAll?: boolean;
}

export function Portfolio({ hideViewAll }: PortfolioProps) {
  const services = SERVICE_DETAILS.map((s) => ({ id: s.id, title: s.title }));

  return (
    <section id="portfolio" className="bg-cream section-padding">
      <div className="mx-auto max-w-site px-[50px] max-lg:px-6">
        {/* Header */}
        <div className="text-center">
          <p className="section-label text-steel">Our Work</p>
          <h2 className="mx-auto mt-4 max-w-[800px] font-display text-section-heading text-charcoal max-lg:text-[40px] max-lg:leading-[44px] max-md:text-[30px] max-md:leading-[34px]">
            Projects That Speak for Themselves
          </h2>
          <p className="mx-auto mt-6 max-w-[600px] text-body-lg text-concrete">
            Every project tells a story about what the homeowner needed and how
            the finished space supports their daily life.
          </p>
        </div>

        <PortfolioFilterGrid projects={PROJECT_CASE_STUDIES} services={services} />

        {/* CTA */}
        {!hideViewAll && (
          <div className="mt-16 text-center">
            <Link
              href="/portfolio"
              className="btn-outline btn-outline-dark"
            >
              View All Projects
              <ArrowRight className="btn-arrow" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
