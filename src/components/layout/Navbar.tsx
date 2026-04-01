'use client';

import React, { useEffect, useRef, useState } from 'react';
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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Escape key handler
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  // Focus first link when menu opens
  useEffect(() => {
    if (mobileMenuOpen) {
      // Small delay to allow animation to start
      requestAnimationFrame(() => {
        firstLinkRef.current?.focus();
      });
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-[9999] border-b-nav transition-all duration-300',
          scrolled
            ? 'bg-warm-black/95 shadow-lg backdrop-blur-md'
            : 'bg-warm-black'
        )}
      >
        <div
          className={cn(
            'mx-auto flex max-w-site items-center justify-between px-[50px] transition-all duration-300 max-lg:px-5 max-lg:py-2',
            scrolled ? 'py-[9px]' : 'py-[12px]'
          )}
        >
          {/* Logo — 20% */}
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/images/logo.webp"
              alt="Scott Romanoski Construction"
              width={187}
              height={50}
              className={cn(
                'h-auto w-[140px] transition-all duration-300',
                scrolled ? 'lg:w-[130px]' : 'lg:w-[150px]'
              )}
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
              className="btn-outline btn-outline-light px-[22px] py-2.5"
            >
              Book a Consult
              <ArrowRight className="btn-arrow" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            ref={hamburgerRef}
            className="inline-flex h-11 w-11 items-center justify-center text-white lg:hidden"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9998] bg-warm-black px-6 pb-8 pt-16 lg:hidden"
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
                      ref={index === 0 ? firstLinkRef : undefined}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        'block border-b-mobile-nav py-4 font-display text-2xl transition-colors',
                        pathname === link.href
                          ? 'text-white'
                          : 'text-white/70 hover:text-white'
                      )}
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
