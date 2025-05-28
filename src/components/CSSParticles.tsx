import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

interface CSSParticlesProps {
  count?: number;
  colors?: string[];
  speed?: number;
  mouseInteraction?: boolean;
  trailEffect?: boolean;
}

export const CSSParticles: React.FC<CSSParticlesProps> = ({
  count = 50,
  colors = ['#06b6d4', '#8b5cf6', '#10b981'],
  speed = 1,
  mouseInteraction = true,
  trailEffect = false
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  // Initialize particles
  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        size: Math.random() * 4 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    setParticles(newParticles);
  }, [count, colors, speed]);

  // Mouse tracking
  useEffect(() => {
    if (!mouseInteraction) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseInteraction]);

  // Animation loop
  useEffect(() => {
    const animate = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          let { x, y, vx, vy } = particle;

          // Natural movement
          x += vx;
          y += vy;

          // Mouse interaction
          if (mouseInteraction) {
            const dx = mousePos.x - x;
            const dy = mousePos.y - y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
              const force = (100 - distance) / 100;
              vx += (dx / distance) * force * 0.1;
              vy += (dy / distance) * force * 0.1;
            }
          }

          // Boundary bounce
          if (x <= 0 || x >= window.innerWidth) vx *= -0.8;
          if (y <= 0 || y >= window.innerHeight) vy *= -0.8;

          // Keep within bounds
          x = Math.max(0, Math.min(window.innerWidth, x));
          y = Math.max(0, Math.min(window.innerHeight, y));

          // Damping
          vx *= 0.99;
          vy *= 0.99;

          return { ...particle, x, y, vx, vy };
        })
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePos, mouseInteraction]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
      style={{ background: trailEffect ? 'rgba(0,0,0,0.05)' : 'transparent' }}
    >
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full transition-all duration-100 ease-out"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none'
          }}
        />
      ))}
    </div>
  );
};
