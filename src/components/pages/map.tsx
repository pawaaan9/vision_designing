"use client";

import React from "react";
import { WorldMap } from "../ui/world-map";

export default function Map() {

  return (
    <div className="relative flex flex-col justify-center items-center text-white font-JosefinSans bg-black px-4 sm:px-8 ">
      <div className="relative z-10 w-full max-w-6xl mt-8 p-6">
        <h1 className="text-2xl sm:text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-bold p-6">
          Our global reach
        </h1>
        <WorldMap start={{ lat: 12.9944024, lng: -82.7602544 }} />
      </div>
    </div>
  );
}
