'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Menu, Phone, X } from 'lucide-react';
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
      <header className="absolute inset-x-0 top-0 z-40 px-4 pt-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden border border-sand/30 bg-white/78 px-4 py-4 shadow-[0_20px_55px_rgba(38,35,32,0.08)] backdrop-blur-xl md:px-6 md:py-5">
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent"
            />

            <div className="flex items-center justify-between gap-4">
              <Link href="/" className="group relative z-50 flex min-w-0 items-center gap-3">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden border border-sand/25 bg-white md:h-14 md:w-14">
                  <Image
                    src="/images/logo.webp"
                    alt="Scott Romanoski Construction Logo"
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="min-w-0">
                  <p className="truncate font-display text-lg font-semibold tracking-[0.01em] text-charcoal">
                    Scott Romanoski
                  </p>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-accent-dark md:text-[11px]">
                    Construction
                  </p>
                </div>
              </Link>

              <nav className="hidden items-center gap-8 lg:flex">
                <ul className="flex items-center gap-6 xl:gap-7">
                  {PRIMARY_NAV_LINKS.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className={cn(
                          'group relative font-mono text-[11px] font-bold uppercase tracking-[0.18em] transition-colors duration-300',
                          pathname === link.href
                            ? 'text-charcoal'
                            : 'text-steel hover:text-charcoal'
                        )}
                      >
                        {link.name}
                        <span
                          className={cn(
                            'absolute -bottom-2 left-0 h-px bg-accent transition-all duration-300',
                            pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                          )}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-3 border-l border-sand/25 pl-6">
                  <a
                    href="tel:2155191795"
                    className="inline-flex items-center gap-2 border border-sand/35 bg-white/70 px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-charcoal transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-white"
                  >
                    <Phone size={14} />
                    Call Scott
                  </a>
                  <Link
                    href={buildContactHref({ leadSource: 'navbar-primary' })}
                    className="inline-flex items-center justify-center border border-accent bg-accent px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-warm-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-light"
                  >
                    Request Estimate
                  </Link>
                </div>
              </nav>

              <div className="flex items-center gap-3 lg:hidden">
                <Link
                  href={buildContactHref({ leadSource: 'navbar-mobile-quick-cta' })}
                  className="hidden border border-accent bg-accent px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-warm-black sm:inline-flex"
                >
                  Estimate
                </Link>
                <button
                  className="relative z-50 inline-flex h-12 w-12 items-center justify-center border border-sand/30 bg-white/75 text-charcoal transition-colors duration-300 hover:border-accent hover:bg-white"
                  onClick={() => setMobileMenuOpen((prev) => !prev)}
                  aria-label="Toggle navigation"
                  aria-expanded={mobileMenuOpen}
                  aria-controls="mobile-navigation"
                >
                  {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[rgba(249,245,238,0.82)] px-5 pb-8 pt-28 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto flex h-full max-w-xl flex-col">
              <motion.div
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="site-panel p-6 text-charcoal"
              >
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-accent">
                  Owner-led remodeling
                </p>
                <h2 className="mt-4 max-w-lg font-display text-3xl leading-tight text-charcoal">
                  Clear communication, well-built work, and one direct point of contact.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-steel">
                  Use the menu below to jump straight to the page you need, or request an
                  estimate now.
                </p>
              </motion.div>

              <ul className="mt-6 grid gap-3">
                {PRIMARY_NAV_LINKS.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={shouldReduceMotion ? undefined : { opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: shouldReduceMotion ? 0 : index * 0.06 + 0.08,
                      duration: 0.35,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        'flex items-center justify-between border px-5 py-4 font-display text-2xl text-charcoal transition-all duration-300',
                        pathname === link.href
                          ? 'border-accent/40 bg-white'
                          : 'border-sand/30 bg-white/70 hover:border-accent/40 hover:bg-white'
                      )}
                    >
                      {link.name}
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-dark">
                        Open
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto grid gap-3 pt-6 sm:grid-cols-2">
                <a
                  href="tel:2155191795"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-2 border border-sand/35 bg-white/75 px-5 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-charcoal"
                >
                  <Phone size={16} />
                  Call Scott
                </a>
                <Link
                  href={buildContactHref({ leadSource: 'mobile-nav-primary' })}
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center border border-accent bg-accent px-5 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-warm-black"
                >
                  Request Estimate
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
