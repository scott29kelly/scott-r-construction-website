'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import type { ContentImage } from '@/types';
import { GalleryLightbox } from './GalleryLightbox';

interface ProjectGalleryProps {
  images: ContentImage[];
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (images.length === 0) return null;

  return (
    <section className="bg-cream section-padding">
      <div className="mx-auto max-w-site px-[50px] max-lg:px-6">
        <div className="text-center">
          <p className="section-label text-steel">Project Gallery</p>
          <h2 className="mx-auto mt-4 max-w-[700px] font-display text-sub-heading text-charcoal max-md:text-[28px] max-md:leading-[34px]">
            A Closer Look
          </h2>
        </div>

        <div
          className={`mt-12 grid gap-4 ${
            images.length === 1
              ? 'mx-auto max-w-[800px]'
              : images.length === 2
                ? 'sm:grid-cols-2'
                : 'sm:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {images.map((image, index) => (
            <button
              key={image.src}
              onClick={() => setSelectedIndex(index)}
              className="group relative aspect-[4/3] overflow-hidden img-shimmer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes={
                  images.length === 1
                    ? '(max-width: 800px) 100vw, 800px'
                    : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                }
              />
              <div className="absolute inset-0 bg-warm-black/0 transition-colors duration-300 group-hover:bg-charcoal/20" />
            </button>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <GalleryLightbox
          images={images}
          initialIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </section>
  );
}
