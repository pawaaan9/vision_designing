"use client";

import React, { useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { WordRotate } from "../magicui/word-rotate";
import { BackgroundBeams } from "../ui/background-beams";

const overviews = [
  {
    title: "Solution",
    description:
      "Discover bespoke digital solutions tailored to your business needs. Our services help solve challenges and enhance operations.",
  },
  {
    title: "Innovation",
    description:
      "We push boundaries with cutting-edge technology, helping you stay ahead in a fast-evolving digital world.",
  },
  {
    title: "Creativity",
    description:
      "Our creative approach transforms ideas into reality, delivering impactful and engaging digital experiences.",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative h-screen w-full flex flex-col justify-center items-center text-white font-JosefinSans bg-black px-4 sm:px-8">
      {/* Background Animation */}
      <BackgroundBeams />

      {/* Main Content */}
      <div className="relative z-10 text-center -mt-24">
        <h2 className="text-lg sm:text-xl font-semibold tracking-wide">VISION DESIGNING</h2>
        <WordRotate
          className="text-3xl sm:text-5xl lg:text-7xl font-extrabold mt-2"
          words={["SOLUTION", "INNOVATION", "CREATIVITY"]}
        />
      </div>

      {/* Overview Section */}
      <div className="absolute bottom-24 sm:bottom-40 left-8 sm:left-16 max-w-xs sm:max-w-xl text-left z-10">
        <h3 className="text-md sm:text-lg font-bold uppercase tracking-wider">{overviews[activeIndex].title}</h3>
        <p className="text-xs sm:text-sm leading-relaxed mt-2">
          {overviews[activeIndex].description}
        </p>
        <button className="mt-4 px-4 sm:px-6 py-2 border border-white text-white uppercase text-xs sm:text-sm font-semibold hover:bg-white hover:text-black transition">
          Read More →
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-14 sm:bottom-20 flex space-x-3 z-10">
        {overviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 border-2 rounded-full ${
              activeIndex === index ? "bg-white" : "border-white"
            }`}
          />
        ))}
      </div>

      {/* Social Links */}
      <div className="absolute bottom-6 sm:bottom-16 right-8 sm:right-16 flex items-center space-x-4 sm:space-x-6 z-10">
        <p className="text-xs sm:text-sm uppercase tracking-wider">Follow Us</p>
        <FaFacebookF className="text-base sm:text-lg cursor-pointer hover:text-gray-300" />
        <FaInstagram className="text-base sm:text-lg cursor-pointer hover:text-gray-300" />
      </div>
    </div>
  );
}
