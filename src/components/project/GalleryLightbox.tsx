'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { ContentImage } from '@/types';
import { useFocusTrap } from '@/hooks/useFocusTrap';

interface GalleryLightboxProps {
  images: ContentImage[];
  initialIndex: number;
  onClose: () => void;
}

const MIN_SCALE = 1;
const MAX_SCALE = 4;
const DOUBLE_CLICK_SCALE = 2.5;
const ZOOM_STEP = 0.3;

function clamp(val: number, min: number, max: number) {
  return Math.min(Math.max(val, min), max);
}

export function GalleryLightbox({
  images,
  initialIndex,
  onClose,
}: GalleryLightboxProps) {
  const [index, setIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);

  useFocusTrap(dialogRef, true);
  const image = images[index];
  const hasNav = images.length > 1;

  // Zoom & pan state
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const translateStart = useRef({ x: 0, y: 0 });
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Pinch state
  const lastPinchDist = useRef<number | null>(null);

  const isZoomed = scale > 1.05;

  // Constrain translate so image edges don't leave viewport
  function constrainTranslate(tx: number, ty: number, s: number) {
    if (s <= 1) return { x: 0, y: 0 };
    const maxX = ((s - 1) / (2 * s)) * 100;
    const maxY = ((s - 1) / (2 * s)) * 100;
    // Convert percentage-based limits to pixel-based if we have the container
    const container = imageContainerRef.current;
    if (container) {
      const rect = container.getBoundingClientRect();
      const maxPx = (maxX / 100) * rect.width;
      const maxPy = (maxY / 100) * rect.height;
      return {
        x: clamp(tx, -maxPx, maxPx),
        y: clamp(ty, -maxPy, maxPy),
      };
    }
    return { x: clamp(tx, -200, 200), y: clamp(ty, -200, 200) };
  }

  // Reset zoom on image change
  useEffect(() => {
    setScale(1);
    setTranslate({ x: 0, y: 0 });
  }, [index]);

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
      if (e.key === 'ArrowLeft' && hasNav && !isZoomed) goPrev();
      if (e.key === 'ArrowRight' && hasNav && !isZoomed) goNext();
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose, goPrev, goNext, hasNav, isZoomed]);

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

  // Mouse wheel zoom
  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -ZOOM_STEP : ZOOM_STEP;
      setScale((prev) => {
        const next = clamp(prev + delta, MIN_SCALE, MAX_SCALE);
        if (next <= 1) {
          setTranslate({ x: 0, y: 0 });
        } else {
          setTranslate((t) => constrainTranslate(t.x, t.y, next));
        }
        return next;
      });
    },
    []
  );

  // Double click to toggle zoom
  const handleDoubleClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (isZoomed) {
        setScale(1);
        setTranslate({ x: 0, y: 0 });
      } else {
        setScale(DOUBLE_CLICK_SCALE);
        // Zoom toward click position
        const container = imageContainerRef.current;
        if (container) {
          const rect = container.getBoundingClientRect();
          const offsetX = e.clientX - rect.left - rect.width / 2;
          const offsetY = e.clientY - rect.top - rect.height / 2;
          setTranslate(
            constrainTranslate(-offsetX * 0.5, -offsetY * 0.5, DOUBLE_CLICK_SCALE)
          );
        }
      }
    },
    [isZoomed]
  );

  // Pointer down — start drag (when zoomed)
  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (!isZoomed) return;
      if (e.pointerType === 'touch') return; // handled by touch events for pinch
      e.preventDefault();
      setIsDragging(true);
      dragStart.current = { x: e.clientX, y: e.clientY };
      translateStart.current = { ...translate };
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    },
    [isZoomed, translate]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - dragStart.current.x;
      const dy = e.clientY - dragStart.current.y;
      setTranslate(
        constrainTranslate(
          translateStart.current.x + dx,
          translateStart.current.y + dy,
          scale
        )
      );
    },
    [isDragging, scale]
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Touch events for pinch-to-zoom and pan
  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (e.touches.length === 2) {
        // Start pinch
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        lastPinchDist.current = Math.hypot(dx, dy);
      } else if (e.touches.length === 1 && isZoomed) {
        // Start single-finger pan
        setIsDragging(true);
        dragStart.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        };
        translateStart.current = { ...translate };
      }
    },
    [isZoomed, translate]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (e.touches.length === 2 && lastPinchDist.current !== null) {
        e.preventDefault();
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const dist = Math.hypot(dx, dy);
        const delta = (dist - lastPinchDist.current) * 0.01;
        lastPinchDist.current = dist;
        setScale((prev) => {
          const next = clamp(prev + delta, MIN_SCALE, MAX_SCALE);
          if (next <= 1) {
            setTranslate({ x: 0, y: 0 });
          } else {
            setTranslate((t) => constrainTranslate(t.x, t.y, next));
          }
          return next;
        });
      } else if (e.touches.length === 1 && isDragging) {
        const dx = e.touches[0].clientX - dragStart.current.x;
        const dy = e.touches[0].clientY - dragStart.current.y;
        setTranslate(
          constrainTranslate(
            translateStart.current.x + dx,
            translateStart.current.y + dy,
            scale
          )
        );
      }
    },
    [isDragging, scale]
  );

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (e.touches.length < 2) {
        lastPinchDist.current = null;
      }
      if (e.touches.length === 0) {
        setIsDragging(false);
      }
    },
    []
  );

  const cursorClass = !isZoomed
    ? 'cursor-zoom-in'
    : isDragging
      ? 'cursor-grabbing'
      : 'cursor-grab';

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <div
      ref={dialogRef}
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
        className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
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
        <div className="w-full overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={isZoomed ? undefined : variants}
              initial={isZoomed ? undefined : 'enter'}
              animate={isZoomed ? undefined : 'center'}
              exit={isZoomed ? undefined : 'exit'}
              transition={{ duration: 0.15, ease: 'easeInOut' }}
              className={`relative aspect-[4/3] w-full max-h-[60vh] sm:max-h-[70vh] ${cursorClass}`}
              ref={imageContainerRef}
              onWheel={handleWheel}
              onDoubleClick={handleDoubleClick}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{ touchAction: isZoomed ? 'none' : 'auto' }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  transform: `scale(${scale}) translate(${translate.x / scale}px, ${translate.y / scale}px)`,
                  transformOrigin: 'center center',
                  transition: isDragging ? 'none' : 'transform 0.15s ease-out',
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                  draggable={false}
                />
              </div>
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
