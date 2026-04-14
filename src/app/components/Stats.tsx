import { useState, useEffect, useRef } from 'react';
import { Code2, Folder, Award, Clock } from 'lucide-react';

interface StatItem {
  icon: typeof Code2;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

function AnimatedCounter({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, inView]);

  return <span>{count}{suffix}</span>;
}

export function Stats() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats: StatItem[] = [
    { icon: Folder, value: 10, suffix: '+', label: 'Projects Built', color: 'text-cyan-400' },
    { icon: Code2, value: 8, suffix: '+', label: 'Technologies', color: 'text-violet-400' },
    { icon: Clock, value: 6, suffix: '+', label: 'Months Experience', color: 'text-amber-400' },
    { icon: Award, value: 3, suffix: '+', label: 'Certifications', color: 'text-emerald-400' },
  ];

  return (
    <section id="stats" className="py-16 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 text-center card-hover group animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary/50 mb-4 group-hover:scale-110 transition-transform ${stat.color}`}>
                <stat.icon className="w-7 h-7" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
