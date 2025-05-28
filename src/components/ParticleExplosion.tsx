
import React, { useState, useEffect, useRef } from 'react';

interface ExplosionParticle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
}

interface ParticleExplosionProps {
  trigger?: boolean;
  x?: number;
  y?: number;
  particleCount?: number;
  colors?: string[];
  onComplete?: () => void;
}

export const ParticleExplosion: React.FC<ParticleExplosionProps> = ({
  trigger = false,
  x = 0,
  y = 0,
  particleCount = 30,
  colors = ['#ff6b6b', '#ffd93d', '#6bcf7f', '#4ecdc4', '#45b7d1'],
  onComplete
}) => {
  const [particles, setParticles] = useState<ExplosionParticle[]>([]);
  const [isActive, setIsActive] = useState(false);
  const animationRef = useRef<number>();

  const createExplosion = (centerX: number, centerY: number) => {
    const newParticles: ExplosionParticle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount + Math.random() * 0.5;
      const velocity = Math.random() * 8 + 2;
      
      newParticles.push({
        id: i,
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity,
        life: 1,
        maxLife: Math.random() * 60 + 30,
        size: Math.random() * 6 + 2,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    
    setParticles(newParticles);
    setIsActive(true);
  };

  useEffect(() => {
    if (trigger) {
      createExplosion(x, y);
    }
  }, [trigger, x, y]);

  useEffect(() => {
    if (!isActive) return;

    const animate = () => {
      setParticles(prevParticles => {
        const updatedParticles = prevParticles
          .map(particle => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            vx: particle.vx * 0.98,
            vy: particle.vy * 0.98 + 0.1, // gravity
            life: particle.life - (1 / particle.maxLife)
          }))
          .filter(particle => particle.life > 0);

        if (updatedParticles.length === 0) {
          setIsActive(false);
          onComplete?.();
          return [];
        }

        return updatedParticles;
      });

      if (isActive) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isActive, onComplete]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 pointer-events-none -z-10">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: particle.life,
            transform: 'translate(-50%, -50%)',
            boxShadow: `0 0 ${particle.size}px ${particle.color}`
          }}
        />
      ))}
    </div>
  );
};
