"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { BackgroundBeams } from "../ui/background-beams";
import skipjackImage from "../../assets/skipjack.png";
import sdkwelding from "../../assets/sdk-welding.png";
import langstonavenuescoaching from "../../assets/langstonavenuescoaching.png";
import holycrabdelivery from "../../assets/holy-crab-web.png";
import handleman from "../../assets/handle-man-web.png";
import vffws from "../../assets/vffws.png";
import stwfirm from "../../assets/stw.png";
import ceyex from "../../assets/cey-ex-web.png";
import moveapp from "../../assets/mobile/move-app.png";
import id10 from "../../assets/branding/untitled-design-1.png"
import id11 from "../../assets/branding/0d274223.jpg";
import id12 from "../../assets/branding/bd57ac78.jpg";
import id13 from "../../assets/branding/2bae7466-d36d-4b30-a4f3-4c86c314fc09_black_10-300x300.png";
import id15 from "../../assets/branding/handle-man-business-card-300x300.png";

const projects = [
  { id: 1, title: "skipjackOutfitters.com", category: "website", link: "/projects/skipjack", image: skipjackImage },
  { id: 2, title: "sdkwelding.ca", category: "website", link: "/projects/banking-app", image: sdkwelding },
  { id: 3, title: "langstonavenuescoaching.com", category: "website", link: "/projects/saas-dashboard", image: langstonavenuescoaching },
  { id: 4, title: "holycrabdelivery.com", category: "website", link: "/projects/portfolio", image: holycrabdelivery},
  { id: 5, title: "handleman.net", category: "website", link: "/projects/fitness-app", image:  handleman },
  { id: 6, title: "vffws.com", category: "website", link: "/projects/branding", image:  vffws },
  { id: 7, title: "stwfirm.com", category: "website", link: "/projects/marketing", image: stwfirm  },
  { id: 8, title: "ceylonexotics.net", category: "website", link: "/projects/event-app", image: ceyex },
  { id: 9, title: "moveathletics fitness", category: "mobile", link: "/projects/crm", image: moveapp},
  { id: 10, title: "branding", category: "branding",link: "/projects/branding", image: id10},
  { id: 11, title: "branding", category: "branding",link: "/projects/branding", image: id11},
  { id: 12, title: "branding", category: "branding",link: "/projects/branding", image: id12},
  { id: 13, title: "branding", category: "branding",link: "/projects/branding", image: id13},
  { id: 14, title: "branding", category: "branding",link: "/projects/branding", image: id13},
  { id: 15, title: "branding", category: "branding",link: "/projects/branding", image: id15},
  
];

const categories = ["all portfolio", "mobile", "website", "branding", "business development"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all portfolio");
  const router = useRouter();

  const filteredProjects =
    selectedCategory === "all portfolio"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center antialiased font-JosefinSans">
      
      <BackgroundBeams />

      <div className="max-w-5xl mx-auto p-6 relative z-10">
        <h1 className="text-lg md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-bold">
          Portfolio
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-white rounded-lg transition-all ${
                selectedCategory === category
                  ? "bg-[#57b9ff] shadow-lg"
                  : "hover:bg-[#555]"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => router.push(project.link)}
              className="relative w-full aspect-square bg-[#101637] p-6 rounded-xl text-white shadow-lg transition-all duration-300 hover:bg-[#1a1f3d] cursor-pointer flex flex-col items-center justify-center"
            >
              <Image src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover rounded-xl opacity-70" />
              <h2 className="text-lg font-bold mt-10 relative z-10 ">{project.title}</h2>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-all bg-black/70 rounded-xl text-base font-medium text-white">
                <p className="text-xs font-light ">Click Here</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}