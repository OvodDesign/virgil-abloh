"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useEffect } from "react";

const ARModel: React.FC = () => {
  const { scene } = useGLTF("/model/example.glb");

  useEffect(() => {
    if (scene) {
      scene.position.set(0, 0, 0);
      scene.scale.set(0.15, 0.15, 0.15); // Adjust these values as needed
    }
  }, [scene]);

  return (
    <Canvas style={{ width: "100%", height: "100vh" }}>
      <ambientLight intensity={0.5} />
      <primitive object={scene} />
      <OrbitControls />
    </Canvas>
  );
};

export default ARModel;
