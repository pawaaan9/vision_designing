"use client";

import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export function Contact() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white antialiased font-JosefinSans">
      <div className="max-w-2xl mx-auto p-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
          Contact Us
        </h1>
        <p className="text-neutral-500 mt-2">
          Get in touch with us for any queries or collaborations. Fill out the
          form below and we'll get back to you soon!
        </p>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-3xl bg-black/30 p-6 rounded-lg shadow-lg relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full p-3 rounded-lg bg-black/50 border border-neutral-800 placeholder:text-neutral-500"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full p-3 rounded-lg bg-black/50 border border-neutral-800 placeholder:text-neutral-500"
          />
        </div>
        <input
          type="email"
          placeholder="Email Address"
          className="w-full mt-4 p-3 rounded-lg bg-black/50 border border-neutral-800 placeholder:text-neutral-500"
        />
        <input
          type="tel"
          placeholder="Mobile No"
          className="w-full mt-4 p-3 rounded-lg bg-black/50 border border-neutral-800 placeholder:text-neutral-500"
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full mt-4 p-3 rounded-lg bg-black/50 border border-neutral-800 placeholder:text-neutral-500"
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          className="w-full mt-4 p-3 rounded-lg bg-black/50 border border-neutral-800 placeholder:text-neutral-500"
        ></textarea>
        <button className="w-full mt-4 p-3 rounded-lg bg-[#101637] text-white font-bold hover:bg-[#101645]">
          Send Message
        </button>
      </div>

      {/* Info Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-4xl relative z-10">
        <div className="p-6 bg-black/40 rounded-lg text-center">
          <FaMapMarkerAlt className="text-2xl" />
          <p className="mt-2 font-bold">Mon – Sat: 09 AM – 06 PM</p>
        </div>
        <div className="p-6 bg-black/40 rounded-lg text-center">
          <FaPhoneAlt className="text-2xl" />
          <p className="mt-2 font-bold">+1 240-755-7722</p>
        </div>
        <div className="p-6 bg-black/40 rounded-lg text-center">
          <FaEnvelope className="text-2xl" />
          <p className="mt-2 font-bold">Info@Visiondesigning.com</p>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}