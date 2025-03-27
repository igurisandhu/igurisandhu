'use client';

import { useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { SiPython, SiJavascript, SiHtml5, SiCss3, SiGoogle } from 'react-icons/si';
import { FaAlgolia } from 'react-icons/fa';

const certifications = [
  {
    title: 'JavaScript Algorithms and Data Structures',
    organization: 'freeCodeCamp',
    date: 'Sep 2021',
    skills: ['Data Structures', 'Algorithms', 'JavaScript'],
    icon: FaAlgolia,
    color: 'text-green-500',
    gradient: 'from-green-500 to-emerald-500',
    credentialId: null,
    link: 'https://www.freecodecamp.org/certification/igurisandhu/javascript-algorithms-and-data-structures'
  },
  {
    title: 'JavaScript Course',
    organization: 'Sololearn',
    date: 'Apr 2021',
    skills: ['JavaScript'],
    icon: SiJavascript,
    color: 'text-yellow-500',
    gradient: 'from-yellow-500 to-orange-500',
    credentialId: '#1024-3269578',
    link: 'https://www.sololearn.com/Certificate/1024-3269578/jpg/'
  },
  {
    title: 'Python Fundamentals for Beginners',
    organization: 'Great Learning',
    date: 'May 2023',
    skills: ['Python (Programming Language)'],
    icon: SiPython,
    color: 'text-blue-500',
    gradient: 'from-blue-500 to-teal-500',
    credentialId: null,
    link: 'https://olympus.mygreatlearning.com/courses/12682/certificate'
  },
  {
    title: 'HTML Course',
    organization: 'Sololearn',
    date: 'Sep 2020',
    skills: ['HTML', 'HTML5'],
    icon: SiHtml5,
    color: 'text-orange-500',
    gradient: 'from-orange-500 to-red-500',
    credentialId: '#1014-3269578',
    link: 'https://www.sololearn.com/Certificate/1014-3269578/jpg/'
  },
  {
    title: 'CSS Course',
    organization: 'Sololearn',
    date: 'Aug 2020',
    skills: ['Responsive Web Design', 'Cascading Style Sheets (CSS)'],
    icon: SiCss3,
    color: 'text-blue-500',
    gradient: 'from-blue-500 to-indigo-500',
    credentialId: '#1023-3269578',
    link: 'https://www.sololearn.com/Certificate/1023-3269578/jpg/'
  },
  {
    title: 'The Fundamentals of Digital Marketing',
    organization: 'Google Digital Garage',
    date: 'Dec 2020',
    skills: ['Search Engine Optimization (SEO)'],
    icon: SiGoogle,
    color: 'text-red-500',
    gradient: 'from-red-500 to-pink-500',
    credentialId: 'FYH XCX LWQ',
    link: 'https://learndigital.withgoogle.com/digitalgarage/course/digital-marketing/certificate.pdf'
  }
];

const Certifications = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="certifications" className="py-20 pb-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 md:mb-16">
            Licenses & Certifications
          </h2>
        </AnimateOnScroll>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {certifications.map((cert, index) => (
              <AnimateOnScroll
                key={index}
                delay={index * 0.1}
                className="h-full"
              >
                <div
                  className={`group h-full bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg backdrop-blur-lg border border-white/10 dark:border-gray-700/30 
                    transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
                    ${activeIndex === index ? 'ring-2 ring-blue-500' : ''}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-r ${cert.gradient} opacity-10 rounded-lg`} />
                    <div className="flex items-center justify-between">
                      <div className={`${cert.color} text-3xl transform transition-transform duration-300 group-hover:scale-110`}>
                        <cert.icon />
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                    {cert.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {cert.organization}
                  </p>

                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r ${cert.gradient} 
                            text-white transform transition-all duration-300 hover:scale-105`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    {cert.credentialId && (
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Credential ID: {cert.credentialId}
                      </p>
                    )}

                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="w-full mt-4 px-4 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-lg 
                      text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 
                      transition-colors duration-300 flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Show Certificate
                    </a>
                  </div>

                  {/* Decorative elements */}
                  {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent 
                    transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" /> */}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications; 