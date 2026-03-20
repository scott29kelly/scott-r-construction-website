import React from 'react';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';

interface SiteShellProps {
  children: React.ReactNode;
}

export function SiteShell({ children }: SiteShellProps) {
  return (
    <>
      <a
        href="#content"
        className="sr-only fixed left-4 top-4 z-[10000] bg-white px-4 py-3 text-btn uppercase text-navy focus:not-sr-only"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="content">
        {children}
      </main>
      <Footer />
    </>
  );
}
