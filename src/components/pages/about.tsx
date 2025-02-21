"use client";

import React from "react";
import Image from "next/image";
import { BackgroundBeams } from "../ui/background-beams";
import visionImage from "../../assets/vision.png";
import missionImage from "../../assets/mission.png";
import ourTeam from "../../assets/our-team.png";
import whoweare from "../../assets/who-we-are.png"
import ourstory from "../../assets/our-story.png"

export default function About() {
  return (
    <div className="relative w-full flex flex-col justify-center items-center text-white font-JosefinSans bg-black px-4 sm:px-8">
      <BackgroundBeams />
      <div className="relative z-10 text-center lg:text-left space-y-12 w-full max-w-6xl">
        {/* Company Overview */}
        <section className="grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 p-6">
              Who we are?
            </h2>
            <p className="text-sm sm:text-lg mt-4 leading-relaxed">
              At VisionDesigning, we craft cutting-edge digital solutions that
              empower businesses to thrive in the online world. Our mission is
              to transform ideas into innovative, high-performance digital
              experiences that drive success. With a strong focus on creativity,
              technology, and user-centric design, we are dedicated to
              delivering excellence in every project.
            </p>
          </div>
          <div>
            <Image
              src={whoweare}
              alt="Company Overview"
              className="w-full rounded-lg"
            />
          </div>
        </section>

        <hr className="border-gray-700 my-12" />

        {/* Vision */}
        <section className="grid lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <Image
              src={visionImage}
              alt="Vision"
              className="w-full rounded-lg"
            />
          </div>
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 ">
              Our Vision
            </h2>
            <p className="text-sm sm:text-lg mt-4 leading-relaxed">
              To be a globally recognized leader in digital transformation,
              setting the standard for innovation, creativity, and excellence in
              web and mobile development.
            </p>
          </div>
        </section>

        <hr className="border-gray-700 my-12" />

        {/* Mission */}
        <section className="grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 ">
              Our Mission
            </h2>
            <p className="text-sm sm:text-lg mt-4 leading-relaxed">
              To empower businesses with innovative, high-quality digital
              solutions that enhance their online presence, streamline
              operations, and drive sustainable growth.
            </p>
          </div>
          <div>
            <Image
              src={missionImage}
              alt="Mission"
              className="w-full rounded-lg"
            />
          </div>
        </section>

        <hr className="border-gray-700 my-12" />

        <section className="grid lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <Image
              src={ourstory}
              alt="Why Choose Us?"
              className="w-full rounded-lg"
            />
          </div>
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
              Our Story
            </h2>
            <p className="text-sm sm:text-lg mt-4 leading-relaxed">
              Founded with a passion for innovation, VisionDesigning started as
              a small team of developers and designers determined to
              revolutionize the digital landscape. Over the years, we have
              successfully worked with diverse clients across industries,
              delivering custom web and mobile solutions tailored to their
              unique needs. Our journey has been marked by continuous learning,
              growth, and the pursuit of excellence.
            </p>
          </div>
        </section>

        <hr className="border-gray-700 my-12" />
        
        <section className="grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 ">
            Our Team 
            </h2>
            <p className="text-sm sm:text-lg mt-4 leading-relaxed">
            Our team comprises experienced developers, designers, strategists, and marketers who bring their expertise together to create outstanding digital solutions. Every member of our team is committed to pushing the boundaries of innovation, ensuring our clients stay ahead of the competition. 

            </p>
          </div>
          <div>
            <Image
              src={ourTeam}
              alt="Mission"
              className="w-full rounded-lg"
            />
          </div>
        </section>

        <hr className="border-gray-700 my-12" />

        {/* Why Choose Us? */}
        <section className="space-y-8">
          <h2 className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">Innovative Approach</h3>
              <p className="text-sm sm:text-lg mt-2 leading-relaxed">
                We blend creativity and technology to develop cutting-edge solutions.
              </p>
            </div>
            <div className="border p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">Client-First Mindset</h3>
              <p className="text-sm sm:text-lg mt-2 leading-relaxed">
                Your success is our priority; we tailor our services to meet your goals.
              </p>
            </div>
            <div className="border p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">Proven Expertise</h3>
              <p className="text-sm sm:text-lg mt-2 leading-relaxed">
                Years of experience delivering successful projects across industries.
              </p>
            </div>
            <div className="border p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">End-to-End Solutions</h3>
              <p className="text-sm sm:text-lg mt-2 leading-relaxed">
                From development to branding and marketing, we provide comprehensive digital services.
              </p>
            </div>
            <div className="border p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">Continuous Support</h3>
              <p className="text-sm sm:text-lg mt-2 leading-relaxed">
                Our commitment doesn’t end with project delivery; we offer ongoing support and maintenance.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-gray-700 my-12" />

        {/* World Map Section */}
        <section>
          <h2 className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center p-6">
            Our Global Reach
          </h2>
          {/* <WorldMap start={{ lat: 12.9944024, lng: -82.7602544 }} /> */}
        </section>
      </div>
    </div>
  );
}