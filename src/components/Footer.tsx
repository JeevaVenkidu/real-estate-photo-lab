
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, MapPin, Clock, Star } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    'HDR Photo Editing',
    'Virtual Staging',
    'Day-to-Dusk Conversion',
    'Sky Replacement',
    'Object Removal',
    'Panorama 360'
  ];

  const contactInfo = [
    { icon: Mail, text: 'hello@realtyfix.com', href: 'mailto:hello@realtyfix.com' },
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MessageCircle, text: 'WhatsApp Chat', href: 'https://wa.me/15551234567' },
    { icon: Clock, text: '24/7 Available', href: null }
  ];

  return (
    <footer className="relative bg-slate-900/95 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold gradient-text">RealtyFix</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional real estate photo editing services with fast turnaround times. 
              Transform your listings with our expert editing team.
            </p>
            <div className="flex items-center text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
              <span className="ml-2 text-gray-300 text-sm">4.9/5 Rating</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <ul className="space-y-3">
              {contactInfo.map((contact) => (
                <li key={contact.text} className="flex items-center space-x-3">
                  <contact.icon className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {contact.text}
                    </a>
                  ) : (
                    <span className="text-gray-300 text-sm">{contact.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center py-8 border-t border-white/10"
        >
          <h4 className="text-xl font-semibold text-white mb-2">
            Ready to Transform Your Photos?
          </h4>
          <p className="text-gray-300 mb-4">Get 3-5 free sample edits today</p>
          <motion.button
            className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Free Trial
          </motion.button>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} RealtyFix. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
