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
    const particles = 900;
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
    pointsRef.current.rotation.z += delta * 0.012;
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
        size={0.032}
        color="#38bdf8"
        sizeAttenuation
        depthWrite={false}
        transparent
        opacity={0.55}
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
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.18} />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 4]}>
        <ringGeometry args={[3.1, 3.7, 80]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.12} />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 8]}>
        <ringGeometry args={[4.1, 4.6, 80]} />
        <meshBasicMaterial color="#1d4ed8" transparent opacity={0.1} />
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
    const wave = Math.sin(t * 0.28);

    clusterRef.current.rotation.y = t * 0.18 + mouse.x * 0.28;
    clusterRef.current.rotation.x = wave * 0.12 - mouse.y * 0.24;
    clusterRef.current.position.y = wave * 0.18;
  });

  return (
    <group ref={clusterRef}>
      <Float speed={1.05} rotationIntensity={0.85} floatIntensity={0.95}>
        <mesh>
          <icosahedronGeometry args={[1.4, 0]} />
          <MeshDistortMaterial
            color="#38bdf8"
            emissive="#0e7490"
            emissiveIntensity={0.28}
            roughness={0.16}
            metalness={0.22}
            speed={1.1}
            distort={0.24}
          />
        </mesh>
      </Float>

      <Float speed={0.95} rotationIntensity={0.95} floatIntensity={1.05}>
        <mesh position={[2.6, 1.8, -1]}>
          <torusKnotGeometry args={[0.7, 0.18, 220, 16]} />
          <MeshDistortMaterial
            color="#a855f7"
            emissive="#7c3aed"
            emissiveIntensity={0.24}
            roughness={0.18}
            metalness={0.18}
            speed={1.35}
            distort={0.18}
          />
        </mesh>
      </Float>

      <Float speed={1.1} rotationIntensity={0.85} floatIntensity={1.0}>
        <mesh position={[-2.8, -1.6, -0.8]}>
          <sphereGeometry args={[0.8, 64, 64]} />
          <meshStandardMaterial
            color="#f97316"
            emissive="#f97316"
            emissiveIntensity={0.18}
            roughness={0.28}
            metalness={0.12}
          />
        </mesh>
      </Float>

      <Float speed={1.0} rotationIntensity={0.9} floatIntensity={1.0}>
        <mesh position={[0.6, -2.4, 0.6]}>
          <dodecahedronGeometry args={[0.9]} />
          <MeshDistortMaterial
            color="#22d3ee"
            emissive="#0ea5e9"
            emissiveIntensity={0.22}
            roughness={0.24}
            metalness={0.18}
            speed={1.0}
            distort={0.22}
          />
        </mesh>
      </Float>
    </group>
  );
};

const OrbitingNode = ({ radius, speed, size, color, emissiveIntensity, yOffset = 0 }) => {
  const nodeRef = useRef();
  const theta = useRef(Math.random() * Math.PI * 2);

  useFrame((_, delta) => {
    if (!nodeRef.current) {
      return;
    }

    theta.current += delta * speed;

    const x = Math.cos(theta.current) * radius;
    const z = Math.sin(theta.current) * radius;
    const y = yOffset + Math.sin(theta.current * 1.6) * 0.12;

    nodeRef.current.position.set(x, y, z);
    nodeRef.current.rotation.y += delta * 0.9;
  });

  return (
    <group ref={nodeRef}>
      <mesh>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={emissiveIntensity}
          roughness={0.32}
          metalness={0.22}
        />
      </mesh>
      <mesh scale={[1.6, 1.6, 1.6]}>
        <sphereGeometry args={[size * 1.05, 32, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.18} />
      </mesh>
    </group>
  );
};

const OrbitalNarrative = () => {
  const ringRef = useRef();

  useFrame(({ clock }) => {
    if (!ringRef.current) {
      return;
    }

    const t = clock.getElapsedTime();
    ringRef.current.rotation.x = Math.sin(t * 0.18) * 0.28 + Math.PI / 3.2;
    ringRef.current.rotation.y = t * 0.12;
  });

  return (
    <group>
      <group ref={ringRef}>
        <mesh>
          <torusGeometry args={[3.3, 0.03, 90, 240]} />
          <meshBasicMaterial color="#38bdf8" transparent opacity={0.32} />
        </mesh>
        <mesh rotation={[0, Math.PI / 2, 0]}>
          <torusGeometry args={[2.6, 0.05, 90, 240]} />
          <meshBasicMaterial color="#a855f7" transparent opacity={0.24} />
        </mesh>
        <mesh rotation={[Math.PI / 2.3, 0, Math.PI / 4]}>
          <torusGeometry args={[4.1, 0.04, 90, 240]} />
          <meshBasicMaterial color="#f97316" transparent opacity={0.24} />
        </mesh>
      </group>

      <OrbitingNode
        color="#38bdf8"
        emissiveIntensity={0.26}
        radius={3.6}
        speed={0.45}
        size={0.2}
        yOffset={0.28}
      />
      <OrbitingNode
        color="#a855f7"
        emissiveIntensity={0.22}
        radius={2.4}
        speed={0.6}
        size={0.16}
        yOffset={-0.24}
      />
      <OrbitingNode
        color="#f97316"
        emissiveIntensity={0.2}
        radius={4.2}
        speed={0.38}
        size={0.22}
        yOffset={0.12}
      />
      <OrbitingNode
        color="#22d3ee"
        emissiveIntensity={0.24}
        radius={3.0}
        speed={0.52}
        size={0.15}
        yOffset={0.4}
      />
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
          <OrbitalNarrative />
        </Suspense>

        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 6, 3]} intensity={0.9} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate
          autoRotate
          autoRotateSpeed={0.12}
          dampingFactor={0.08}
        />
      </Canvas>
    </div>
  );
};

export default HeroCanvas;
