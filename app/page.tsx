'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { 
  Anchor, 
  Compass, 
  MapPin, 
  Scroll, 
  Swords, 
  Ship, 
  Mail, 
  Phone,
  Github,
  Linkedin,
  Calendar,
  Award,
  Users,
  ExternalLink
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

// Sample data - ganti dengan data Anda
const personalData: PersonalData = {
  name: "Moratua Putra Pardede",
  title: "Full Stack Developer & UI/UX Enthusiast",
  image: "/images/mora.jpg", 
  bio: "Ahoy! Saya seorang developer yang berlayar di lautan digital, mencari harta berupa kode yang elegan dan solusi yang inovatif. Dengan pengalaman bertahun-tahun mengarungi berbagai teknologi, saya siap membantu Anda menaklukkan tantangan digital.",
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
    period: "2021 - Now",
    gpa: "3.22",
    description: "Fokus pada pengembangan web dan ui/ux design."
  },
  {
    id: "2",
    institution: "SMA Sint Caraolus Bengkulu",
    degree: "IPA",
    period: "2018 - 2021",
    description: "Juara VI Tingkat Nasional Festival Musikalisasi Puisi"
  }
];

const projectData: Project[] = [
  {
    id: "1",
    name: "Website Wisata Way Kalam",
    description: "Website desa wisata way kalam dibuat untuk mempromosikan potensi wisata desa dan menyediakan informasi lengkap bagi pengunjung.",
    technologies: ["Javascript","Tailwindcss", "MySql"],
    period: "Jan 2024 - Jan 2024",
    status: "completed",
    link: "https://github.com/Tematik-Way-Kalam/Website-Wisata-WayKalam"
  },
  {
    id: "2",
    name: "Website Inventory PT. Sumber Indah Perkasa",
    description: "Sistem informasi inventory untuk PT. Sumber Indah Perkasa yang memudahkan pengelolaan data mesin dan suku cadang.",
    technologies: ["Laravel", "Tailwindcss", "MySql"],
    period: "Jul 2024 - Aug 2024",
    status: "completed",
    link: "https://github.com/kazuhikoakiraa/SIP"
  },
  {
    id: "3",
    name: "Website Point Of Sales (POS) Kopi Hitado",
    description: "Sistem informasi Point Of Sales untuk Kopi Hitado yang memudahkan transaksi penjualan dan pengelolaan data transaksi.",
    technologies: ["Laravel", "MySql", "Tailwindcss"],
    period: "Feb 2024 - Jun 2024",
    status: "completed",
    link: "https://github.com/kazuhikoakiraa/webhitado"
  },
  {
    id: "4",
    name: "Website Pembukuan Keuangan PT. Sentra Alam Anandana",
    description: "Sistem informasi pembukuan keuangan untuk PT. Sentra Alam Anandana yang memudahkan pengelolaan data keuangan perusahaan.",
    technologies: ["Laravel", "Filament", "MySql"],
    period: "Apr 2025 - Ongoing",
    status: "ongoing",
    link: "https://github.com/kazuhikoakiraa/sistem-po"
  },
  {
    id: "5",
    name: "Website Portofolio Pribadi",
    description: "Website portofolio pribadi yang menampilkan berbagai proyek dan pengalaman saya sebagai developer.",
    technologies: ["Next.js", "Tailwindcss", "TypeScript"],
    period: "May 2025 - Ongoing",
    status: "ongoing",
    link: "https://github.com/kazuhikoakiraa/portofolio"
  }
];

const organizationData: Organization[] = [
  {
    id: "1",
    name: "Himpunan Mahasiswa Teknik Informatika",
    position: "Ketua Divisi IT",
    period: "2022 - 2023",
    description: "Memimpin tim pengembangan sistem informasi untuk keperluan organisasi",
    achievements: [
      "Mengembangkan website resmi organisasi",
      "Mengelola 15+ anggota divisi IT",
      "Mengadakan workshop programming untuk 200+ peserta"
    ]
  },
  {
    id: "2",
    name: "Google Developer Student Club",
    position: "Core Team Member",
    period: "2023 - 2024",
    description: "Aktif dalam komunitas developer dan mengadakan berbagai event teknologi"
  }
];

export default function PiratePortfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState('home');
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.8]);
  
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'projects', 'organizations', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
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
  };

  return (
    <div ref={containerRef} className="bg-gray-900 text-white min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-900 to-black opacity-90" />
        <motion.div
          className="absolute top-20 left-20 w-2 h-2 bg-yellow-400 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-yellow-600/30"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <Ship className="w-8 h-8 text-yellow-400" />
              <span className="text-xl font-bold text-yellow-400">Mora's Portfolio</span>
            </motion.div>
            
            <div className="hidden md:flex space-x-6">
              {[
                { id: 'home', label: 'Beranda', icon: Anchor },
                { id: 'about', label: 'Tentang', icon: Compass },
                { id: 'education', label: 'Pendidikan', icon: Scroll },
                { id: 'projects', label: 'Proyek', icon: Swords },
                { id: 'organizations', label: 'Organisasi', icon: Users },
                { id: 'contact', label: 'Kontak', icon: MapPin }
              ].map(({ id, label, icon: Icon }) => (
                <motion.button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === id 
                      ? 'bg-yellow-600 text-black' 
                      : 'text-yellow-400 hover:bg-yellow-600/20'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <motion.div
          className="text-center z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            className="mb-8 mx-auto w-48 h-48 rounded-full border-4 border-yellow-400 overflow-hidden bg-gradient-to-br from-yellow-400 to-orange-500"
            whileHover={{ 
              scale: 1.1,
              rotateY: 180,
              transition: { duration: 0.6 }
            }}
            style={{ y: springY }}
          >
            <div className="w-full h-full flex items-center justify-center text-6xl">
              <img src={personalData.image} alt="gambar mora" />
            </div>
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {personalData.name}
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-yellow-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            {personalData.title}
          </motion.p>
          
          <motion.button
            onClick={() => scrollTo('about')}
            className="bg-gradient-to-r from-yellow-600 to-orange-600 text-black px-8 py-4 rounded-full font-semibold hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 25px rgba(251, 146, 60, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Jelajahi Perjalanan Saya
          </motion.button>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 text-4xl"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ⚓
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/3 right-1/4 text-3xl"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -15, 15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          🗺️
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400">
              Tentang Kapten
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto"></div>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-yellow-600/30">
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
                {personalData.bio}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold text-yellow-400 mb-4">Keahlian Navigasi</h3>
                  <div className="space-y-3">
                    {[
                      'Frontend Development (React, Next.js, Vue.js)',
                      'Backend Development (Node.js, Python, PHP)',
                      'Database Management (PostgreSQL, MongoDB)',
                      'Mobile Development (React Native, Flutter)',
                      'DevOps & Cloud (Docker, AWS, Google Cloud)'
                    ].map((skill, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Swords className="w-4 h-4 text-yellow-400" />
                        <span className="text-gray-300">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold text-yellow-400 mb-4">Filosofi Kapten</h3>
                  <div className="space-y-3 text-gray-300">
                    <p>🏴‍☠️ "Kode yang bersih adalah harta yang paling berharga"</p>
                    <p>⚓ "Setiap bug adalah petualangan baru untuk dipecahkan"</p>
                    <p>🗺️ "Kolaborasi tim adalah kunci menemukan harta karun"</p>
                    <p>⚔️ "Terus belajar teknologi baru adalah senjata terkuat"</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400">
              Riwayat Pendidikan
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="relative mb-8"
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-yellow-600/30 hover:border-yellow-400/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Scroll className="w-6 h-6 text-yellow-400" />
                      <h3 className="text-xl font-semibold text-yellow-400">{edu.institution}</h3>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  
                  <div className="mb-2">
                    <h4 className="text-lg font-medium text-white mb-2">{edu.degree}</h4>
                    {edu.gpa && (
                      <p className="text-yellow-400 mb-2">GPA: {edu.gpa}</p>
                    )}
                    {edu.description && (
                      <p className="text-gray-300">{edu.description}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400">
              Proyek Petualangan
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projectData.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-yellow-600/30 hover:border-yellow-400/50 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(251, 146, 60, 0.2)"
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-yellow-400">{project.name}</h3>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'completed' 
                      ? 'bg-green-600/20 text-green-400' 
                      : project.status === 'ongoing'
                      ? 'bg-blue-600/20 text-blue-400'
                      : 'bg-gray-600/20 text-gray-400'
                  }`}>
                    {project.status === 'completed' ? 'Selesai' : 
                     project.status === 'ongoing' ? 'Berlangsung' : 'Direncanakan'}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-yellow-600/20 text-yellow-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{project.period}</span>
                  </div>
                  
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-yellow-400 hover:text-yellow-300 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Lihat Proyek</span>
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizations Section */}
      <section id="organizations" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400">
              Kru & Organisasi
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {organizationData.map((org, index) => (
              <motion.div
                key={org.id}
                className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-yellow-600/30 hover:border-yellow-400/50 transition-all duration-300 mb-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Users className="w-6 h-6 text-yellow-400" />
                    <h3 className="text-xl font-semibold text-yellow-400">{org.name}</h3>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{org.period}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-lg font-medium text-white mb-2">{org.position}</h4>
                  <p className="text-gray-300 mb-4">{org.description}</p>
                  
                  {org.achievements && (
                    <div>
                      <h5 className="text-yellow-400 font-medium mb-2">Pencapaian:</h5>
                      <ul className="space-y-1">
                        {org.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-center space-x-2 text-gray-300">
                            <Award className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400">
              Hubungi Kapten
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Siap untuk memulai petualangan baru? Mari berlayar bersama menuju proyek yang menakjubkan!
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-yellow-600/30"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold text-yellow-400 mb-6">Informasi Kontak</h3>
                <div className="space-y-4">
                  <motion.div
                    className="flex items-center space-x-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Mail className="w-6 h-6 text-yellow-400" />
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <a href={`mailto:${personalData.contact.email}`} className="text-white hover:text-yellow-400 transition-colors">
                        {personalData.contact.email}
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="flex items-center space-x-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Phone className="w-6 h-6 text-yellow-400" />
                    <div>
                      <p className="text-gray-400 text-sm">Telepon</p>
                      <a href={`tel:${personalData.contact.phone}`} className="text-white hover:text-yellow-400 transition-colors">
                        {personalData.contact.phone}
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="flex items-center space-x-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    <MapPin className="w-6 h-6 text-yellow-400" />
                    <div>
                      <p className="text-gray-400 text-sm">Lokasi</p>
                      <p className="text-white">{personalData.contact.location}</p>
                    </div>
                  </motion.div>
                  
                  <div className="flex space-x-4 pt-4">
                    {personalData.contact.github && (
                      <motion.a
                        href={`https://github.com/${personalData.contact.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-yellow-600/20 rounded-full text-yellow-400 hover:bg-yellow-600/30 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-6 h-6" />
                      </motion.a>
                    )}
                    
                    {personalData.contact.linkedin && (
                      <motion.a
                        href={`https://linkedin.com/in/${personalData.contact.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-yellow-600/20 rounded-full text-yellow-400 hover:bg-yellow-600/30 transition-colors"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Linkedin className="w-6 h-6" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-yellow-600/30"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold text-yellow-400 mb-6">Kirim Pesan</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Nama</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-black/50 border border-yellow-600/30 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="Nama Anda"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-black/50 border border-yellow-600/30 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Pesan</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-black/50 border border-yellow-600/30 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors resize-none"
                      placeholder="Ceritakan tentang proyek atau kolaborasi yang Anda inginkan..."
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 text-black py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-500 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 5px 15px rgba(251, 146, 60, 0.4)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Kirim Pesan
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 relative z-10 border-t border-yellow-600/30">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center justify-center space-x-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Ship className="w-6 h-6 text-yellow-400" />
              <span className="text-xl font-bold text-yellow-400">Captain's Portfolio</span>
            </motion.div>
            
            <p className="text-gray-400 mb-4">
              "Setiap baris kode adalah langkah menuju harta karun digital"
            </p>
            
            <div className="flex justify-center space-x-6 mb-4">
              <motion.div
                className="text-2xl"
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ⚓
              </motion.div>
              <motion.div
                className="text-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                🏴‍☠️
              </motion.div>
              <motion.div
                className="text-2xl"
                animate={{
                  rotate: [0, -10, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                ⚔️
              </motion.div>
            </div>
            
            <p className="text-gray-500 text-sm">
              © 2024 {personalData.name}. Dibuat dengan ❤️ dan ☕
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <motion.button
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full flex items-center justify-center text-black shadow-lg"
        onClick={() => scrollTo('home')}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2 }}
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 0 20px rgba(251, 146, 60, 0.6)"
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Anchor className="w-6 h-6" />
      </motion.button>
    </div>
  );
}