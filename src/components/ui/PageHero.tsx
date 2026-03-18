import React from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { buildContactHref } from '@/lib/contact-link';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  leadSource: string;
}

export function PageHero({ eyebrow, title, description, leadSource }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-sand/10 bg-warm-black bg-noise pt-32 text-cream md:pt-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(176,141,87,0.14),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(94,109,128,0.35),transparent_34%)]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6 pb-20 md:pb-24">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>
          <h1 className="mt-6 text-balance font-display text-4xl leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ash md:text-xl">
            {description}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild size="lg">
              <Link href={buildContactHref({ leadSource })}>Request a Free Estimate</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="tel:2155191795">
                <Phone size={18} />
                Call (215) 519-1795
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
