"use client";

import ARModel from "./ARModel";

export default function Home() {
  const modelUrl = "/model/example.glb";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <ARModel modelUrl={modelUrl} />
    </div>
  );
}
