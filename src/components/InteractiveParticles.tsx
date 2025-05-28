
import React, { useRef, useMemo, useCallback, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface InteractiveParticlesProps {
  count?: number;
  speed?: number;
  mouseInteraction?: boolean;
  connectionLines?: boolean;
  explosionEffect?: boolean;
}

function InteractiveParticleSystem({ 
  count = 200, 
  speed = 0.5, 
  mouseInteraction = true,
  connectionLines = false,
  explosionEffect = false 
}: InteractiveParticlesProps) {
  const ref = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const { size, mouse, camera } = useThree();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const particleCount = count;
  
  // Initialize particle positions and velocities
  const { positions, velocities, originalPositions } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 30;
      const y = (Math.random() - 0.5) * 30;
      const z = (Math.random() - 0.5) * 30;
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      
      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;
      
      velocities[i * 3] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
    }
    
    return { positions, velocities, originalPositions };
  }, [particleCount]);

  // Connection lines geometry
  const connectionGeometry = useMemo(() => {
    if (!connectionLines) return null;
    return new THREE.BufferGeometry();
  }, [connectionLines]);

  useFrame((state) => {
    if (!ref.current) return;
    
    const time = state.clock.elapsedTime * speed;
    const positions = ref.current.geometry.attributes.position.array as Float32Array;
    
    // Convert mouse position to world coordinates
    const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
    vector.unproject(camera);
    const mouseWorldPos = new THREE.Vector3(vector.x, vector.y, vector.z);
    
    // Update particle positions
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Natural floating motion
      positions[i3] += velocities[i3];
      positions[i3 + 1] += velocities[i3 + 1] + Math.sin(time + i) * 0.001;
      positions[i3 + 2] += velocities[i3 + 2];
      
      // Mouse interaction
      if (mouseInteraction) {
        const particlePos = new THREE.Vector3(positions[i3], positions[i3 + 1], positions[i3 + 2]);
        const distance = particlePos.distanceTo(mouseWorldPos);
        
        if (distance < 5) {
          const force = (5 - distance) / 5;
          const direction = particlePos.clone().sub(mouseWorldPos).normalize();
          
          positions[i3] += direction.x * force * 0.1;
          positions[i3 + 1] += direction.y * force * 0.1;
          positions[i3 + 2] += direction.z * force * 0.1;
        }
      }
      
      // Boundary wrapping
      if (positions[i3] > 15) positions[i3] = -15;
      if (positions[i3] < -15) positions[i3] = 15;
      if (positions[i3 + 1] > 15) positions[i3 + 1] = -15;
      if (positions[i3 + 1] < -15) positions[i3 + 1] = 15;
      if (positions[i3 + 2] > 15) positions[i3 + 2] = -15;
      if (positions[i3 + 2] < -15) positions[i3 + 2] = 15;
    }
    
    ref.current.geometry.attributes.position.needsUpdate = true;
    
    // Update connection lines
    if (connectionLines && linesRef.current && connectionGeometry) {
      const linePositions: number[] = [];
      const maxDistance = 3;
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const pos1 = new THREE.Vector3(positions[i3], positions[i3 + 1], positions[i3 + 2]);
        
        for (let j = i + 1; j < particleCount; j++) {
          const j3 = j * 3;
          const pos2 = new THREE.Vector3(positions[j3], positions[j3 + 1], positions[j3 + 2]);
          const distance = pos1.distanceTo(pos2);
          
          if (distance < maxDistance) {
            linePositions.push(pos1.x, pos1.y, pos1.z);
            linePositions.push(pos2.x, pos2.y, pos2.z);
          }
        }
      }
      
      connectionGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
      linesRef.current.geometry = connectionGeometry;
    }
    
    // Gentle rotation
    ref.current.rotation.y = time * 0.02;
  });

  return (
    <>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#06b6d4"
          size={0.04}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      
      {connectionLines && connectionGeometry && (
        <lineSegments ref={linesRef}>
          <bufferGeometry />
          <lineBasicMaterial 
            color="#8b5cf6" 
            transparent 
            opacity={0.2}
            blending={THREE.AdditiveBlending}
          />
        </lineSegments>
      )}
    </>
  );
}

export const InteractiveParticles: React.FC<InteractiveParticlesProps> = (props) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const adjustedCount = isMobile ? Math.floor((props.count || 200) * 0.5) : props.count;

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 75 }}
        performance={{ min: 0.5 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.1} />
        <InteractiveParticleSystem {...props} count={adjustedCount} />
      </Canvas>
    </div>
  );
};
