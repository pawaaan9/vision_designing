"use client";

import React from "react";
import Image from "next/image";
import { BackgroundBeams } from "../ui/background-beams";
import { WorldMap } from "../ui/world-map";
import digitalProductsImage from "../../assets/about/our-product.png";

export default function About() {

    const mapConnections = [
        {
            start: { lat: 25.7617, lng: -80.1918, label: "Miami, Florida, USA" }, 
            end: { lat: -8.2906, lng: 80.6337, label: "Kandy, Sri Lanka" }, 
        },
    ];

  return (
    <div className="relative w-full flex flex-col justify-center items-center text-white font-JosefinSans bg-black px-4 sm:px-8">
      {/* Background Animation */}
      <BackgroundBeams />

      {/* Main Content */}
      <div className="relative z-10 text-center lg:text-left space-y-12 w-full max-w-6xl">

        <h1 className="text-4xl sm:text-6xl font-extrabold uppercase text-center mb-8 mt-8">
          Leading Digital Solutions Provider for Businesses
        </h1>

        {/* Building Digital Products */}
        <section className="grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 max-w-2xl">
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase">Building Digital Products</h2>
            <p className="text-sm sm:text-lg mt-4 leading-relaxed">
              We design and develop cutting-edge digital solutions tailored to elevate businesses and enrich user experiences.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <Image src={digitalProductsImage} alt="Digital Products" className="w-full rounded-lg" />
          </div>
        </section>

        <hr className="border-gray-700 my-12" />

        {/* Our Vision */}
        <section className="grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Image src={digitalProductsImage} alt="Our Vision" className="w-full rounded-lg" />
          </div>
          <div className="order-1 lg:order-2 max-w-2xl">
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase">Our Vision</h2>
            <p className="text-sm sm:text-lg mt-4 leading-relaxed">
              Empowering businesses through transformative digital experiences, driving growth and innovation.
            </p>
          </div>
        </section>

        <hr className="border-gray-700 my-12" />

        {/* Our Mission */}
        <section className="grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 max-w-2xl">
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase">Our Mission</h2>
            <p className="text-sm sm:text-lg mt-4 leading-relaxed">
              Delivering high-quality digital solutions that empower businesses and foster meaningful user engagement.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <Image src={digitalProductsImage} alt="Our Mission" className="w-full rounded-lg" />
          </div>
        </section>

        <hr className="border-gray-700 my-12" />

        <h2 className="text-4xl sm:text-6xl font-extrabold uppercase text-center mb-8 mt-8">
          afafaf sfafad
        </h2>
        {/* World Map Section */}
        <WorldMap dots={mapConnections} />
      </div>
    </div>
  );
}
