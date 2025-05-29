
import React from 'react';

export const AnimatedGradientOrbs: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Blue gradient orb (top-left, 8s pulse animation) */}
      <div 
        className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
        style={{ 
          animationDuration: '8s',
          animationTimingFunction: 'ease-in-out',
          animationIterationCount: 'infinite'
        }}
      />
      
      {/* Purple gradient orb (bottom-right, 12s pulse animation) */}
      <div 
        className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
        style={{ 
          animationDuration: '12s',
          animationTimingFunction: 'ease-in-out',
          animationIterationCount: 'infinite'
        }}
      />
      
      {/* Cyan gradient orb (top-right, 10s pulse animation) */}
      <div 
        className="absolute -top-10 -right-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
        style={{ 
          animationDuration: '10s',
          animationTimingFunction: 'ease-in-out',
          animationIterationCount: 'infinite'
        }}
      />
    </div>
  );
};
