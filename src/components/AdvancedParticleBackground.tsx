
import React, { useRef, useMemo, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface AdvancedParticlesProps {
  count?: number;
  mousePosition?: { x: number; y: number };
}

function AdvancedParticles({ count = 80, mousePosition }: AdvancedParticlesProps) {
  const ref = useRef<THREE.Points>(null);
  const { viewport } = useThree();
  
  const particleCount = count;
  const colors = [0x06b6d4, 0x8b5cf6, 0x06b6d4, 0x10b981, 0xf59e0b]; // blue, purple, cyan, green, orange
  
  const { positions, velocities, particleColors } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      // Random positions
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      
      // Random velocities
      velocities[i * 3] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
      
      // Random colors
      const color = new THREE.Color(colors[Math.floor(Math.random() * colors.length)]);
      particleColors[i * 3] = color.r;
      particleColors[i * 3 + 1] = color.g;
      particleColors[i * 3 + 2] = color.b;
    }
    
    return { positions, velocities, particleColors };
  }, [particleCount]);

  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.elapsedTime;
      const positions = ref.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        // Mouse interaction
        if (mousePosition) {
          const mouseX = (mousePosition.x / window.innerWidth) * 2 - 1;
          const mouseY = -(mousePosition.y / window.innerHeight) * 2 + 1;
          
          const dx = positions[i3] - mouseX * viewport.width;
          const dy = positions[i3 + 1] - mouseY * viewport.height;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 3) {
            const force = (3 - distance) / 3;
            positions[i3] += (dx / distance) * force * 0.01;
            positions[i3 + 1] += (dy / distance) * force * 0.01;
          }
        }
        
        // Natural floating motion
        positions[i3] += velocities[i3];
        positions[i3 + 1] += velocities[i3 + 1] + Math.sin(time * 0.5 + i) * 0.002;
        positions[i3 + 2] += velocities[i3 + 2];
        
        // Twinkle effect by varying z position
        positions[i3 + 2] += Math.sin(time * 2 + i) * 0.001;
        
        // Boundary wrapping
        if (positions[i3] > 10) positions[i3] = -10;
        if (positions[i3] < -10) positions[i3] = 10;
        if (positions[i3 + 1] > 10) positions[i3 + 1] = -10;
        if (positions[i3 + 1] < -10) positions[i3 + 1] = 10;
      }
      
      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={particleColors}
          itemSize={3}
        />
      </bufferGeometry>
      <PointMaterial
        transparent
        vertexColors
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

interface AdvancedParticleBackgroundProps {
  mousePosition?: { x: number; y: number };
}

export const AdvancedParticleBackground: React.FC<AdvancedParticleBackgroundProps> = ({ 
  mousePosition 
}) => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
        performance={{ min: 0.5 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.1} />
        <AdvancedParticles mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
};
