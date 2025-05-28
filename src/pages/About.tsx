
import React from 'react';
import { motion } from 'framer-motion';
import { GlassMorphismCard } from '../components/GlassMorphismCard';
import { ParticleBackground } from '../components/ParticleBackground';

export const About: React.FC = () => {
  const achievements = [
    { number: '5000+', label: 'Photos Enhanced', icon: '📸' },
    { number: '500+', label: 'Happy Clients', icon: '😊' },
    { number: '3+', label: 'Years Experience', icon: '⭐' },
    { number: '99%', label: 'Client Satisfaction', icon: '🎯' }
  ];

  const tools = [
    { name: 'Adobe Photoshop', expertise: '95%', icon: '🎨' },
    { name: 'Adobe Lightroom', expertise: '98%', icon: '📷' },
    { name: 'Luminar AI', expertise: '90%', icon: '🤖' },
    { name: 'Capture One', expertise: '85%', icon: '🎭' }
  ];

  const values = [
    {
      title: 'Quality First',
      description: 'Every image receives the same meticulous attention to detail, regardless of order size.',
      icon: '💎'
    },
    {
      title: 'Fast Turnaround',
      description: 'We understand real estate moves fast. Most orders completed within 8-12 hours.',
      icon: '⚡'
    },
    {
      title: 'Transparent Pricing',
      description: 'No hidden fees, no surprises. You know exactly what you pay before you start.',
      icon: '💰'
    },
    {
      title: '24/7 Availability',
      description: 'Real estate never sleeps, and neither do we. Available 365 days a year.',
      icon: '🌟'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                className="text-5xl md:text-6xl font-bold mb-6 gradient-text"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                About RealtyFix
              </motion.h1>
              
              <motion.p
                className="text-xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Transforming real estate photography with professional editing services 
                that help agents sell properties faster and photographers deliver 
                exceptional results to their clients.
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.button
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  className="glass-morphism text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Portfolio
                </motion.button>
              </motion.div>
            </div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <GlassMorphismCard>
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=400&fit=crop"
                  alt="Professional photo editing workspace"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">Professional Excellence</h3>
                  <p className="text-gray-300 text-sm">
                    Every image is crafted with precision and artistic vision
                  </p>
                </div>
              </GlassMorphismCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Track Record
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <GlassMorphismCard key={achievement.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl mb-3">{achievement.icon}</div>
                  <div className="text-3xl font-bold gradient-text mb-2">{achievement.number}</div>
                  <div className="text-gray-300">{achievement.label}</div>
                </div>
              </GlassMorphismCard>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Story
          </motion.h2>
          
          <div className="space-y-8">
            <GlassMorphismCard>
              <h3 className="text-xl font-semibold text-white mb-4">The Beginning</h3>
              <p className="text-gray-300 leading-relaxed">
                RealtyFix was born from a simple observation: real estate professionals needed 
                high-quality photo editing services that were both affordable and fast. After working 
                as a freelance photographer for several years, I noticed that many agents were struggling 
                with inconsistent photo quality and slow turnaround times from other editing services.
              </p>
            </GlassMorphismCard>
            
            <GlassMorphismCard delay={0.2}>
              <h3 className="text-xl font-semibold text-white mb-4">The Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                Our mission is to help real estate professionals showcase properties in their best light. 
                We believe that exceptional photography can make the difference between a listing that sits 
                on the market and one that sells quickly. By combining technical expertise with artistic 
                vision, we transform ordinary photos into compelling visual stories.
              </p>
            </GlassMorphismCard>
            
            <GlassMorphismCard delay={0.4}>
              <h3 className="text-xl font-semibold text-white mb-4">Today & Tomorrow</h3>
              <p className="text-gray-300 leading-relaxed">
                Today, RealtyFix serves hundreds of real estate professionals across the country. 
                We've processed thousands of images and helped countless properties sell faster. 
                Looking ahead, we're constantly innovating our techniques and expanding our services 
                to meet the evolving needs of the real estate industry.
              </p>
            </GlassMorphismCard>
          </div>
        </div>
      </section>

      {/* Tools & Expertise */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Tools & Expertise
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <GlassMorphismCard key={tool.name} delay={index * 0.1}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{tool.icon}</span>
                    <h3 className="text-lg font-semibold text-white">{tool.name}</h3>
                  </div>
                  <span className="text-cyan-400 font-medium">{tool.expertise}</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: tool.expertise }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                </div>
              </GlassMorphismCard>
            ))}
          </div>
          
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <GlassMorphismCard>
              <h3 className="text-xl font-semibold text-white mb-4">Professional Workflow</h3>
              <p className="text-gray-300 mb-4">
                We use industry-leading software and proven workflows to ensure consistent, 
                high-quality results for every project. Our color-calibrated monitors and 
                professional workspace guarantee accurate editing that looks great in print and online.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">Color Calibrated Monitors</span>
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">Professional Workspace</span>
                <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm">Quality Control Process</span>
              </div>
            </GlassMorphismCard>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Values
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <GlassMorphismCard key={value.title} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              </GlassMorphismCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            What Clients Say
          </motion.h2>
          
          <div className="space-y-8">
            <GlassMorphismCard>
              <div className="text-center">
                <p className="text-gray-300 text-lg italic mb-6">
                  "Working with RealtyFix has completely transformed my business. The quality is 
                  exceptional, turnaround is lightning fast, and the pricing allows me to offer 
                  premium services to all my clients. I can't imagine working without them."
                </p>
                <div className="border-t border-white/20 pt-4">
                  <p className="font-semibold text-white">Sarah Johnson</p>
                  <p className="text-cyan-400">Senior Real Estate Agent</p>
                  <p className="text-gray-400">Century 21 Premier</p>
                </div>
              </div>
            </GlassMorphismCard>
            
            <GlassMorphismCard delay={0.2}>
              <div className="text-center">
                <p className="text-gray-300 text-lg italic mb-6">
                  "As a photographer, I need partners I can trust with my reputation. RealtyFix 
                  consistently delivers professional results that exceed my clients' expectations. 
                  Their virtual staging service has been a game-changer for my business."
                </p>
                <div className="border-t border-white/20 pt-4">
                  <p className="font-semibold text-white">Michael Chen</p>
                  <p className="text-cyan-400">Professional Photographer</p>
                  <p className="text-gray-400">Urban Lens Photography</p>
                </div>
              </div>
            </GlassMorphismCard>
            
            <GlassMorphismCard delay={0.4}>
              <div className="text-center">
                <p className="text-gray-300 text-lg italic mb-6">
                  "The difference RealtyFix made to my listings was immediate and dramatic. 
                  Properties that might have sat on the market for weeks were getting multiple 
                  offers within days. The ROI on professional photo editing is incredible."
                </p>
                <div className="border-t border-white/20 pt-4">
                  <p className="font-semibold text-white">David Rodriguez</p>
                  <p className="text-cyan-400">Broker/Owner</p>
                  <p className="text-gray-400">Premier Properties Group</p>
                </div>
              </div>
            </GlassMorphismCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <GlassMorphismCard>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 gradient-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Ready to Work Together?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Experience the RealtyFix difference with 3-5 complimentary sample edits
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.button
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
              </motion.button>
              <motion.button
                className="glass-morphism text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </motion.div>
          </GlassMorphismCard>
        </div>
      </section>
    </div>
  );
};
