
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassMorphismCard } from '../components/GlassMorphismCard';
import { ParticleBackground } from '../components/ParticleBackground';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    files: null as FileList | null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      files: e.target.files
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    alert('Thank you! We\'ll get back to you within 24 hours.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      files: null
    });
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'hello@realtyfix.com',
      description: 'Send us your photos anytime'
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      value: '+1 (555) 123-4567',
      description: 'Quick responses and updates'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Direct line for urgent requests'
    },
    {
      icon: '⏰',
      title: 'Availability',
      value: '24/7 Including Holidays',
      description: 'We never stop working for you'
    }
  ];

  const uploadOptions = [
    {
      icon: '📤',
      title: 'Direct Upload',
      description: 'Use our secure upload form below'
    },
    {
      icon: '📁',
      title: 'Dropbox Link',
      description: 'Share a Dropbox folder link'
    },
    {
      icon: '☁️',
      title: 'Google Drive',
      description: 'Share Google Drive folder'
    },
    {
      icon: '📧',
      title: 'Email Attachment',
      description: 'Send files directly to our email'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Get In Touch
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to transform your real estate photos? Send us your images and let's create something amazing together. 
            We're available 24/7 to help you succeed.
          </motion.p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <GlassMorphismCard key={method.title} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl mb-3">{method.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
                  <div className="text-cyan-400 font-medium mb-2">{method.value}</div>
                  <p className="text-gray-300 text-sm">{method.description}</p>
                </div>
              </GlassMorphismCard>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Send Your Photos for Editing
          </motion.h2>
          
          <GlassMorphismCard>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Service Needed</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="hdr">HDR Photo Editing</option>
                    <option value="twilight">Day-to-Dusk Conversion</option>
                    <option value="staging">Virtual Staging</option>
                    <option value="sky">Sky Replacement</option>
                    <option value="removal">Object Removal</option>
                    <option value="panorama">Panorama 360</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="Tell us about your project, timeline, and any specific requirements..."
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Upload Photos</label>
                <div className="relative">
                  <input
                    type="file"
                    name="files"
                    onChange={handleFileChange}
                    multiple
                    accept="image/*,.raw,.cr2,.nef,.arw"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-cyan-500 file:text-white hover:file:bg-cyan-600"
                  />
                </div>
                <p className="text-gray-400 text-sm mt-2">
                  Accepted: JPG, PNG, RAW, TIFF • Max 50MB per file • For larger files, use Dropbox/Google Drive links
                </p>
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  'Send Photos for Free Trial'
                )}
              </motion.button>
            </form>
          </GlassMorphismCard>
        </div>
      </section>

      {/* Upload Options */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Multiple Ways to Send Files
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {uploadOptions.map((option, index) => (
              <GlassMorphismCard key={option.title} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl mb-3">{option.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{option.title}</h3>
                  <p className="text-gray-300 text-sm">{option.description}</p>
                </div>
              </GlassMorphismCard>
            ))}
          </div>
          
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <GlassMorphismCard>
              <h3 className="text-xl font-semibold text-white mb-4">Large File Transfers</h3>
              <p className="text-gray-300 mb-4">
                For RAW files or large batches, we recommend using cloud storage solutions:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">Dropbox</span>
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">Google Drive</span>
                <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm">OneDrive</span>
                <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm">WeTransfer</span>
              </div>
            </GlassMorphismCard>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Common Questions
          </motion.h2>
          
          <div className="space-y-6">
            {[
              {
                question: "How quickly will I hear back?",
                answer: "We respond to all inquiries within 4-6 hours, usually much faster. Your free trial edits will be completed within 24 hours."
              },
              {
                question: "What if I need rush delivery?",
                answer: "We offer same-day and 4-hour rush services for urgent projects. Contact us directly to discuss rush pricing and availability."
              },
              {
                question: "Can you handle large batches?",
                answer: "Absolutely! We regularly process 100+ image orders. For large projects, we'll provide a custom timeline and may assign a dedicated team."
              },
              {
                question: "What file formats do you deliver?",
                answer: "We deliver high-resolution JPGs optimized for web and print. RAW files, TIFF, or other formats available upon request."
              }
            ].map((faq, index) => (
              <GlassMorphismCard key={index} delay={index * 0.1}>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </GlassMorphismCard>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <GlassMorphismCard>
            <motion.h2
              className="text-2xl md:text-3xl font-bold mb-6 gradient-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Need Same-Day Service?
            </motion.h2>
            <motion.p
              className="text-lg text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              For urgent listings or last-minute needs, contact us directly
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                💬 WhatsApp Now
              </motion.a>
              <motion.a
                href="tel:+15551234567"
                className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📞 Call Direct
              </motion.a>
            </motion.div>
          </GlassMorphismCard>
        </div>
      </section>
    </div>
  );
};
