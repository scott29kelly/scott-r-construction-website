import React from 'react';
import { Ear } from 'lucide-react';

interface ListeningPointsProps {
  points: string[];
}

export function ListeningPoints({ points }: ListeningPointsProps) {
  return (
    <section className="bg-cream section-padding">
      <div className="mx-auto max-w-site px-[50px] max-lg:px-6">
        <div className="text-center">
          <p className="section-label text-navy/60">The First Conversation</p>
          <h2 className="mx-auto mt-4 max-w-[700px] font-display text-sub-heading text-navy max-md:text-[28px] max-md:leading-[34px]">
            What Scott Listens For
          </h2>
          <p className="mx-auto mt-6 max-w-[580px] text-body-lg text-navy/70">
            Every estimate starts with understanding what is driving the project.
            Here is what Scott pays attention to in the first conversation.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {points.map((point) => (
            <div
              key={point}
              className="flex gap-4 border border-border bg-white p-6"
            >
              <Ear size={20} className="mt-0.5 shrink-0 text-navy/40" />
              <p className="text-body-sm text-navy/80">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
