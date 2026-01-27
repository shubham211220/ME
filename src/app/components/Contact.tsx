import { useState } from 'react';
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Card, CardContent } from '@/app/components/ui/card';

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

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side - Contact Info */}
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-4 rotate-180" style={{ writingMode: 'vertical-rl' }}>
              CONTACT
            </p>
            <h2 className="text-4xl md:text-5xl mb-6">
              Have Any work?<br />
              Please Drop a<br />
              Message
            </h2>
            <div className="w-1 h-16 bg-black mb-8"></div>
            <p className="text-gray-600 text-lg mb-12">
              Get in touch and let me know how I can help. Fill out the form and I'll be 
              in touch as soon as possible.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="text-lg mb-1 text-foreground font-medium">Address:</p>
                  <p className="text-muted-foreground">Pune, Maharashtra</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="text-lg mb-1 text-foreground font-medium">Mobile:</p>
                  <p className="text-muted-foreground">9309764987</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="text-lg mb-1 text-foreground font-medium">Email:</p>
                  <p className="text-muted-foreground">thitameshubham100@gmail.com</p>
                  <p className="text-muted-foreground">study10.shubh@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
             
              
           
            </div>
          </div>

          {/* Right side - Contact Form */}
          <Card className="bg-card shadow-xl border border-border">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 text-foreground font-medium">
                    Name
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">👤</span>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g John Doe"
                      required
                      className="pl-12 bg-background border-input focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-foreground font-medium">
                    Email
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">📧</span>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g johndoe@mail.com"
                      required
                      className="pl-12 bg-background border-input focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm mb-2 text-foreground font-medium">
                    Phone
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">📱</span>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="pl-12 bg-background border-input focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2 text-foreground font-medium">
                    Message
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-4 text-muted-foreground">💬</span>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write message..."
                      rows={6}
                      required
                      className="pl-12 bg-background border-input focus:border-primary"
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold" size="lg">
                  SEND
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}