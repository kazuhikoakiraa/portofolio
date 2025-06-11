'use client';

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { 
  User, 
  Code, 
  MapPin, 
  BookOpen, 
  Briefcase, 
  Layers, 
  Mail, 
  Phone,
  Github,
  Linkedin,
  Calendar,
  Users,
  ExternalLink,
  ArrowUp,
  Menu,
  X,
  Star,
  Zap,
  Coffee,
  Heart,
  Rocket,
  Sparkles,
  Terminal,
  Database,
  Globe,
  Palette,
  Monitor
} from 'lucide-react';

interface PersonalData {
  name: string;
  title: string;
  bio: string;
  image: string;
  contact: {
    email: string;
    phone: string;
    github?: string;
    linkedin?: string;
    location: string;
  };
}

interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
  description?: string;
}

interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  period: string;
  link?: string;
  status: 'completed' | 'ongoing' | 'planned';
}

interface Organization {
  id: string;
  name: string;
  position: string;
  period: string;
  description: string;
  achievements?: string[];
}

const personalData: PersonalData = {
  name: "Moratua Putra Pardede",
  title: "Full Stack Developer & UI/UX Enthusiast",
  image: "/images/mora.jpg", 
  bio: "Passionate developer crafting elegant digital solutions with clean code and thoughtful design.",
  contact: {
    email: "moratuaputra@gmail.com",
    phone: "+62 821-7553-0365",
    github: "kazuhikoakiraa",
    linkedin: "moratua-putra-pardede-23102a223",
    location: "Bandar Lampung, Indonesia"
  }
};

const educationData: Education[] = [
  {
    id: "1",
    institution: "Institut Teknologi Sumatera",
    degree: "S1 Teknik Informatika",
    period: "2021 - Present",
    gpa: "3.22",
    description: "Focused on web development and UI/UX design."
  }
];

const projectData: Project[] = [
  {
    id: "1",
    name: "Way Kalam Tourism Website",
    description: "A tourism website for Way Kalam village to promote local tourism potential and provide comprehensive information for visitors.",
    technologies: ["Javascript","Tailwind CSS", "MySQL"],
    period: "Jan 2024",
    status: "completed",
    link: "https://github.com/Tematik-Way-Kalam/Website-Wisata-WayKalam"
  },
  {
    id: "2",
    name: "PT. Sumber Indah Perkasa Inventory System",
    description: "An inventory management system for PT. Sumber Indah Perkasa to streamline machinery and spare parts data management.",
    technologies: ["Laravel", "Tailwind CSS", "MySQL"],
    period: "Jul - Aug 2024",
    status: "completed",
    link: "https://github.com/kazuhikoakiraa/SIP"
  },
  {
    id: "3",
    name: "Kopi Hitado POS System",
    description: "A Point of Sales system for Kopi Hitado to facilitate sales transactions and transaction data management.",
    technologies: ["Laravel", "MySQL", "Tailwind CSS"],
    period: "Feb - Jun 2024",
    status: "completed",
    link: "https://github.com/kazuhikoakiraa/webhitado"
  },
  {
    id: "4",
    name: "PT. Sentra Alam Anandana Financial System",
    description: "A financial bookkeeping system for PT. Sentra Alam Anandana to streamline company financial data management.",
    technologies: ["Laravel", "Filament", "MySQL"],
    period: "Apr 2025 - Ongoing",
    status: "ongoing",
    link: "https://github.com/kazuhikoakiraa/sistem-po"
  },
  {
    id: "5",
    name: "Personal Portfolio Website",
    description: "A personal portfolio website showcasing various projects and experiences as a developer.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    period: "May 2025 - Ongoing",
    status: "ongoing",
    link: "https://github.com/kazuhikoakiraa/portofolio"
  }
];

const organizationData: Organization[] = [
  {
    id: "1",
    name: "Himpunan Mahasiswa Teknik Informatika",
    position: "Coordinator of Member Representative Council (DPA)",
    period: "2024 - 2025",
    description: "Leading the member representative council to voice computer science students' aspirations and oversee the association's operations."
  },
  {
    id: "2",
    name: "Himpunan Mahasiswa Teknik Informatika",
    position: "Supervision Staff",
    period: "2023 - 2024",
    description: "Actively supervising the implementation of Computer Science Student Association's work programs, ensuring all activities run according to plan."
  }
];


// Magnetic Effect Hook
const useMagneticEffect = () => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * 0.1;
      const deltaY = (e.clientY - centerY) * 0.1;
      x.set(deltaX);
      y.set(deltaY);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    const element = ref.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [x, y]);

  return { ref, springX, springY };
};

export default function EnhancedPortfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'projects', 'organizations', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (elementId: string) => {
    document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: Code },
    { id: 'education', label: 'Education', icon: BookOpen },
    { id: 'projects', label: 'Projects', icon: Layers },
    { id: 'organizations', label: 'Organizations', icon: Users },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const floatingIcons = [
    Code, Terminal, Database, Globe, Palette, Monitor, Coffee, Heart, Rocket, Sparkles, Star, Zap
  ];

  return (
    <div ref={containerRef} className="bg-gray-900 text-white min-h-screen relative overflow-hidden">

      {/* Custom Cursor */}
      <motion.div
        className="fixed w-4 h-4 bg-white/30 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{ x: mousePosition.x - 8, y: mousePosition.y - 8 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      
      {/* Navigation */}
      <motion.nav
        style={{ opacity: headerOpacity }}
        className="fixed top-0 left-0 right-0 z-40 glass border-b border-white/10"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="text-xl font-semibold relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                animate={{ 
                  textShadow: [
                    "0 0 0px rgba(255,255,255,0)",
                    "0 0 10px rgba(255,255,255,0.3)",
                    "0 0 0px rgba(255,255,255,0)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Mora
              </motion.span>
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map(({ id, label, icon: Icon }) => (
                <motion.button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium relative overflow-hidden ${
                    activeSection === id 
                      ? 'text-white bg-white/10' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    animate={activeSection === id ? { rotate: 360 } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.div>
                  <span>{label}</span>
                  {activeSection === id && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-lg"
                      layoutId="activeNav"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 text-gray-400 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: isMenuOpen ? 1 : 0, 
              height: isMenuOpen ? 'auto' : 0 
            }}
            className="md:hidden overflow-hidden"
          >
            <div className="mt-4 py-4 border-t border-white/10">
              {navItems.map(({ id, label, icon: Icon }, index) => (
                <motion.button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`flex items-center space-x-3 w-full px-3 py-3 text-left transition-colors ${
                    activeSection === id 
                      ? 'text-white bg-white/10' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <motion.div
          style={{ y: parallaxY }}
          className="absolute inset-0 opacity-5"
        >
          <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent" />
        </motion.div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{ duration: 12, repeat: Infinity }}
          />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.div
            className="mb-8 mx-auto w-64 h-64 rounded-full border border-white/20 overflow-hidden bg-gradient-to-br from-white/10 to-white/5 relative"
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Rotating border effect */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-pink-500/50"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{ 
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "xor"
              }}
            />
            
            {personalData.image ? (
              <motion.img 
                src={personalData.image} 
                alt={personalData.name}
                className="w-full h-full object-cover relative z-10"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  if (e.currentTarget.parentElement) {
                    e.currentTarget.parentElement.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center">
                        <svg class="w-12 h-12 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    `;
                  }
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <User className="w-12 h-12 text-white/70" />
              </div>
            )}
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-6xl font-light mb-6 text-white tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {personalData.name.split(' ').map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.1, 
                  color: "#60a5fa",
                  textShadow: "0 0 20px rgba(96, 165, 250, 0.5)"
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.div
            className="text-lg md:text-xl text-gray-400 mb-8 font-light overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.p
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {personalData.title}
            </motion.p>
          </motion.div>
          
          <motion.button
            onClick={() => scrollTo('about')}
            className="group px-8 py-3 border border-white/20 rounded-full text-white hover:bg-white/5 transition-all duration-300 text-sm font-medium relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,255,255,0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
            />
            <span className="relative z-10 flex items-center space-x-2">
              <span>Explore My Work</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Rocket className="w-4 h-4" />
              </motion.div>
            </span>
          </motion.button>
        </div>
      </section>

      {/* About Section with enhanced animations */}
      <section id="about" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-light mb-4 text-white"
              whileHover={{ scale: 1.05 }}
            >
              About
            </motion.h2>
            <motion.div 
              className="w-12 h-px bg-white/30 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                y: -5
              }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl"
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05), rgba(236, 72, 153, 0.05))",
                    "linear-gradient(225deg, rgba(236, 72, 153, 0.05), rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))",
                    "linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05), rgba(236, 72, 153, 0.05))"
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              
              <motion.p
                className="text-lg text-gray-300 mb-8 leading-relaxed font-light relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {personalData.bio}
              </motion.p>
              
              <div className="grid md:grid-cols-2 gap-8 relative z-10">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-medium text-white mb-6 flex items-center space-x-2">
                    <Code className="w-5 h-5" />
                    <span>Technical Skills</span>
                  </h3>
                  <div className="space-y-3">
                    {[
                      { skill: 'Frontend Development (React, Next.js, Tailwind CSS)', icon: Monitor },
                      { skill: 'Backend Development (Laravel, PHP)', icon: Terminal },
                      { skill: 'Database Management (PostgreSQL, MySQL)', icon: Database },
                      { skill: 'Version Control (Git, GitHub)', icon: Code },
                      { skill: 'UI/UX Design (Figma)', icon: Palette },
                    ].map(({ skill, icon: Icon }, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3 group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 10, scale: 1.02 }}
                      >
                        <motion.div
                          className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon className="w-3 h-3 text-white/60" />
                        </motion.div>
                        <span className="text-gray-300 font-light group-hover:text-white transition-colors">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-medium text-white mb-6 flex items-center space-x-2">
                    <Heart className="w-5 h-5" />
                    <span>Philosophy</span>
                  </h3>
                  <div className="space-y-4 text-gray-300 font-light">
                    {[
                      "Clean code is the foundation of sustainable software",
                      "Every challenge is an opportunity to learn and grow",
                      "Collaboration drives innovation and excellence",
                      "Continuous learning is the key to staying relevant"
                    ].map((philosophy, index) => (
                      <motion.p
                        key={index}
                        className="italic border-l-2 border-// Kelanjutan dari bagian yang terputus
                        white/20 pl-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 10, borderColor: "rgba(255,255,255,0.4)" }}
                      >
                        {philosophy}
                      </motion.p>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-light mb-4 text-white"
              whileHover={{ scale: 1.05 }}
            >
              Education
            </motion.h2>
            <motion.div 
              className="w-12 h-px bg-white/30 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="glass rounded-2xl p-8 mb-6 relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                }}
              >
                {/* Animated background element */}
                <motion.div
                  className="absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{ duration: 15, repeat: Infinity }}
                />
                
                <div className="flex items-start space-x-4 relative z-10">
                  <motion.div
                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <BookOpen className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <motion.h3 
                      className="text-xl font-medium text-white mb-2"
                      whileHover={{ x: 10 }}
                    >
                      {edu.institution}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-300 mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {edu.degree}
                    </motion.p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </span>
                      {edu.gpa && (
                        <motion.span 
                          className="flex items-center space-x-2 bg-white/5 px-3 py-1 rounded-full"
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                        >
                          <Star className="w-4 h-4" />
                          <span>GPA: {edu.gpa}</span>
                        </motion.span>
                      )}
                    </div>
                    {edu.description && (
                      <motion.p 
                        className="text-gray-300 font-light"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        {edu.description}
                      </motion.p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-light mb-4 text-white"
              whileHover={{ scale: 1.05 }}
            >
              Projects
            </motion.h2>
            <motion.div 
              className="w-12 h-px bg-white/30 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projectData.map((project, index) => {
              const magneticProps = useMagneticEffect();
              
              return (
                <motion.div
                  key={project.id}
                  ref={magneticProps.ref}
                  className="glass rounded-2xl p-6 relative overflow-hidden group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    x: magneticProps.springX,
                    y: magneticProps.springY,
                  }}
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                  }}
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      background: [
                        "linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))",
                        "linear-gradient(225deg, rgba(147, 51, 234, 0.05), rgba(236, 72, 153, 0.05))",
                        "linear-gradient(315deg, rgba(236, 72, 153, 0.05), rgba(59, 130, 246, 0.05))",
                        "linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))"
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />

                  {/* Floating status indicator */}
                  <motion.div
                    className="absolute top-4 right-4 z-20"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <motion.div
                      className={`w-3 h-3 rounded-full ${
                        project.status === 'completed' 
                          ? 'bg-green-500' 
                          : project.status === 'ongoing' 
                          ? 'bg-yellow-500' 
                          : 'bg-gray-500'
                      }`}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>

                  <div className="relative z-10">
                    <motion.div
                      className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Layers className="w-6 h-6 text-white" />
                    </motion.div>
                    
                    <motion.h3 
                      className="text-xl font-medium text-white mb-3 group-hover:text-blue-300 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {project.name}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-300 mb-4 font-light leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {project.description}
                    </motion.p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="text-xs bg-white/5 text-gray-300 px-3 py-1 rounded-full border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + techIndex * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <motion.span 
                        className="text-sm text-gray-400 flex items-center space-x-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <Calendar className="w-4 h-4" />
                        <span>{project.period}</span>
                      </motion.span>
                      
                      {project.link && (
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/60 hover:text-white transition-colors group/link"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.div
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <ExternalLink className="w-5 h-5" />
                          </motion.div>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Organizations Section */}
      <section id="organizations" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-light mb-4 text-white"
              whileHover={{ scale: 1.05 }}
            >
              Organizations
            </motion.h2>
            <motion.div 
              className="w-12 h-px bg-white/30 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {organizationData.map((org, index) => (
              <motion.div
                key={org.id}
                className="glass rounded-2xl p-8 mb-6 relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                }}
              >
                {/* Animated background particles */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-white/10 rounded-full"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${20 + i * 20}%`,
                      }}
                      animate={{
                        y: [-10, 10, -10],
                        opacity: [0.3, 0.7, 0.3],
                        scale: [1, 1.5, 1]
                      }}
                      transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        delay: i * 0.5
                      }}
                    />
                  ))}
                </div>
                
                <div className="flex items-start space-x-4 relative z-10">
                  <motion.div
                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Users className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <motion.h3 
                      className="text-xl font-medium text-white mb-2"
                      whileHover={{ x: 10 }}
                    >
                      {org.name}
                    </motion.h3>
                    <motion.p 
                      className="text-blue-300 mb-2 font-medium"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {org.position}
                    </motion.p>
                    <motion.span 
                      className="text-sm text-gray-400 flex items-center space-x-2 mb-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Calendar className="w-4 h-4" />
                      <span>{org.period}</span>
                    </motion.span>
                    <motion.p 
                      className="text-gray-300 font-light"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      {org.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-light mb-4 text-white"
              whileHover={{ scale: 1.05 }}
            >
              Get In Touch
            </motion.h2>
            <motion.div 
              className="w-12 h-px bg-white/30 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
              }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"
                animate={{
                  background: [
                    "linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))",
                    "linear-gradient(225deg, rgba(147, 51, 234, 0.05), rgba(236, 72, 153, 0.05))",
                    "linear-gradient(315deg, rgba(236, 72, 153, 0.05), rgba(59, 130, 246, 0.05))"
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />

              <div className="grid md:grid-cols-2 gap-12 relative z-10">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-medium text-white mb-6">Let's Connect</h3>
                  <p className="text-gray-300 mb-8 font-light leading-relaxed">
                    I'm always open to discussing new opportunities, creative projects, or just having a chat about technology and design.
                  </p>
                  
                  <div className="space-y-6">
                    {[
                      { icon: Mail, text: personalData.contact.email, href: `mailto:${personalData.contact.email}` },
                      { icon: Phone, text: personalData.contact.phone, href: `tel:${personalData.contact.phone}` },
                      { icon: MapPin, text: personalData.contact.location, href: null },
                    ].map(({ icon: Icon, text, href }, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-4 group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 10 }}
                      >
                        <motion.div
                          className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </motion.div>
                        {href ? (
                          <motion.a
                            href={href}
                            className="text-gray-300 hover:text-white transition-colors font-light"
                            whileHover={{ scale: 1.05 }}
                          >
                            {text}
                          </motion.a>
                        ) : (
                          <span className="text-gray-300 font-light">{text}</span>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-medium text-white mb-6">Social Links</h3>
                  <div className="space-y-4">
                    {[
                      { icon: Github, name: 'GitHub', username: personalData.contact.github, url: `https://github.com/${personalData.contact.github}` },
                      { icon: Linkedin, name: 'LinkedIn', username: personalData.contact.linkedin, url: `https://linkedin.com/in/${personalData.contact.linkedin}` },
                    ].map(({ icon: Icon, name, username, url }, index) => (
                      <motion.a
                        key={index}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02, x: 10 }}
                      >
                        <motion.div
                          className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </motion.div>
                        <div>
                          <p className="text-white font-medium">{name}</p>
                          <p className="text-gray-400 text-sm">{username}</p>
                        </div>
                        <motion.div
                          className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ExternalLink className="w-4 h-4 text-gray-400" />
                        </motion.div>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="relative z-20 py-10 bg-gray-900 border-t border-white/10 mt-12">
          <div className="text-gray-400 text-sm text-center md:text-center">
            &copy; {new Date().getFullYear()} {personalData.name}. All rights reserved.
          </div>
      </footer>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={() => scrollTo('home')}
        className="fixed bottom-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all z-40 border border-white/20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 10px 30px rgba(255,255,255,0.2)"
        }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.div>
      </motion.button>

      {/* Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
}