import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';
import { buildContactHref } from '@/lib/contact-link';

interface PageClosingCTAProps {
  eyebrow: string;
  title: string;
  description: string;
  leadSource: string;
  projectType?: string;
}

export function PageClosingCTA({
  eyebrow,
  title,
  description,
  leadSource,
  projectType,
}: PageClosingCTAProps) {
  return (
    <section className="bg-cream section-padding">
      <div className="mx-auto max-w-site section-padding-x">
        <div className="grid gap-8 bg-warm-black p-8 text-white md:grid-cols-[1.15fr_0.85fr] md:p-10">
          {/* Left content */}
          <div>
            <p className="section-label text-white/60">{eyebrow}</p>

            <h2 className="mt-4 max-w-content-lg font-display text-sub-heading text-white">
              {title}
            </h2>

            <p className="mt-5 max-w-content-md text-body-lg text-white/70">
              {description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="border border-white/30 px-4 py-2 text-btn-sm uppercase text-white/90">
                Owner-led communication
              </span>
              <span className="border border-white/30 px-4 py-2 text-btn-sm uppercase text-white/90">
                Clear fit before the next step
              </span>
            </div>
          </div>

          {/* Right content */}
          <div className="flex flex-col justify-between gap-6 border-t border-white/10 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            <div className="border border-white/10 bg-white/5 px-5 py-4">
              <p className="section-label text-white/50">
                Helpful first message
              </p>
              <p className="mt-2 text-body-sm text-white/70">
                Include the project type, town, and timing window so Scott can
                give you a more useful first reply.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href={buildContactHref({ leadSource, projectType })}
                className="btn-primary btn-primary-light"
              >
                Request an Estimate
                <ArrowRight className="btn-arrow" />
              </Link>
              <a
                href="tel:2155191795"
                className="btn-outline btn-outline-light"
              >
                <Phone size={14} />
                Call Scott
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
