'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'QueryBoat.ai',
    description: 'Founded and built an AI-powered customer service platform that automates business communications 24/7. Features include AI chatbot, voice calling (inbound & outbound), appointment scheduling, and order management. Handles 10K+ calls daily with 99% uptime and serves 500+ active businesses.',
    technologies: ['Next.js', 'Node.js', 'TypeScript', 'OpenAI API', 'MongoDB', 'WebSocket', 'Twilio', 'Redis'],
    image: '/images/queryboat_ai.png',
    link: 'https://queryboat.ai',
    company: 'QueryBoat.ai',
    role: 'Founder & AI Engineer',
    imageAlt: 'QueryBoat AI Customer Service Platform',
  },
  {
    title: 'McDonalds India',
    description: 'Developed and optimized Node.js APIs and dynamic Angular interfaces for McDonald\'s India platform. Implemented real-time agent tracking and reminder scheduling features.',
    technologies: ['Node.js', 'Angular', 'MongoDB', 'Azure', 'Leaflet Maps'],
    image: 'https://mcdindia.com/wp-content/uploads/2020/01/m-logo-big.svg',
    link: 'https://McDonaldsIndia.com',
    company: 'Jungleworks',
    role: 'Lead Developer',
    imageAlt: 'McDonalds India Platform Screenshot',
  },
  {
    title: 'Peddler Express',
    description: 'Built a comprehensive delivery management system with real-time tracking, automated scheduling, and dynamic route optimization.',
    technologies: ['Node.js', 'Angular', 'MongoDB', 'WebSocket', 'Leaflet Maps'],
    image: 'https://cdn.prod.website-files.com/633192e4ba783e9aeca403f4/63346ce2357b323916a625c3_pic.jpg',
    link: 'https://Peddler.express',
    company: 'Jungleworks',
    role: 'Lead Developer',
    imageAlt: 'Peddler Express Delivery Management System',
  },
  {
    title: 'Tookan',
    description: 'Developed a comprehensive delivery and pickup management platform with real-time tracking, automated task assignment, and dynamic route optimization for businesses.',
    technologies: ['Node.js', 'React', 'MongoDB', 'WebSocket', 'Google Maps API'],
    image: 'https://jungleworks.com/wp-content/uploads/2023/03/customerApp-img.png',
    link: 'https://www.tookanapp.com',
    company: 'Jungleworks',
    role: 'Full Stack Developer',
    imageAlt: 'Tookan Delivery Management Platform',
  },
  {
    title: 'Caterwheels',
    description: 'Built a food catering delivery platform for NYC restaurants, featuring real-time order tracking, driver management, and seamless restaurant integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'REST APIs', 'Payment Gateway'],
    image: 'https://static.wixstatic.com/media/50ee2f_cc34cad1b2b448beae7d807965c1abab~mv2.jpg/v1/fill/w_652,h_954,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/50ee2f_cc34cad1b2b448beae7d807965c1abab~mv2.jpg',
    link: 'https://www.trycaterwheels.com/',
    company: 'Jungleworks',
    role: 'Full Stack Developer',
    imageAlt: 'Caterwheels Food Delivery Platform',
  },
  {
    title: 'PBT Dance',
    description: 'Developed a modern dance platform with dynamic content management, user authentication, and interactive features.',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'REST APIs'],
    image: '/images/pbt_dance.png',
    link: 'https://www.pbt.dance',
    company: 'Inzint',
    role: 'Frontend Developer',
    imageAlt: 'PBT Dance Platform Interface',
  }
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-6"
          >
            My Work
          </motion.span>
          <h2 className="text-6xl font-bold text-gray-900 dark:text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of my work demonstrating expertise in full-stack development, real-time applications, and scalable solutions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                {/* Project Image */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-700">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-contain p-4 transform group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Company Tag - Top Right */}
                  {project.company !== project.title && (
                    <div className="absolute top-3 right-3 px-3 py-1.5 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700 dark:text-gray-300 shadow-lg border border-gray-200 dark:border-gray-700">
                      @ {project.company}
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {project.role}
                    </span>
                    <FaExternalLinkAlt className="text-sm text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>

              {/* Hover Tooltip with Full Description */}
              {hoveredProject === index && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute z-50 left-1/2 transform -translate-x-1/2 bottom-full mb-4 w-[calc(100%-2rem)] max-w-md"
                >
                  <div className="bg-gray-900 dark:bg-gray-700 text-white p-4 rounded-xl shadow-2xl border border-gray-700 dark:border-gray-600">
                    <p className="text-sm leading-relaxed">
                      {project.description}
                    </p>
                    {/* Arrow pointing down */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-900 dark:border-t-gray-700"></div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Projects; 