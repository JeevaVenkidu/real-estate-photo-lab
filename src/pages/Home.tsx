import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { SimpleParticleBackground } from "@/components/SimpleParticleBackground";
import { SimpleFloatingIcons } from "@/components/SimpleFloatingIcons";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Enhanced3DFloatingIcons } from "@/components/Enhanced3DFloatingIcons";
import { AnimatedGradientOrbs } from "@/components/AnimatedGradientOrbs";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Home = () => {
  const navigate = useNavigate();
  const [use3D, setUse3D] = useState(true);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Gradient Orbs */}
      <AnimatedGradientOrbs />
      
      {/* Conditional Particle Background System */}
      {use3D ? (
        <>
          <ParticleBackground intensity="medium" />
          <Enhanced3DFloatingIcons />
        </>
      ) : (
        <>
          <SimpleParticleBackground particleCount={120} />
          <SimpleFloatingIcons />
        </>
      )}

      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent pointer-events-none" />

      {/* Theme Toggle - positioned in top right */}
      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white dark:text-white light:text-slate-900 mb-6 leading-tight">
              Transform Your
              <span className="block gradient-text">
                Memories
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 dark:text-slate-300 light:text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Professional photo restoration and enhancement services that bring your precious memories back to life with stunning clarity and detail.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Button
              size="lg"
              className="glass-morphism hover:bg-white/20 text-white border-white/20 hover:border-white/40 transition-all duration-300 px-8 py-3 text-lg font-semibold group"
              onClick={() => navigate('/contact')}
            >
              Get Started Today
              <motion.span
                className="ml-2 inline-block"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="glass-morphism border-white/30 text-white dark:text-white light:text-slate-900 hover:bg-white/10 transition-all duration-300 px-8 py-3 text-lg"
              onClick={() => navigate('/portfolio')}
            >
              View Portfolio
            </Button>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16"
          >
            <div className="glass-morphism p-6 rounded-xl text-center hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold text-white dark:text-white light:text-slate-900 mb-2">
                Damage Repair
              </h3>
              <p className="text-slate-300 dark:text-slate-300 light:text-slate-600">
                Fix tears, scratches, and water damage with precision
              </p>
            </div>
            
            <div className="glass-morphism p-6 rounded-xl text-center hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl mb-4">✨</div>
              <h3 className="text-xl font-semibold text-white dark:text-white light:text-slate-900 mb-2">
                Color Enhancement
              </h3>
              <p className="text-slate-300 dark:text-slate-300 light:text-slate-600">
                Restore faded colors and improve overall image quality
              </p>
            </div>
            
            <div className="glass-morphism p-6 rounded-xl text-center hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-white dark:text-white light:text-slate-900 mb-2">
                Digital Conversion
              </h3>
              <p className="text-slate-300 dark:text-slate-300 light:text-slate-600">
                Convert physical photos to high-quality digital formats
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
