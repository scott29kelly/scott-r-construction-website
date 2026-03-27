import React from 'react';
import type { FaqItem } from '@/types';
import { FAQ_ITEMS } from '@/content';

interface FaqProps {
  items?: FaqItem[];
}

export function Faq({ items }: FaqProps) {
  const resolvedItems = items ?? FAQ_ITEMS.filter((item) => !item.serviceId);

  return (
    <section className="bg-cream section-padding">
      <div className="mx-auto max-w-site section-padding-x">
        {/* Header */}
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="section-label text-steel">Common Questions</p>
            <h2 className="mt-4 font-display text-section-heading text-charcoal">
              Before You Reach Out
            </h2>
          </div>
          <p className="max-w-content-sm text-body-lg text-concrete lg:ml-auto">
            Answers to the questions homeowners usually ask before starting a
            project conversation.
          </p>
        </div>

        {/* FAQ grid */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {resolvedItems.map((item) => (
            <div
              key={item.id}
              className="border border-sand/30 bg-white p-card-pad"
            >
              <h3 className="font-display text-intro text-charcoal">
                {item.question}
              </h3>
              <p className="mt-4 text-body-sm text-concrete">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
