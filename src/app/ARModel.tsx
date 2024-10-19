import { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { ARButton } from "three/examples/jsm/webxr/ARButton.js";

interface ARModelProps {
  modelUrl: string;
}

const ARModel: React.FC<ARModelProps> = ({ modelUrl }) => {
  useEffect(() => {
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;

    function init() {
      const container = document.getElementById("ar-container");
      if (!container) return;

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        0.01,
        20
      );

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.xr.enabled = true;
      container.appendChild(renderer.domElement);

      // Add AR button to enable WebXR
      document.body.appendChild(ARButton.createButton(renderer));

      // Add lighting to the scene
      const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
      light.position.set(0.5, 1, 0.25);
      scene.add(light);

      // Load the 3D model using GLTFLoader
      const loader = new GLTFLoader();
      loader.load(modelUrl, function (gltf) {
        const model = gltf.scene;
        model.position.set(0, 0, -2); // Position model 2 meters in front
        scene.add(model);
      });

      renderer.setAnimationLoop(render);
    }

    function render() {
      renderer.render(scene, camera);
    }

    init();

    return () => {
      renderer.dispose();
      const container = document.getElementById("ar-container");
      if (container) container.innerHTML = ""; // Clean up
    };
  }, [modelUrl]);

  return <div id="ar-container" style={{ width: "100vw", height: "100vh" }} />;
};

export default ARModel;
