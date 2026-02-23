import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * FloatingCube Component
 * Design: Cyberpunk Neon Minimalism
 * Features: 3D cube with mouse tracking and rotation animation
 */
export default function FloatingCube() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.current = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY.current = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.005;
      
      // Mouse tracking
      meshRef.current.rotation.x += mouseY.current * 0.1;
      meshRef.current.rotation.y += mouseX.current * 0.1;
      
      // Floating animation
      meshRef.current.position.y += Math.sin(Date.now() * 0.001) * 0.001;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshPhongMaterial
        color="#00d9ff"
        emissive="#00d9ff"
        emissiveIntensity={0.5}
        wireframe={true}
      />
    </mesh>
  );
}
