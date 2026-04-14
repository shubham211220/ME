import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
  tags: string[];
}

export function Experience() {
  const experiences: ExperienceItem[] = [
    {
      role: 'Backend Developer Intern',
      company: 'Krushipal',
      period: 'Jan 2026 – Jun 2026',
      description: [
        'Built REST APIs with Node.js and Express.js for agricultural platform',
        'Implemented JWT authentication and role-based authorization',
        'Designed and managed MongoDB database schemas and integrations',
        'Collaborated with frontend team for seamless API consumption',
      ],
      tags: ['Node.js', 'Express', 'MongoDB', 'JWT', 'REST APIs'],
    },
    {
      role: 'Cloud & DevOps Intern',
      company: 'C-DSP',
      period: 'Jun 2022 – Aug 2022',
      description: [
        'Gained hands-on experience with AWS cloud services (EC2, S3)',
        'Set up virtual machine hosting and scalable cloud storage',
        'Used Git for version control and team collaboration',
        'Followed basic DevOps principles on internal cloud projects',
      ],
      tags: ['AWS', 'EC2', 'S3', 'Git', 'DevOps'],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 relative scroll-fade-in">
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-primary uppercase tracking-[0.25em] mb-4 font-medium animate-fade-in-up">
            MY JOURNEY
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-foreground font-bold animate-fade-in-up delay-200" style={{ fontFamily: 'var(--font-heading)' }}>
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="section-gradient-line mx-auto animate-slide-in-bottom delay-300" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 timeline-line md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-6 md:gap-12 mb-16 last:mb-0 animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 top-0 -translate-x-1/2 z-10">
                <div className="timeline-dot flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
              </div>

              {/* Date - on left for desktop */}
              <div className={`md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-2 md:pl-12'}`}>
                <div className="inline-flex items-center gap-2 text-foreground/60 dark:text-muted-foreground text-sm font-medium bg-secondary/50 dark:bg-secondary/30 px-3 py-1.5 rounded-lg border border-border">
                  <Calendar className="w-4 h-4" />
                  {exp.period}
                </div>
              </div>

              {/* Card */}
              <div className={`md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:order-2 md:pl-12' : 'md:pr-12 md:text-right'}`}>
                <div className="glass-card rounded-2xl p-6 card-hover group">
                  <div className={`flex items-center gap-3 mb-3 ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
                    <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-primary text-sm font-medium">@ {exp.company}</p>
                    </div>
                  </div>

                  <ul className={`space-y-2 mb-4 ${index % 2 !== 0 ? 'md:text-right' : ''}`}>
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-foreground/60 dark:text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                        <span className="text-primary mt-1.5 shrink-0">▸</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={`flex flex-wrap gap-2 ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
                    {exp.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium px-2.5 py-1 rounded-lg bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
