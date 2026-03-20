'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { buildContactHref } from '@/lib/contact-link';
import { PRIMARY_NAV_LINKS } from '@/lib/navigation';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-[9999] bg-navy"
        style={{ borderBottom: '0.667px solid rgba(255,255,255,0.36)' }}
      >
        <div className="mx-auto flex max-w-site items-center justify-between px-[50px] py-[25px] max-lg:px-5 max-lg:py-4">
          {/* Logo — 20% */}
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/images/logo.webp"
              alt="Scott Romanoski Construction"
              width={187}
              height={50}
              className="h-auto w-[140px] lg:w-[187px]"
              priority
            />
          </Link>

          {/* Nav Links — 61% centered */}
          <nav className="hidden items-center gap-0 lg:flex">
            {PRIMARY_NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'px-[17px] py-2 font-body text-nav-link uppercase transition-opacity duration-300',
                  pathname === link.href
                    ? 'text-white'
                    : 'text-white/80 hover:text-white'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA button — 20% right */}
          <div className="hidden lg:block">
            <Link
              href={buildContactHref({ leadSource: 'navbar-primary' })}
              className="btn-outline btn-outline-light"
              style={{ padding: '14px 28px' }}
            >
              Book a Consult
              <ArrowRight className="btn-arrow" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="inline-flex h-11 w-11 items-center justify-center text-white lg:hidden"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9998] bg-navy px-6 pb-8 pt-24 lg:hidden"
          >
            <nav className="flex h-full flex-col">
              <ul className="space-y-1">
                {PRIMARY_NAV_LINKS.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 + 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        'block py-4 font-display text-2xl transition-colors',
                        pathname === link.href
                          ? 'text-white'
                          : 'text-white/70 hover:text-white'
                      )}
                      style={{ borderBottom: '0.667px solid rgba(255,255,255,0.12)' }}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <Link
                  href={buildContactHref({ leadSource: 'mobile-nav-primary' })}
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary btn-primary-light w-full justify-center"
                >
                  Book a Consult
                  <ArrowRight className="btn-arrow" />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
