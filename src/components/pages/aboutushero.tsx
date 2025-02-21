"use client";

import React from "react";
import Image from "next/image";
import { BackgroundBeams } from "../ui/background-beams";
import digitalProductsImage from "../../assets/home-products.png";

export default function AboutUsHero() {
  return (
    <div className="relative w-full flex flex-col justify-center items-center text-white font-JosefinSans bg-black px-4 sm:px-8">
      {/* Background Animation */}
      <BackgroundBeams />

      {/* Main Content */}
      <div className="relative z-10 text-center lg:text-left space-y-12 w-full max-w-6xl">
        <hr className="border-white border-opacity-20 -mt-7" />

        <h1 className="text-5xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center p-6">
          Leading Digital Solutions Provider for Businesses
        </h1>

        {/* Building Digital Products */}
        <section className="grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 max-w-2xl">
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase">
              Building Digital Products
            </h2>
            <p className="text-sm sm:text-lg mt-4 leading-relaxed">
              We design and develop cutting-edge digital solutions tailored to
              elevate businesses and enrich user experiences.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <Image
              src={digitalProductsImage}
              alt="Digital Products"
              className="w-full rounded-lg"
            />
          </div>
        </section>

        <hr className="border-white border-opacity-20 -mt-7" />
      </div>
    </div>
  );
}
