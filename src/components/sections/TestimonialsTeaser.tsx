'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { TESTIMONIALS } from '@/content';

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={18}
          className={i < count ? 'fill-star-gold text-star-gold' : 'fill-star-empty text-star-empty'}
        />
      ))}
    </div>
  );
}

const totalPairs = Math.ceil(TESTIMONIALS.length / 2);

export function TestimonialsTeaser() {
  const [pairIndex, setPairIndex] = useState(0);

  const featured = TESTIMONIALS.slice(pairIndex * 2, pairIndex * 2 + 2);

  return (
    <section id="testimonials" className="bg-white section-padding">
      <div className="mx-auto max-w-site section-padding-x">
        {/* Header */}
        <div className="text-center">
          <p className="section-label text-steel">From Our Clients</p>
          <h2 className="mx-auto mt-4 max-w-content-xl font-display text-section-heading text-charcoal">
            Trust Built on Work People Remember
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="relative mt-16">
          {totalPairs > 1 && (
            <div className="absolute -left-5 top-1/2 z-10 -translate-y-1/2 max-lg:hidden">
              <button
                onClick={() => setPairIndex((i) => (i - 1 + totalPairs) % totalPairs)}
                className="flex h-10 w-10 items-center justify-center border border-sand/30 bg-white text-steel transition-colors hover:bg-cream hover:text-charcoal"
                aria-label="Previous testimonials"
              >
                <ChevronLeft size={20} />
              </button>
            </div>
          )}

          <div className="grid gap-8 md:grid-cols-2">
            {featured.map((testimonial, index) => {
              const stagger = index % 2 === 1 ? 'md:mt-12' : '';

              return (
                <article
                  key={testimonial.id}
                  className={`relative overflow-hidden border border-sand/30 bg-cream p-card-pad transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${stagger}`}
                >
                  <span className="absolute -top-2 right-4 select-none pointer-events-none font-display text-[80px] leading-none text-charcoal/[0.04]">&ldquo;</span>
                  <StarRating count={testimonial.stars} />

                  <blockquote className="mt-6 font-display text-card-heading leading-[1.35] text-charcoal">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  <div className="mt-8 border-t border-sand/30 pt-6">
                    <p className="font-body text-label font-medium uppercase text-charcoal">
                      {testimonial.author}
                    </p>
                    <p className="mt-1 text-body-sm text-ash">
                      {testimonial.sourceLabel}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          {totalPairs > 1 && (
            <div className="absolute -right-5 top-1/2 z-10 -translate-y-1/2 max-lg:hidden">
              <button
                onClick={() => setPairIndex((i) => (i + 1) % totalPairs)}
                className="flex h-10 w-10 items-center justify-center border border-sand/30 bg-white text-steel transition-colors hover:bg-cream hover:text-charcoal"
                aria-label="Next testimonials"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>

        {/* Mobile arrows */}
        {totalPairs > 1 && (
          <div className="mt-8 flex items-center justify-center gap-4 lg:hidden">
            <button
              onClick={() => setPairIndex((i) => (i - 1 + totalPairs) % totalPairs)}
              className="flex h-10 w-10 items-center justify-center border border-sand/30 bg-white text-steel transition-colors hover:bg-cream hover:text-charcoal"
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="text-body-sm text-ash">
              {pairIndex + 1} / {totalPairs}
            </span>
            <button
              onClick={() => setPairIndex((i) => (i + 1) % totalPairs)}
              className="flex h-10 w-10 items-center justify-center border border-sand/30 bg-white text-steel transition-colors hover:bg-cream hover:text-charcoal"
              aria-label="Next testimonials"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link href="/testimonials" className="btn-outline btn-outline-dark">
            See All Reviews
            <ArrowRight className="btn-arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
