import { useState, useEffect } from 'react';
import { Terminal as TerminalIcon, User } from 'lucide-react';
import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { Projects } from '@/app/components/Projects';
import { Skills } from '@/app/components/Skills';
import { Contact } from '@/app/components/Contact';
import { Footer } from '@/app/components/Footer';
import { Terminal } from '@/app/components/Terminal';
import { initScrollAnimations } from '@/utils/animations';

export default function App() {
  const [isTerminalMode, setIsTerminalMode] = useState(false);

  useEffect(() => {
    initScrollAnimations();
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Content */}
      {isTerminalMode ? (
        <div className="relative">
          <Terminal />
          {/* Toggle Button - positioned at top-right of terminal window */}
          <button
            onClick={() => setIsTerminalMode(!isTerminalMode)}
            className="absolute top-20 right-40 z-50 bg-gray-900 hover:bg-gray-800 text-white p-4 rounded-lg shadow-lg border-2 border-gray-700 transition-all hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] flex items-center gap-2 font-mono hover-lift animate-bounce-in delay-500"
            aria-label="Toggle terminal mode"
          >
            <User className="w-5 h-5" />
            <span className="hidden sm:inline">Portfolio View</span>
          </button>
        </div>
      ) : (
        <>
          {/* Toggle Button - fixed position for portfolio view */}
          <button
            onClick={() => setIsTerminalMode(!isTerminalMode)}
            className="fixed top-24 right-6 z-50 bg-gray-900 hover:bg-gray-800 text-white p-4 rounded-lg shadow-lg border-2 border-gray-700 transition-all hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] flex items-center gap-2 font-mono hover-lift animate-bounce-in delay-1000"
            aria-label="Toggle terminal mode"
          >
            <TerminalIcon className="w-5 h-5" />
            <span className="hidden sm:inline">Terminal Mode</span>
          </button>
          <Header />
          <div className="pt-20">
            <Hero />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}