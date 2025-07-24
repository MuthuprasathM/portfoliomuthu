import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Download, Github, Linkedin, Send } from 'lucide-react';

const ContactSection = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      const elements = ref.current.querySelectorAll('.contact-item');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-gradient-background" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate? Let's connect and create something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="contact-item">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-primary/20">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Email</h3>
                    <a 
                      href="mailto:prasathm580@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      prasathm580@gmail.com
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            <div className="contact-item" style={{ animationDelay: '0.1s' }}>
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-glow-secondary">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-secondary/20">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Phone</h3>
                    <a 
                      href="tel:+916380823173" 
                      className="text-muted-foreground hover:text-secondary transition-colors duration-300"
                    >
                      +91 6380823173
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            <div className="contact-item" style={{ animationDelay: '0.2s' }}>
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-glow-accent">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-accent/20">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Location</h3>
                    <p className="text-muted-foreground">
                      Ramanathapuram, Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact Form / Action Cards */}
          <div className="space-y-6">
            <div className="contact-item">
              <Card className="p-8 bg-card/30 backdrop-blur-sm border-primary/20">
                <h3 className="text-2xl font-bold mb-6 text-center">Let's Connect!</h3>
                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 transform hover:scale-105"
                    asChild
                  >
                    <a href="mailto:prasathm580@gmail.com">
                      <Send className="mr-2 h-5 w-5" />
                      Send Email
                    </a>
                  </Button>
                  
                  <Button 
                      variant="outline" 
                      size="lg"
                      className="w-full border-secondary/50 hover:bg-secondary/10 hover:shadow-glow-secondary transition-all duration-300"
                      asChild
                    >
                      <a 
                        href="/Muthuprasath resume.pdf" 
                        download 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Download className="mr-2 h-5 w-5" />
                        Download Resume
                      </a>
                    </Button>

                </div>
              </Card>
            </div>

            <div className="contact-item" style={{ animationDelay: '0.1s' }}>
              <Card className="p-6 bg-card/30 backdrop-blur-sm border-accent/20">
                <h4 className="text-lg font-semibold mb-4 text-center">Follow Me</h4>
                <div className="flex justify-center space-x-4">
                  <a 
                    href="https://github.com/MuthuprasathM/" 
                    className="p-3 rounded-full bg-primary/20 hover:bg-primary/30 transition-all duration-300 hover:scale-110 hover:shadow-glow-primary"
                  >
                    <Github className="h-6 w-6 text-primary" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/muthuprasath145" 
                    className="p-3 rounded-full bg-secondary/20 hover:bg-secondary/30 transition-all duration-300 hover:scale-110 hover:shadow-glow-secondary"
                  >
                    <Linkedin className="h-6 w-6 text-secondary" />
                  </a>
                  <a 
                    href="mailto:prasathm580@gmail.com" 
                    className="p-3 rounded-full bg-accent/20 hover:bg-accent/30 transition-all duration-300 hover:scale-110 hover:shadow-glow-accent"
                  >
                    <Mail className="h-6 w-6 text-accent" />
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;