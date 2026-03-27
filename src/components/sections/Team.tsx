import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_INFO } from '@/content';

export function Team() {
  return (
    <section id="team" className="bg-white section-padding">
      <div className="mx-auto max-w-site px-[50px] max-lg:px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Text column */}
          <div>
            <p className="section-label text-steel">Meet Your Contractor</p>

            <h2 className="mt-4 font-display text-section-heading text-charcoal max-lg:text-[40px] max-lg:leading-[44px] max-md:text-[30px] max-md:leading-[34px]">
              Scott Romanoski
            </h2>

            <p className="mt-2 font-display text-sub-heading text-ash max-md:text-[28px] max-md:leading-[34px]">
              Owner &amp; Lead Craftsman
            </p>

            <p className="mt-8 text-body-lg text-concrete">
              With {SITE_INFO.yearsExperience} years in the trade, Scott founded{' '}
              {SITE_INFO.name} on a straightforward idea: homeowners deserve a
              contractor who shows up, communicates clearly, and treats their
              home like his own.
            </p>

            <p className="mt-5 text-body-lg text-concrete">
              As an owner-operator, Scott is on every job site — managing the
              work, coordinating subs, and making sure the details match what
              was promised. Licensed in {SITE_INFO.licensedIn} with an{' '}
              {SITE_INFO.bbbRating} BBB rating and a Bilco Certified Installer
              designation.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="btn-primary btn-primary-dark"
              >
                More About Us
                <ArrowRight className="btn-arrow" />
              </Link>
              <Link
                href="/contact"
                className="btn-outline btn-outline-dark"
              >
                Get In Touch
                <ArrowRight className="btn-arrow" />
              </Link>
            </div>
          </div>

          {/* Image column */}
          <div className="relative aspect-[3/4] overflow-hidden max-lg:aspect-[4/3]">
            <Image
              src="/images/scott-romanoski-self-photo-1.jpeg"
              alt="Scott Romanoski, owner of Scott Romanoski Construction"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
