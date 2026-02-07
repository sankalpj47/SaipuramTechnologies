"use client";

import { useRef, useMemo, useLayoutEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// Reduced count so nodes are large and visible
const COUNT = 25;
const MAX_CONNECTIONS = 3;
const MAX_DISTANCE = 3;

function CustomPlexus() {
  const { viewport } = useThree();
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const lineRef = useRef<THREE.LineSegments>(null!);

  const { positions, velocities, colors } = useMemo(() => {
    const pos = new Float32Array(COUNT * 3);
    const vel = new Float32Array(COUNT * 3);
    const col = new Float32Array(COUNT * 3);

    // Colors like your screenshot
    const palette = ["#2563eb", "#3b82f6", "#60a5fa"];

    for (let i = 0; i < COUNT; i++) {
      pos[i * 3] = (Math.random() - 0.5) * viewport.width * 1.3;
      pos[i * 3 + 1] = (Math.random() - 0.5) * viewport.height * 1.3;
      pos[i * 3 + 2] = 0;

      vel[i * 3] = (Math.random() - 0.5) * 0.003;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.003;
      vel[i * 3 + 2] = 0;

      const c = new THREE.Color(
        palette[Math.floor(Math.random() * palette.length)]
      );
      col.set([c.r, c.g, c.b], i * 3);
    }
    return { positions: pos, velocities: vel, colors: col };
  }, [viewport]);

  useLayoutEffect(() => {
    const tempColor = new THREE.Color();
    for (let i = 0; i < COUNT; i++) {
      tempColor.setRGB(colors[i * 3], colors[i * 3 + 1], colors[i * 3 + 2]);
      meshRef.current.setColorAt(i, tempColor);
    }
    meshRef.current.instanceColor!.needsUpdate = true;

    lineRef.current.geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(COUNT * MAX_CONNECTIONS * 6), 3)
    );
  }, [colors]);

  useFrame(({ mouse }) => {
    const linePositions = new Float32Array(COUNT * MAX_CONNECTIONS * 6);
    let lineCount = 0;

    const tempObj = new THREE.Object3D();

    for (let i = 0; i < COUNT; i++) {
      const i3 = i * 3;

      positions[i3] += velocities[i3];
      positions[i3 + 1] += velocities[i3 + 1];

      // Edge bounce
      if (Math.abs(positions[i3]) > viewport.width / 1.2) velocities[i3] *= -1;
      if (Math.abs(positions[i3 + 1]) > viewport.height / 1.2)
        velocities[i3 + 1] *= -1;

      // Mouse repulsion (stronger + smoother)
      const dx = mouse.x * (viewport.width / 2) - positions[i3];
      const dy = mouse.y * (viewport.height / 2) - positions[i3 + 1];
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 1.5) {
        positions[i3] -= dx * 0.03;
        positions[i3 + 1] -= dy * 0.03;
      }

      tempObj.position.set(positions[i3], positions[i3 + 1], 0);
      tempObj.updateMatrix();
      meshRef.current.setMatrixAt(i, tempObj.matrix);

      // Connect to nearby nodes
      let connections = 0;

      for (let j = i + 1; j < COUNT; j++) {
        if (connections >= MAX_CONNECTIONS) break;

        const j3 = j * 3;
        const dx2 = positions[i3] - positions[j3];
        const dy2 = positions[i3 + 1] - positions[j3 + 1];
        const d = Math.sqrt(dx2 * dx2 + dy2 * dy2);

        if (d < MAX_DISTANCE) {
          linePositions.set(
            [
              positions[i3],
              positions[i3 + 1],
              0,
              positions[j3],
              positions[j3 + 1],
              0,
            ],
            lineCount
          );
          lineCount += 6;
          connections++;
        }
      }
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
    lineRef.current.geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(linePositions.slice(0, lineCount), 3)
    );
  });

  return (
    <group>
      <instancedMesh ref={meshRef} args={[undefined, undefined, COUNT]}>
        {/* Larger sphere (matches screenshot) */}
        <sphereGeometry args={[0.22, 20, 20]} />
        <meshBasicMaterial />
      </instancedMesh>

      <lineSegments ref={lineRef}>
        <bufferGeometry />
        <lineBasicMaterial color="white" opacity={0.6} transparent />
      </lineSegments>
    </group>
  );
}

export default function ParticleBackground() {
  return (
    <div className="absolute inset-0 -z-10 bg-[#111827]">
      <Canvas camera={{ position: [0, 0, 12] }}>
        <CustomPlexus />
      </Canvas>
    </div>
  );
}
