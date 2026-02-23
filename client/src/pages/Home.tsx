import Navbar from '@/components/Navbar';
import Hero3D from '@/components/Hero3D';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

/**
 * Home Page
 * Design: Cyberpunk Neon Minimalism
 * Features: Complete 3D portfolio with all sections
 */
export default function Home() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <section id="home">
          <Hero3D />
        </section>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
