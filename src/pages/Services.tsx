
import React from 'react';
import { motion } from 'framer-motion';
import { GlassMorphismCard } from '../components/GlassMorphismCard';
import { ParticleBackground } from '../components/ParticleBackground';

export const Services: React.FC = () => {
  const services = [
    {
      title: 'HDR Photo Editing',
      price: '$0.45',
      description: 'Professional HDR processing that brings out the best in every room',
      features: [
        'Multiple exposure blending',
        'Natural color enhancement',
        'Shadow and highlight balancing',
        'Professional quality output'
      ],
      turnaround: '8-12 hours',
      icon: '🏠'
    },
    {
      title: 'Day-to-Dusk Conversion',
      price: '$3.00',
      description: 'Transform ordinary day photos into stunning twilight scenes',
      features: [
        'Realistic sky replacement',
        'Interior lighting effects',
        'Warm ambient lighting',
        'Premium twilight atmosphere'
      ],
      turnaround: '12-24 hours',
      icon: '🌅'
    },
    {
      title: 'Sky Replacement',
      price: '$0.35',
      description: 'Replace dull or overcast skies with dramatic cloudscapes',
      features: [
        'Natural sky blending',
        'Color matching',
        'Reflection adjustments',
        'Weather-appropriate selection'
      ],
      turnaround: '6-8 hours',
      icon: '☁️'
    },
    {
      title: 'Object Removal',
      price: '$0.50',
      description: 'Remove unwanted objects and distractions from your photos',
      features: [
        'Clean object removal',
        'Background reconstruction',
        'Seamless blending',
        'Natural results'
      ],
      turnaround: '8-12 hours',
      icon: '🧹'
    },
    {
      title: 'Virtual Staging',
      price: '$15.00',
      description: 'Add beautiful furniture and decor to empty rooms',
      features: [
        'Modern furniture placement',
        'Style-appropriate decor',
        'Natural lighting integration',
        'Multiple style options'
      ],
      turnaround: '24-48 hours',
      icon: '🛋️'
    },
    {
      title: 'Panorama 360',
      price: '$2.00',
      description: 'Create immersive 360-degree virtual tours',
      features: [
        'Seamless stitching',
        'Interactive viewing',
        'Mobile-friendly format',
        'Web-ready delivery'
      ],
      turnaround: '12-24 hours',
      icon: '🔄'
    }
  ];

  const acceptedFormats = [
    'JPEG (.jpg, .jpeg)',
    'RAW formats (CR2, NEF, ARW, etc.)',
    'TIFF (.tif, .tiff)',
    'PNG (.png)',
    'Maximum file size: 50MB'
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
            Professional Photo Editing Services
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform your real estate photos with our comprehensive editing services. 
            Professional quality, fast turnaround, and affordable pricing for every need.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <GlassMorphismCard key={service.title} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-2 text-white">{service.title}</h3>
                  <div className="text-3xl font-bold gradient-text mb-4">{service.price}</div>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="text-left space-y-2">
                    <h4 className="font-semibold text-cyan-400 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-center">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-white/20">
                    <div className="flex items-center justify-center text-purple-400">
                      <span className="text-sm">⏱️ Turnaround: {service.turnaround}</span>
                    </div>
                  </div>
                </div>
              </GlassMorphismCard>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            How It Works
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Upload Photos', description: 'Send us your raw images via email, Dropbox, or our upload portal' },
              { step: '2', title: 'Processing', description: 'Our expert editors work their magic using professional software and techniques' },
              { step: '3', title: 'Quality Check', description: 'Every image undergoes thorough quality control before delivery' },
              { step: '4', title: 'Delivery', description: 'Receive your enhanced photos within the promised timeframe' }
            ].map((item, index) => (
              <GlassMorphismCard key={item.step} delay={index * 0.2}>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </GlassMorphismCard>
            ))}
          </div>
        </div>
      </section>

      {/* File Formats Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-8 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Accepted File Formats
          </motion.h2>
          
          <GlassMorphismCard>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">Supported Formats:</h3>
                <ul className="space-y-2">
                  {acceptedFormats.map((format, index) => (
                    <li key={index} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                      {format}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">Quality Guidelines:</h3>
                <ul className="space-y-2">
                  <li className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    Minimum resolution: 2000px wide
                  </li>
                  <li className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    RAW files preferred for best results
                  </li>
                  <li className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    Well-lit, sharp images
                  </li>
                  <li className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    Multiple angles encouraged
                  </li>
                </ul>
              </div>
            </div>
          </GlassMorphismCard>
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
              Ready to Get Started?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Upload your sample images and experience our professional editing quality
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
                Get Started
              </motion.button>
              <motion.button
                className="glass-morphism text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
              </motion.button>
            </motion.div>
          </GlassMorphismCard>
        </div>
      </section>
    </div>
  );
};
