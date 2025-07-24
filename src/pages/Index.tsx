import Navigation from '@/components/Portfolio/Navigation';
import HeroSection from '@/components/Portfolio/HeroSection';
import AboutSection from '@/components/Portfolio/AboutSection';
import SkillsSection from '@/components/Portfolio/SkillsSection';
import EducationSection from '@/components/Portfolio/EducationSection';
import ProjectsSection from '@/components/Portfolio/ProjectsSection';
import CertificationsSection from '@/components/Portfolio/CertificationsSection';
import ContactSection from '@/components/Portfolio/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <div id="home">
          <HeroSection />
        </div>
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
