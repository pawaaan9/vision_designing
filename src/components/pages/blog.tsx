"use client";

import React, { useState } from "react";
import { BackgroundBeams } from "../ui/background-beams";

const blogPosts = [
  {
    title: "The Future of Web Development",
    date: "February 19, 2025",
    excerpt:
      "Discover the latest trends and technologies shaping the future of web development...",
    content:
      "Web development is evolving rapidly with AI-driven design, no-code tools, and serverless architectures. Developers are now focusing more on user experience and performance optimization...",
  },
  {
    title: "Top 10 UI/UX Design Tips",
    date: "January 15, 2025",
    excerpt:
      "Enhance your user interface and user experience with these top 10 design tips...",
    content:
      "Good UI/UX design is essential for user engagement. Using contrast, white space, and intuitive navigation can significantly improve user satisfaction...",
  },
  {
    title: "How to Optimize Your Website for SEO",
    date: "December 10, 2024",
    excerpt:
      "Learn the best practices for optimizing your website to improve search rankings...",
    content:
      "SEO is critical for website visibility. Implementing proper keyword usage, mobile-friendliness, and fast-loading pages can boost rankings on search engines...",
  },
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPost, setSelectedPost] = useState<null | typeof blogPosts[0]>(
    null
  );

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative w-full flex flex-col items-center text-white font-JosefinSans bg-black px-4 sm:px-8 min-h-screen">
      <BackgroundBeams />
      <div className="relative z-10 w-full max-w-4xl mt-12 p-6">
        <h1 className="text-5xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center">
          Our Blog
        </h1>

        {/* Search Bar */}
        <div className="mt-8">
          <input
            type="text"
            placeholder="Search blog posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 rounded-lg bg-black/50 border border-neutral-800 placeholder:text-neutral-500 text-white"
          />
        </div>

        {/* Blog Posts */}
        <div className="mt-12 space-y-16">
          {filteredPosts.map((post, index) => (
            <div key={index} className="w-full">
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-300">
                {post.title}
              </h2>
              <p className="text-sm text-neutral-500 mt-2">{post.date}</p>
              <p className="text-lg text-neutral-400 mt-4 leading-relaxed">
                {post.excerpt}
              </p>
              <button
                onClick={() => setSelectedPost(post)}
                className="mt-6 px-6 py-3 border border-white text-white uppercase text-sm font-semibold tracking-wide hover:bg-white hover:text-black transition"
              >
                Read More →
              </button>
              {index < filteredPosts.length - 1 && (
                <div className="h-[1px] bg-neutral-700 my-12"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-6 z-50">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-2xl w-full relative">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-3 right-3 text-neutral-800 hover:text-black text-xl"
            >
              ✕
            </button>
            <h2 className="text-4xl font-bold">{selectedPost.title}</h2>
            <p className="text-sm text-neutral-800 mt-2">{selectedPost.date}</p>
            <p className="text-lg text-neutral-800 mt-4 leading-relaxed">
              {selectedPost.content}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
