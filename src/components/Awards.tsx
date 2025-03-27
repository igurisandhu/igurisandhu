'use client';

import { useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import Image from 'next/image';

const awards = [
  {
    title: 'Employee of the Quarter',
    issuedBy: 'Jungleworks Pvt Ltd',
    date: 'Apr 2024',
    associatedWith: 'JungleWorks',
    image: 'https://media.licdn.com/dms/image/v2/D562DAQEADxxl9XNk_g/profile-treasury-image-shrink_8192_8192/profile-treasury-image-shrink_8192_8192/0/1719493821142?e=1743573600&v=beta&t=ncseSp7pLTSedYf1te_oIcRQsZ8sFzTef4j1TP0uVok',
    gradient: 'from-blue-500 to-purple-500',
  },
  {
    title: 'Star Performer',
    issuedBy: 'Jungleworks Tookan Team',
    date: 'Jul 2023',
    associatedWith: 'JungleWorks',
    image: 'https://media.licdn.com/dms/image/v2/D562DAQF2Jj9Hi3uqyw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1706546544412?e=1743674400&v=beta&t=79kk9Hg0YAm2NWQ1_pHG719GCVvebqJt9OwxRb0WAmA',
    gradient: 'from-purple-500 to-pink-500',
  }
];

const Awards = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="awards" className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 md:mb-16">
            Honors & Awards
          </h2>
        </AnimateOnScroll>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {awards.map((award, index) => (
              <AnimateOnScroll
                key={index}
                delay={index * 0.2}
                className="relative"
              >
                <div
                  className={`bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl p-6 shadow-xl backdrop-blur-lg border border-white/10 dark:border-gray-700/30 transform transition-all duration-500 hover:scale-[1.02] ${
                    activeIndex === index ? 'ring-2 ring-blue-500' : ''
                  }`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/3">
                      <div className="relative h-48 md:h-60 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
                        <div className={`absolute inset-0 bg-gradient-to-r ${award.gradient} opacity-10`}></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Image 
                            src={award.image}
                            alt={award.title}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 33vw"
                            priority
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                          {award.title}
                        </h3>
                        <span className="text-blue-600 dark:text-blue-400 font-medium text-sm md:text-base">
                          {award.date}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        Issued by {award.issuedBy}
                      </p>
                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>Associated with {award.associatedWith}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards; 