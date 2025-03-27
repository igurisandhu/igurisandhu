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
                I am a passionate Full Stack Developer with 4 years of experience in building modern web applications. 
                My journey in software development has been driven by a constant desire to learn and create innovative solutions.
              </p>
              
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                I specialize in developing scalable and maintainable applications using cutting-edge technologies. 
                My expertise includes both frontend and backend development, with a strong focus on creating seamless user experiences.
              </p>
              
              <div className="flex flex-wrap gap-3 sm:gap-4 mt-4 sm:mt-6">
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
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-gray-800 dark:text-white">4+</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Years Experience</p>
              </div>
              <div className="p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-gray-800 dark:text-white">20+</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Projects Completed</p>
              </div>
              <div className="p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-gray-800 dark:text-white">15+</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Technologies</p>
              </div>
              <div className="p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-gray-800 dark:text-white">15+</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Happy Clients</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 