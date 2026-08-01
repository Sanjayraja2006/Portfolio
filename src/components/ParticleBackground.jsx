import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function WorldBlueprint({ mouse }) {
  const groupRef = useRef();
  const innerSphereRef = useRef();
  const outerWebRef = useRef();
  const ringRef1 = useRef();
  const ringRef2 = useRef();

  // Create geometry for world blueprint sphere and spider web structure
  const { sphereGeo, wireframeGeo, nodesPos } = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(2.4, 2);
    const wireGeo = new THREE.WireframeGeometry(geo);

    // Extract unique vertices for node points (spider web joints)
    const posAttr = geo.attributes.position;
    const nodes = [];
    const set = new Set();

    for (let i = 0; i < posAttr.count; i++) {
      const x = Number(posAttr.getX(i).toFixed(3));
      const y = Number(posAttr.getY(i).toFixed(3));
      const z = Number(posAttr.getZ(i).toFixed(3));
      const key = `${x},${y},${z}`;

      if (!set.has(key)) {
        set.add(key);
        nodes.push(x, y, z);
      }
    }

    return {
      sphereGeo: geo,
      wireframeGeo: wireGeo,
      nodesPos: new Float32Array(nodes),
    };
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Continuous smooth 3D rotation
      groupRef.current.rotation.y += delta * 0.12;
      groupRef.current.rotation.x += delta * 0.05;

      if (innerSphereRef.current) {
        innerSphereRef.current.rotation.y -= delta * 0.08;
      }
      if (ringRef1.current) {
        ringRef1.current.rotation.z += delta * 0.15;
      }
      if (ringRef2.current) {
        ringRef2.current.rotation.x += delta * 0.15;
      }

      // Smooth cursor tracking in 3D space
      const targetX = mouse.current.targetX * 3.5;
      const targetY = mouse.current.targetY * 2.5;

      groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.04;
      groupRef.current.position.y += (-targetY - groupRef.current.position.y) * 0.04;

      groupRef.current.rotation.z = groupRef.current.position.x * 0.08;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, -1]}>
      {/* Spider-Web Wireframe Structure */}
      <lineSegments ref={outerWebRef} geometry={wireframeGeo}>
        <lineBasicMaterial
          color="#55a4ff"
          transparent
          opacity={0.35}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* Inner Dense Wireframe Core */}
      <mesh ref={innerSphereRef}>
        <icosahedronGeometry args={[1.8, 1]} />
        <meshBasicMaterial
          color="#7b6cff"
          wireframe
          transparent
          opacity={0.25}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Node Dots at Spider Web Vertices */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={nodesPos.length / 3}
            array={nodesPos}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          color="#20d49b"
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Blueprint Orbital Rings */}
      <mesh ref={ringRef1} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[3.2, 0.012, 16, 100]} />
        <meshBasicMaterial
          color="#7b6cff"
          transparent
          opacity={0.4}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      <mesh ref={ringRef2} rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[3.6, 0.008, 16, 100]} />
        <meshBasicMaterial
          color="#55a4ff"
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

function StarField() {
  const pointsRef = useRef();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const count = isMobile ? 400 : 800;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const palette = [
      new THREE.Color("#7b6cff"),
      new THREE.Color("#55a4ff"),
      new THREE.Color("#a77cff"),
      new THREE.Color("#20d49b"),
      new THREE.Color("#818cf8"),
      new THREE.Color("#f5f7ff"),
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 26;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 26;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 26;

      const chosen = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = chosen.r;
      col[i * 3 + 1] = chosen.g;
      col[i * 3 + 2] = chosen.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.03;
      pointsRef.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        vertexColors
        transparent
        opacity={0.75}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function ParticleBackground() {
  const mouse = useRef({ targetX: 0, targetY: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.targetX = e.clientX / window.innerWidth - 0.5;
      mouse.current.targetY = e.clientY / window.innerHeight - 0.5;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 7], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <StarField />
        <WorldBlueprint mouse={mouse} />
      </Canvas>
    </div>
  );
}
