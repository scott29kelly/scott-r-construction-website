import React from 'react';
import { Star } from 'lucide-react';
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

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white section-padding">
      <div className="mx-auto max-w-site px-[50px] max-lg:px-6">
        {/* Header */}
        <div className="text-center">
          <p className="section-label text-steel">What Clients Say</p>
          <h2 className="mx-auto mt-4 max-w-[800px] font-display text-section-heading text-charcoal max-lg:text-[40px] max-lg:leading-[44px] max-md:text-[30px] max-md:leading-[34px]">
            Trust Built on Work People Remember
          </h2>
        </div>

        {/* Testimonial cards — staggered layout */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {TESTIMONIALS.map((testimonial, index) => {
            /* Stagger: odd cards get extra top margin on md+ */
            const stagger = index % 2 === 1 ? 'md:mt-12' : '';

            return (
              <article
                key={testimonial.id}
                className={`relative overflow-hidden border border-sand/30 bg-cream p-[35px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${stagger}`}
              >
                <span className="absolute -top-2 right-4 select-none pointer-events-none font-display text-[80px] leading-none text-charcoal/[0.04]">&ldquo;</span>
                <StarRating count={testimonial.stars} />

                <blockquote className="mt-6 font-display text-card-heading leading-[1.35] text-charcoal max-md:text-[24px] max-md:leading-[32px]">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div className="mt-8 border-t border-sand/30 pt-6">
                  <p className="font-body text-[15px] font-medium uppercase tracking-nav text-charcoal">
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
      </div>
    </section>
  );
}
