import { motion } from 'framer-motion';
import { Users, Calendar } from 'lucide-react';
import { Organization } from '../types';

interface OrganizationsSectionProps {
  organizationData: Organization[];
}

export default function OrganizationsSection({ organizationData }: OrganizationsSectionProps) {
  return (
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
  );
}