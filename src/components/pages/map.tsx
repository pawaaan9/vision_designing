"use client";

import React from "react";
import { WorldMap } from "../ui/world-map";

export default function Map() {
  const mapConnections = [
    {
      start: { lat: 25.7617, lng: -80.1918, label: "Miami, Florida, USA" },
      end: { lat: -8.2906, lng: 80.6337, label: "Kandy, Sri Lanka" },
    },
    {
      start: { lat: 38.8951, lng: -77.0364, label: "Washington, USA" },
      end: { lat: -8.2906, lng: 80.6337, label: "Kandy, Sri Lanka" },
    },
    {
      start: { lat: 45.4215, lng: -75.6972, label: "Ottawa, Canada" },
      end: { lat: -8.2906, lng: 80.6337, label: "Kandy, Sri Lanka" },
    },
    {
      start: { lat: 25.7617, lng: -80.1918, label: "Miami, Florida, USA" },
      end: { lat: 38.8951, lng: -77.0364, label: "Washington, USA" },
    },
    {
      start: { lat: 38.8951, lng: -77.0364, label: "Washington, USA" },
      end: { lat: 45.4215, lng: -75.6972, label: "Ottawa, Canada" },
    },
  ];

  return (
    <div className="relative flex flex-col justify-center items-center text-white font-JosefinSans bg-black px-4 sm:px-8 ">
      <div className="relative z-10 w-full max-w-6xl mt-8 p-6">
        <h1 className="text-2xl sm:text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-bold p-6">
          Caption here
        </h1>
        <WorldMap dots={mapConnections} />
      </div>
    </div>
  );
}
