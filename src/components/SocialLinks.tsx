'use client';

import { useState, useEffect } from 'react';
import { FaWhatsapp, FaLinkedin, FaEnvelope, FaPhone, FaComments, FaGithub } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const socialLinks = [
  { icon: FaWhatsapp, label: 'WhatsApp', href: 'https://wa.me/+919569602213' },
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/igurisandhu' },
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/igurisandhu' },
  { icon: FaEnvelope, label: 'Email', href: 'mailto:igurisandhu@yahoo.com' },
  { icon: FaPhone, label: 'Phone', href: 'tel:+919569602213' },
];

interface SocialLinksProps {
  isNavOpen?: boolean;
}

const SocialLinks = ({ isNavOpen = false }: SocialLinksProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showContactMenu, setShowContactMenu] = useState(false);

  // Handle resize to detect mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  if (isMobile) {
    return (
      <>
        {/* Main Contact Button */}
        <motion.div 
          className="fixed right-4 z-[60]"
          animate={{ bottom: isNavOpen ? "16rem" : "5rem" }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={() => setShowContactMenu(!showContactMenu)}
            className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
          >
            <FaComments className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Contact Menu */}
        <AnimatePresence>
          {showContactMenu && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed right-4 z-[55] bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/30 p-4"
              style={{ bottom: isNavOpen ? "calc(16rem + 4rem)" : "calc(5rem + 4rem)" }}
            >
              <div className="flex flex-col gap-3">
                {socialLinks.map((item) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setShowContactMenu(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                  >
                    <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                      <item.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {item.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Overlay */}
        <AnimatePresence>
          {showContactMenu && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[45] bg-black/20 backdrop-blur-sm"
              onClick={() => setShowContactMenu(false)}
            />
          )}
        </AnimatePresence>
      </>
    );
  }

  // Desktop view (unchanged)
  return (
    <div className="fixed z-40 inset-x-0 bottom-4 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex gap-6 px-6 py-3 rounded-full bg-white/10 dark:bg-gray-900/10 backdrop-blur-lg shadow-lg border border-white/20 dark:border-gray-700/30"
      >
        {socialLinks.map((item, index) => (
          <motion.a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group flex items-center justify-center"
          >
            <motion.div 
              className="rounded-full bg-white/5 dark:bg-gray-800/5 transition-all duration-300 group-hover:bg-white/20 dark:group-hover:bg-gray-800/20 relative flex items-center justify-center p-3"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon className="w-6 h-6 text-gray-700 dark:text-gray-300 transition-colors duration-300 group-hover:text-blue-500 dark:group-hover:text-blue-400" />
              
              {/* Tooltip */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 px-3 py-1 rounded-lg shadow-lg text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap"
              >
                {item.label}
              </motion.div>
            </motion.div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default SocialLinks;
