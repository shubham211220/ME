import { useState, useEffect } from 'react';
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from 'lucide-react';

export function Header() {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { label: 'Skills', action: () => scrollToSection('skills') },
    { label: 'Experience', action: () => scrollToSection('experience') },
    { label: 'Projects', action: () => scrollToSection('projects') },
    { label: 'Contact', action: () => scrollToSection('contact') },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'glass-nav shadow-lg shadow-black/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-2xl font-bold font-[var(--font-heading)] gradient-text hover-scale cursor-pointer animate-fade-in-left"
            >
              &lt;Shubham /&gt;
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 animate-fade-in-up delay-200">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => { item.action(); setIsMobileMenuOpen(false); }}
                  className="nav-link text-foreground/70 hover:text-foreground transition-colors px-4 py-2 rounded-lg text-sm font-medium hover:bg-secondary/40"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Right side controls */}
            <div className="flex items-center gap-3 animate-fade-in-right delay-400">
              {/* Theme Toggle */}
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="relative w-10 h-10 rounded-xl bg-secondary/50 hover:bg-secondary transition-all flex items-center justify-center hover-glow btn-bounce group"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-amber-400 group-hover:rotate-90 transition-transform duration-500" />
                ) : (
                  <Moon className="w-5 h-5 text-violet-500 group-hover:-rotate-12 transition-transform duration-500" />
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden w-10 h-10 rounded-xl bg-secondary/50 hover:bg-secondary transition-all flex items-center justify-center"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-30 transition-all duration-500 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-72 glass-card shadow-2xl transition-transform duration-500 pt-24 px-6 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => { item.action(); setIsMobileMenuOpen(false); }}
                className="text-left text-foreground hover:text-primary transition-all px-4 py-3 rounded-xl hover:bg-primary/10 text-lg font-medium animate-slide-up-fade"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
