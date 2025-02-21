"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/Vision-Designing-Logo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        if (window.scrollY > lastScrollY) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full transition-transform duration-300 z-50 bg-black ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ height: "4rem" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image src={logo} alt="home" width={120} height={120} />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-5">
              <Link href="/" className="text-white px-3 py-2 rounded-md text-sm font-medium uppercase">
                Home
              </Link>
              <Link href="/about" className="text-white px-3 py-2 rounded-md text-sm font-medium uppercase">
                About
              </Link>
              <Link href="/services" className="text-white px-3 py-2 rounded-md text-sm font-medium uppercase">
                Services
              </Link>
              <Link href="/blog" className="text-white px-3 py-2 rounded-md text-sm font-medium uppercase">
                Blog
              </Link>
              <Link href="/contact" className="text-white px-3 py-2 rounded-md text-sm font-medium uppercase">
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="bg-black inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white"
                aria-controls="mobile-menu"
                aria-expanded={isOpen ? "true" : "false"}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
                <svg
                  className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-y-0 left-0 transform transition-transform duration-300 ease-in-out bg-black w-64 z-50 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          id="mobile-menu"
        >
          <div className="px-8 pt-12 pb-80 space-y-12 bg-black h-100%">
            <Link href="/" className="text-white block px-3 py-1 rounded-md text-base font-medium uppercase">
              Home
            </Link>
            <hr className="border-white border-opacity-20 my-2" />
            <Link href="/about" className="text-white block px-3 py-1 rounded-md text-base font-medium uppercase">
              About
            </Link>
            <hr className="border-white border-opacity-20 my-2" />
            <Link href="/services" className="text-white block px-3 py-1 rounded-md text-base font-medium uppercase">
              Services
            </Link>
            <hr className="border-white border-opacity-20 my-2" />
            <Link href="/blog" className="text-white block px-3 py-1 rounded-md text-base font-medium uppercase">
              Blog
            </Link>
            <hr className="border-white border-opacity-20 my-2" />
            <Link href="/contact" className="text-white block px-3 py-1 rounded-md text-base font-medium uppercase">
              Contact
            </Link>
          </div>
        </div>

        {/* Overlay when mobile menu is open */}
        {isOpen && <div onClick={toggleMenu} className="fixed inset-0 bg-black opacity-50 z-40" />}
      </nav>

      {/* Page content wrapper (ensures content is pushed below navbar) */}
      <div className="mt-16 z-0">
        {/* Your page content will go here */}
      </div>
    </>
  );
};

export default Navbar;