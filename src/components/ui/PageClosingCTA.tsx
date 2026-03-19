import React from 'react';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
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
    <section className="relative overflow-hidden border-t border-sand/20 py-20 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(181,123,67,0.1),transparent_24%),linear-gradient(180deg,rgba(249,245,238,0.92),rgba(243,238,229,0.98))]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <div className="site-panel grid gap-8 p-8 text-charcoal md:grid-cols-[1.15fr_0.85fr] md:p-10">
          <div>
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-accent">
              {eyebrow}
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl leading-tight md:text-5xl">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-steel md:text-lg">
              {description}
            </p>
          </div>

          <div className="flex flex-col justify-between gap-6 border-t border-sand/20 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            <div className="border border-sand/25 bg-white/72 px-5 py-4">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent-dark">
                Helpful first message
              </p>
              <p className="mt-2 text-sm leading-relaxed text-steel">
                Include the project type, town, and timing window so Scott can give you a more
                useful first reply.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Button asChild>
                <Link href={buildContactHref({ leadSource, projectType })}>
                  Request an Estimate
                  <ArrowRight size={16} />
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <a href="tel:2155191795">
                  <Phone size={16} />
                  Call Scott
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
