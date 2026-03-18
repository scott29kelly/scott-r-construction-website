import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { StickyMobileCTA } from '@/components/ui/StickyMobileCTA';

interface SiteShellProps {
  children: React.ReactNode;
}

export function SiteShell({ children }: SiteShellProps) {
  return (
    <main className="min-h-screen bg-cream selection:bg-accent selection:text-white">
      <Navbar />
      {children}
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
