import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { About } from '@/components/sections/About';
import { Portfolio } from '@/components/sections/Portfolio';
import { LocalFit } from '@/components/sections/LocalFit';
import { Process } from '@/components/sections/Process';
import { Testimonials } from '@/components/sections/Testimonials';
import { Proof } from '@/components/sections/Proof';
import { Faq } from '@/components/sections/Faq';
import { Contact } from '@/components/sections/Contact';
import { StickyMobileCTA } from '@/components/ui/StickyMobileCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-cream selection:bg-accent selection:text-white">
      <Navbar />
      
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <LocalFit />
      <Process />
      <Testimonials />
      <Proof />
      <Faq />
      <Contact />
      
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
