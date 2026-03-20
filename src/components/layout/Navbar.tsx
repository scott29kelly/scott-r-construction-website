'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Menu, Phone, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { buildContactHref } from '@/lib/contact-link';
import { SCHEDULING_SIGNALS, SITE_INFO } from '@/content';
import { PRIMARY_NAV_LINKS } from '@/lib/navigation';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 28);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-5">
        <div className="mx-auto max-w-[90rem]">
          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    y: 0,
                    scale: isScrolled ? 0.985 : 1,
                  }
            }
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              'relative overflow-hidden border shadow-[0_22px_60px_rgba(23,20,18,0.18)] backdrop-blur-xl transition-colors duration-300',
              isScrolled
                ? 'border-white/10 bg-[rgba(29,25,22,0.9)]'
                : 'border-white/15 bg-[rgba(40,34,30,0.8)]'
            )}
          >
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent"
            />

            <div className="hidden items-center justify-between border-b border-white/10 px-6 py-3 lg:flex">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-warm-sand/80">
                Owner-led residential construction | Bucks County + nearby South Jersey
              </p>
              <div className="flex items-center gap-4">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white/58">
                  {SCHEDULING_SIGNALS.navMessage}
                </p>
                <a
                  href="tel:2155191795"
                  className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-colors hover:text-warm-sand"
                >
                  <Phone size={13} />
                  (215) 519-1795
                </a>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 px-4 py-4 md:px-6 md:py-5">
              <Link href="/" className="group relative z-50 flex min-w-0 items-center gap-3">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden border border-white/12 bg-white/90 shadow-[0_14px_32px_rgba(0,0,0,0.12)] md:h-14 md:w-14">
                  <Image
                    src="/images/logo.webp"
                    alt="Scott Romanoski Construction Logo"
                    fill
                    sizes="56px"
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="min-w-0">
                  <p className="truncate font-display text-lg font-semibold tracking-[0.01em] text-white md:text-[1.3rem]">
                    Scott Romanoski
                  </p>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-warm-sand md:text-[11px]">
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
                            ? 'text-white'
                            : 'text-white/60 hover:text-white'
                        )}
                      >
                        {link.name}
                        <span
                          className={cn(
                            'absolute -bottom-2 left-0 h-px bg-warm-sand transition-all duration-300',
                            pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                          )}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-3 border-l border-white/10 pl-6">
                  <div className="text-right">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/48">
                      Since {SITE_INFO.established}
                    </p>
                    <p className="text-sm leading-relaxed text-white/72">
                      Direct owner contact from estimate to walkthrough
                    </p>
                  </div>
                  <a
                    href="tel:2155191795"
                    className="inline-flex items-center gap-2 border border-white/12 bg-white/6 px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
                  >
                    <Phone size={14} />
                    Call Scott
                  </a>
                  <Link
                    href={buildContactHref({ leadSource: 'navbar-primary' })}
                    className="inline-flex items-center justify-center gap-2 border border-accent bg-accent px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-warm-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-light"
                  >
                    Request Estimate
                    <ArrowRight size={14} />
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
                  className="relative z-50 inline-flex h-12 w-12 items-center justify-center border border-white/12 bg-white/8 text-white transition-colors duration-300 hover:border-white/22 hover:bg-white/12"
                  onClick={() => setMobileMenuOpen((prev) => !prev)}
                  aria-label="Toggle navigation"
                  aria-expanded={mobileMenuOpen}
                  aria-controls="mobile-navigation"
                >
                  {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
              </div>
            </div>
          </motion.div>
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
            className="fixed inset-0 z-40 bg-[rgba(23,20,18,0.92)] px-5 pb-8 pt-28 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto flex h-full max-w-xl flex-col">
              <motion.div
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="site-panel-dark bg-noise p-6 text-cream"
              >
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-warm-sand">
                  Owner-led remodeling
                </p>
                <h2 className="mt-4 max-w-lg font-display text-3xl leading-tight text-cream">
                  Quietly premium work, direct communication, and one accountable builder.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-ash">
                  Use the menu below to jump straight to the page you need, then reach out with
                  your town, timing, and project goals for a clearer first reply.
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
                        'flex items-center justify-between border px-5 py-4 font-display text-2xl transition-all duration-300',
                        pathname === link.href
                          ? 'border-accent/40 bg-white/92 text-charcoal'
                          : 'border-white/12 bg-white/6 text-cream hover:border-accent/40 hover:bg-white/10'
                      )}
                    >
                      {link.name}
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-warm-sand">
                        Open
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto grid gap-3 pt-6">
                <div className="border border-white/10 bg-white/6 px-5 py-4">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-warm-sand">
                    What to include
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ash">
                    Project type, town, and start window usually give Scott enough context for a
                    more useful first response.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <a
                    href="tel:2155191795"
                    onClick={() => setMobileMenuOpen(false)}
                    className="inline-flex items-center justify-center gap-2 border border-white/12 bg-white/8 px-5 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-cream"
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
