'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { ContentImage } from '@/types';

interface GalleryLightboxProps {
  images: ContentImage[];
  initialIndex: number;
  onClose: () => void;
}

export function GalleryLightbox({
  images,
  initialIndex,
  onClose,
}: GalleryLightboxProps) {
  const [index, setIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(0);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const image = images[index];
  const hasNav = images.length > 1;

  const goTo = useCallback(
    (next: number) => {
      setDirection(next > index ? 1 : -1);
      setIndex(next);
    },
    [index]
  );

  const goPrev = useCallback(() => {
    goTo((index - 1 + images.length) % images.length);
  }, [goTo, index, images.length]);

  const goNext = useCallback(() => {
    goTo((index + 1) % images.length);
  }, [goTo, index, images.length]);

  // Keyboard navigation
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasNav) goPrev();
      if (e.key === 'ArrowRight' && hasNav) goNext();
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose, goPrev, goNext, hasNav]);

  // Body scroll lock
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // Auto-scroll active thumbnail into view
  useEffect(() => {
    if (!thumbsRef.current) return;
    const activeThumb = thumbsRef.current.children[index] as HTMLElement;
    if (activeThumb) {
      activeThumb.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [index]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-warm-black/95"
        onClick={onClose}
      />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
        aria-label="Close gallery"
      >
        <X size={22} />
      </button>

      {/* Counter */}
      {hasNav && (
        <div className="relative z-10 mb-3 text-center">
          <p className="text-btn-sm text-white/50">
            {index + 1} of {images.length}
          </p>
        </div>
      )}

      {/* Main image area */}
      <div className="relative z-10 flex w-full max-w-[1200px] items-center px-4 md:px-16">
        {/* Prev arrow */}
        {hasNav && (
          <button
            onClick={goPrev}
            className="absolute left-2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white md:left-4"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>
        )}

        {/* Image */}
        <div className="w-full">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.15, ease: 'easeInOut' }}
              className="relative aspect-[4/3] w-full max-h-[70vh]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next arrow */}
        {hasNav && (
          <button
            onClick={goNext}
            className="absolute right-2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white md:right-4"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        )}
      </div>

      {/* Caption */}
      {image.caption && (
        <div className="relative z-10 mt-3 px-4 text-center">
          <p className="text-body-sm text-white/60">{image.caption}</p>
        </div>
      )}

      {/* Thumbnail strip */}
      {hasNav && (
        <div className="relative z-10 mt-4 w-full max-w-[1200px] px-4 md:px-16">
          <div
            ref={thumbsRef}
            className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide"
          >
            {images.map((thumb, i) => (
              <button
                key={thumb.src}
                onClick={() => goTo(i)}
                className={`relative h-12 w-16 shrink-0 overflow-hidden transition-all ${
                  i === index
                    ? 'ring-2 ring-white scale-105'
                    : 'opacity-50 hover:opacity-80'
                }`}
                aria-label={`Go to image ${i + 1}`}
              >
                <Image
                  src={thumb.src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
