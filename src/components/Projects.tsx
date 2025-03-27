'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'McDonalds India',
    description: 'Developed and optimized Node.js APIs and dynamic Angular interfaces for McDonald\'s India platform. Implemented real-time agent tracking and reminder scheduling features.',
    technologies: ['Node.js', 'Angular', 'MongoDB', 'Azure', 'Leaflet Maps'],
    image: 'https://mcdindia.com/wp-content/uploads/2020/01/m-logo-big.svg',
    link: 'https://McDonaldsIndia.com',
    company: 'Jungleworks Pvt Ltd',
    role: 'Lead Developer',
    imageAlt: 'McDonalds India Platform Screenshot',
  },
  {
    title: 'FrontDesk AI',
    description: 'Built an AI-powered front desk management system that automates guest interactions, handles reservations, and provides intelligent responses to common queries.',
    technologies: ['React', 'Node.js', 'MongoDB', 'OpenAI API', 'WebSocket'],
    image: 'https://cdn.prod.website-files.com/646676436cb9dc8974098e06/67ba167873d2b1b6e83c3f6f_svgviewer-png-output.png',
    link: 'https://myfrontdeskai.com',
    company: 'FrontDesk AI',
    role: 'Full Stack Developer',
    imageAlt: 'FrontDesk AI Platform Interface',
  },
  {
    title: 'Ptrack Tech',
    description: 'Developed a comprehensive delivery management platform with real-time tracking, workforce management, and business operations optimization features.',
    technologies: ['Node.js', 'React', 'MongoDB', 'WebSocket', 'Leaflet Maps'],
    image: 'https://poonatravels.com/wp-content/uploads/2023/11/Poona___Rent_a_Cab-removebg-preview-1.png',
    link: 'https://live-dashboard.ptracktech.com',
    company: 'Ptrack Tech',
    role: 'Full Stack Developer',
    imageAlt: 'Ptrack Tech Dashboard Interface',
  },
  {
    title: 'Caterwheels',
    description: 'Built a food catering delivery platform for NYC restaurants, featuring real-time order tracking, driver management, and seamless restaurant integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'REST APIs', 'Payment Gateway'],
    image: 'https://static.wixstatic.com/media/50ee2f_cc34cad1b2b448beae7d807965c1abab~mv2.jpg/v1/fill/w_652,h_954,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/50ee2f_cc34cad1b2b448beae7d807965c1abab~mv2.jpg',
    link: 'https://www.trycaterwheels.com/',
    company: 'Caterwheels',
    role: 'Full Stack Developer',
    imageAlt: 'Caterwheels Food Delivery Platform',
  },
  {
    title: 'Peddler Express',
    description: 'Built a comprehensive delivery management system with real-time tracking, automated scheduling, and dynamic route optimization.',
    technologies: ['Node.js', 'Angular', 'MongoDB', 'WebSocket', 'Leaflet Maps'],
    image: 'https://cdn.prod.website-files.com/633192e4ba783e9aeca403f4/63346ce2357b323916a625c3_pic.jpg',
    link: 'https://Peddler.express',
    company: 'Jungleworks Pvt Ltd',
    role: 'Lead Developer',
    imageAlt: 'Peddler Express Delivery Management System',
  },
  {
    title: 'PBT Dance',
    description: 'Developed a modern dance platform with dynamic content management, user authentication, and interactive features.',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'REST APIs'],
    image: 'https://www.pbt.dance/_next/image?url=https%3A%2F%2Fpbt-website-images.s3.amazonaws.com%2F05a14f36-df93-4f98-bff9-dba5170a2008-1727238442.jpg&w=640&q=75',
    link: 'https://www.pbt.dance',
    company: 'Inzint Private Limited',
    role: 'Frontend Developer',
    imageAlt: 'PBT Dance Platform Interface',
  },
  {
    title: 'Tookan',
    description: 'Developed a comprehensive delivery and pickup management platform with real-time tracking, automated task assignment, and dynamic route optimization for businesses.',
    technologies: ['Node.js', 'React', 'MongoDB', 'WebSocket', 'Google Maps API'],
    image: 'https://jungleworks.com/wp-content/uploads/2023/03/customerApp-img.png',
    link: 'https://www.tookanapp.com',
    company: 'Jungleworks Pvt Ltd',
    role: 'Full Stack Developer',
    imageAlt: 'Tookan Delivery Management Platform',
  }
];

const Projects = () => {
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
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
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
            </motion.a>
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