// src/components/HeroCanvas.js
import React, { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Float,
  GradientTexture,
  MeshDistortMaterial,
  OrbitControls,
} from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = () => {
  const pointsRef = useRef();
  const positions = useMemo(() => {
    const particles = 1400;
    const positionArray = new Float32Array(particles * 3);

    for (let i = 0; i < particles; i += 1) {
      const radius = THREE.MathUtils.randFloat(2.2, 6.5);
      const theta = THREE.MathUtils.randFloat(0, Math.PI);
      const phi = THREE.MathUtils.randFloat(0, Math.PI * 2);

      const x = radius * Math.sin(theta) * Math.cos(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(theta);

      positionArray.set([x, y, z], i * 3);
    }

    return positionArray;
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) {
      return;
    }

    pointsRef.current.rotation.y += delta * 0.12;
    pointsRef.current.rotation.x += delta * 0.03;
  });

  return (
    <points ref={pointsRef} rotation={[0.15, 0.1, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color="#38bdf8"
        sizeAttenuation
        depthWrite={false}
        transparent
        opacity={0.85}
      />
    </points>
  );
};

const AuroraRings = () => {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    if (!groupRef.current) {
      return;
    }

    const t = clock.getElapsedTime();
    groupRef.current.rotation.z = Math.sin(t * 0.25) * 0.25;
  });

  return (
    <group ref={groupRef} rotation={[Math.PI / 2, 0, 0]}>
      <mesh>
        <ringGeometry args={[2.1, 2.8, 90]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.26} />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 4]}>
        <ringGeometry args={[3.1, 3.7, 80]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.18} />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 8]}>
        <ringGeometry args={[4.1, 4.6, 80]} />
        <meshBasicMaterial color="#1d4ed8" transparent opacity={0.12} />
      </mesh>
    </group>
  );
};

const GradientBackdrop = () => (
  <mesh position={[0, 0, -8]}>
    <planeGeometry args={[22, 14]} />
    <meshBasicMaterial toneMapped={false}>
      <GradientTexture
        stops={[0, 0.4, 1]}
        colors={["#0f172a", "#1d4ed8", "#020617"]}
        size={2048}
      />
    </meshBasicMaterial>
  </mesh>
);

const InteractiveCluster = () => {
  const clusterRef = useRef();

  useFrame(({ clock, mouse }) => {
    if (!clusterRef.current) {
      return;
    }

    const t = clock.getElapsedTime();
    clusterRef.current.rotation.y = t * 0.3 + mouse.x * 0.5;
    clusterRef.current.rotation.x = Math.sin(t * 0.2) * 0.12 - mouse.y * 0.35;
  });

  return (
    <group ref={clusterRef}>
      <Float speed={1.4} rotationIntensity={1.15} floatIntensity={1.25}>
        <mesh>
          <icosahedronGeometry args={[1.4, 0]} />
          <MeshDistortMaterial
            color="#38bdf8"
            emissive="#0891b2"
            emissiveIntensity={0.55}
            roughness={0.08}
            metalness={0.35}
            speed={1.6}
            distort={0.38}
          />
        </mesh>
      </Float>

      <Float speed={1.15} rotationIntensity={1.25} floatIntensity={1.45}>
        <mesh position={[2.6, 1.8, -1]}>
          <torusKnotGeometry args={[0.7, 0.18, 220, 16]} />
          <MeshDistortMaterial
            color="#a855f7"
            emissive="#c084fc"
            emissiveIntensity={0.45}
            roughness={0.12}
            metalness={0.3}
            speed={2.2}
            distort={0.24}
          />
        </mesh>
      </Float>

      <Float speed={1.85} rotationIntensity={1.35} floatIntensity={1.6}>
        <mesh position={[-2.8, -1.6, -0.8]}>
          <sphereGeometry args={[0.8, 64, 64]} />
          <meshStandardMaterial
            color="#f97316"
            emissive="#fb923c"
            emissiveIntensity={0.32}
            roughness={0.22}
            metalness={0.18}
          />
        </mesh>
      </Float>

      <Float speed={1.25} rotationIntensity={1.4} floatIntensity={1.35}>
        <mesh position={[0.6, -2.4, 0.6]}>
          <dodecahedronGeometry args={[0.9]} />
          <MeshDistortMaterial
            color="#22d3ee"
            emissive="#0ea5e9"
            emissiveIntensity={0.4}
            roughness={0.18}
            metalness={0.28}
            speed={1.3}
            distort={0.3}
          />
        </mesh>
      </Float>
    </group>
  );
};

const HeroCanvas = () => {
  return (
    <div className="hero-canvas">
      <Canvas
        dpr={[1, 1.8]}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 10], fov: 45 }}
      >
        <Suspense fallback={null}>
          <GradientBackdrop />
          <ParticleField />
          <AuroraRings />
          <InteractiveCluster />
        </Suspense>

        <ambientLight intensity={0.55} />
        <directionalLight position={[5, 6, 3]} intensity={1.2} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate
          autoRotate
          autoRotateSpeed={0.35}
          dampingFactor={0.08}
        />
      </Canvas>
    </div>
  );
};

export default HeroCanvas;
