'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Phone, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { SCHEDULING_SIGNALS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-0 z-50 transition-all duration-500',
        isScrolled
          ? 'border-b border-sand/10 bg-warm-black/95 py-3 shadow-lg backdrop-blur-md'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link href="#home" className="group relative z-50 flex items-center gap-3">
          <div className="relative h-14 w-14 overflow-hidden rounded-sm transition-transform duration-500 group-hover:scale-105 md:h-16 md:w-16">
            <Image
              src="/images/logo.webp"
              alt="Scott Romanoski Construction Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-sm font-bold leading-tight tracking-wide text-cream md:text-base">
              Scott Romanoski
            </span>
            <span className="font-display text-xs uppercase leading-tight tracking-widest text-accent md:text-sm">
              Construction
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="group relative py-2 text-xs font-medium uppercase tracking-[0.1em] text-cream/70 transition-colors duration-300 hover:text-accent"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 h-px w-full origin-right scale-x-0 bg-accent transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <span className="hidden border border-accent/20 bg-accent/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-light xl:inline-flex">
              {SCHEDULING_SIGNALS.navMessage}
            </span>
            <a
              href="tel:2155191795"
              className="hidden items-center gap-2 border border-sand/20 px-4 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-cream/80 transition-colors duration-300 hover:border-accent hover:text-accent lg:inline-flex"
            >
              <Phone size={14} />
              Call Scott
            </a>
            <a
              href="#contact"
              className="bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-warm-black transition-colors duration-300 shadow-sm hover:bg-accent-light"
            >
              Get a Quote
            </a>
          </div>
        </nav>

        <button
          className="relative z-50 p-3 text-cream md:hidden"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle Navigation"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex min-h-[100dvh] flex-col justify-center bg-warm-black/98 px-6 pb-24 pt-28 backdrop-blur-xl"
          >
            <div className="mx-auto w-full max-w-sm">
              <div className="mb-10 border border-sand/15 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  Scheduling note
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ash">
                  {SCHEDULING_SIGNALS.heroMessage}
                </p>
              </div>

              <ul className="flex flex-col gap-5 text-center">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 + 0.08, duration: 0.4 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block border border-sand/15 px-6 py-4 font-display text-2xl text-cream transition-colors duration-300 hover:text-accent"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.4 }}
                className="mt-8 flex flex-col gap-4"
              >
                <a
                  href="tel:2155191795"
                  onClick={() => setMobileMenuOpen(false)}
                  className="border border-sand/20 px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.1em] text-cream"
                >
                  Call Scott
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block bg-accent px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.1em] text-warm-black"
                >
                  Get a Quote
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
