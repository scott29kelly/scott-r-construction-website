import React from 'react';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { buildContactHref } from '@/lib/contact-link';
import { CONTACT_INFO } from '@/content';

export function HomeCTA() {
  return (
    <section className="bg-navy section-padding">
      <div className="mx-auto max-w-site px-[50px] max-lg:px-6">
        <div className="mx-auto max-w-[700px] text-center">
          <p className="section-label text-white/50">Ready to Start?</p>
          <h2 className="mt-4 font-display text-section-heading text-white max-lg:text-[40px] max-lg:leading-[44px] max-md:text-[30px] max-md:leading-[34px]">
            Let&apos;s talk about your project.
          </h2>
          <p className="mt-6 text-body-lg text-white/70">
            Share the basics and Scott will follow up within one business day
            with clear next steps.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={buildContactHref({ leadSource: 'home-cta' })}
              className="btn-primary"
            >
              Request an Estimate
              <ArrowRight className="btn-arrow" />
            </Link>
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="btn-outline btn-outline-light"
            >
              <Phone size={14} />
              Call Scott
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
