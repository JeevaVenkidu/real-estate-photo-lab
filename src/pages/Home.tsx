
import React from 'react';
import { motion } from 'framer-motion';
import { ParticleBackground } from '../components/ParticleBackground';
import { GlassMorphismCard } from '../components/GlassMorphismCard';
import { ImageComparison } from '../components/ImageComparison';
import { FloatingIcon } from '../components/FloatingIcon';

export const Home: React.FC = () => {
  const services = [
    {
      title: 'HDR Photo Editing',
      description: 'Professional HDR processing for stunning real estate photos',
      price: '$0.45',
      icon: '🏠'
    },
    {
      title: 'Day-to-Dusk Conversion',
      description: 'Transform day photos into beautiful twilight scenes',
      price: '$3.00',
      icon: '🌅'
    },
    {
      title: 'Virtual Staging',
      description: 'Add furniture and decor to empty rooms',
      price: '$15.00',
      icon: '🛋️'
    },
    {
      title: 'Sky Replacement',
      description: 'Replace dull skies with dramatic cloudscapes',
      price: '$0.35',
      icon: '☁️'
    }
  ];

  const testimonials = [
    {
      text: "RealtyFix transformed my listings! The quality is amazing and turnaround time is perfect for my busy schedule.",
      author: "Sarah Johnson",
      role: "Real Estate Agent",
      company: "Century 21"
    },
    {
      text: "Professional results at unbeatable prices. I'm impressed with the consistency and attention to detail.",
      author: "Michael Chen",
      role: "Property Photographer",
      company: "Urban Lens Photography"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <FloatingIcon icon="🏠" position={[-2, 0, 0]} color="#06b6d4" />
        <FloatingIcon icon="📸" position={[2, 1, -1]} color="#8b5cf6" />
        
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-glow"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Fast, Affordable Real Estate Photo Editing
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Professional Quality • 8–12h Turnaround • Starting at $0.35/image
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Upload Sample Images
            </motion.button>
            <motion.button
              className="glass-morphism text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Portfolio
            </motion.button>
          </motion.div>
        </div>
        
        {/* Floating Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </section>

      {/* Services Highlights */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Premium Services
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <GlassMorphismCard key={service.title} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                  <div className="text-2xl font-bold gradient-text">{service.price}</div>
                </div>
              </GlassMorphismCard>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            See the Transformation
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ImageComparison
              beforeImage="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop"
              afterImage="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop"
              title="HDR Enhancement"
            />
            <ImageComparison
              beforeImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop"
              afterImage="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop"
              title="Virtual Staging"
            />
          </div>
          
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button className="glass-morphism text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300">
              View Full Portfolio
            </button>
          </motion.div>
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
            What Our Clients Say
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <GlassMorphismCard key={index} delay={index * 0.2}>
                <div className="text-center">
                  <p className="text-gray-300 mb-6 italic text-lg">"{testimonial.text}"</p>
                  <div className="border-t border-white/20 pt-4">
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </GlassMorphismCard>
            ))}
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
              Ready to Transform Your Listings?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Upload your images and experience our professional editing quality
            </motion.p>
            <motion.button
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Now
            </motion.button>
          </GlassMorphismCard>
        </div>
      </section>
    </div>
  );
};
