import { useState, useEffect } from 'react';
import { Button } from '@/app/components/ui/button';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Github, Linkedin, Mail, ArrowDown, Sparkles } from 'lucide-react';

const roles = [
  'Backend Developer',
  'Cloud Enthusiast',
  'DevOps Engineer',
  'Problem Solver',
];

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden pt-28 pb-20">
      {/* Particle grid background */}
      <div className="absolute inset-0 particle-grid" />

      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-blob delay-700" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-2 h-2 rounded-full bg-cyan-400/50 animate-float delay-300" />
        <div className="absolute top-40 right-[15%] w-3 h-3 rounded-full bg-violet-400/40 animate-float delay-700" />
        <div className="absolute bottom-32 left-[25%] w-2 h-2 rounded-full bg-cyan-400/30 animate-float delay-500" />
        <div className="absolute bottom-20 right-[30%] w-4 h-4 rounded-full bg-violet-400/20 animate-float-slow" />
        <div className="absolute top-1/2 left-[5%] w-1.5 h-1.5 rounded-full bg-cyan-300/40 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[60%] right-[8%] w-2 h-2 rounded-full bg-violet-300/30 animate-float-slow" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Image */}
          <div className="flex justify-center order-2 md:order-1 animate-fade-in-left">
            <div className="relative">
              {/* Glowing gradient ring */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-cyan-500 via-violet-500 to-cyan-500 animate-spin-slow opacity-60 blur-sm" />
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 animate-ring-rotate opacity-30" />

              <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-background shadow-2xl mx-auto">
                <ImageWithFallback
                  src="/images/shubh.jpeg"
                  alt="Shubham Thitame"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>

              {/* Status badge */}
              <div className="absolute -top-2 -right-2 flex items-center gap-2 bg-card/90 backdrop-blur-sm px-4 py-2 rounded-full border border-border shadow-lg animate-bounce-in delay-1000">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse-slow" />
                <span className="text-sm font-medium text-foreground">Open to work</span>
              </div>

              {/* Sparkle icon */}
              <div className="absolute -bottom-1 -left-3 bg-card/90 backdrop-blur-sm p-3 rounded-2xl border border-border shadow-lg animate-bounce-in delay-700">
                <Sparkles className="w-5 h-5 text-amber-400" />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 md:order-2">
            <div className="mb-8">
              <p className="text-sm text-primary uppercase tracking-[0.25em] mb-4 font-medium animate-fade-in-up">
                WELCOME TO MY PORTFOLIO
              </p>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl mb-4 text-foreground font-bold leading-tight animate-fade-in-up delay-200">
                Hi, I'm{' '}
                <span className="gradient-text">Shubham</span>
              </h1>

              {/* Typewriter */}
              <div className="text-xl sm:text-3xl lg:text-4xl font-semibold mb-6 h-12 animate-fade-in-up delay-300" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="gradient-text">{displayText}</span>
                <span className="text-primary animate-pulse-slow">|</span>
              </div>

              <div className="section-gradient-line mb-6 animate-slide-in-bottom delay-400" />

              <p className="text-foreground/60 dark:text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg animate-fade-in-up delay-500">
                I build scalable, secure, and efficient server-side applications
                with Node.js, Express, and modern cloud technologies. Passionate about 
                solving real-world problems and optimizing system performance.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8 animate-fade-in-up delay-600">
              <Button
                onClick={() => scrollToSection('contact')}
                className="gradient-bg hover:opacity-90 text-white px-8 shadow-lg glow-cyan btn-bounce font-semibold"
                size="lg"
              >
                Let's Connect
              </Button>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg text-sm font-semibold transition-all h-11 px-8 border border-border bg-card/50 backdrop-blur-sm hover:bg-card text-foreground hover-glow"
              >
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in-up delay-700">
              <span className="text-sm text-muted-foreground">Find me on</span>
              <div className="h-px w-8 bg-border" />
              <div className="flex gap-3">
                <a
                  href="https://github.com/Shubham21122002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-card/50 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover-glow transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/shubhamthitame"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-card/50 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover-glow transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:thitameshubham100@gmail.com"
                  className="w-10 h-10 rounded-xl bg-card/50 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover-glow transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <button
            onClick={() => scrollToSection('stats')}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs font-medium tracking-wider uppercase">Scroll Down</span>
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}