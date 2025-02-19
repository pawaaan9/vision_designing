"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";

export default function QuickOverview() {
  const categories = [
    {
      title: "Advanced Business Systems",
      description:
        "We develop robust, scalable, and efficient business systems tailored to streamline operations and enhance productivity.",
      icon: "⚙️",
    },
    {
      title: "E-commerce Development",
      description:
        "Our expertise in e-commerce solutions ensures a seamless shopping experience, from intuitive UI/UX to secure payment integrations.",
      icon: "🛒",
    },
    {
      title: "Digital Marketing & Branding",
      description:
        "We craft data-driven marketing strategies and brand identities that help businesses connect with their audience effectively.",
      icon: "📢",
    },
    {
      title: "Hosting & Maintenance",
      description:
        "We provide secure, high-performance hosting and proactive maintenance to ensure smooth and reliable operations.",
      icon: "☁️",
    },
  ];

  return (
    <div className="relative  w-full bg-black flex flex-col antialiased font-JosefinSans px-4 sm:px-8">
      {/* Background Beams */}
      <BackgroundBeams />

      <div className="max-w-4xl mx-auto p-6 relative z-10">
        <h1 className="text-2xl sm:text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-bold">
          Quick Overview
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-[#101637] p-6 rounded-xl text-white shadow-lg transition-colors duration-300 hover:bg-[#1a1f3d]"
            >
              <span className="text-3xl">{category.icon}</span>
              <h2 className="text-xl font-bold mt-2">{category.title}</h2>
              <p className="mt-2 text-neutral-300">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
