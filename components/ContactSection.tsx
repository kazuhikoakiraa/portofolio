import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';
import { PersonalData } from '../types';

interface ContactSectionProps {
  personalData: PersonalData;
}

export default function ContactSection({ personalData }: ContactSectionProps) {
  return (
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
  );
} 