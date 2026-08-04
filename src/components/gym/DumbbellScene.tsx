import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import type { Group } from "three";

function Dumbbell({ scrollRef }: { scrollRef: React.RefObject<number> }) {
  const group = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    const p = scrollRef.current;
    group.current.rotation.y += delta * 0.35 + p * 0.02;
    group.current.rotation.z = -0.35 + p * 0.8;
    const s = 0.95 + p * 0.3;
    group.current.scale.setScalar(s);
    state.camera.position.z = 13 - p * 3;
    state.camera.lookAt(0, 0, 0);
  });

  const plate = (x: number, radius: number, width: number) => (
    <mesh position={[x, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
      <cylinderGeometry args={[radius, radius, width, 48]} />
      <meshStandardMaterial color="#141414" metalness={0.95} roughness={0.25} />
    </mesh>
  );

  return (
    <group ref={group}>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.18, 0.18, 4.4, 32]} />
        <meshStandardMaterial color="#c9c9c9" metalness={1} roughness={0.18} />
      </mesh>
      {[-1, 1].map((dir) => (
        <group key={dir}>
          {plate(dir * 1.45, 1.05, 0.32)}
          {plate(dir * 1.85, 0.85, 0.3)}
          {plate(dir * 2.15, 0.62, 0.26)}
          <mesh position={[dir * 1.45, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <torusGeometry args={[1.06, 0.035, 12, 60]} />
            <meshStandardMaterial
              color="#ff2d2d"
              emissive="#ff2d2d"
              emissiveIntensity={2.4}
              toneMapped={false}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function Rig({ scrollRef }: { scrollRef: React.RefObject<number> }) {
  useFrame(({ pointer, camera }) => {
    camera.position.x += (pointer.x * 1.4 - camera.position.x) * 0.04;
    camera.position.y += (pointer.y * 0.9 - camera.position.y) * 0.04;
  });
  return <Dumbbell scrollRef={scrollRef} />;
}

export default function DumbbellScene({ scrollRef }: { scrollRef: React.RefObject<number> }) {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 6.5], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 6, 5]} intensity={1.6} />
      <pointLight position={[-4, -2, 3]} color="#ff2d2d" intensity={70} distance={18} />
      <pointLight position={[4, 3, -3]} color="#ff5a3c" intensity={45} distance={20} />
      <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.7}>
        <Rig scrollRef={scrollRef} />
      </Float>
      <Environment preset="city" />
    </Canvas>
  );
}
