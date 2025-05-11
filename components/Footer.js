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
            Phone: <span className="text-white">+1 - 901-942-8334</span>
          </p>
          <p className="text-sm">
            Email: <span className="text-white">sales@bookdataz.com</span>
          </p>

          {/* Social Icons */}

{/*           
          <div className="flex items-center mt-4 space-x-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-700"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-700"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-700"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-700"
            >
              <FaTwitter />
            </a>
          </div> */}
        </div>
        
        {/* Right Section: Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full md:w-2/3 lg:w-3/4">
          
          {/* About Us column */}
          <div>
            <h3 className="text-white font-semibold mb-4">About Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white"><a href="#">Our Story</a></li>
              <li className="hover:text-white"><a href="#">Team</a></li>
              <li className="hover:text-white"><a href="#">Careers</a></li>
              <li className="hover:text-white"><a href="#">Mission & Vision</a></li>
            </ul>
          </div>

          {/* Industries We Serve column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Industries We Serve</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white"><a href="#">Automotive</a></li>
              <li className="hover:text-white"><a href="#">Banking</a></li>
              <li className="hover:text-white"><a href="#">Healthcare</a></li>
              <li className="hover:text-white"><a href="#">IT & Software</a></li>
              <li className="hover:text-white"><a href="#">Manufacturing</a></li>
            </ul>
          </div>

          {/* Services column */}
          

          {/* Company column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white"><a href="#">About Bookdataz</a></li>
              <li className="hover:text-white"><a href="#">Our Values</a></li>
              <li className="hover:text-white"><a href="#">Customer Reviews</a></li>
            </ul>
          </div>

          {/* Resources column */}
         

          {/* Get in Touch column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white"><a href="#">Request a Demo</a></li>
              <li className="hover:text-white"><a href="#">Contact Us</a></li>
              <li className="hover:text-white"><a href="#">Support</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
