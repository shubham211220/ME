import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    { icon: MapPin, label: 'Location', value: 'Pune, Maharashtra', color: 'text-emerald-400' },
    { icon: Phone, label: 'Phone', value: '9309764987', color: 'text-cyan-400' },
    { icon: Mail, label: 'Email', value: 'thitameshubham100@gmail.com', color: 'text-violet-400' },
  ];

  return (
    <section id="contact" className="py-20 px-4 relative scroll-fade-in">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-primary uppercase tracking-[0.25em] mb-4 font-medium animate-fade-in-up">
            GET IN TOUCH
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-foreground font-bold animate-fade-in-up delay-200" style={{ fontFamily: 'var(--font-heading)' }}>
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <div className="section-gradient-line mx-auto mb-4 animate-slide-in-bottom delay-300" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up delay-400">
            Have a project in mind or want to collaborate? Drop me a message and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 lg:gap-12">
          {/* Left side - Contact Info */}
          <div className="md:col-span-2 space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-5 flex items-start gap-4 card-hover animate-fade-in-left"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center shrink-0 ${info.color}`}>
                  <info.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">{info.label}</p>
                  <p className="text-foreground font-medium text-sm break-all">{info.value}</p>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="glass-card rounded-2xl p-5 animate-fade-in-left delay-500">
              <p className="text-sm font-medium text-muted-foreground mb-3">Connect with me</p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Shubham21122002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary hover-glow transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/shubhamthitame"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary hover-glow transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:thitameshubham100@gmail.com"
                  className="w-11 h-11 rounded-xl bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary hover-glow transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="md:col-span-3 animate-fade-in-right delay-200">
            <div className="glass-card rounded-2xl p-6 sm:p-8 gradient-border">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm mb-2 text-foreground font-medium">
                      Name
                    </label>
                    <Input
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="bg-secondary/30 border-border focus:border-primary focus:ring-1 focus:ring-primary/30 rounded-xl h-12 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm mb-2 text-foreground font-medium">
                      Email
                    </label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="bg-secondary/30 border-border focus:border-primary focus:ring-1 focus:ring-primary/30 rounded-xl h-12 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-sm mb-2 text-foreground font-medium">
                    Phone <span className="text-muted-foreground">(optional)</span>
                  </label>
                  <Input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="bg-secondary/30 border-border focus:border-primary focus:ring-1 focus:ring-primary/30 rounded-xl h-12 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm mb-2 text-foreground font-medium">
                    Message
                  </label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="bg-secondary/30 border-border focus:border-primary focus:ring-1 focus:ring-primary/30 rounded-xl transition-all resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full gradient-bg hover:opacity-90 text-white font-semibold shadow-lg glow-cyan btn-bounce h-12 rounded-xl"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}