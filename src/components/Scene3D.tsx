'use client';

import dynamic from 'next/dynamic';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

const ParticleField = dynamic(() => import('./ParticleField'), { ssr: false });
const GridPlane = dynamic(() => import('./GridPlane'), { ssr: false });

export default function Scene3D() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 2, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <ParticleField />
          <GridPlane />
        </Suspense>
      </Canvas>
    </div>
  );
}
