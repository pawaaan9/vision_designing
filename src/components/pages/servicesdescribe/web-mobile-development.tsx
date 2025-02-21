"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BackgroundBeams } from "../../ui/background-beams";
import topImage from "../../../assets/projects/448870248_319998964501705_2257420437119999383_n-290x300.jpg"; 

export default function WebMobile() {
  return (
    <div className="relative w-full flex flex-col items-center text-white font-JosefinSans bg-black px-4 sm:px-8 min-h-screen">
      {/* Background Animation */}
      <BackgroundBeams />

      {/* Back Button */}
      <div className="w-full flex justify-start max-w-6xl mt-6 px-4">
        <Link href="/services" className="border text-white px-6 py-3 rounded-lg text-sm sm:text-base hover:bg-gray-700 transition">
          &larr; Back
        </Link>
      </div>

      <h1 className="text-3xl sm:text-5xl font-extrabold mb-6">
            Skipjack Outfitters
          </h1>

      {/* Top Image */}
      <div className="relative z-10 w-full max-w-4xl mt-6">
        <Image src={topImage} alt="Skipjack Top Image" className="w-full rounded-lg" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row max-w-6xl mt-8 p-6">
        <div className="lg:w-2/3 p-6">
          <p className="text-base sm:text-lg leading-relaxed">
            We create everything digital, printable and analytical. Our solutions are designed to empower businesses and elevate their digital presence.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mt-4">
            Now there is more fashion. There are no so-called trends. Now chase after anything not necessary—nor for fashionable color nor the shape, nor for style. Think about the content that you want to invest in a created object, and only then will form. The thing is your spirit.
          </p>
          <p className="text-base sm:text-lg leading-relaxed font-bold mt-4">
            Here choose yourself like that, without any looking back, do your personal, home, small fashion, and all will be well.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mt-4">
            We create everything digital, printable and analytical won’t seasons, appear days them stars replenish divided. All second forth. Him place was seas man and gathering creepech called fly.
          </p>
          <ul className="text-lg sm:text-xl leading-relaxed mt-4">
            <li>↳ Amazing communication.</li>
            <li>↳ Best trending designing experience.</li>
            <li>↳ Email & Live chat.</li>
          </ul>
        </div>
        
        {/* Information Box */}
        <div className="lg:w-1/3 border p-6 rounded-lg text-sm sm:text-base shadow-md">
          <p><strong>📅 DATE :</strong> 6, August 2022</p>
          <p><strong>📂 CATEGORIES :</strong> Web Design</p>
          <p><strong>👤 CLIENT :</strong> Themeforest</p>
          <p><strong>🌐 WEBSITE :</strong> UI_ThemeZ.com</p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius urna ac nisi ultrices, at dapibus lacus suscipit. Suspendisse potenti. Nullam vehicula, elit vel vulputate ullamcorper, tortor nunc suscipit urna, in cursus sem dui ac velit. Phasellus vel justo nec lacus efficitur euismod.
          </p>
          <p className="mt-4">
            Vivamus fringilla, libero a interdum tincidunt, orci justo sodales felis, sed dapibus nunc justo id quam. Donec ac libero metus. Aliquam erat volutpat. Proin sed bibendum nulla. Duis tincidunt nisi ut risus tempor, sed sollicitudin odio malesuada.
          </p>
        </div>
      </div>
    </div>
  );
}