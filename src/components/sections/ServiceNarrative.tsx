import React from 'react';
import type { ServiceDetail } from '@/types';

interface ServiceNarrativeProps {
  service: ServiceDetail;
}

export function ServiceNarrative({ service }: ServiceNarrativeProps) {
  return (
    <section className="bg-white section-padding">
      <div className="mx-auto max-w-site section-padding-x">
        <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
          {/* Left — narrative */}
          <div>
            <p className="section-label text-steel">About This Service</p>
            <h2 className="mt-4 font-display text-sub-heading text-charcoal">
              How This Work Typically Begins
            </h2>
            <p className="mt-6 text-body-lg text-concrete">
              {service.narrativePreview}
            </p>
            <p className="mt-6 text-body-lg text-concrete">
              {service.description}
            </p>
          </div>

          {/* Right — best fit callout */}
          <aside className="flex flex-col gap-6">
            <div className="border border-sand/30 bg-cream p-6">
              <p className="section-label text-steel">Best Fit</p>
              <p className="mt-3 text-body-sm text-charcoal/80">
                {service.bestFit}
              </p>
            </div>

            <div className="border border-sand/30 bg-cream p-6">
              <p className="section-label text-steel">Helpful to Share Upfront</p>
              <p className="mt-3 text-body-sm text-charcoal/80">
                {service.qualificationPrompt}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
