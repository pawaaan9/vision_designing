"use client";

import React from "react";
import Image from "next/image";
import { BackgroundBeams } from "../ui/background-beams";
import { WorldMap } from "../ui/world-map";
import companyOverviewImage from "../../assets/about/our-product.png";
import visionImage from "../../assets/about/our-product.png";
import missionImage from "../../assets/about/our-product.png";
import whyChooseUsImage from "../../assets/about/our-product.png";

export default function About() {
  const mapConnections = [
    {
      start: { lat: 25.7617, lng: -80.1918, label: "Miami, Florida, USA" },
      end: { lat: -8.2906, lng: 80.6337, label: "Kandy, Sri Lanka" },
    },
  ];

  return (
    <div className="relative w-full flex flex-col justify-center items-center text-white font-JosefinSans bg-black px-4 sm:px-8">
      <BackgroundBeams />
      <div className="relative z-10 text-center lg:text-left space-y-12 w-full max-w-6xl">

        {/* Company Overview */}
        <section className="grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 uppercase">Company Overview</h2>
            <p className="text-sm sm:text-lg mt-4 leading-relaxed">
              We provide custom digital solutions, including KOT systems, delivery systems, e-commerce, and marketing, helping businesses scale efficiently.
            </p>
          </div>
          <div>
            <Image src={companyOverviewImage} alt="Company Overview" className="w-full rounded-lg" />
          </div>
        </section>

        <hr className="border-gray-700 my-12" />

        {/* Vision */}
        <section className="grid lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <Image src={visionImage} alt="Vision" className="w-full rounded-lg" />
          </div>
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 uppercase">Vision</h2>
            <p className="text-sm sm:text-lg mt-4 leading-relaxed">
              Empowering businesses through innovative digital solutions, driving growth and efficiency.
            </p>
          </div>
        </section>

        <hr className="border-gray-700 my-12" />

        {/* Mission */}
        <section className="grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 uppercase">Mission</h2>
            <p className="text-sm sm:text-lg mt-4 leading-relaxed">
              Delivering top-notch, custom digital solutions that enhance business efficiency and user engagement.
            </p>
          </div>
          <div>
            <Image src={missionImage} alt="Mission" className="w-full rounded-lg" />
          </div>
        </section>

        <hr className="border-gray-700 my-12" />

        {/* Why Choose Us? */}
        <section className="grid lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <Image src={whyChooseUsImage} alt="Why Choose Us?" className="w-full rounded-lg" />
          </div>
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 uppercase">Why Choose Us?</h2>
            <p className="text-sm sm:text-lg mt-4 leading-relaxed">
              Our expertise in advanced business solutions, e-commerce, and digital marketing ensures tailored results for your business growth.
            </p>
          </div>
        </section>

        <hr className="border-gray-700 my-12" />

        {/* World Map Section */}
        <section>
          <h2 className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 uppercase text-center">Our Global Reach</h2>
          <WorldMap dots={mapConnections} />
        </section>
      </div>
    </div>
  );
}