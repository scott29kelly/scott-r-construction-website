import type { Metadata } from 'next';
import { Belleza, Lato } from 'next/font/google';
import { StructuredData } from '@/components/StructuredData';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import './globals.css';

const belleza = Belleza({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: '400',
});

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '700'],
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
      className={`${belleza.variable} ${lato.variable} scroll-smooth`}
    >
      <body className="min-h-screen overflow-x-clip bg-white font-body text-text-body antialiased">
        <StructuredData />
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
