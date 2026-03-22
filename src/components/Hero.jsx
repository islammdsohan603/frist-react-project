import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';

// আপনার ইমেজগুলো import করুন
import instagram from '../assets/instagram.png';
import tiktok from '../assets/tiktok.png';
import github from '../assets/github.png';
import youtube from '../assets/youtube.png';
import CV from '../assets/CV.pdf';
import hero from '../assets/hero.png';
import hi from '../assets/hi.png';

const Hero = ({ darkMode }) => {
  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    // CV ডাউনলোড করার লজিক
    const link = document.createElement('a');
    link.href = CV;
    link.download = 'Your_CV.pdf';
    link.click();
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Hi Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-4"
            >
              <img src={hi} alt="Hi" className="w-16 h-16 object-contain" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className={`text-lg font-medium mb-4 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}
              style={{
                textShadow: darkMode ? '0 2px 4px rgba(0,0,0,0.3)' : 'none',
              }}
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className={`text-4xl lg:text-6xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
              style={{
                textShadow: darkMode
                  ? '0 2px 8px rgba(0,0,0,0.5)'
                  : '0 1px 3px rgba(0,0,0,0.1)',
              }}
            >
              Web Developer
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className={`text-xl lg:text-2xl mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
              style={{
                textShadow: darkMode ? '0 1px 2px rgba(0,0,0,0.3)' : 'none',
              }}
            >
              I create{' '}
              <span
                className={`font-bold ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}
              >
                amazing web experiences
              </span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className={`text-lg mb-8 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
              style={{
                textShadow: darkMode ? '0 1px 2px rgba(0,0,0,0.2)' : 'none',
              }}
            >
              Passionate frontend developer specializing in React, JavaScript,
              and modern web technologies. I love turning ideas into interactive
              and user-friendly applications.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl ${
                  darkMode
                    ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-orange-500/30'
                    : 'bg-orange-600 hover:bg-orange-700 text-white shadow-orange-600/30'
                }`}
              >
                View My Work
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadCV}
                className={`px-8 py-3 rounded-lg font-medium border-2 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 ${
                  darkMode
                    ? 'border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white shadow-orange-500/20'
                    : 'border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white shadow-orange-600/20'
                }`}
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.button>
            </motion.div>

            {/* Social Links - Custom Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex justify-center lg:justify-start gap-6 mt-8"
            >
              {[
                {
                  icon: github,
                  href: 'https://github.com',
                  label: 'GitHub',
                  iconType: 'image',
                },
                {
                  icon: Linkedin,
                  href: 'https://linkedin.com',
                  label: 'LinkedIn',
                  iconType: 'lucide',
                },
                {
                  icon: instagram,
                  href: 'https://instagram.com',
                  label: 'Instagram',
                  iconType: 'image',
                },
                {
                  icon: youtube,
                  href: 'https://youtube.com',
                  label: 'YouTube',
                  iconType: 'image',
                },
                {
                  icon: tiktok,
                  href: 'https://tiktok.com',
                  label: 'TikTok',
                  iconType: 'image',
                },
                {
                  icon: Mail,
                  href: 'mailto:example@email.com',
                  label: 'Email',
                  iconType: 'lucide',
                },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl ${
                    darkMode
                      ? 'bg-gray-800 hover:bg-orange-500 text-gray-300 hover:text-white shadow-gray-800/50'
                      : 'bg-gray-200 hover:bg-orange-500 text-gray-700 hover:text-white shadow-gray-200/50'
                  }`}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.iconType === 'image' ? (
                    <img
                      src={social.icon}
                      alt={social.label}
                      className="w-5 h-5 object-contain"
                    />
                  ) : (
                    <social.icon className="w-5 h-5" />
                  )}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Your Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Main Hero Image */}
              <div
                className={`relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 ${
                  darkMode ? 'border-orange-500/30' : 'border-orange-500/20'
                } shadow-2xl`}
              >
                <img
                  src={hero}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${
                    darkMode
                      ? 'from-gray-900/50 to-transparent'
                      : 'from-white/20 to-transparent'
                  }`}
                ></div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className={`absolute -top-4 -right-4 w-24 h-24 rounded-full ${
                  darkMode
                    ? 'bg-gradient-to-br from-orange-500/20 to-amber-500/10'
                    : 'bg-gradient-to-br from-orange-300/30 to-amber-300/20'
                } border-2 ${darkMode ? 'border-orange-500/30' : 'border-orange-400/30'} backdrop-blur-sm`}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="flex items-center justify-center h-full">
                  <span
                    className={`text-2xl ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}
                  >
                    🚀
                  </span>
                </div>
              </motion.div>

              <motion.div
                className={`absolute -bottom-6 -left-6 w-20 h-20 rounded-full ${
                  darkMode
                    ? 'bg-gradient-to-br from-blue-500/20 to-cyan-500/10'
                    : 'bg-gradient-to-br from-blue-300/30 to-cyan-300/20'
                } border-2 ${darkMode ? 'border-blue-500/30' : 'border-blue-400/30'} backdrop-blur-sm`}
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              >
                <div className="flex items-center justify-center h-full">
                  <span
                    className={`text-2xl ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}
                  >
                    💻
                  </span>
                </div>
              </motion.div>

              {/* Animated Border */}
              <motion.div
                className={`absolute inset-0 rounded-full border-4 ${
                  darkMode ? 'border-orange-400/20' : 'border-orange-500/20'
                }`}
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex justify-center mt-16 lg:mt-24"
        >
          <motion.button
            onClick={() => scrollToSection('about')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`p-4 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl ${
              darkMode
                ? 'bg-gray-800 hover:bg-orange-500 text-orange-400 hover:text-white shadow-gray-800/50'
                : 'bg-gray-200 hover:bg-orange-500 text-orange-600 hover:text-white shadow-gray-200/50'
            }`}
            aria-label="Scroll down"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
