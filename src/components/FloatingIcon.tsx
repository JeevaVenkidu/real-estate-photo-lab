
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Center } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingIconProps {
  icon: string;
  position: [number, number, number];
  color?: string;
}

function Icon3D({ icon, position, color = "#8b5cf6" }: FloatingIconProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.2;
    }
  });

  return (
    <Center position={position}>
      <mesh ref={meshRef}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </Center>
  );
}

export const FloatingIcon: React.FC<FloatingIconProps> = ({ icon, position, color }) => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Icon3D icon={icon} position={position} color={color} />
      </Canvas>
    </div>
  );
};
