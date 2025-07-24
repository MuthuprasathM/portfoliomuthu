import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const EducationSection = () => {
  const ref = useRef<HTMLElement>(null);

  const education = [
    {
      degree: 'B.Tech - Artificial Intelligence and Data Science',
      institution: 'Chettinad College of Engineering and Technology, Karur',
      period: '2022 - 2026',
      grade: 'CGPA: 7.2',
      status: 'ongoing',
      description: 'Specializing in AI, Machine Learning, and Data Science with hands-on projects'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'V.R Veerappa Memorial Higher Secondary School, Peravurani',
      period: '2021 - 2022',
      grade: '68.3%',
      status: 'completed',
      description: 'Science stream with focus on Mathematics and Computer Science'
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: 'V.R Veerappa Memorial Higher Secondary School, Peravurani',
      period: '2019 - 2020',
      grade: '62%',
      status: 'completed',
      description: 'Foundation in core subjects with excellent academic performance'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-left');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      const elements = ref.current.querySelectorAll('.timeline-item');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-background" id="education">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-secondary bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic journey and achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-secondary"></div>

            {education.map((edu, index) => (
              <div 
                key={index}
                className="timeline-item relative pl-20 pb-12 last:pb-0"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-secondary rounded-full border-4 border-background shadow-glow-secondary"></div>
                
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-glow-secondary transform hover:scale-[1.02]">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <GraduationCap className="h-5 w-5 text-secondary mr-2" />
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          edu.status === 'ongoing' 
                            ? 'bg-primary/20 text-primary' 
                            : 'bg-accent/20 text-accent'
                        }`}>
                          {edu.status === 'ongoing' ? 'Ongoing' : 'Completed'}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center text-muted-foreground mb-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{edu.institution}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground mb-3">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                    </div>
                    <div className="md:text-right">
                      <div className="text-2xl font-bold text-secondary mb-1">
                        {edu.grade}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;