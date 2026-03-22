import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

const Footer = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-50px' });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <footer
      ref={ref}
      className={`pt-16 pb-8 px-4 sm:px-6 ${darkMode ? 'bg-gray-900' : 'bg-gray-800'}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand Info */}
          <motion.div variants={itemVariants}>
            <h3 className={`text-2xl font-bold mb-4 text-white`}>
              Portfolio<span className="text-orange-500">.</span>
            </h3>
            <p className={`mb-6 text-gray-300`}>
              Creating amazing web experiences with modern technologies and
              innovative solutions.
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-3 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-orange-500' : 'bg-gray-700 hover:bg-orange-500'} transition-colors duration-300`}
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-white" />
            </motion.button>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className={`text-xl font-bold mb-6 text-white`}>Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(link => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className={`hover:text-orange-400 transition-colors duration-300 text-gray-300`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className={`text-xl font-bold mb-6 text-white`}>Services</h4>
            <ul className="space-y-3">
              {[
                'Web Development',
                'Frontend Development',
                'UI/UX Design',
                'Responsive Design',
                'Web Applications',
              ].map(service => (
                <li key={service}>
                  <span className={`text-gray-300`}>{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className={`text-xl font-bold mb-6 text-white`}>Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-orange-400 mt-1" />
                <span className={`text-gray-300`}>
                  islammdsohan603@gmail.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-orange-400 mt-1" />
                <span className={`text-gray-300`}>+880 1849 468455</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1" />
                <span className={`text-gray-300`}>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8 }}
          className={`h-px mb-8 bg-gray-700 transform origin-left`}
        ></motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <motion.p
            variants={itemVariants}
            className={`text-center md:text-left text-gray-300`}
          >
            © {currentYear} Portfolio. All rights reserved.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className={`flex items-center gap-2 text-gray-300`}
          >
            Made with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.span>
            by Sohan
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-4">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(
              item => (
                <a
                  key={item}
                  href="#"
                  className={`hover:text-orange-400 transition-colors duration-300 text-gray-300`}
                >
                  {item}
                </a>
              ),
            )}
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center gap-6 mt-8"
        >
          {['LinkedIn', 'GitHub', 'Twitter', 'Instagram', 'Facebook'].map(
            (platform, index) => (
              <motion.a
                key={platform}
                href="#"
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className={`p-2 rounded-full transition-colors duration-300 ${darkMode ? 'bg-gray-800 hover:bg-orange-500 text-gray-300 hover:text-white' : 'bg-gray-700 hover:bg-orange-500 text-gray-300 hover:text-white'}`}
                aria-label={platform}
              >
                {platform.charAt(0)}
              </motion.a>
            ),
          )}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
