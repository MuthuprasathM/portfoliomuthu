import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { MapPin, Calendar, Phone, User } from 'lucide-react';

const AboutSection = () => {
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
      const elements = ref.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-background" id="about">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, objectives, and personal details
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary">
              <h3 className="text-2xl font-bold mb-6 text-primary">Objective</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I am eager to apply my creative thinking and problem-solving skills to contribute 
                meaningfully to a dynamic organization. With strong academic foundations, practical 
                experience, and a competitive edge, I aspire to secure a rewarding position that 
                enhances business operations while fostering my professional growth.
              </p>
            </Card>
          </div>

          <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-glow-secondary">
              <h3 className="text-2xl font-bold mb-6 text-secondary">Personal Details</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <User className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Age: 20 years old</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Born: May 14, 2005</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Ramanathapuram, Tamil Nadu</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">+91 6380823173</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-12 animate-on-scroll" style={{ animationDelay: '0.4s' }}>
          <Card className="p-8 bg-gradient-secondary/10 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-glow-accent">
            <h3 className="text-2xl font-bold mb-6 text-accent">Languages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium">Tamil</span>
                <span className="text-sm bg-primary/20 px-3 py-1 rounded-full">Native</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium">English</span>
                <span className="text-sm bg-secondary/20 px-3 py-1 rounded-full">Fluent</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;