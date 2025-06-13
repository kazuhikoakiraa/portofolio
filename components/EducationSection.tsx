import { motion } from 'framer-motion';
import { BookOpen, Calendar, Star } from 'lucide-react';
import { Education } from '../types';

interface EducationSectionProps {
  educationData: Education[];
}

export default function EducationSection({ educationData }: EducationSectionProps) {
  return (
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
  );
}