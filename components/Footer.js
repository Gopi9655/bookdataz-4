import { FaLinkedinIn, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-black to-customBlue text-gray-300 py-10 px-6 md:px-32">
      {/* Container for brand and columns */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-0 md:justify-between">
        
        {/* Left Section: Brand, contact, social icons */}
        <div className="flex flex-col w-full md:w-1/3 lg:w-1/4">
          {/* Brand/Logo */}
          <p className="text-sm text-gray-400 mb-2">B2B DATABASE PROVIDERS</p>

          {/* Contact info */}
          <p className="text-sm">
            Phone: <span className="text-white">+1  (901)-300-5501</span>
          </p>
          <p className="text-sm">
            Email: <span className="text-white">sales@bookdataz.com</span>
          </p>

          {/* Social Icons (commented out) */}
        </div>
        
        {/* Right Section: Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full md:w-2/3 lg:w-3/4">
          
          {/* About Us column */}
          <div>
            <h3 className="text-white font-semibold mb-4">About Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white"><a href="/about">Our Story</a></li>
              <li className="hover:text-white"><a href="/aboutt">Team</a></li>
              <li className="hover:text-white"><a href="/about">Careers</a></li>
              <li className="hover:text-white"><a href="/about">Mission & Vision</a></li>
            </ul>
          </div>

          {/* Industries We Serve column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Industries We Serve</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white"><a href="/automotive-industry">Automotive</a></li>
              <li className="hover:text-white"><a href="/banking-and-finance">Banking</a></li>
              <li className="hover:text-white"><a href="/healthcare-industries">Healthcare</a></li>
              <li className="hover:text-white"><a href="/pharmaceuticals">Pharmaceutical</a></li>
              <li className="hover:text-white"><a href="/manufacturing-industries">Manufacturing</a></li>
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white"><a href="/about">About Bookdataz</a></li>
              <li className="hover:text-white"><a href="/about">Our Values</a></li>
              <li className="hover:text-white"><a href="/">Customer Reviews</a></li>
            </ul>
          </div>

          {/* Get in Touch column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white"><a href="/contact">Request a Demo</a></li>
              <li className="hover:text-white"><a href="/contact">Contact Us</a></li>
              <li className="hover:text-white"><a href="/contact">Support</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        Designed & Developed by <span className="text-white font-medium">Bookdataz</span>. © {new Date().getFullYear()} <span className="text-white font-medium">Bookdataz</span>. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
