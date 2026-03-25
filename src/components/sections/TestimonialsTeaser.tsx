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
          size={16}
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
      <div className="mx-auto max-w-site px-[50px] max-lg:px-6">
        {/* Header */}
        <div className="text-center">
          <p className="section-label text-navy/60">From Our Clients</p>
          <h2 className="mx-auto mt-4 max-w-[800px] font-display text-section-heading text-navy max-lg:text-[40px] max-lg:leading-[44px] max-md:text-[30px] max-md:leading-[34px]">
            Trust Built on Work People Remember
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="relative mt-16">
          {totalPairs > 1 && (
            <div className="absolute -left-5 top-1/2 z-10 -translate-y-1/2 max-lg:hidden">
              <button
                onClick={() => setPairIndex((i) => (i - 1 + totalPairs) % totalPairs)}
                className="flex h-10 w-10 items-center justify-center border border-border bg-white text-navy/60 transition-colors hover:bg-cream hover:text-navy"
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
                  className={`border border-border bg-cream p-[35px] transition-opacity duration-300 ${stagger}`}
                >
                  <StarRating count={testimonial.stars} />

                  <blockquote className="mt-6 font-display text-card-heading leading-[1.35] text-navy max-md:text-[24px] max-md:leading-[32px]">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  <div className="mt-8 border-t border-border pt-6">
                    <p className="font-body text-[15px] font-medium uppercase tracking-nav text-navy">
                      {testimonial.author}
                    </p>
                    <p className="mt-1 text-body-sm text-navy/50">
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
                className="flex h-10 w-10 items-center justify-center border border-border bg-white text-navy/60 transition-colors hover:bg-cream hover:text-navy"
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
              className="flex h-10 w-10 items-center justify-center border border-border bg-white text-navy/60 transition-colors hover:bg-cream hover:text-navy"
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="text-body-sm text-navy/50">
              {pairIndex + 1} / {totalPairs}
            </span>
            <button
              onClick={() => setPairIndex((i) => (i + 1) % totalPairs)}
              className="flex h-10 w-10 items-center justify-center border border-border bg-white text-navy/60 transition-colors hover:bg-cream hover:text-navy"
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
