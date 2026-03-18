import React from 'react';
import { Testimonial } from '@/types';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'relative flex h-full flex-col border border-sand/30 bg-cream p-8 md:p-10',
        className
      )}
    >
      <span className="absolute top-6 left-6 font-display text-6xl md:text-[5rem] text-accent opacity-15 leading-none select-none pointer-events-none">
        &ldquo;
      </span>

      <div className="relative z-10 mb-4 flex flex-wrap items-center gap-3">
        <span className="inline-flex border border-accent/30 bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal">
          {testimonial.highlight}
        </span>
        <span className="text-xs font-medium uppercase tracking-[0.16em] text-steel">
          {testimonial.location}
        </span>
      </div>

      <div className="relative z-10 mb-6 flex gap-1">
        {Array.from({ length: testimonial.stars }).map((_, i) => (
          <Star key={i} size={16} className="fill-accent text-accent" />
        ))}
      </div>

      <p className="relative z-10 mb-5 text-sm leading-relaxed text-steel">
        {testimonial.concern}
      </p>

      <blockquote className="relative z-10 mb-8 flex-grow italic leading-relaxed text-concrete">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <div className="mt-auto space-y-4 border-t border-sand/30 pt-6">
        <div className="border border-sand/30 bg-white/60 px-4 py-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal">
            Review source
          </p>
          <p className="mt-1 text-sm font-medium text-charcoal">{testimonial.sourceLabel}</p>
          <p className="mt-1 text-xs leading-relaxed text-steel">{testimonial.sourceDetail}</p>
        </div>

        <div className="text-sm font-semibold uppercase tracking-wider text-charcoal">
          {testimonial.author}
        </div>
      </div>
    </div>
  );
}
