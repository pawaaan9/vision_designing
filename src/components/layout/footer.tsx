import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaPhone, FaLinkedin } from "react-icons/fa";
import logo from '@/assets/Logo-blue.png'
import footerImage from '@/assets/footer-background.jpg'

const Footer: React.FC = () => {
  return (
    <footer
      className="relative bg-black text-white py-10"
      style={{
        backgroundImage: `url(${footerImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6 lg:px-[150px]">
        <div className="flex flex-col lg:flex-row justify-between items-center">
            
          <div className="lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0">
            <Image
              src={logo}
              alt="Vision Designing Logo"
              width={120}
              height={40}
              className="mb-4 mx-auto lg:mx-0"
            />
            <p className="text-gray-300 text-sm max-w-md font-JosefinSans">
              At Vision Designing, we specialize in crafting compelling websites, developing innovative apps, and managing dynamic social media pages. 
              Our vision is to seamlessly blend creativity and technology for impactful digital solutions.
            </p>
            <p className="mt-4 font-semibold text-lg font-JosefinSans">info@visiondesigning.com</p>
            <p className="mt-1 text-gray-300 flex items-center justify-center lg:justify-start">
              <span className="mr-2 font-JosefinSans"><FaPhone /></span> +1240-755-7722
            </p>
          </div>

          <div className="lg:w-1/2 text-center lg:text-right">
            <h3 className="text-xl font-semibold mb-3 font-JosefinSans">Our Services</h3>
            <ul className="text-gray-300 space-y-2">
              <li className="font-JosefinSans">Website & App Development</li>
              <li className="font-JosefinSans">Custom Solutions</li>
              <li className="font-JosefinSans">Consulting & Marketing</li>
              <li className="font-JosefinSans">Hosting & Maintenance</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-600 pt-4 flex flex-col lg:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm text-center lg:text-left font-JosefinSans">
            Vision Designing. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <a href="https://web.facebook.com/vision.designing1" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.instagram.com/vision.designing/" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com/company/visiondesigning/posts/?feedView=all" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;