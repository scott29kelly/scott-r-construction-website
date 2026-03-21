'use client';

import React, { useCallback, useEffect, useState } from 'react';
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

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -100 : 100, opacity: 0 }),
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery"
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-navy/95"
        onClick={onClose}
      />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-10 rounded-full p-2 text-white/70 transition-colors hover:text-white"
        aria-label="Close gallery"
      >
        <X size={28} />
      </button>

      {/* Navigation */}
      {hasNav && (
        <>
          <button
            onClick={goPrev}
            className="absolute left-4 z-10 rounded-full p-2 text-white/70 transition-colors hover:text-white"
            aria-label="Previous image"
          >
            <ChevronLeft size={36} />
          </button>
          <button
            onClick={goNext}
            className="absolute right-4 z-10 rounded-full p-2 text-white/70 transition-colors hover:text-white max-md:bottom-4 md:top-1/2 md:-translate-y-1/2"
            aria-label="Next image"
          >
            <ChevronRight size={36} />
          </button>
        </>
      )}

      {/* Image */}
      <div className="relative z-10 mx-auto flex max-h-[85vh] w-full max-w-[1100px] flex-col items-center px-16 max-md:px-4">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="relative aspect-[4/3] w-full"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain"
              sizes="(max-width: 1100px) 100vw, 1100px"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Caption & counter */}
        <div className="mt-4 text-center">
          {image.caption && (
            <p className="text-body-sm text-white/70">{image.caption}</p>
          )}
          {hasNav && (
            <p className="mt-2 text-btn-sm uppercase text-white/40">
              {index + 1} / {images.length}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
