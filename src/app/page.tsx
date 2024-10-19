"use client";

import { useState } from "react";
import ARModel from "./ARModel";

const works = [
  {
    title: "Album Cover Yeezus",
    img: "/img/img1.png",
    model: "/example.glb",
  },
  {
    title: "Louis Vuitton Holographic Duffel Bag",
    img: "/img/img2.png",
    model: "/example.glb",
  },
  {
    title: "Off-White™ Industrial Belt",
    img: "/img/img3.png",
    model: "/example.glb",
  },
  {
    title: "'The Ten' Off White x Nike",
    img: "/img/img4.png",
    model: "/example.glb",
  },
  {
    title: "Mercedes Benz G-Class",
    img: "/img/img5.png",
    model: "/example.glb",
  },
  {
    title: "IKEA x Off-White™",
    img: "/img/img6.png",
    model: "/example.glb",
  },
];

export default function Home() {
  const [selectedModel, setSelectedModel] = useState<string>("");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold text-center mb-10">Works</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden border border-blue-300 cursor-pointer"
              onClick={() => setSelectedModel(work.model)}
            >
              <img
                src={work.img}
                alt={work.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold">{work.title}</h2>
              </div>
            </div>
          ))}
        </div>
        {selectedModel && <ARModel modelUrl={selectedModel} />}
      </div>
    </div>
  );
}
