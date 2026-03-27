'use client';

import React from 'react';

export function ServiceAreaMap() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (!apiKey) return null;

  const src = `https://www.google.com/maps/embed/v1/view?key=${apiKey}&center=40.19,-74.91&zoom=11`;

  return (
    <section className="bg-cream section-padding">
      <div className="mx-auto max-w-site px-[50px] max-lg:px-6">
        <div className="text-center">
          <p className="section-label text-steel">Service Area</p>
          <h2 className="mx-auto mt-4 max-w-[800px] font-display text-section-heading text-charcoal max-lg:text-[40px] max-lg:leading-[44px] max-md:text-[30px] max-md:leading-[34px]">
            Serving Bucks County &amp; Surrounding Areas
          </h2>
        </div>
        <div className="mt-12 overflow-hidden border border-sand/30">
          <iframe
            src={src}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Scott Romanoski Construction service area map"
          />
        </div>
      </div>
    </section>
  );
}
