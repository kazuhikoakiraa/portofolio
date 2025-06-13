'use client'

import { useState, useEffect } from 'react';
import { useScroll } from 'framer-motion';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import ProjectsSection from '@/components/ProjectsSection';
import OrganizationSection from '@/components/OrganizationsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ProgressIndicator from '@/components/ProgressIndicator';

// Import data - sesuaikan dengan nama file yang benar
import { educationData, organizationData, personalData, projectData } from '@/data/portofolio';

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('home');
  const [headerOpacity, setHeaderOpacity] = useState(1);
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Use Framer Motion's useScroll to get scrollYProgress as a MotionValue
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      <ProgressIndicator scrollYProgress={scrollYProgress} />
      <ProgressIndicator scrollYProgress={scrollYProgress} />
      <Navigation 
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        headerOpacity={headerOpacity}
        scrollTo={scrollTo}
        setIsMenuOpen={setIsMenuOpen}
      />
      <HeroSection 
        personalData={personalData} 
        parallaxY={scrollY * 0.5} 
        scrollTo={scrollTo} 
      />
      <AboutSection personalData={personalData} />
      <EducationSection educationData={educationData} />
      <ProjectsSection projectData={projectData} />
      <OrganizationSection organizationData={organizationData} />
      <ContactSection personalData={personalData} />
      <Footer personalData={personalData} />
      <ScrollToTop scrollTo={scrollTo} />
    </main>
  );
}