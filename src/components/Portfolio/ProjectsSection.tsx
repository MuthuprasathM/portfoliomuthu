import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Brain, Shield, Globe } from 'lucide-react';

const ProjectsSection = () => {
  const ref = useRef<HTMLElement>(null);

  const projects = [
    {
      title: 'Hostel Attendance System',
      description: 'AI-driven face detection system to automate hostel attendance with SQL database integration for seamless record management.',
      technologies: ['Machine Learning', 'Face Detection', 'SQL', 'Python'],
      icon: Brain,
      color: 'primary',
      category: 'AI/ML'
    },
    {
      title: 'Gunshot Detection System',
      description: 'Deep learning-based system that detects gunshot sounds in real-time using TensorFlow for enhanced security and public safety.',
      technologies: ['Deep Learning', 'TensorFlow', 'Audio Processing', 'Python'],
      icon: Shield,
      color: 'accent',
      category: 'Deep Learning'
    },
    {
      title: 'Restaurant - Full Stack App',
      description: 'Complete restaurant web application built with MERN stack featuring responsive design and exceptional user experience.',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      icon: Globe,
      color: 'secondary',
      category: 'Web Development',
      liveUrl: 'https://restrauant-4o92.vercel.app/',
      githubUrl: '#'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      const elements = ref.current.querySelectorAll('.project-card');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-muted/30" id="projects">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my technical expertise through innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={project.title}
                className="project-card p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-glow-primary transform hover:scale-105 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-${project.color}/20 mr-3 group-hover:shadow-glow-${project.color} transition-all duration-300`}>
                    <IconComponent className={`h-6 w-6 text-${project.color}`} />
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full bg-${project.color}/20 text-${project.color}`}>
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-muted/50 text-xs rounded border border-border text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  {project.liveUrl && (
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-primary hover:shadow-glow-primary transition-all duration-300"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-secondary/50 hover:bg-secondary/10 hover:shadow-glow-secondary transition-all duration-300"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {!project.liveUrl && !project.githubUrl && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-accent/50 hover:bg-accent/10 transition-all duration-300"
                      disabled
                    >
                      In Development
                    </Button>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/50 hover:bg-primary/10 hover:shadow-glow-primary transition-all duration-300"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;