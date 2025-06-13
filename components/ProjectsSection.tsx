import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Layers, Calendar, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectsSectionProps {
  projectData: Project[];
}

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

export default function ProjectsSection({ projectData }: ProjectsSectionProps) {
  return (
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
  );
}