'use client';

import { useState, useEffect } from 'react';
import { FaHome, FaUser, FaCode, FaGithub, FaLinkedin, FaChevronLeft, FaTools, FaBriefcase, FaTrophy, FaCertificate, FaEllipsisH } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// Primary navigation items (most frequently accessed)
const primaryNavItems = [
  { icon: FaHome, label: 'Home', href: '#home' },
  { icon: FaUser, label: 'About', href: '#about' },
  { icon: FaCode, label: 'Projects', href: '#projects' },
  { icon: FaEllipsisH, label: 'More', href: '#more' },
];

// Secondary navigation items (less frequently accessed)
const secondaryNavItems = [
  { icon: FaBriefcase, label: 'Experience', href: '#experience' },
  { icon: FaTools, label: 'Skills', href: '#skills' },
  { icon: FaTrophy, label: 'Awards', href: '#awards' },
  { icon: FaCertificate, label: 'Certifications', href: '#certifications' },
];

interface SideNavProps {
  isNavOpen: boolean;
  onNavOpenChange: (isOpen: boolean) => void;
}

const SideNav = ({ isNavOpen, onNavOpenChange }: SideNavProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle resize to detect mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Track active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [...primaryNavItems, ...secondaryNavItems].map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobile bottom navigation
  if (isMobile) {
    return (
      <>
        {/* Main Navigation */}
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800">
          <div className="flex justify-around items-center py-2">
            {primaryNavItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  if (item.label === 'More') {
                    e.preventDefault();
                    onNavOpenChange(!isNavOpen);
                  }
                }}
                className={`flex flex-col items-center p-2 transition-colors ${
                  activeSection === item.href.substring(1) 
                    ? 'text-blue-500 dark:text-blue-400' 
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-xs mt-1">{item.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* More Menu */}
        <AnimatePresence>
          {isNavOpen && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.2 }}
              className="fixed bottom-16 left-0 right-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800"
            >
              <div className="grid grid-cols-2 gap-4 p-4">
                {secondaryNavItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => onNavOpenChange(false)}
                    className={`flex items-center gap-2 p-3 rounded-lg transition-colors ${
                      activeSection === item.href.substring(1)
                        ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-500 dark:text-blue-400'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Overlay */}
        <AnimatePresence>
          {isNavOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm"
              onClick={() => onNavOpenChange(false)}
            />
          )}
        </AnimatePresence>
      </>
    );
  }

  // Desktop side navigation
  return (
    <div className="fixed inset-y-0 right-0 flex items-center z-50 hidden md:flex">
      <div 
        className="relative flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Trigger Area */}
        <motion.div 
          initial={{ opacity: 1 }}
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          className="w-4 h-32 bg-blue-500/20 dark:bg-blue-400/20 backdrop-blur-sm rounded-l-full cursor-pointer hover:bg-blue-500/30 dark:hover:bg-blue-400/30 transition-colors duration-200"
        >
          <div className="h-full flex items-center justify-center">
            <FaChevronLeft className="text-blue-500 dark:text-blue-400 text-sm" />
          </div>
        </motion.div>

        {/* Navigation Pane */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: isHovered ? 0 : 100, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute right-full bg-white/10 dark:bg-gray-900/10 backdrop-blur-lg rounded-l-full p-4 shadow-lg border border-white/20 dark:border-gray-700/30 border-r-0"
        >
          <div className="flex flex-col gap-6">
            {[...primaryNavItems.filter(item => item.label !== 'More'), ...secondaryNavItems].map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="relative group"
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative p-3 rounded-full bg-white/5 dark:bg-gray-800/5 transition-all duration-300 group-hover:bg-white/20 dark:group-hover:bg-gray-800/20">
                  <item.icon className="w-6 h-6 text-gray-700 dark:text-gray-300 transition-colors duration-300 group-hover:text-blue-500 dark:group-hover:text-blue-400" />
                  
                  {/* Tooltip */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0, x: hoveredIndex === index ? 0 : 20 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 px-3 py-1 rounded-lg shadow-lg text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap"
                  >
                    {item.label}
                  </motion.div>

                  {/* Hover effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      scale: hoveredIndex === index ? 1.2 : 1,
                      opacity: hoveredIndex === index ? 0.2 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SideNav; 