import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import about from '../assets/about.png';

const About = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section
      id="about"
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}
      ref={ref}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* Image Section */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center relative order-2 lg:order-1"
        >
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
            {/* Star Shape Background */}
            <motion.div
              variants={itemVariants}
              className="absolute -inset-4 lg:-inset-20 bg-gradient-to-l from-[#f97316] via-[#fb923c] to-[#f59e0b] rotate-12 z-0"
              style={{
                clipPath:
                  'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              }}
              animate={{
                rotate: [12, 15, 12],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            ></motion.div>

            {/* Main Image */}
            <motion.img
              variants={itemVariants}
              src={about}
              alt="about-image"
              className="absolute inset-0 w-full h-full object-cover z-10 rounded-lg shadow-2xl"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            />

            {/* Floating Elements */}
            <motion.div
              variants={itemVariants}
              animate={{
                y: [0, -15, 0],
                rotate: [0, 10, 0],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className={`absolute -top-4 -right-4 w-16 h-16 rounded-full ${
                darkMode ? 'bg-orange-500/20' : 'bg-orange-300/30'
              } backdrop-blur-sm border-2 ${
                darkMode ? 'border-orange-400/30' : 'border-orange-500/30'
              } flex items-center justify-center z-20`}
            >
              <span className="text-2xl">⭐</span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              animate={{
                y: [0, 15, 0],
                rotate: [0, -10, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              className={`absolute -bottom-4 -left-4 w-14 h-14 rounded-full ${
                darkMode ? 'bg-blue-500/20' : 'bg-blue-300/30'
              } backdrop-blur-sm border-2 ${
                darkMode ? 'border-blue-400/30' : 'border-blue-500/30'
              } flex items-center justify-center z-20`}
            >
              <span className="text-xl">💫</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          variants={containerVariants}
          className="text-center lg:text-left relative order-1 lg:order-2"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text"
          >
            About Me
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className={`text-lg lg:text-xl mb-8 leading-relaxed p-6 rounded-2xl backdrop-blur-sm ${
              darkMode
                ? 'text-gray-300 bg-gray-800/30'
                : 'text-gray-700 bg-white/50'
            }`}
          >
            I'm a passionate frontend developer with expertise in modern web
            technologies. I love creating interactive and user-friendly
            applications that provide amazing digital experiences.
          </motion.p>

          {/* Stats Section */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 gap-6 mb-8"
          >
            {[
              { number: '5+', text: 'Projects Completed' },
              { number: '2+', text: 'Years Experience' },
              { number: '10+', text: 'Technologies' },
              { number: '100%', text: 'Client Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={stat.text}
                variants={itemVariants}
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl lg:text-4xl font-bold text-orange-500 mb-2">
                  {stat.number}
                </div>
                <div
                  className={`text-sm lg:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                >
                  {stat.text}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Tags */}
          <motion.div
            variants={containerVariants}
            className="flex flex-wrap gap-3 justify-center lg:justify-start"
          >
            {[
              'React',
              'JavaScript',
              'Tailwind',
              'CSS3',
              'HTML5',
              'Git',
              'Responsive Design',
            ].map((skill, index) => (
              <motion.span
                key={skill}
                variants={itemVariants}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  darkMode
                    ? 'bg-gray-800 text-orange-400 border border-orange-500/30'
                    : 'bg-white text-orange-600 border border-orange-300'
                } shadow-lg`}
                whileHover={{
                  scale: 1.1,
                  y: -2,
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
