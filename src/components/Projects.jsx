import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      description:
        'A full-featured e-commerce platform with shopping cart, user authentication, and payment integration.',
      image:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        'A productivity app for managing tasks with drag-and-drop functionality and real-time updates.',
      image:
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
      featured: true,
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description:
        'Real-time weather application with location-based forecasts and interactive maps.',
      image:
        'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
      technologies: ['JavaScript', 'API Integration', 'Chart.js'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
      featured: false,
    },
    {
      id: 4,
      title: 'Social Media App',
      description:
        'A social networking platform with posts, comments, likes, and user profiles.',
      image:
        'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500&h=300&fit=crop',
      technologies: ['React', 'Express', 'MySQL', 'Socket.io'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
      featured: false,
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description:
        'A responsive portfolio website showcasing projects and skills with modern design.',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
      featured: false,
    },
    {
      id: 6,
      title: 'Chat Application',
      description:
        'Real-time chat application with multiple rooms and file sharing capabilities.',
      image:
        'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className={`min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto">
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
            My <span className="text-orange-500">Projects</span>
          </h2>
          <p
            className={`text-lg lg:text-xl max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
          >
            Here are some of my recent projects that showcase my skills and
            experience
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-16"
        >
          <h3
            className={`text-2xl font-bold mb-8 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}
          >
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects
              .filter(project => project.featured)
              .map(project => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  whileHover="hover"
                  className={`rounded-2xl overflow-hidden shadow-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                >
                  <div className="relative group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <motion.a
                        href={project.liveLink}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white text-gray-900 rounded-full"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={project.githubLink}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white text-gray-900 rounded-full"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>

                  <div className="p-6">
                    <h4
                      className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}
                    >
                      {project.title}
                    </h4>
                    <p
                      className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                    >
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            darkMode
                              ? 'bg-gray-700 text-orange-400'
                              : 'bg-gray-200 text-orange-600'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <motion.a
                        href={project.liveLink}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                          darkMode
                            ? 'bg-orange-500 hover:bg-orange-600 text-white'
                            : 'bg-orange-600 hover:bg-orange-700 text-white'
                        }`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={project.githubLink}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium border transition-colors ${
                          darkMode
                            ? 'border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white'
                            : 'border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                        }`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* All Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <h3
            className={`text-2xl font-bold mb-8 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}
          >
            All Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover="hover"
                className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  {project.featured && (
                    <span className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  )}
                </div>

                <div className="p-4">
                  <h4
                    className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}
                  >
                    {project.title}
                  </h4>
                  <p
                    className={`text-sm mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                  >
                    {project.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <div className="flex gap-1">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className={`px-2 py-1 rounded text-xs ${
                            darkMode
                              ? 'bg-gray-700 text-orange-400'
                              : 'bg-gray-200 text-orange-600'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span
                          className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
                        >
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <motion.a
                      href={project.liveLink}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-2 rounded-full ${
                        darkMode
                          ? 'bg-gray-700 text-orange-400 hover:bg-orange-500 hover:text-white'
                          : 'bg-gray-200 text-orange-600 hover:bg-orange-500 hover:text-white'
                      } transition-colors`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className={`text-center mt-16 p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
        >
          <h3
            className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
          >
            Interested in working together?
          </h3>
          <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Let's discuss your next project and bring your ideas to life
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
              darkMode
                ? 'bg-orange-500 hover:bg-orange-600 text-white'
                : 'bg-orange-600 hover:bg-orange-700 text-white'
            }`}
          >
            Get In Touch
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
