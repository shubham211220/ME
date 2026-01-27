import { useTheme } from "next-themes";

export function Header() {
  const { theme, setTheme } = useTheme();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border shadow-sm z-40 animate-slide-in-bottom">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="text-2xl text-foreground font-bold hover-scale cursor-pointer animate-fade-in-left">
            Abhi
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 animate-fade-in-up delay-200">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-muted-foreground hover:text-foreground transition-colors hover-lift px-3 py-2 rounded-md"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-muted-foreground hover:text-foreground transition-colors hover-lift px-3 py-2 rounded-md"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-muted-foreground hover:text-foreground transition-colors hover-lift px-3 py-2 rounded-md"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-foreground transition-colors hover-lift px-3 py-2 rounded-md"
            >
              Contact
            </button>
          </nav>

          {/* Language & Theme Toggle */}
          <div className="flex items-center gap-4 animate-fade-in-right delay-400">
            <button className="text-muted-foreground hover:text-foreground hover-scale px-3 py-2 rounded-md">En</button>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-10 h-10 bg-yellow-400 dark:bg-secondary rounded-full hover:bg-yellow-500 dark:hover:bg-secondary/80 transition-colors flex items-center justify-center hover-rotate btn-bounce"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
