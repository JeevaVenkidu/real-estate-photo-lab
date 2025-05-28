
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassMorphismCard } from '../components/GlassMorphismCard';
import { ImageComparison } from '../components/ImageComparison';
import { ParticleBackground } from '../components/ParticleBackground';

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'HDR Editing', 'Virtual Staging', 'Twilight Conversion', 'Sky Replacement', 'Object Removal'];

  const portfolioItems = [
    {
      id: 1,
      category: 'HDR Editing',
      title: 'Modern Living Room HDR',
      beforeImage: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop',
      description: 'Enhanced lighting and color balance for a stunning living room showcase'
    },
    {
      id: 2,
      category: 'Virtual Staging',
      title: 'Empty to Furnished Bedroom',
      beforeImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop',
      description: 'Complete virtual staging with modern furniture and decor'
    },
    {
      id: 3,
      category: 'Twilight Conversion',
      title: 'Luxury Home Exterior',
      beforeImage: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&h=400&fit=crop',
      description: 'Day to dusk conversion with warm interior lighting'
    },
    {
      id: 4,
      category: 'Sky Replacement',
      title: 'Dramatic Sky Enhancement',
      beforeImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=400&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&h=400&fit=crop',
      description: 'Replaced overcast sky with dramatic clouds'
    },
    {
      id: 5,
      category: 'HDR Editing',
      title: 'Kitchen Enhancement',
      beforeImage: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=600&h=400&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
      description: 'Professional HDR processing for kitchen photography'
    },
    {
      id: 6,
      category: 'Object Removal',
      title: 'Clean Bathroom Scene',
      beforeImage: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&h=400&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&h=400&fit=crop',
      description: 'Removed personal items and clutter for clean presentation'
    }
  ];

  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

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
            Our Portfolio
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            See the dramatic transformations we create for real estate professionals. 
            Each before/after comparison showcases our commitment to quality and attention to detail.
          </motion.p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                    : 'glass-morphism text-gray-300 hover:text-white hover:bg-white/20'
                }`}
                onClick={() => setActiveFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            layout
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassMorphismCard>
                  <ImageComparison
                    beforeImage={item.beforeImage}
                    afterImage={item.afterImage}
                    title={item.title}
                  />
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <span className="text-sm text-cyan-400 bg-cyan-400/20 px-2 py-1 rounded">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </GlassMorphismCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Why Choose RealtyFix?
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '5000+', label: 'Photos Edited', icon: '📸' },
              { number: '500+', label: 'Happy Clients', icon: '😊' },
              { number: '12h', label: 'Average Turnaround', icon: '⚡' },
              { number: '99%', label: 'Client Satisfaction', icon: '⭐' }
            ].map((stat, index) => (
              <GlassMorphismCard key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </GlassMorphismCard>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Success Stories
          </motion.h2>
          
          <div className="space-y-8">
            <GlassMorphismCard>
              <div className="md:flex items-center gap-8">
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <img
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop"
                    alt="Success story"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold text-white mb-2">Luxury Condo Sale Success</h3>
                  <p className="text-gray-300 mb-4">
                    "After RealtyFix enhanced our photos with HDR editing and virtual staging, 
                    we received 3x more inquiries and sold the property 40% faster than expected. 
                    The professional quality made all the difference."
                  </p>
                  <div className="text-cyan-400 font-medium">- Sarah Johnson, Century 21</div>
                </div>
              </div>
            </GlassMorphismCard>
            
            <GlassMorphismCard delay={0.2}>
              <div className="md:flex items-center gap-8">
                <div className="md:w-1/3 mb-4 md:mb-0 order-2 md:order-1">
                  <img
                    src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=300&fit=crop"
                    alt="Success story"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-2/3 order-1 md:order-2">
                  <h3 className="text-xl font-semibold text-white mb-2">Photography Business Growth</h3>
                  <p className="text-gray-300 mb-4">
                    "As a real estate photographer, partnering with RealtyFix has allowed me to 
                    offer premium editing services to my clients. My business has grown 200% 
                    since we started working together."
                  </p>
                  <div className="text-cyan-400 font-medium">- Michael Chen, Urban Lens Photography</div>
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
              Ready to Transform Your Photos?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Join hundreds of satisfied real estate professionals who trust RealtyFix
            </motion.p>
            <motion.button
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Try 3-5 Free Edits
            </motion.button>
          </GlassMorphismCard>
        </div>
      </section>
    </div>
  );
};
