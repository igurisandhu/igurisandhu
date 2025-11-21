'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-gray-800 dark:text-white">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-3 sm:space-y-4"
            >
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                I am an entrepreneur and AI engineer currently building <a href="https://queryboat.ai" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">QueryBoat.ai</a>, an AI-powered customer service platform that revolutionizes how businesses handle customer interactions. Our platform automates calls, chats, appointments, and orders 24/7, helping businesses never miss a customer opportunity.
              </p>
              
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                With 4+ years of full-stack development experience, I've built scalable applications for major clients including McDonald's India. Now, I'm channeling that expertise into creating innovative AI solutions that solve real-world business problems.
              </p>
              
              <div className="flex flex-wrap gap-3 sm:gap-4 mt-4 sm:mt-6">
                <motion.a
                  href="https://queryboat.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 sm:px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm sm:text-base rounded-lg hover:from-blue-600 hover:to-purple-600 transition-colors"
                >
                  Visit QueryBoat.ai
                </motion.a>
                <motion.a
                  href="#skills"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 sm:px-6 py-2 bg-blue-500 text-white text-sm sm:text-base rounded-lg hover:bg-blue-600 transition-colors"
                >
                  View Skills
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3 sm:gap-4"
            >
              <div className="p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-gray-800 dark:text-white">Founder</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">QueryBoat.ai</p>
              </div>
              <div className="p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-gray-800 dark:text-white">24/7</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">AI Availability</p>
              </div>
              <div className="p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-gray-800 dark:text-white">4+</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Years Experience</p>
              </div>
              <div className="p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-gray-800 dark:text-white">500+</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Active Users</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 