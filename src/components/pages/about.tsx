"use client";

import React from "react";
import Image from "next/image";
import { BackgroundBeams } from "../ui/background-beams";
import digitalProductsImage from "../../assets/about/our-product.png"; 

export default function About() {
  return (
    <div className="relative w-full flex flex-col justify-center items-center text-white font-JosefinSans bg-black px-4 sm:px-8">
      {/* Background Animation */}
      <BackgroundBeams />

      {/* Main Content */}
      <div className="relative z-10 text-center lg:text-left space-y-12 w-full max-w-6xl">
        {/* Building Digital Products */}
        <section className="grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 max-w-2xl">
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase">Building Digital Products</h2>
            <p className="text-sm sm:text-lg mt-4 leading-relaxed">
              We craft innovative digital solutions that empower businesses and enhance user experiences.
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
            <Image src={digitalProductsImage} alt="Digital Products" className="w-full rounded-lg" />
          </div>
          <div className="order-1 lg:order-2 max-w-2xl">
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase">Our Vision</h2>
            <p className="text-sm sm:text-lg mt-4 leading-relaxed">
              We craft innovative digital solutions that empower businesses and enhance user experiences.
            </p>
          </div>
        </section>

        <hr className="border-gray-700 my-12" />

        {/* Our Mission */}
        <section className="grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 max-w-2xl">
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase">Our Mission</h2>
            <p className="text-sm sm:text-lg mt-4 leading-relaxed">
              We craft innovative digital solutions that empower businesses and enhance user experiences.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <Image src={digitalProductsImage} alt="Digital Products" className="w-full rounded-lg" />
          </div>
        </section>
      </div>
    </div>
  );
}