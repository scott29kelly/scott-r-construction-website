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
    <section className="border-t border-sand/10 bg-charcoal bg-noise py-20 text-cream">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid gap-8 border border-sand/15 bg-white/5 p-8 backdrop-blur-sm md:grid-cols-[1.15fr_0.85fr] md:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-light">
              {eyebrow}
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl leading-tight md:text-4xl">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ash">
              {description}
            </p>
          </div>

          <div className="flex flex-col justify-center gap-4 border-t border-sand/15 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
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
    </section>
  );
}
