import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaDatabase,
} from 'react-icons/fa';

const Skills = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  const skills = [
    { name: 'React', icon: <FaReact />, level: 90, color: 'text-cyan-400' },
    { name: 'JavaScript', icon: <FaJs />, level: 85, color: 'text-yellow-400' },
    { name: 'HTML5', icon: <FaHtml5 />, level: 95, color: 'text-orange-500' },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 90, color: 'text-blue-400' },
    { name: 'Node.js', icon: <FaNodeJs />, level: 80, color: 'text-green-500' },
    { name: 'Git', icon: <FaGitAlt />, level: 88, color: 'text-orange-600' },
    {
      name: 'GitHub',
      icon: <FaGithub />,
      level: 90,
      color: 'text-gray-800 dark:text-gray-100',
    },
    { name: 'Figma', icon: <FaFigma />, level: 80, color: 'text-pink-500' },
    {
      name: 'Database',
      icon: <FaDatabase />,
      level: 75,
      color: 'text-blue-600',
    },
    {
      name: 'Responsive Design',
      icon: <FaHtml5 />,
      level: 92,
      color: 'text-purple-500',
    },
    { name: 'Web Design', icon: <FaFigma />, level: 85, color: 'text-red-500' },
    { name: 'UI/UX', icon: <FaFigma />, level: 78, color: 'text-indigo-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      id="skills"
      ref={ref}
      className={`min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl lg:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
          >
            My <span className="text-orange-500">Skills</span>
          </h2>
          <p
            className={`text-lg lg:text-xl max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
          >
            Technologies and tools I work with to create amazing web experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              className={`flex flex-col items-center p-6 rounded-2xl transition-all duration-300 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} shadow-lg hover:shadow-xl`}
            >
              <div className={`text-4xl mb-4 ${skill.color}`}>{skill.icon}</div>
              <h3
                className={`font-semibold text-center mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}
              >
                {skill.name}
              </h3>
              {/* Progress Bar */}
              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={
                    isInView ? { width: `${skill.level}%` } : { width: 0 }
                  }
                  transition={{ duration: 1.5, delay: index * 0.1 }}
                  className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"
                />
              </div>
              <span
                className={`text-sm mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
              >
                {skill.level}%
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className={`mt-16 p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div
                className={`text-3xl font-bold mb-2 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}
              >
                Frontend
              </div>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                React, JavaScript, HTML5, CSS3, Responsive Design
              </p>
            </div>
            <div className="text-center">
              <div
                className={`text-3xl font-bold mb-2 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}
              >
                Tools
              </div>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Git, GitHub, Figma, VS Code, npm/yarn
              </p>
            </div>
            <div className="text-center">
              <div
                className={`text-3xl font-bold mb-2 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}
              >
                Design
              </div>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                UI/UX Design, Web Design, Prototyping
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
