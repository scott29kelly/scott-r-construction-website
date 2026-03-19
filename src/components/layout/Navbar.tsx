'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { Menu, Phone, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SCHEDULING_SIGNALS } from '@/lib/constants';
import { buildContactHref } from '@/lib/contact-link';
import { PRIMARY_NAV_LINKS } from '@/lib/navigation';
import { cn } from '@/lib/utils';

const navStats = [
  {
    label: 'Owner led',
    value: 'Scott stays on the job from estimate through walkthrough.',
  },
  {
    label: 'Response',
    value: 'Most estimate requests hear back within one business day.',
  },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.25,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div
            className={cn(
              'relative overflow-hidden border border-sand/15 bg-warm-black/68 px-4 py-4 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-500 md:px-6',
              isScrolled ? 'md:py-4' : 'md:py-5'
            )}
          >
            <motion.span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px origin-left bg-gradient-to-r from-transparent via-accent to-transparent"
              style={shouldReduceMotion ? undefined : { scaleX: progress }}
            />

            <div className="flex items-center justify-between gap-4">
              <Link href="/" className="group relative z-50 flex min-w-0 items-center gap-3">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden border border-sand/20 bg-white/5 md:h-14 md:w-14">
                  <Image
                    src="/images/logo.webp"
                    alt="Scott Romanoski Construction Logo"
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="min-w-0">
                  <p className="truncate font-display text-lg font-semibold tracking-[0.01em] text-cream">
                    Scott Romanoski
                  </p>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.26em] text-warm-sand md:text-[11px]">
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
                          'group relative font-mono text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-300',
                          pathname === link.href ? 'text-cream' : 'text-ash hover:text-cream'
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

                <div className="flex items-center gap-3 border-l border-white/10 pl-6">
                  <span className="site-chip-dark hidden xl:inline-flex">
                    {SCHEDULING_SIGNALS.navMessage}
                  </span>
                  <a
                    href="tel:2155191795"
                    className="inline-flex items-center gap-2 border border-sand/20 px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-light hover:bg-white/5"
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
                  className="relative z-50 inline-flex h-12 w-12 items-center justify-center border border-sand/20 bg-white/5 text-cream transition-colors duration-300 hover:border-accent-light"
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
            className="fixed inset-0 z-40 bg-warm-black/96 px-5 pb-8 pt-28 backdrop-blur-2xl lg:hidden"
          >
            <div className="mx-auto flex h-full max-w-xl flex-col">
              <motion.div
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="site-panel-dark bg-noise p-6"
              >
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-accent-light">
                  Owner-led remodeling
                </p>
                <h2 className="mt-4 max-w-lg font-display text-3xl leading-tight text-cream">
                  Crafted work, straight answers, and the person pricing the job still on-site.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-ash">
                  {SCHEDULING_SIGNALS.heroMessage}
                </p>

                <div className="mt-6 grid gap-3">
                  {navStats.map((stat) => (
                    <div key={stat.label} className="border border-white/10 bg-white/5 px-4 py-4">
                      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-warm-sand">
                        {stat.label}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-cream/88">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <ul className="mt-6 grid gap-3">
                {PRIMARY_NAV_LINKS.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={shouldReduceMotion ? undefined : { opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: shouldReduceMotion ? 0 : index * 0.06 + 0.08, duration: 0.35 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        'flex items-center justify-between border px-5 py-4 font-display text-2xl text-cream transition-all duration-300',
                        pathname === link.href
                          ? 'border-accent/50 bg-white/6'
                          : 'border-white/10 bg-transparent hover:border-accent/40 hover:bg-white/5'
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

              <div className="mt-auto grid gap-3 pt-6 sm:grid-cols-2">
                <a
                  href="tel:2155191795"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-2 border border-sand/20 bg-white/5 px-5 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-cream"
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
