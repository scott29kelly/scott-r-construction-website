import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_INFO } from '@/content';

export function About() {
  return (
    <section className="bg-warm-black section-padding text-white">
      <div className="mx-auto max-w-site px-[50px] text-center max-lg:px-6">
        {/* Watermark icon / logo */}
        <div className="mx-auto mb-10 w-[80px]">
          <Image
            src="/images/logo.webp"
            alt="Scott Romanoski Construction"
            width={80}
            height={80}
            className="mx-auto opacity-60"
          />
        </div>

        <h2 className="mx-auto max-w-[900px] font-display text-section-heading max-lg:text-[40px] max-lg:leading-[44px] max-md:text-[30px] max-md:leading-[34px]">
          Remodeling, Additions, Decks & Patios — Crafted with {SITE_INFO.yearsExperience} Years of Hands-On Experience
        </h2>

        <p className="mx-auto mt-8 max-w-[700px] text-body-lg font-light leading-relaxed text-white/80">
          As an owner-operator, Scott is on every job site — not in a back office.
          When you hire {SITE_INFO.name}, you&apos;re getting the person whose name is on the business,
          personally invested in the outcome of your project. Licensed in {SITE_INFO.licensedIn} with
          an {SITE_INFO.bbbRating} BBB rating.
        </p>

        <div className="mt-10">
          <Link
            href="/about"
            className="btn-outline btn-outline-light"
          >
            About Us
            <ArrowRight className="btn-arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
