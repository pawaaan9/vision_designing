"use client";

import React, { useState } from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export function Contact() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach us via email at Info@Visiondesigning.com or call us at +1 240-755-7722 during our working hours.",
    },
    {
      question: "What services do you provide?",
      answer:
        "We offer custom solutions, including KOT systems, delivery systems, e-commerce, and marketing solutions.",
    },
    {
      question: "Where is your office located?",
      answer:
        "We are available online for worldwide services. However, our office operates remotely, and we schedule meetings upon request.",
    },
    {
      question: "How long does it take to get a response?",
      answer:
        "We typically respond within 24-48 hours on business days. Urgent requests are prioritized.",
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white antialiased font-JosefinSans">
      <div className="max-w-2xl mx-auto p-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 p-6">
          Contact Us
        </h1>
        <p className="text-neutral-500 mt-2">
          Get in touch with us for any queries or collaborations. Fill out the
          form below and we&apos;ll get back to you soon!
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-4xl px-6 sm:px-12 relative z-10">
        <div className="p-6 bg-[#101010] border border-neutral-700 rounded-2xl text-center shadow-lg">
          <FaMapMarkerAlt className="text-2xl mx-auto text-white" />
          <p className="mt-2 font-bold text-white">Mon–Sat : 9 AM – 6 PM </p>
        </div>
        <div className="p-6 bg-[#101010] border border-neutral-700 rounded-2xl text-center shadow-lg">
          <FaPhoneAlt className="text-2xl mx-auto text-white" />
          <p className="mt-2 font-bold text-white">+1 240-755-7722</p>
        </div>
        <div className="p-6 bg-[#101010] border border-neutral-700 rounded-2xl text-center shadow-lg">
          <FaEnvelope className="text-2xl mx-auto text-white" />
          <p className="mt-2 font-bold text-white">Info@Visiondesigning.com</p>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="w-full max-w-4xl mt-12 p-6 bg-black/30 rounded-lg shadow-lg relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-200 to-neutral-600 p-6">
          Frequently Asked Questions
        </h1>
        <div className="divide-y divide-neutral-700">
          {faqs.map((faq, index) => (
            <div key={index} className="py-4">
              <button
                className="w-full flex justify-between items-center text-lg font-semibold text-neutral-300 hover:text-white focus:outline-none"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                {faq.question}
                <span>{openFAQ === index ? "−" : "+"}</span>
              </button>
              {openFAQ === index && (
                <p className="mt-2 text-neutral-400">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <BackgroundBeams />
    </div>
  );
}
