import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Stack from '@/components/Stack';
import About from '@/components/About';
import Contact from '@/components/Contact';
import FrenchBulldog from '@/components/FrenchBulldog';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <div className="noise" aria-hidden />
      <Navbar />
      <main>
        <Hero />
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-16" />
        <Projects />
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-16" />
        <Stack />
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-16" />
        <About />
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-16" />
        <Contact />
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-16" />
        <FrenchBulldog />
      </main>
      <Footer />
    </>
  );
}
