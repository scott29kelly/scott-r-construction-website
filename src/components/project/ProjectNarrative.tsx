import React from 'react';
import { CheckCircle } from 'lucide-react';
import type { ProjectCaseStudy } from '@/types';

interface ProjectNarrativeProps {
  project: ProjectCaseStudy;
}

const narrativeSections = [
  { label: 'Homeowner Goal', key: 'homeownerGoal' as const },
  { label: 'What Was Needed', key: 'homeownerNeed' as const },
  { label: "Scott's Approach", key: 'scottApproach' as const },
  { label: 'The Result', key: 'result' as const },
];

export function ProjectNarrative({ project }: ProjectNarrativeProps) {
  return (
    <section className="bg-white section-padding">
      <div className="mx-auto max-w-site px-[50px] max-lg:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          {/* Left — story sections */}
          <div>
            <p className="section-label text-navy/60">Project Story</p>
            <div className="mt-8 grid gap-10">
              {narrativeSections.map(({ label, key }) => (
                <div key={key}>
                  <h2 className="font-display text-card-heading text-navy">
                    {label}
                  </h2>
                  <p className="mt-3 text-body-lg text-navy/70">
                    {project[key]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — outcome points */}
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <div className="border border-border bg-cream p-6">
              <p className="section-label text-navy/60">Key Outcomes</p>
              <div className="mt-4 grid gap-4">
                {project.outcomePoints.map((point) => (
                  <div key={point} className="flex gap-3">
                    <CheckCircle
                      size={18}
                      className="mt-0.5 shrink-0 text-navy/40"
                    />
                    <p className="text-body-sm text-navy/80">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-border px-3 py-1.5 text-btn-sm uppercase text-navy/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
