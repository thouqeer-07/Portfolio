import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-[var(--color-background)] min-h-screen text-[var(--color-text)] overflow-hidden relative transition-colors duration-300">
        <AnimatedBackground />
        <Navbar />

        <main className="relative z-10 container mx-auto px-4 pt-8 space-y-16 md:space-y-24">
          <Hero />
          <About />

          <Skills />
          <Certifications />
          <Projects />
          <Contact />
        </main>

        <footer className="relative z-10 py-6 text-center text-[var(--color-secondary)] text-sm">
          <p>© {new Date().getFullYear()} Syed Thouqeer Ahmed A. All rights reserved.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
