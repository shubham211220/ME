import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';

export function Projects() {
  const projects = [
    {
      title: 'Deforestation Monitoring System',
      description: 'A comprehensive system for monitoring deforestation using satellite imagery and AI algorithms to track forest coverage and predict areas at risk.',
      category: 'Environmental Tech',
      tags: ['AI/ML', 'Satellite Imagery', 'Python', 'GIS'],
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
      gradient: 'from-emerald-500/20 to-cyan-500/20',
    },
    {
      title: 'AI Physiotherapy Monitor',
      description: 'An intelligent monitoring system that uses AI to track patient progress in physiotherapy, providing real-time feedback and personalized treatment plans.',
      category: 'Healthcare Tech',
      tags: ['React', 'Node.js', 'AI/ML', 'IoT'],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
      gradient: 'from-violet-500/20 to-pink-500/20',
    },
    {
      title: 'Real-Time Chess Platform',
      description: 'A real-time online chess platform with multiplayer support, matchmaking, and interactive gameplay using WebSocket connections.',
      category: 'Gaming Platform',
      tags: ['React', 'WebSocket', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
      gradient: 'from-amber-500/20 to-orange-500/20',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 relative scroll-fade-in">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-primary uppercase tracking-[0.25em] mb-4 font-medium animate-fade-in-up">
            MY WORK
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-foreground font-bold animate-fade-in-up delay-200" style={{ fontFamily: 'var(--font-heading)' }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-gradient-line mx-auto animate-slide-in-bottom delay-300" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-card overflow-hidden border-0 card-hover group animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`} />
                {/* Hover buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <Button size="sm" className="gradient-bg text-white border-0 shadow-lg glow-cyan btn-bounce">
                    <ExternalLink className="w-4 h-4 mr-1.5" />
                    View
                  </Button>
                  <Button size="sm" className="bg-card/80 backdrop-blur-sm text-foreground border border-border hover:bg-card btn-bounce">
                    <Github className="w-4 h-4 mr-1.5" />
                    Code
                  </Button>
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-6">
                <p className="text-xs text-primary font-semibold mb-2 uppercase tracking-wider">{project.category}</p>
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                  {project.title}
                </h3>
                <p className="text-foreground/60 dark:text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs font-medium px-2.5 py-1 rounded-lg bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}