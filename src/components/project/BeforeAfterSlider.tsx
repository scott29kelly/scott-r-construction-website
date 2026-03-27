'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import type { ContentImage } from '@/types';

interface BeforeAfterSliderProps {
  before: ContentImage;
  after: ContentImage;
}

export function BeforeAfterSlider({ before, after }: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  function updatePosition(clientX: number) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }

  function handlePointerDown(e: React.PointerEvent) {
    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  }

  function handlePointerMove(e: React.PointerEvent) {
    if (!isDragging) return;
    updatePosition(e.clientX);
  }

  function handlePointerUp() {
    setIsDragging(false);
  }

  return (
    <div
      ref={containerRef}
      className={`relative aspect-[4/3] select-none overflow-hidden ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      role="slider"
      aria-label="Before and after comparison"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') setPosition((p) => Math.max(0, p - 2));
        if (e.key === 'ArrowRight') setPosition((p) => Math.min(100, p + 2));
      }}
    >
      {/* After image (full width, behind) */}
      <Image
        src={after.src}
        alt={after.alt}
        fill
        className="object-cover"
        sizes="(max-width: 800px) 100vw, 800px"
      />

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={before.src}
          alt={before.alt}
          fill
          className="object-cover"
          sizes="(max-width: 800px) 100vw, 800px"
        />
      </div>

      {/* Divider line */}
      <div
        className="absolute bottom-0 top-0 w-0.5 bg-white shadow-lg"
        style={{ left: `${position}%` }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-warm-black/80 text-white shadow-lg ring-2 ring-white/20 transition-transform hover:scale-110">
          <span className="text-xs font-bold">&#8596;</span>
        </div>
      </div>

      {/* Labels */}
      <span className="absolute left-3 top-3 bg-warm-black/70 px-2 py-1 text-btn-sm uppercase text-white">
        Before
      </span>
      <span className="absolute right-3 top-3 bg-warm-black/70 px-2 py-1 text-btn-sm uppercase text-white">
        After
      </span>
    </div>
  );
}
