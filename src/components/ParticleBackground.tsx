
import React, { useRef, useMemo, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface ParticlesProps {
  count?: number;
  speed?: number;
}

function Particles({ count = 150, speed = 0.5 }: ParticlesProps) {
  const ref = useRef<THREE.Points>(null);
  
  const particleCount = count;
  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 25;
    }
    return positions;
  }, [particleCount]);

  const velocities = useMemo(() => {
    const velocities = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      velocities[i * 3] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
    }
    return velocities;
  }, [particleCount]);

  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.elapsedTime * speed;
      
      // Gentle rotation
      ref.current.rotation.x = Math.sin(time * 0.1) * 0.1;
      ref.current.rotation.y = time * 0.05;

      // Update particle positions for floating effect
      const positions = ref.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        // Add gentle floating motion
        positions[i3] += velocities[i3];
        positions[i3 + 1] += velocities[i3 + 1] + Math.sin(time + i) * 0.001;
        positions[i3 + 2] += velocities[i3 + 2];

        // Wrap particles around the scene
        if (positions[i3] > 12.5) positions[i3] = -12.5;
        if (positions[i3] < -12.5) positions[i3] = 12.5;
        if (positions[i3 + 1] > 12.5) positions[i3 + 1] = -12.5;
        if (positions[i3 + 1] < -12.5) positions[i3 + 1] = 12.5;
        if (positions[i3 + 2] > 12.5) positions[i3 + 2] = -12.5;
        if (positions[i3 + 2] < -12.5) positions[i3 + 2] = 12.5;
      }
      
      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#06b6d4"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

interface ParticleBackgroundProps {
  intensity?: 'low' | 'medium' | 'high';
  interactive?: boolean;
}

export const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ 
  intensity = 'medium',
  interactive = false 
}) => {
  const getParticleCount = useCallback(() => {
    switch (intensity) {
      case 'low': return 75;
      case 'high': return 300;
      default: return 150;
    }
  }, [intensity]);

  const getSpeed = useCallback(() => {
    switch (intensity) {
      case 'low': return 0.3;
      case 'high': return 0.8;
      default: return 0.5;
    }
  }, [intensity]);

  // Reduce particles on mobile for performance
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const particleCount = isMobile ? Math.floor(getParticleCount() * 0.6) : getParticleCount();

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
        performance={{ min: 0.5 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.1} />
        <Particles count={particleCount} speed={getSpeed()} />
        
        {/* Secondary particle layer for depth */}
        <Particles count={Math.floor(particleCount * 0.3)} speed={getSpeed() * 0.7} />
      </Canvas>
    </div>
  );
};
