"use client";

import { BackgroundBeams } from "../ui/background-beams";

const industries = [
  { title: "Healthcare" },
  { title: "Wellness" },
  { title: "eCommerce" },
  { title: "Fintech" },
  { title: "Restaurants & FMCG" },
  { title: "Advertising" },
  { title: "Education" },
  { title: "Gaming" },
  { title: "Property Management" },
  { title: "Nutrition" },
  { title: "Pharma" },
  { title: "Telecommunication" },
];

export default function IndustriesPage() {
  return (
    <div className="relative  flex flex-col justify-center items-center text-white font-JosefinSans bg-black px-4 sm:px-5">
      <BackgroundBeams />
      <div className="relative z-10 text-center mb-24 sm:mt-2">

      <h1 className="text-2xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center p-10">
      We possess expertise both within and across industries
        </h1>
        <div className="mt-6 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="border p-6 rounded-lg shadow-lg border-gray-700 hover:bg-gray-800 transition-colors duration-300"
            >
              <h3 className="text-xl font-bold text-neutral-200">{industry.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}