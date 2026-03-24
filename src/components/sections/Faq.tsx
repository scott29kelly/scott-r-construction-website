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
      <div className="mx-auto max-w-site px-[50px] max-lg:px-6">
        {/* Header */}
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="section-label text-navy/60">Common Questions</p>
            <h2 className="mt-4 font-display text-section-heading text-navy max-lg:text-[40px] max-lg:leading-[44px] max-md:text-[30px] max-md:leading-[34px]">
              Before You Reach Out
            </h2>
          </div>
          <p className="max-w-[520px] text-body-lg text-navy/70 lg:ml-auto">
            Answers to the questions homeowners usually ask before starting a
            project conversation.
          </p>
        </div>

        {/* FAQ grid */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {resolvedItems.map((item) => (
            <div
              key={item.id}
              className="border border-border bg-white p-[35px]"
            >
              <h3 className="font-display text-[24px] leading-[30px] text-navy">
                {item.question}
              </h3>
              <p className="mt-4 text-body-sm text-navy/70">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
