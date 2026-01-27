import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';

export function Projects() {
  const projects = [
    {
      title: 'Deforestation System',
      description: 'A comprehensive system for monitoring deforestation using satellite imagery and AI algorithms to track forest coverage and predict areas at risk.',
      category: 'Environmental Technology',
      tags: ['AI', 'Satellite Imagery', 'Environmental Monitoring'],
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    },
    {
      title: 'AI Driven Physiotherapy Monitoring System',
      description: 'An intelligent monitoring system that uses AI to track patient progress in physiotherapy, providing real-time feedback and personalized treatment plans.',
      category: 'Healthcare Technology',
      tags: ['AI', 'Healthcare', 'Monitoring', 'Physiotherapy'],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    },
    {
      title: 'Chess.com',
      description: 'A popular online chess platform offering games, tournaments, lessons, and community features for chess enthusiasts worldwide.',
      category: 'Gaming Platform',
      tags: ['Chess', 'Online Gaming', 'Community'],
      image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30 scroll-fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4 animate-fade-in-up delay-200">MY WORK</p>
          <h2 className="text-4xl md:text-5xl mb-6 text-foreground font-bold animate-fade-in-up delay-400">Projects</h2>
          <div className="w-1 h-16 bg-primary mx-auto animate-slide-in-bottom delay-600"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all bg-card border border-border card-hover animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="aspect-video overflow-hidden bg-muted relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <p className="text-sm font-medium mb-2">{project.category}</p>
                    <div className="flex gap-2 justify-center">
                      <Button size="sm" className="btn-bounce">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="outline" className="btn-bounce">
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-green-600 mb-2 uppercase tracking-wide">{project.category}</p>
                <h3 className="text-2xl mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="border-gray-300">
                      {tag}
                    </Badge>
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