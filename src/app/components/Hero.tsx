import { Button } from '@/app/components/ui/button';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-muted/30 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float delay-300"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/20 rounded-full animate-float delay-700"></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-accent/15 rounded-full animate-float delay-500"></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-primary/5 rounded-full animate-float delay-900"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="flex justify-center animate-fade-in-left">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-card flex items-end justify-center overflow-hidden border-4 border-border hover-lift animate-scale-in">
                <ImageWithFallback
                  src="/images/shubh.jpeg"
                  alt="Professional"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium animate-bounce-in delay-1000">
                  Available for work
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="animate-fade-in-right">
            <div className="mb-8">
              <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4 rotate-180 animate-fade-in-up" style={{ writingMode: 'vertical-rl' }}>
                PORTFOLIO
              </p>
              <h1 className="text-5xl md:text-6xl mb-6 text-foreground font-bold animate-fade-in-up delay-200">
                Backend Developer,<br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient">
                  Cloud & DevOps Enthusiast
                </span>
              </h1>
              <div className="w-1 h-24 bg-primary mb-6 animate-slide-in-bottom delay-400"></div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 animate-fade-in-up delay-600">
                Hi! I'm Shubham, I am a backend developer focused on building scalable,
                secure, and efficient server-side applications.
                 I work with Node.js, Express.s and MySQL to design APIs,
                  manage databases, and implement core business logic.
                  I enjoy solving real-world problems and continuously improving system
                   performance.
              </p>
            </div>

            <div className="flex gap-4">
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-green-600 hover:bg-green-700 text-white px-8"
                size="lg"
              >
                HIRE ME
              </Button>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8"
              >
                DOWNLOAD CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}