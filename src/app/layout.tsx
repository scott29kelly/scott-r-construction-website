import type { Metadata } from 'next';
import { Fraunces, Manrope, Space_Mono } from 'next/font/google';
import { StructuredData } from '@/components/StructuredData';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://scottromconstruction.com'),
  title: {
    default: 'Scott Romanoski Construction | Owner-Led Remodeling in Langhorne, PA',
    template: '%s | Scott Romanoski Construction',
  },
  description:
    'Owner-led remodeling, additions, decks, patios, and Bilco door work for Bucks County homeowners who want direct communication and refined craftsmanship.',
  keywords: [
    'home remodeling Langhorne PA',
    'construction contractor Bucks County',
    'kitchen remodel Newtown PA',
    'bathroom renovation Yardley PA',
    'home additions Bucks County PA',
    'deck builder Langhorne',
    'Bilco door installation PA',
    'licensed contractor Pennsylvania',
    'Scott Romanoski Construction',
  ],
  openGraph: {
    title: 'Scott Romanoski Construction | Langhorne, PA',
    description:
      'Remodeling, additions, decks, and patios crafted with 18+ years of hands-on experience. Licensed in PA & NJ. A+ BBB rating.',
    url: 'https://scottromconstruction.com',
    siteName: 'Scott Romanoski Construction',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scott Romanoski Construction | Langhorne, PA',
    description:
      'Remodeling, additions, decks, and patios crafted with 18+ years of hands-on experience.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} ${spaceMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen overflow-x-clip bg-cream font-body text-charcoal antialiased selection:bg-accent selection:text-warm-black">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
