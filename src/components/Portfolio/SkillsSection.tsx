import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, Database, Brain, FileText } from 'lucide-react';

const SkillsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [animated, setAnimated] = useState(false);

  const skills = [
    { name: 'MERN Stack Development', level: 85, icon: Code, color: 'primary' },
    { name: 'Python Programming', level: 80, icon: Brain, color: 'secondary' },
    { name: 'Machine Learning', level: 75, icon: Database, color: 'accent' },
    { name: 'MS Office', level: 90, icon: FileText, color: 'primary' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setAnimated(true);
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [animated]);

  return (
    <section ref={ref} className="py-20 bg-muted/30" id="skills">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I'm proficient in
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <Card 
                key={skill.name}
                className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-glow-primary transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-2 rounded-lg bg-${skill.color}/20 mr-3`}>
                    <IconComponent className={`h-6 w-6 text-${skill.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className="font-medium">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={animated ? skill.level : 0} 
                    className="h-2 bg-muted"
                    style={{
                      transition: 'all 1s ease-out',
                      transitionDelay: `${0.5 + index * 0.1}s`
                    }}
                  />
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional skills badges */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-secondary">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'React', 'Node.js', 'MongoDB', 'Express.js', 'TensorFlow', 
              'SQL', 'JavaScript', 'HTML/CSS', 'Git', 'Face Detection'
            ].map((tech, index) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-gradient-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full text-sm font-medium hover:bg-secondary/30 transition-all duration-300 hover:scale-105 hover:shadow-glow-secondary"
                style={{ animationDelay: `${1 + index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;