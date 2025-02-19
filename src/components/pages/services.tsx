"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";

export default function Services() {
  const services = [
    {
      title: "Website & App Development",
      description:
        "Our team creates responsive, user-friendly platforms tailored to your business needs, ensuring a seamless experience for your users.",
      icon: "💻",
    },
    {
      title: "Custom Solutions",
      description:
        "We craft custom software and applications that address your unique challenges and drive your business forward, providing functionality and efficiency.",
      icon: "🗃️",
    },
    {
      title: "Consulting & Marketing",
      description:
        "Our insights and strategies help you optimize your digital presence, reach your target audience, and achieve your business goals.",
      icon: "🤝",
    },
    {
      title: "Hosting & Maintenance",
      description:
        "We offer secure, high-performance hosting solutions and proactive maintenance to keep your website and apps running smoothly and efficiently.",
      icon: "☁️",
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center antialiased font-JosefinSans px-4 sm:px-8">
      {/* Background Beams */}
      <BackgroundBeams />

      <div className="max-w-4xl mx-auto p-6 relative z-10">
        <h1 className="text-2xl sm:text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-bold">
          Our Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#101637] p-6 rounded-xl text-white shadow-lg transition-colors duration-300 hover:bg-[#1a1f3d]"
            >
              <span className="text-3xl">{service.icon}</span>
              <h2 className="text-xl font-bold mt-2">{service.title}</h2>
              <p className="mt-2 text-neutral-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}