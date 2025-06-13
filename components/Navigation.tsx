import { motion } from 'framer-motion';
import { 
  User, Code, BookOpen, Layers, Users, Mail, Menu, X
} from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  isMenuOpen: boolean;
  headerOpacity: any;
  scrollTo: (elementId: string) => void;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const navItems = [
  { id: 'home', label: 'Home', icon: User },
  { id: 'about', label: 'About', icon: Code },
  { id: 'education', label: 'Education', icon: BookOpen },
  { id: 'projects', label: 'Projects', icon: Layers },
  { id: 'organizations', label: 'Organizations', icon: Users },
  { id: 'contact', label: 'Contact', icon: Mail }
];

export default function Navigation({ 
  activeSection, 
  isMenuOpen, 
  headerOpacity, 
  scrollTo, 
  setIsMenuOpen 
}: NavigationProps) {
  return (
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
  );
}