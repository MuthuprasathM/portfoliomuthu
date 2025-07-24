import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download, X } from 'lucide-react';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showResumeViewer, setShowResumeViewer] = useState(false);

  const texts = ['AI & Data Science Student', 'Full Stack Developer', 'Problem Solver'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 3) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentText('');
    const timeout = setTimeout(() => {
      setCurrentText(texts[currentIndex]);
    }, 100);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-background px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-1/3 w-40 h-40 bg-primary/5 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-primary p-1 animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                <span className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  MP
                </span>
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            MUTHUPRASATH M
          </h1>

          <div className="h-16 flex items-center justify-center mb-8">
            <div className="text-2xl md:text-3xl font-semibold text-muted-foreground">
              <span className="inline-block overflow-hidden whitespace-nowrap border-r-2 animate-blink">
                <span className={`inline-block ${currentText ? 'animate-typing' : ''}`}>
                  {currentText}
                </span>
              </span>
            </div>
          </div>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about leveraging AI and technology to solve real-world problems. 
            Currently pursuing B.Tech in AI & Data Science with expertise in full-stack development.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </a>
            </Button>

            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setShowResumeViewer(true)}
              className="border-primary/50 hover:bg-primary/10 hover:shadow-glow-primary transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              View Resume
            </Button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6">
            <a 
              href="mailto:prasathm580@gmail.com" 
              className="p-3 rounded-full bg-card/50 hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-glow-primary"
            >
              <Mail className="h-6 w-6 text-primary" />
            </a>
            <a 
              href="https://github.com/MuthuprasathM" 
              className="p-3 rounded-full bg-card/50 hover:bg-secondary/20 transition-all duration-300 hover:scale-110 hover:shadow-glow-secondary"
            >
              <Github className="h-6 w-6 text-secondary" />
            </a>
            <a 
              href="https://www.linkedin.com/in/muthuprasath145" 
              className="p-3 rounded-full bg-card/50 hover:bg-accent/20 transition-all duration-300 hover:scale-110 hover:shadow-glow-accent"
            >
              <Linkedin className="h-6 w-6 text-accent" />
            </a>
          </div>
        </div>
      </div>

      {/* Resume Viewer */}
      {showResumeViewer && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="relative bg-background rounded-xl overflow-hidden w-full max-w-4xl h-[90vh] shadow-xl border border-primary">
            <button
              className="absolute top-2 right-2 text-red-500 hover:text-red-700 z-10"
              onClick={() => setShowResumeViewer(false)}
            >
              <X className="w-6 h-6" />
            </button>

            <iframe
              src="/Muthuprasath resume.pdf"
              title="Resume"
              className="w-full h-full"
            ></iframe>

            <div className="absolute bottom-4 right-4">
              <a
                href="/Muthuprasath resume.pdf"
                download
                className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
