'use client';

import { useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Jungleworks Pvt Ltd',
    period: 'Jun 2023 - Present',
    description: 'Developed and optimized Node.js APIs and dynamic Angular interfaces and features for SaaS clients, including McDonaldsIndia.com, Peddler.express, Litta.io, Dubz.com, and TryCaterWheels.com. Designed and managed databases using MongoDB and MySQL, ensuring high performance and scalability. Delivered customized solutions, collaborating with product teams and clients to meet diverse business requirements. Diagnosed and resolved critical issues, optimizing platform performance and reliability. Utilized Git and CI/CD pipelines for version control and automated deployments. Developed Product features such as Reminder Scheduling, Real Time Agent Tracking, Microsoft Azure Integrations, and Leaflet Map Integrations.',
    technologies: ['Node.js', 'Angular', 'MongoDB', 'MySQL', 'Git', 'CI/CD', 'Azure', 'Leaflet Maps'],
    gradient: 'from-blue-500 to-purple-500',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Associate Software Engineer',
    company: 'Inzint Private Limited',
    period: 'Jul 2022 - Apr 2023',
    description: 'Developed dynamic web applications using React and TypeScript for frontend development. Built and optimized backend services with Node.js and TypeScript, ensuring high-performance APIs. Managed and designed databases with MongoDB, ensuring efficient data storage and retrieval. Contributed to the development of pbt.dance, enhancing user experience and overall platform functionality. Collaborated with cross-functional teams to deliver timely and high-quality software solutions. Wrote clean, maintainable code, following best practices and ensuring smooth deployment cycles.',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'REST APIs'],
    gradient: 'from-purple-500 to-pink-500',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Associate Software Developer',
    company: 'Quadtrics Solutions',
    period: 'Apr 2021 - Jul 2022',
    description: 'Designed and implemented the backend with Node.js, ensuring scalable and reliable application performance. Integrated WebSockets for real-time updates and chats, enhancing collaboration and coordination for construction teams. Managed data storage using MongoDB, ensuring secure and efficient handling of project data. Developed an intuitive user interface with Vanilla JavaScript, improving user satisfaction and operational efficiency.',
    technologies: ['Node.js', 'MongoDB', 'WebSocket', 'JavaScript', 'Express.js'],
    gradient: 'from-pink-500 to-red-500',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 md:mb-16">
            Work Experience
          </h2>
        </AnimateOnScroll>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 md:transform md:-translate-x-1/2 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <AnimateOnScroll
                  key={index}
                  delay={index * 0.2}
                  className="relative"
                >
                  <div className={`flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}>
                    {/* Timeline Dot - Mobile & Desktop */}
                    <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 bg-white dark:bg-gray-800 rounded-full border-3 border-blue-500 flex items-center justify-center z-10">
                      <div className={`text-white bg-gradient-to-r ${exp.gradient} rounded-full p-1 md:p-1.5`}>
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={
                            typeof exp.icon.props.children.props.d === 'string' 
                              ? exp.icon.props.children.props.d 
                              : ""
                          } />
                        </svg>
                      </div>
                    </div>

                    {/* Experience Card */}
                    <div className={`pl-12 md:pl-0 w-full md:w-1/2 ${
                      index % 2 === 0 ? 'md:pr-8 lg:pr-12' : 'md:pl-8 lg:pl-12'
                    }`}>
                      <div
                        className={`bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl backdrop-blur-lg border border-white/10 dark:border-gray-700/30 transform transition-all duration-500 hover:scale-[1.02] ${
                          activeIndex === index ? 'ring-2 ring-blue-500' : ''
                        }`}
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                      >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 md:mb-3 gap-1">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                            {exp.title}
                          </h3>
                          <span className="text-blue-600 dark:text-blue-400 font-medium text-sm whitespace-nowrap">
                            {exp.period}
                          </span>
                        </div>
                        <h4 className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-2 md:mb-3">
                          {exp.company}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 md:mb-4 leading-relaxed">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 md:gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-0.5 md:px-2.5 md:py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-xs transform transition-all duration-300 hover:scale-105"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 