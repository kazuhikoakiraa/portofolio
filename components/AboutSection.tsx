import { motion } from 'framer-motion';
import { Code, Monitor, Terminal, Database, Palette, Heart } from 'lucide-react';
import { PersonalData } from '../types';

interface AboutSectionProps {
  personalData: PersonalData;
}

export  default function AboutSection({ personalData }: AboutSectionProps) {
  return (
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
                      className="italic border-l-2 border-white/20 pl-4"
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
  );
}