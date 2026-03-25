'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import type { ProjectCaseStudy, ContentImage } from '@/types';
import { GalleryLightbox } from './GalleryLightbox';

interface ProjectStoryProps {
  project: ProjectCaseStudy;
  storyImages: ContentImage[];
  allImages: ContentImage[];
}

const narrativeSections = [
  { label: 'Homeowner Goal', key: 'homeownerGoal' as const },
  { label: 'What Was Needed', key: 'homeownerNeed' as const },
  { label: "Scott's Approach", key: 'scottApproach' as const },
  { label: 'The Result', key: 'result' as const },
];

function distributeImages(images: ContentImage[]): ContentImage[][] {
  if (images.length === 0) return [[], [], [], []];
  if (images.length === 1) return [[images[0]], [], [], []];
  if (images.length === 2) return [[images[0]], [images[1]], [], []];
  if (images.length === 3) return [[images[0]], [images[1]], [images[2]], []];
  if (images.length === 4) return [[images[0]], [images[1]], [images[2]], [images[3]]];
  // 5+: 1, 1, 2, rest
  return [
    [images[0]],
    [images[1]],
    images.slice(2, 4),
    images.slice(4),
  ];
}

export function ProjectStory({ project, storyImages, allImages }: ProjectStoryProps) {
  const distributed = distributeImages(storyImages);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  function openLightbox(img: ContentImage) {
    const idx = allImages.findIndex((i) => i.src === img.src);
    setSelectedIndex(idx >= 0 ? idx : 0);
  }

  return (
    <section className="bg-cream section-padding">
      <div className="mx-auto max-w-site px-[50px] max-lg:px-6">
        <p className="section-label text-navy/60">Project Story</p>

        <div className="mt-8 grid gap-16">
          {narrativeSections.map(({ label, key }, sectionIndex) => {
            const sectionImages = distributed[sectionIndex];
            const isEven = sectionIndex % 2 === 1;
            const isResult = key === 'result';

            return (
              <div key={key}>
                {sectionImages.length > 0 ? (
                  <div
                    className={`grid items-start gap-8 lg:grid-cols-2 ${
                      isEven ? 'lg:direction-rtl' : ''
                    }`}
                  >
                    <div className={isEven ? 'lg:order-2' : ''}>
                      <h2 className="font-display text-card-heading text-navy">
                        {label}
                      </h2>
                      <p className="mt-3 text-body-lg text-navy/70">
                        {project[key]}
                      </p>
                      {isResult && (
                        <ResultDetails project={project} />
                      )}
                    </div>
                    <div className={`grid gap-4 ${sectionImages.length > 1 ? 'grid-cols-2' : ''} ${isEven ? 'lg:order-1' : ''}`}>
                      {sectionImages.map((img) => (
                        <button
                          key={img.src}
                          type="button"
                          onClick={() => openLightbox(img)}
                          className="group relative aspect-[4/3] overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
                        >
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-navy/0 transition-colors duration-300 group-hover:bg-navy/20" />
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="max-w-[720px]">
                    <h2 className="font-display text-card-heading text-navy">
                      {label}
                    </h2>
                    <p className="mt-3 text-body-lg text-navy/70">
                      {project[key]}
                    </p>
                    {isResult && (
                      <ResultDetails project={project} />
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Tags */}
        <div className="mt-12 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-border px-3 py-1.5 text-btn-sm uppercase text-navy/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <GalleryLightbox
          images={allImages}
          initialIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </section>
  );
}

function ResultDetails({ project }: { project: ProjectCaseStudy }) {
  return (
    <div className="mt-6 grid gap-3">
      {project.outcomePoints.map((point) => (
        <div key={point} className="flex gap-3">
          <CheckCircle size={18} className="mt-0.5 shrink-0 text-navy/40" />
          <p className="text-body-sm text-navy/80">{point}</p>
        </div>
      ))}
    </div>
  );
}
