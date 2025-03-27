import Image from 'next/image';
import AnimateOnScroll from './AnimateOnScroll';

const Hero = () => {
  const skills = [
    { name: 'JavaScript', color: 'bg-yellow-500' },
    { name: 'Node.js', color: 'bg-green-500' },
    { name: 'React.js', color: 'bg-blue-500' },
    { name: 'TypeScript', color: 'bg-blue-600' },
    { name: 'MongoDB', color: 'bg-green-600' },
    { name: 'MySQL', color: 'bg-blue-400' },
  ];

  const gridItems = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Creating responsive and modern web applications',
      color: 'from-blue-500/10 to-purple-500/10',
      hoverColor: 'from-blue-500/20 to-purple-500/20',
    },
    {
      icon: '🚀',
      title: 'Performance',
      description: 'Optimized for speed and efficiency',
      color: 'from-green-500/10 to-emerald-500/10',
      hoverColor: 'from-green-500/20 to-emerald-500/20',
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive interfaces',
      color: 'from-pink-500/10 to-rose-500/10',
      hoverColor: 'from-pink-500/20 to-rose-500/20',
    },
    {
      icon: '🔒',
      title: 'Security',
      description: 'Built with best security practices',
      color: 'from-yellow-500/10 to-amber-500/10',
      hoverColor: 'from-yellow-500/20 to-amber-500/20',
    },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-4 md:pt-0">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10"> */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 md:space-y-8">
            <AnimateOnScroll>
              <div className="space-y-3 md:space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  <span className="inline-block">Hi, I'm</span>
                  <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    {' '}
                    Guri
                  </span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                  MERN Stack Developer
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-xl">
                Dedicated Full Stack Engineer with 4+ years of experience in designing, developing, and managing web applications. Proficient in JavaScript, TypeScript, MongoDB, ExpressJS, ReactJS, NextJS, Aangular and Node.js. Adept at building APIs, managing databases, and ensuring smooth application performance. Skilled team player with strong problem-solving abilities and a track record of meeting deadlines.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.4}>
              <div className="flex flex-wrap gap-3 md:gap-4">
                <a
                  href="#projects"
                  className="px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 text-sm sm:text-base"
                >
                  View Projects
                </a>
              </div>
            </AnimateOnScroll>

            {/* Skills section */}
            <AnimateOnScroll delay={0.6}>
              <div className="pt-4 md:pt-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 md:mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {skills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-white ${skill.color} transform hover:scale-110 transition-transform duration-300 text-xs sm:text-sm`}
                      style={{
                        animationDelay: `${index * 100}ms`,
                      }}
                    >
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right side - Grid */}
          <AnimateOnScroll delay={0.4} className="relative mt-8 lg:mt-0">
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none h-[400px] md:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl transform rotate-3 sm:rotate-6 hidden sm:block"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl transform -rotate-3 sm:-rotate-6 hidden sm:block"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-4 sm:p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-2 sm:gap-4">
                  {gridItems.map((item, index) => (
                    <AnimateOnScroll key={index} delay={0.2 * (index + 1)}>
                      <div
                        className={`aspect-square bg-gradient-to-br ${item.color} rounded-xl p-3 sm:p-4 hover:${item.hoverColor} transition-all duration-500 transform hover:scale-105 group cursor-pointer`}
                      >
                        <div className="w-full h-full flex flex-col items-center justify-center space-y-2 sm:space-y-4">
                          <div className="text-3xl sm:text-4xl transform group-hover:scale-110 transition-transform duration-500">
                            {item.icon}
                          </div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white text-center">
                            {item.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </AnimateOnScroll>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Hero;