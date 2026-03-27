'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FaqItem } from '@/types';

interface ServiceFaqProps {
  items: FaqItem[];
  serviceTitle: string;
}

export function ServiceFaq({ items, serviceTitle }: ServiceFaqProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  if (items.length === 0) return null;

  return (
    <section className="bg-cream section-padding">
      <div className="mx-auto max-w-site px-[50px] max-lg:px-6">
        <div className="text-center">
          <p className="section-label text-steel">Common Questions</p>
          <h2 className="mx-auto mt-4 max-w-[700px] font-display text-sub-heading text-charcoal max-md:text-[28px] max-md:leading-[34px]">
            {serviceTitle} FAQ
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-[800px]">
          {items.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="border-b border-sand/30"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-card-heading text-charcoal max-md:text-[18px]">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-ash transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-[500px] pb-6' : 'max-h-0'}`}
                >
                  <p className="text-body-sm text-concrete">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
