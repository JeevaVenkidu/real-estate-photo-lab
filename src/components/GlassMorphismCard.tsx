
import React from 'react';
import { motion } from 'framer-motion';

interface GlassMorphismCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const GlassMorphismCard: React.FC<GlassMorphismCardProps> = ({
  children,
  className = '',
  delay = 0
}) => {
  return (
    <motion.div
      className={`glass-morphism rounded-xl p-6 hover:box-glow transition-all duration-300 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      {children}
    </motion.div>
  );
};
