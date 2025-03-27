'use client';

import { useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import {
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiAmazon,
  SiFirebase,
  SiRedux,
  SiJest,
  SiWebpack,
  SiVuedotjs,
} from 'react-icons/si';

type AnimationType = 'spin' | 'morph' | 'bounce-rotate' | 'wiggle';

interface Skill {
  name: string;
  icon: React.ComponentType;
  color: string;
  animation: AnimationType;
}

const skills: Skill[] = [
  { name: 'React', icon: SiReact, color: 'text-blue-500', animation: 'spin' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-black dark:text-white', animation: 'morph' },
  { name: 'Angular', icon: SiAngular, color: 'text-red-500', animation: 'spin' },
  { name: 'Vue.js', icon: SiVuedotjs, color: 'text-green-500', animation: 'spin' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600', animation: 'bounce-rotate' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400', animation: 'bounce-rotate' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500', animation: 'wiggle' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500', animation: 'bounce-rotate' },
  { name: 'MySQL', icon: SiMysql, color: 'text-blue-500', animation: 'wiggle' },
  { name: 'AWS', icon: SiAmazon, color: 'text-yellow-500', animation: 'bounce-rotate' },
  { name: 'Firebase', icon: SiFirebase, color: 'text-orange-500', animation: 'morph' },
  { name: 'Docker', icon: SiDocker, color: 'text-blue-500', animation: 'wiggle' },
  { name: 'Git', icon: SiGit, color: 'text-red-500', animation: 'bounce-rotate' },
  { name: 'HTML5', icon: SiHtml5, color: 'text-orange-500', animation: 'morph' },
  { name: 'CSS3', icon: SiCss3, color: 'text-blue-500', animation: 'morph' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500', animation: 'spin' },
  { name: 'Redux', icon: SiRedux, color: 'text-purple-500', animation: 'spin' },
  { name: 'Jest', icon: SiJest, color: 'text-red-500', animation: 'bounce-rotate' },
  { name: 'Webpack', icon: SiWebpack, color: 'text-blue-500', animation: 'spin' },
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="container mx-auto px-6">
        <AnimateOnScroll>
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Skills & Expertise
          </h2>
        </AnimateOnScroll>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {skills.map((skill, index) => (
                <AnimateOnScroll
                  key={`${skill.name}-${index}`}
                  delay={0.05 * (index + 1)}
                  className="h-full"
                >
                  <div
                    className="relative group h-full"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 dark:bg-gray-700/5 backdrop-blur-lg border border-white/10 dark:border-gray-700/30 transition-all duration-300 hover:bg-white/20 dark:hover:bg-gray-700/20 shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transform hover:-translate-y-2 h-full min-h-[100px]">
                      <div 
                        className={`text-3xl ${skill.color} transition-all duration-300 group-hover:scale-110 mb-3 drop-shadow-xl ${
                          hoveredSkill === skill.name 
                            ? skill.animation === 'spin' 
                              ? 'animate-spin-slow'
                              : skill.animation === 'morph'
                              ? 'animate-morph'
                              : skill.animation === 'bounce-rotate'
                              ? 'animate-bounce-rotate'
                              : 'animate-wiggle'
                            : ''
                        }`}
                      >
                        <skill.icon />
                      </div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white text-center transition-colors duration-300 group-hover:text-blue-500 dark:group-hover:text-blue-400">
                        {skill.name}
                      </h4>
                    </div>
                    {/* Hover effects */}
                    <div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 transition-opacity duration-300 ${
                        hoveredSkill === skill.name ? 'opacity-100' : ''
                      }`}
                    />
                    <div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 blur-xl ${
                        hoveredSkill === skill.name ? 'opacity-100' : ''
                      }`}
                    />
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

export default Skills;