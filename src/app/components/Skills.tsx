import { useState } from 'react';

export function Skills() {
  const [activeTab, setActiveTab] = useState<'skills' | 'tools'>('skills');

  const skills = [
    { name: 'Python', icon: '🐍' },
    { name: 'JavaScript', icon: '💛' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '💚' },
    { name: 'Linux', icon: '🐧' },
    { name: 'Kali Linux', icon: '🔧' },
    { name: 'Network Security', icon: '🛡️' },
    { name: 'Cryptography', icon: '🔐' },
    { name: 'Cloud Security', icon: '☁️' },
    { name: 'Docker', icon: '🐳' },
  ];

  const tools = [
    { name: 'Git', icon: '📚' },
    { name: 'VS Code', icon: '💻' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Postman', icon: '📮' },
    { name: 'Figma', icon: '🎨' },
    { name: 'npm', icon: '📦' },
    { name: 'Vite', icon: '⚡' },
    { name: 'Jest', icon: '🃏' },
    { name: 'ESLint', icon: '🔍' },
    { name: 'TypeScript', icon: '🔷' },
  ];

  const displayItems = activeTab === 'skills' ? skills : tools;

  return (
    <section id="skills" className="py-20 px-4 bg-background scroll-fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - Content */}
          <div className="animate-fade-in-left">
            <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4 rotate-180 animate-fade-in-up" style={{ writingMode: 'vertical-rl' }}>
              MY SKILLS
            </p>
            <h2 className="text-4xl md:text-5xl mb-6 text-foreground font-bold animate-fade-in-up delay-200">What I Know?</h2>
            <div className="w-1 h-16 bg-primary mb-6 animate-slide-in-bottom delay-400"></div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 animate-fade-in-up delay-600">
              I work with modern development tools and technologies to build efficient,
              scalable applications. From version control to testing frameworks,
              I leverage the best tools in the industry to deliver high-quality code.
            </p>

            {/* Tab buttons */}
            <div className="flex gap-2 animate-fade-in-up delay-800">
              <button
                onClick={() => setActiveTab('skills')}
                className={`px-6 py-2 rounded-full transition-all btn-bounce ${
                  activeTab === 'skills'
                    ? 'bg-primary text-primary-foreground shadow-lg animate-pulse-slow'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80 hover-scale'
                }`}
              >
                Skills
              </button>
              <button
                onClick={() => setActiveTab('tools')}
                className={`px-6 py-2 rounded-full transition-all btn-bounce ${
                  activeTab === 'tools'
                    ? 'bg-primary text-primary-foreground shadow-lg animate-pulse-slow'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80 hover-scale'
                }`}
              >
                Tools
              </button>
            </div>
          </div>

          {/* Right side - Icons Grid */}
          <div className="animate-fade-in-right delay-400">
            <div className="grid grid-cols-5 gap-6 justify-items-center">
              {displayItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 shadow-md hover:shadow-lg transition-all flex items-center justify-center aspect-square group relative border border-border card-hover animate-scale-in w-full max-w-[80px]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-4xl group-hover:animate-bounce select-none">{item.icon}</span>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-popover text-popover-foreground text-xs px-3 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap border border-border shadow-lg z-10">
                    {item.name}
                    {/* Tooltip arrow */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-popover"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}