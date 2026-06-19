'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function MolecularNetwork() {
  const groupRef = useRef<any>(null);

  const atomCount = 60;
  const bondThreshold = 3.5;

  const atoms = useMemo(() => {
    const positions: number[][] = [];
    for (let i = 0; i < atomCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.5 + Math.random() * 4;
      positions.push([
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi),
      ]);
    }
    return positions;
  }, []);

  const bonds = useMemo(() => {
    const b: number[][] = [];
    for (let i = 0; i < atoms.length; i++) {
      for (let j = i + 1; j < atoms.length; j++) {
        const dx = atoms[i][0] - atoms[j][0];
        const dy = atoms[i][1] - atoms[j][1];
        const dz = atoms[i][2] - atoms[j][2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < bondThreshold && Math.random() < 0.15) {
          b.push([i, j]);
        }
      }
    }
    return b;
  }, [atoms]);

  const corePositions = useMemo(() => {
    const pos: number[][] = [];
    for (let i = 0; i < 10; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 0.3 + Math.random() * 0.5;
      pos.push([
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi),
      ]);
    }
    return pos;
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
      groupRef.current.rotation.x += delta * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      {atoms.map((pos, i) => (
        <mesh key={`atom-${i}`} position={pos as any}>
          <sphereGeometry args={[0.06 + Math.random() * 0.05, 12, 12]} />
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={0.3 + Math.random() * 0.3}
            transparent
            opacity={0.5 + Math.random() * 0.3}
          />
        </mesh>
      ))}

      {bonds.map(([i, j], idx) => {
        const start = atoms[i];
        const end = atoms[j];
        const mid = [
          (start[0] + end[0]) / 2,
          (start[1] + end[1]) / 2,
          (start[2] + end[2]) / 2,
        ];
        const dx = end[0] - start[0];
        const dy = end[1] - start[1];
        const dz = end[2] - start[2];
        const length = Math.sqrt(dx * dx + dy * dy + dz * dz);
        return (
          <mesh
            key={`bond-${idx}`}
            position={mid as any}
          >
            <cylinderGeometry args={[0.008, 0.008, length, 4]} />
            <meshStandardMaterial
              color="#06b6d4"
              emissive="#06b6d4"
              emissiveIntensity={0.15}
              transparent
              opacity={0.2}
            />
          </mesh>
        );
      })}

      {corePositions.map((pos, i) => (
        <mesh key={`core-${i}`} position={pos as any}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#06b6d4"
            emissiveIntensity={0.6}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}

function ParticleField() {
  const ref = useRef<any>(null);
  const count = 800;

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const r = 6 + Math.random() * 15;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
      sz[i] = 0.02 + Math.random() * 0.04;
    }
    return [pos, sz];
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.015;
      ref.current.rotation.x += delta * 0.005;
    }
  });

  return (
    <points ref={ref} position={[0,0,0]} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#06b6d4"
        transparent
        opacity={0.35}
        sizeAttenuation
        blending={2}
        depthWrite={false}
      />
    </points>
  );
}

export default function NanoParticles() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 2, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#06b6d4" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#22d3ee" />
        <MolecularNetwork />
        <ParticleField />
      </Canvas>
    </div>
  );
}
