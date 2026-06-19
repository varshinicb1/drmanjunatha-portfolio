'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function MolecularStructure() {
  const groupRef = useRef<any>(null);

  const atoms = useMemo(() => {
    const positions: [number, number, number][] = [];
    const count = 45;
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2 + Math.random() * 5;
      positions.push([
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi),
      ]);
    }
    return positions;
  }, []);

  const bonds = useMemo(() => {
    const b: [number, number][] = [];
    for (let i = 0; i < atoms.length; i++) {
      for (let j = i + 1; j < atoms.length; j++) {
        const dx = atoms[i][0] - atoms[j][0];
        const dy = atoms[i][1] - atoms[j][1];
        const dz = atoms[i][2] - atoms[j][2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 2.5 && Math.random() < 0.12) b.push([i, j]);
      }
    }
    return b;
  }, [atoms]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.06;
      groupRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {atoms.map((pos, i) => (
        <mesh key={`a-${i}`} position={pos}>
          <sphereGeometry args={[0.06 + Math.random() * 0.04, 10, 10]} />
          <meshBasicMaterial color="#06b6d4" transparent opacity={0.1 + Math.random() * 0.2} />
        </mesh>
      ))}
      {bonds.map(([i, j], idx) => {
        const s = atoms[i], e = atoms[j];
        const mid = [(s[0] + e[0]) / 2, (s[1] + e[1]) / 2, (s[2] + e[2]) / 2];
        const dx = e[0] - s[0], dy = e[1] - s[1], dz = e[2] - s[2];
        const len = Math.sqrt(dx * dx + dy * dy + dz * dz);
        const dir = [dx / len, dy / len, dz / len];
        return (
          <mesh key={`b-${idx}`} position={mid as any}>
            <cylinderGeometry args={[0.005, 0.005, len, 3]} />
            <meshBasicMaterial color="#06b6d4" transparent opacity={0.1} />
          </mesh>
        );
      })}
    </group>
  );
}

export default function NanoBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} gl={{ alpha: true }} style={{ background: 'transparent' }}>
        <ambientLight intensity={0.5} />
        <MolecularStructure />
      </Canvas>
    </div>
  );
}
