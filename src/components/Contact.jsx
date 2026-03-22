import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      info: 'islammdsohan603@gmail.com',
      link: 'mailto:islammdsohan603@gmail.com',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      info: '+880 1849 468455',
      link: 'tel:+8801849468455',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      info: 'Dhaka, Bangladesh',
      link: '#',
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

  return (
    <section
      id="contact"
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
            Get In <span className="text-orange-500">Touch</span>
          </h2>
          <p
            className={`text-lg lg:text-xl max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
          >
            Have a project in mind? Let's work together to bring your ideas to
            life!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <h3
              className={`text-2xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}
            >
              Contact Information
            </h3>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.link}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                    darkMode
                      ? 'bg-gray-800 hover:bg-gray-700'
                      : 'bg-white hover:bg-gray-100'
                  } shadow-lg`}
                >
                  <div
                    className={`p-3 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
                  >
                    <div className="text-orange-500">{item.icon}</div>
                  </div>
                  <div>
                    <h4
                      className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}
                    >
                      {item.title}
                    </h4>
                    <p
                      className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                    >
                      {item.info}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Media */}
            <motion.div variants={itemVariants} className="mt-12">
              <h4
                className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}
              >
                Follow Me
              </h4>
              <div className="flex gap-4">
                {['LinkedIn', 'GitHub', 'Twitter', 'Instagram'].map(
                  (platform, index) => (
                    <motion.a
                      key={platform}
                      href="#"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0 }
                      }
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`p-3 rounded-full transition-colors duration-300 ${
                        darkMode
                          ? 'bg-gray-800 hover:bg-orange-500 text-gray-300 hover:text-white'
                          : 'bg-gray-200 hover:bg-orange-500 text-gray-700 hover:text-white'
                      }`}
                    >
                      {platform.charAt(0)}
                    </motion.a>
                  ),
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <label
                    className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 ${
                      darkMode
                        ? 'bg-gray-800 border-gray-700 text-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20'
                        : 'bg-white border-gray-300 text-gray-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20'
                    }`}
                    placeholder="John Doe"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label
                    className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 ${
                      darkMode
                        ? 'bg-gray-800 border-gray-700 text-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20'
                        : 'bg-white border-gray-300 text-gray-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20'
                    }`}
                    placeholder="john@example.com"
                  />
                </motion.div>
              </div>

              <motion.div variants={itemVariants}>
                <label
                  className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 ${
                    darkMode
                      ? 'bg-gray-800 border-gray-700 text-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20'
                      : 'bg-white border-gray-300 text-gray-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20'
                  }`}
                  placeholder="Project Inquiry"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 ${
                    darkMode
                      ? 'bg-gray-800 border-gray-700 text-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20'
                      : 'bg-white border-gray-300 text-gray-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20'
                  }`}
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              <motion.button
                variants={itemVariants}
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSubmitted
                    ? 'bg-green-500 text-white'
                    : darkMode
                      ? 'bg-orange-500 hover:bg-orange-600 text-white'
                      : 'bg-orange-600 hover:bg-orange-700 text-white'
                } shadow-lg hover:shadow-xl`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
