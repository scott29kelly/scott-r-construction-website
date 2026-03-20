import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '@/types';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <div className={cn('site-panel relative flex h-full flex-col p-7 md:p-8', className)}>
      <span className="pointer-events-none absolute right-6 top-6 font-display text-[4.5rem] leading-none text-accent/14">
        &ldquo;
      </span>

      <div className="relative z-10 flex flex-wrap items-center gap-3">
        <span className="border border-accent/20 bg-accent/10 px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-charcoal">
          {testimonial.highlight}
        </span>
        <span className="border border-sand/30 bg-white/55 px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-steel">
          {testimonial.location}
        </span>
      </div>

      <div className="relative z-10 mt-5 flex gap-1">
        {Array.from({ length: testimonial.stars }).map((_, index) => (
          <Star key={index} size={16} className="fill-accent text-accent" />
        ))}
      </div>

      <p className="relative z-10 mt-5 text-sm leading-relaxed text-steel">{testimonial.concern}</p>

      <blockquote className="relative z-10 mt-6 flex-grow font-display text-2xl leading-tight text-charcoal md:text-[2rem]">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <div className="mt-8 space-y-4 border-t border-sand/25 pt-5">
        <div className="border border-sand/30 bg-white/55 px-4 py-4">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
            Review source
          </p>
          <p className="mt-2 text-sm font-semibold text-charcoal">{testimonial.sourceLabel}</p>
          <p className="mt-1 text-xs leading-relaxed text-steel">{testimonial.sourceDetail}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-charcoal">
            {testimonial.author}
          </p>
        </div>
      </div>
    </div>
  );
}
