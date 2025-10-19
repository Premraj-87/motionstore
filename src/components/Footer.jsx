/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import footerVideo from "../assets/gif/globe.mp4";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const socialLinks = [
    { icon: FaLinkedin, url: "#", label: "LinkedIn" },
    { icon: FaGithub, url: "#", label: "GitHub" },
    { icon: FaTwitter, url: "#", label: "Twitter" },
    { icon: FaInstagram, url: "#", label: "Instagram" },
  ];

  const quickLinks = [
    { name: "Home", section: "intro" },
    { name: "About", section: "about" },
    { name: "Services", section: "services" },
    { name: "Work", section: "work" },
    { name: "Testimonials", section: "testimonials" },
  ];

  return (
    <motion.footer
      className="relative text-white rounded-2xl overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          src={footerVideo}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay - Blends from black at top to transparent */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-transparent"></div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 p-8 md:p-12 lg:p-16">
        {/* Top Section - CTA and Newsletter */}
        <div className="mb-12 pb-12 border-b border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">
                Let's Create Something Amazing
              </h2>
              <p className="text-gray-300 text-lg">
                Ready to bring your vision to life? Get in touch with us today.
              </p>
            </motion.div>

            {/* Newsletter/Contact Form */}
            <motion.div
              className="bg-black/40 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-orbitron font-semibold mb-4">Stay Updated</h3>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors"
                />
                <motion.button
                  type="submit"
                  className="px-6 py-3 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Middle Section - Links and Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-orbitron font-bold mb-4">MotionStore</h3>
            <p className="text-gray-300 mb-4">
              Creating exceptional digital experiences through innovative design and development.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-orbitron font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.section)}
                    className="text-gray-300 hover:text-amber-500 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h4 className="text-lg font-orbitron font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Web Design</li>
              <li className="text-gray-300">3D Motion</li>
              <li className="text-gray-300">Branding</li>
              <li className="text-gray-300">Product Design</li>
              <li className="text-gray-300">Digital Art</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h4 className="text-lg font-orbitron font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-300">
                <FaEnvelope className="text-amber-500" />
                <span>hello@motionstore.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <FaPhone className="text-amber-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <FaMapMarkerAlt className="text-amber-500" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section - Social and Copyright */}
        <motion.div
          className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                aria-label={social.label}
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-amber-500 hover:text-black transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="text-lg" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm text-center md:text-right">
            © {currentYear} MotionStore. All rights reserved. | Crafted with passion
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
