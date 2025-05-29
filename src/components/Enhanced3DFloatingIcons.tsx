
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingIcon3DProps {
  icon: string;
  position: [number, number, number];
  color?: string;
}

function FloatingIcon3D({ icon, position, color = "#8b5cf6" }: FloatingIcon3DProps) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.3;
      
      // Twinkle effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 3 + position[0]) * 0.1;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group ref={meshRef} position={position}>
      <mesh>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color={color} transparent opacity={0.7} />
      </mesh>
      <Text
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {icon}
      </Text>
    </group>
  );
}

export const Enhanced3DFloatingIcons: React.FC = () => {
  const iconData = [
    { icon: '🏠', position: [-3, 2, -1] as [number, number, number], color: '#06b6d4' },
    { icon: '📸', position: [3, 1, 1] as [number, number, number], color: '#8b5cf6' },
    { icon: '✨', position: [-2, -1, 2] as [number, number, number], color: '#10b981' },
    { icon: '🎨', position: [2, -2, -2] as [number, number, number], color: '#f59e0b' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {iconData.map((item, index) => (
          <FloatingIcon3D
            key={index}
            icon={item.icon}
            position={item.position}
            color={item.color}
          />
        ))}
      </Canvas>
    </div>
  );
};
