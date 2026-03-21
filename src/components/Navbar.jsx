import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Skills', link: '#skills' },
    { name: 'Projects', link: '#projects' },
    { name: 'Contact', link: '#contact' },
  ];

  const lightColors = {
    navBg: 'bg-gradient-to-br from-orange-200 to-white',
    textPrimary: 'text-gray-900',
    textSecondary: 'text-orange-500',
    textActive: 'text-orange-600',
    indicator: 'from-orange-500 to-amber-500',
    mobileMenuBg: 'bg-white',
    mobileMenuItemHover: 'bg-orange-50',
  };

  const darkColors = {
    navBg: 'bg-gradient-to-br from-gray-700 to-black',
    textPrimary: 'text-white',
    textSecondary: 'text-gray-300',
    textActive: 'text-orange-400',
    indicator: 'from-orange-500 to-amber-500',
    mobileMenuBg: 'bg-gray-800',
    mobileMenuItemHover: 'bg-gray-700',
  };

  const colors = darkMode ? darkColors : lightColors;

  const handleNavClick = itemName => {
    setActiveSection(itemName.toLowerCase());
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-center w-full fixed z-50 mt-4">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`flex items-center justify-center ${colors.navBg} backdrop-blur-xl rounded-2xl px-4 py-2 shadow-lg w-full max-w-6xl mx-4`}
      >
        <div className="flex items-center justify-between w-full space-x-6 lg:space-x-8">
          {/* Logo */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <span className={`text-xl font-bold ${colors.textPrimary}`}>
              Portfolio<span className="text-orange-500">.</span>
            </span>
          </motion.a>

          {/* Desktop Navbar Items */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => handleNavClick(item.name)}
                className="relative"
              >
                <motion.span
                  className={`font-medium transition-colors duration-300 ${
                    activeSection === item.name.toLowerCase()
                      ? colors.textActive
                      : `${colors.textSecondary} hover:text-orange-500`
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.span>
                {activeSection === item.name.toLowerCase() && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r ${colors.indicator} rounded-full`}
                  ></motion.div>
                )}
              </a>
            ))}
          </div>

          {/* Right Side - Dark Mode Toggle and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                darkMode ? 'bg-gray-950' : 'bg-gray-200'
              } transition-colors`}
              aria-label={
                darkMode ? 'Switch to light mode' : 'Switch to dark mode'
              }
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className={`lg:hidden p-2 rounded-full ${
                darkMode ? 'bg-gray-800' : 'bg-gray-100'
              } transition-colors`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`lg:hidden absolute top-full left-0 right-0 mt-2 ${colors.mobileMenuBg} backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden`}
            >
              <div className="py-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.link}
                    onClick={() => handleNavClick(item.name)}
                    className={`block px-6 py-3 transition-colors duration-300 ${
                      activeSection === item.name.toLowerCase()
                        ? `${colors.textActive} ${colors.mobileMenuItemHover}`
                        : `${colors.textSecondary} hover:${colors.mobileMenuItemHover}`
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{item.name}</span>
                      {activeSection === item.name.toLowerCase() && (
                        <motion.div
                          className={`w-2 h-2 rounded-full bg-linear-to-r ${colors.indicator}`}
                          layoutId="mobile-navbar-indicator"
                        ></motion.div>
                      )}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;
