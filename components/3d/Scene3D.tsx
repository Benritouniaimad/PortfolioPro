"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Sphere } from "@react-three/drei";
import * as random from "maath/random";
import * as THREE from "three";

/**
 * 3D Starfield Background Component
 * Creates an animated particle system with stars floating in 3D space
 * Used as the hero section background
 */

interface StarsProps {
  count?: number;
}

function Stars({ count = 5000 }: StarsProps) {
  const ref = useRef<THREE.Points>(null);
  
  // Generate random star positions in a sphere
  const positions = random.inSphere(new Float32Array(count * 3), { radius: 1.5 }) as Float32Array;

  // Animate the star field rotation
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </div>
  );
}
