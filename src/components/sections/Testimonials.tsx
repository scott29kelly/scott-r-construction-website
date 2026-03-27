'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { TESTIMONIALS } from '@/content';

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < count ? 'fill-accent text-accent' : 'fill-accent/20 text-accent/20'}
        />
      ))}
    </div>
  );
}

// 3D Tilt Card Component
function TestimonialCard({ testimonial }: { testimonial: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const smoothX = useSpring(rotateX, { stiffness: 300, damping: 20 });
  const smoothY = useSpring(rotateY, { stiffness: 300, damping: 20 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct * 200);
    y.set(yPct * 200);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: smoothX,
        rotateY: smoothY,
        transformPerspective: 1000
      }}
      className="relative min-w-[85vw] md:min-w-[450px] shrink-0 overflow-hidden rounded-[32px] border border-charcoal/5 bg-white p-8 md:p-12 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.05)] cursor-grab active:cursor-grabbing transition-colors hover:border-accent/30"
    >
      <span className="absolute -top-6 right-6 select-none pointer-events-none font-display text-[120px] leading-none text-accent/[0.08]">&ldquo;</span>
      
      <div className="flex items-center gap-4 mb-8">
        <StarRating count={testimonial.stars} />
      </div>

      <blockquote className="font-display text-[22px] md:text-[28px] leading-[1.3] text-charcoal mb-10">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <div className="border-t border-accent/20 pt-6">
        <p className="font-body text-[12px] font-bold tracking-[2px] uppercase text-charcoal mb-1">
          {testimonial.author}
        </p>
        <p className="text-[14px] text-concrete italic font-serif">
          {testimonial.sourceLabel}
        </p>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Re-calculate drag constraints when window resizes
    const calculateWidth = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
      }
    };
    
    calculateWidth();
    window.addEventListener('resize', calculateWidth);
    return () => window.removeEventListener('resize', calculateWidth);
  }, []);

  return (
    <section id="testimonials" className="bg-cream section-padding overflow-hidden">
      <div className="mx-auto max-w-site section-padding-x">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent" />
              <p className="font-body text-[11px] font-bold tracking-[3px] uppercase text-accent">Client Stories</p>
            </div>
            <h2 className="font-display text-[40px] md:text-[56px] leading-[1.1] text-charcoal">
              Trust Built on Work People Remember
            </h2>
          </div>
          <p className="text-body-sm text-charcoal/60 uppercase tracking-widest hidden md:block animate-pulse">
            Drag to explore →
          </p>
        </div>
      </div>

      {/* Drag Slider */}
      <motion.div ref={containerRef} className="cursor-interact w-full overflow-hidden pl-5 md:pl-[calc(max(0px,(100vw-1400px))/2+50px)]">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{ cursor: "grabbing" }}
          className="flex gap-6 md:gap-8 pb-12 pt-4 px-4 pr-[20vw]"
        >
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
