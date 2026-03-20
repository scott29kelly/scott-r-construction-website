import React from 'react';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { StickyMobileCTA } from '@/components/ui/StickyMobileCTA';

interface SiteShellProps {
  children: React.ReactNode;
}

export function SiteShell({ children }: SiteShellProps) {
  return (
    <main className="page-shell relative z-10 min-h-screen overflow-x-clip">
      <a
        href="#content"
        className="sr-only fixed left-4 top-4 z-[70] border border-accent bg-white px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-charcoal focus:not-sr-only"
      >
        Skip to content
      </a>
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(circle_at_12%_0%,rgba(183,126,73,0.16),transparent_24%),radial-gradient(circle_at_88%_10%,rgba(225,207,181,0.18),transparent_18%)]" />
      <Navbar />
      <div id="content" className="relative z-10">
        {children}
      </div>
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
