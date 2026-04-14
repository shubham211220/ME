import { useState } from 'react';
import {
  Code,
  Atom,
  Server,
  Monitor,
  Shield,
  Lock,
  Cloud,
  Container,
  GitBranch,
  Palette,
  Package,
  Zap,
  TestTube,
  CheckCircle,
  FileCode
} from 'lucide-react';

export function Skills() {
  const [activeTab, setActiveTab] = useState<'skills' | 'tools'>('skills');

  const skills = [
    { name: 'Python', icon: Code, color: 'from-yellow-400 to-yellow-600', textColor: 'text-yellow-400' },
    { name: 'JavaScript', icon: FileCode, color: 'from-amber-400 to-amber-600', textColor: 'text-amber-400' },
    { name: 'React', icon: Atom, color: 'from-cyan-400 to-cyan-600', textColor: 'text-cyan-400' },
    { name: 'Node.js', icon: Server, color: 'from-emerald-400 to-emerald-600', textColor: 'text-emerald-400' },
    { name: 'Linux', icon: Monitor, color: 'from-orange-400 to-orange-600', textColor: 'text-orange-400' },
    { name: 'Kali Linux', icon: Shield, color: 'from-red-400 to-red-600', textColor: 'text-red-400' },
    { name: 'Network Sec', icon: Shield, color: 'from-blue-400 to-blue-600', textColor: 'text-blue-400' },
    { name: 'Cryptography', icon: Lock, color: 'from-violet-400 to-violet-600', textColor: 'text-violet-400' },
    { name: 'Cloud', icon: Cloud, color: 'from-sky-400 to-sky-600', textColor: 'text-sky-400' },
    { name: 'Docker', icon: Container, color: 'from-blue-400 to-blue-600', textColor: 'text-blue-400' },
  ];

  const tools = [
    { name: 'Git', icon: GitBranch, color: 'from-orange-400 to-red-500', textColor: 'text-orange-400' },
    { name: 'VS Code', icon: Code, color: 'from-blue-400 to-blue-600', textColor: 'text-blue-400' },
    { name: 'Docker', icon: Container, color: 'from-blue-400 to-cyan-500', textColor: 'text-blue-400' },
    { name: 'Postman', icon: Code, color: 'from-orange-400 to-orange-600', textColor: 'text-orange-400' },
    { name: 'Figma', icon: Palette, color: 'from-purple-400 to-pink-500', textColor: 'text-purple-400' },
    { name: 'npm', icon: Package, color: 'from-red-400 to-red-600', textColor: 'text-red-400' },
    { name: 'Vite', icon: Zap, color: 'from-yellow-400 to-purple-500', textColor: 'text-yellow-400' },
    { name: 'Jest', icon: TestTube, color: 'from-red-400 to-red-600', textColor: 'text-red-400' },
    { name: 'ESLint', icon: CheckCircle, color: 'from-violet-400 to-violet-600', textColor: 'text-violet-400' },
    { name: 'TypeScript', icon: FileCode, color: 'from-blue-400 to-blue-700', textColor: 'text-blue-400' },
  ];

  const displayItems = activeTab === 'skills' ? skills : tools;

  return (
    <section id="skills" className="py-20 px-4 relative scroll-fade-in">
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left side - Content */}
          <div>
            <p className="text-sm text-primary uppercase tracking-[0.25em] mb-4 font-medium animate-fade-in-up">
              MY SKILLS
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-foreground font-bold animate-fade-in-up delay-200" style={{ fontFamily: 'var(--font-heading)' }}>
              What I <span className="gradient-text">Know</span>
            </h2>
            <div className="section-gradient-line mb-6 animate-slide-in-bottom delay-300" />
            <p className="text-foreground/60 dark:text-muted-foreground text-lg leading-relaxed mb-8 animate-fade-in-up delay-400">
              I work with modern development tools and technologies to build efficient,
              scalable applications. From version control to testing frameworks,
              I leverage the best tools in the industry to deliver high-quality code.
            </p>

            {/* Tab buttons */}
            <div className="flex gap-3 animate-fade-in-up delay-500">
              <button
                onClick={() => setActiveTab('skills')}
                className={`px-6 py-2.5 rounded-xl transition-all btn-bounce font-medium text-sm ${
                  activeTab === 'skills'
                    ? 'gradient-bg text-white shadow-lg glow-cyan'
                    : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
                }`}
              >
                Skills
              </button>
              <button
                onClick={() => setActiveTab('tools')}
                className={`px-6 py-2.5 rounded-xl transition-all btn-bounce font-medium text-sm ${
                  activeTab === 'tools'
                    ? 'gradient-bg text-white shadow-lg glow-cyan'
                    : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
                }`}
              >
                Tools
              </button>
            </div>
          </div>

          {/* Right side - Icons Grid */}
          <div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
              {displayItems.map((item, index) => (
                <div
                  key={`${activeTab}-${index}`}
                  className="glass-card rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center gap-2 group relative card-hover cursor-default animate-scale-in"
                  style={{ animationDelay: `${index * 0.06}s` }}
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all shadow-lg`}>
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <span className="text-xs font-medium text-foreground/50 dark:text-muted-foreground group-hover:text-foreground transition-colors text-center">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}