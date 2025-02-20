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
          <ul className="text-white dark:text-neutral-200 text-xs lg:text-lg md:text-sm font-bold mb-8 list-disc pl-5">
            <li>Custom Websites</li>
            <li>Mobile Apps (iOS, Android, Cross-platform)</li>
            <li>eCommerce Development</li>
            <li>CMS & Web Apps</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Business Solutions & Automation",
      content: (
        <div>
          <ul className="text-white dark:text-neutral-200 text-xs md:text-sm lg:text-lg font-bold mb-8 list-disc pl-5">
            <li>Custom Software Solutions</li>
            <li>Business Process Automation</li>
            <li>AI & Machine Learning Integration</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Hosting & Maintenance",
      content: (
        <div>
          <ul className="text-white dark:text-neutral-200 text-xs md:text-sm lg:text-lg font-bold mb-8 list-disc pl-5">
            <li>Secure Web Hosting</li>
            <li>Website & App Maintenance</li>
            <li>Performance Optimization</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Frontend & Backend Development",
      content: (
        <div>
          <ul className="text-white dark:text-neutral-200 text-xs md:text-sm lg:text-lg font-bold mb-8 list-disc pl-5">
            <li>UI/UX Design</li>
            <li>API & Database Development</li>
            <li>Full-Stack Solutions</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Branding & Digital Marketing",
      content: (
        <div>
          <ul className="text-white dark:text-neutral-200 text-xs md:text-sm lg:text-lg font-bold mb-8 list-disc pl-5">
            <li>Logo & Visual Identity</li>
            <li>Social Media & Content Marketing</li>
            <li>SEO & Paid Advertising</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center antialiased font-JosefinSans">
      {/* Background Beams */}
      <BackgroundBeams />

      <div className="max-w-4xl mx-auto p-6 relative z-10">
        <h1 className="text-5xl sm:text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-bold pt-6">
          Our Services
        </h1>
      </div>
      {/* Timeline Section */}
      <div className=" mt-2 relative ">
        <BackgroundBeams />
        <div className="relative z-10">
          <Timeline data={timelineData} />
        </div>
      </div>
    </div>
  );
}
