import { useState, useEffect } from 'react';
import { Terminal as TerminalIcon, User } from 'lucide-react';
import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { Stats } from '@/app/components/Stats';
import { Skills } from '@/app/components/Skills';
import { Experience } from '@/app/components/Experience';
import { Projects } from '@/app/components/Projects';
import { Contact } from '@/app/components/Contact';
import { Footer } from '@/app/components/Footer';
import { Terminal } from '@/app/components/Terminal';
import { ScrollToTop } from '@/app/components/ScrollToTop';
import { initScrollAnimations } from '@/utils/animations';

export default function App() {
  const [isTerminalMode, setIsTerminalMode] = useState(false);

  useEffect(() => {
    initScrollAnimations();
  }, []);

  // Re-init scroll animations when switching back to portfolio mode
  useEffect(() => {
    if (!isTerminalMode) {
      setTimeout(() => initScrollAnimations(), 100);
    }
  }, [isTerminalMode]);

  return (
    <div className="min-h-screen relative">
      {isTerminalMode ? (
        <div className="relative">
          <Terminal />
          <button
            onClick={() => setIsTerminalMode(false)}
            className="absolute top-20 right-4 sm:right-6 md:right-8 lg:right-40 z-50 gradient-bg hover:opacity-90 text-white p-3 sm:p-4 rounded-xl shadow-lg glow-cyan transition-all flex items-center gap-2 font-medium btn-bounce animate-bounce-in delay-500"
            aria-label="Switch to Portfolio View"
          >
            <User className="w-5 h-5" />
            <span className="hidden sm:inline text-sm">Portfolio View</span>
          </button>
        </div>
      ) : (
        <>
          {/* Terminal Mode Toggle */}
          <button
            onClick={() => setIsTerminalMode(true)}
            className="fixed top-24 right-6 z-50 glass-card hover:bg-secondary/80 text-foreground p-3 sm:p-4 rounded-xl shadow-lg transition-all flex items-center gap-2 font-medium btn-bounce animate-bounce-in delay-1000 border border-border hover-glow"
            aria-label="Switch to Terminal Mode"
          >
            <TerminalIcon className="w-5 h-5 text-primary" />
            <span className="hidden sm:inline text-sm">Terminal</span>
          </button>

          <Header />
          <main>
            <Hero />
            <Stats />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </>
      )}
    </div>
  );
}