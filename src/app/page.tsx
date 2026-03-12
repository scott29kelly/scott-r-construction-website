import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { About } from '@/components/sections/About';
import { Portfolio } from '@/components/sections/Portfolio';
import { Process } from '@/components/sections/Process';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-cream selection:bg-accent selection:text-white">
      <Navbar />
      
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Process />
      <Testimonials />
      <Contact />
      
      <Footer />
    </main>
  );
}
