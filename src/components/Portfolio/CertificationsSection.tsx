import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Award, Calendar, Building } from 'lucide-react';

const CertificationsSection = () => {
  const ref = useRef<HTMLElement>(null);

  const certifications = [
    {
      title: 'Web Development and Design',
      issuer: 'IBM Career Education Program',
      date: 'October 2024',
      description: 'Comprehensive certification covering modern web development practices, design principles, and industry standards.',
      color: 'primary'
    },
    {
      title: 'TechSaksham Program',
      issuer: 'Microsoft and SAP (Edunet Foundation & AICTE)',
      date: '2024-25',
      description: 'Advanced technology skills development program focusing on enterprise solutions and cloud technologies.',
      color: 'secondary'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-right');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      const elements = ref.current.querySelectorAll('.cert-card');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-background" id="certifications">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-secondary bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.title}
              className="cert-card p-6 bg-card/50 backdrop-blur-sm border-secondary/20 hover:border-secondary/40 transition-all duration-500 hover:shadow-glow-secondary transform hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg bg-${cert.color}/20 flex-shrink-0`}>
                  <Award className={`h-6 w-6 text-${cert.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {cert.title}
                  </h3>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <Building className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">{cert.issuer}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{cert.date}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;