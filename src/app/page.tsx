'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Awards from '@/components/Awards';
import Certifications from '@/components/Certifications';
import SocialLinks from '@/components/SocialLinks';
import SideNav from '@/components/SideNav';

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Awards />
      <Certifications />
      <SideNav isNavOpen={isNavOpen} onNavOpenChange={setIsNavOpen} />
      <SocialLinks isNavOpen={isNavOpen} />
    </main>
  );
}
