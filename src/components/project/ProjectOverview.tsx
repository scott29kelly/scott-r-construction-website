import React from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, Layers, Wrench } from 'lucide-react';
import type { ProjectCaseStudy } from '@/types';
import { SERVICE_DETAILS } from '@/content';
import { buildContactHref } from '@/lib/contact-link';

interface ProjectOverviewProps {
  project: ProjectCaseStudy;
}

export function ProjectOverview({ project }: ProjectOverviewProps) {
  const service = SERVICE_DETAILS.find((s) => s.id === project.serviceId);

  return (
    <section className="bg-white section-padding">
      <div className="mx-auto max-w-site px-[50px] max-lg:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          {/* Left — overview text */}
          <div>
            <p className="section-label text-steel">Project Overview</p>
            <p className="mt-6 text-body-lg leading-relaxed text-charcoal/80">
              {project.projectStory}
            </p>
          </div>

          {/* Right — metadata sidebar */}
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <div className="border border-sand/30 bg-cream p-6">
              <p className="section-label text-steel">Project Details</p>

              <div className="mt-5 grid gap-4">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-ash/80" />
                  <div>
                    <p className="text-btn-sm uppercase text-ash">Location</p>
                    <p className="mt-1 text-body-sm text-charcoal/80">{project.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Layers size={16} className="mt-0.5 shrink-0 text-ash/80" />
                  <div>
                    <p className="text-btn-sm uppercase text-ash">Scope</p>
                    <p className="mt-1 text-body-sm text-charcoal/80">{project.scope}</p>
                  </div>
                </div>

                {service && (
                  <div className="flex items-start gap-3">
                    <Wrench size={16} className="mt-0.5 shrink-0 text-ash/80" />
                    <div>
                      <p className="text-btn-sm uppercase text-ash">Service</p>
                      <p className="mt-1 text-body-sm text-charcoal/80">{service.title}</p>
                    </div>
                  </div>
                )}
              </div>

              {project.projectHighlights.length > 0 && (
                <div className="mt-5 border-t border-sand/30 pt-5">
                  <p className="text-btn-sm uppercase text-ash">Key Highlights</p>
                  <ul className="mt-3 grid gap-2">
                    {project.projectHighlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-2 text-body-sm text-charcoal/80"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-charcoal/30" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <Link
                href={buildContactHref({ leadSource: `project-detail-${project.id}-sidebar` })}
                className="btn-primary mt-6 w-full justify-center"
              >
                Start Your Project
                <ArrowRight className="btn-arrow" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
