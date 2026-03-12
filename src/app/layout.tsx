import type { Metadata } from 'next';
import { Montserrat, Manrope } from 'next/font/google';
import './globals.css';

// Load our Canva-compatible modern font pairing
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Scott Romanoski Construction | Langhorne, PA',
  description: 'Building Better Spaces for Bucks County Families. Remodeling, additions, decks, and patios — crafted with 18+ years of hands-on experience.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${manrope.variable} scroll-smooth`}>
      <body className="font-body bg-cream text-charcoal antialiased selection:bg-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}
