"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { Timeline } from "../ui/timeline";

export default function Services() {
  const timelineData = [
    {
      title: "Web & Mobile Development",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
        </div>
      ),
    },
    {
      title: "Business Solutions & Automation",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
        </div>
      ),
    },
    {
      title: "Hosting & Maintenance",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
        </div>
      ),
    },
    {
      title: "Frontend & Backend Development",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
        </div>
      ),
    },
    {
      title: "Branding & Digital Marketing",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center antialiased font-JosefinSans px-[20%]">
      {/* Background Beams */}
      <BackgroundBeams />

      <div className="max-w-4xl mx-auto p-6 relative z-10">
        <h1 className="text-2xl sm:text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-bold">
          Our Services
        </h1>
      </div>
      {/* Timeline Section */}
      <div className="w-full mt-16 relative">
        <BackgroundBeams />
        <div className="relative z-10">
          <Timeline data={timelineData} />
        </div>
      </div>
    </div>
  );
}