'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function GridLines() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.position.z = (t * 0.4) % 2;
  });

  const verticalLines = useMemo(() => {
    const count = 30;
    const width = 40;
    const depth = 60;
    const lines: THREE.Line[] = [];

    for (let i = 0; i <= count; i++) {
      const x = (i / count) * width - width / 2;
      const points = [new THREE.Vector3(x, 0, -depth / 2), new THREE.Vector3(x, 0, depth / 2)];
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const mat = new THREE.LineBasicMaterial({ color: '#7c3aed', transparent: true, opacity: 0.12 });
      lines.push(new THREE.Line(geo, mat));
    }

    for (let i = 0; i <= count * 2; i++) {
      const z = (i / (count * 2)) * depth - depth / 2;
      const points = [new THREE.Vector3(-width / 2, 0, z), new THREE.Vector3(width / 2, 0, z)];
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const mat = new THREE.LineBasicMaterial({ color: '#06b6d4', transparent: true, opacity: 0.08 });
      lines.push(new THREE.Line(geo, mat));
    }

    return lines;
  }, []);

  return (
    <group ref={groupRef} position={[0, -3, 0]}>
      {verticalLines.map((line, i) => (
        <primitive key={i} object={line} />
      ))}
    </group>
  );
}

export default GridLines;
