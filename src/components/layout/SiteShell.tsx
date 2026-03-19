import React from 'react';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { StickyMobileCTA } from '@/components/ui/StickyMobileCTA';

interface SiteShellProps {
  children: React.ReactNode;
}

export function SiteShell({ children }: SiteShellProps) {
  return (
    <main className="relative z-10 min-h-screen overflow-x-clip selection:bg-accent selection:text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(circle_at_top_left,rgba(181,123,67,0.22),transparent_32%),radial-gradient(circle_at_top_right,rgba(216,197,168,0.16),transparent_24%)]" />
      <Navbar />
      {children}
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
