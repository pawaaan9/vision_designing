"use client";

import React from "react";
import CountUp from "../layout/countup";
import { BackgroundBeams } from "../ui/background-beams";

export default function Stats() {
  return (
    <div className="h-[30rem] w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased text-white font-JosefinSans">
      <div className="max-w-4xl mx-auto p-4 text-center relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-12 md:space-y-0 md:space-x-24">
          <div>
            <h1 className="text-6xl md:text-8xl font-bold text-white flex items-center justify-center">
              <CountUp to={25} duration={2} className="mr-2" />+
            </h1>
            <p className="text-xl text-white mt-2">Happy Clients</p>
          </div>
          <div>
            <h1 className="text-6xl md:text-8xl font-bold text-white flex items-center justify-center">
              <CountUp to={15} duration={2} className="mr-2" />+
            </h1>
            <p className="text-xl text-white mt-2">Projects Done</p>
          </div>
          <div>
            <h1 className="text-6xl md:text-8xl font-bold text-white flex items-center justify-center">
              100%
            </h1>
            <p className="text-xl text-white mt-2">Customer Satisfaction</p>
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}