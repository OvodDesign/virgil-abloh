"use client";

import dynamic from "next/dynamic";

const ARModel = dynamic(() => import("./ARModel").then((mod) => mod.default), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <ARModel />
    </div>
  );
}
