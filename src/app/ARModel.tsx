"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { ARButton, createXRStore, XR } from "@react-three/xr";
import { useState } from "react";

interface ARModelProps {
  modelUrl: string;
}

const store = createXRStore();

const ARModel: React.FC<ARModelProps> = ({ modelUrl }) => {
  const { scene } = useGLTF(modelUrl);
  const [red, setRed] = useState(false);

  return (
    <>
      <button onClick={() => store.enterAR()}>Enter AR</button>
      <Canvas>
        <XR store={store}>
          <mesh
            pointerEventsType={{ deny: "grab" }}
            onClick={() => setRed(!red)}
            position={[0, 1, -1]}
          >
            <boxGeometry />
            <meshBasicMaterial color={red ? "red" : "blue"} />
          </mesh>
        </XR>
      </Canvas>
    </>
  );
};

export default ARModel;
