// components/Footer.tsx
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
return (   <div className="bg-gradient-to-r from-black to-customBlue text-gray-300 py-10 px-6 md:px-32">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-0 md:justify-between">
      <div className="flex flex-col w-full md:w-1/3 lg:w-1/4 gap-4">
        
        {/* Contact Info */}
        <div>
          <p className="text-sm">
            Phone: <span className="text-white">+1 (901)-300-5501</span>
          </p>
          <p className="text-sm mt-1">
            Email:{" "}
            <a href="mailto:sales@bookdataz.com" className="text-white hover:underline">
              sales@bookdataz.com
            </a>
          </p>
        </div>

        {/* US Office */}
        <div>
          <p className="text-sm font-semibold text-gray-400">US Office:</p>
          <p className="text-sm text-white">
            6150 Poplar Ave, Suite 200<br />
            Memphis, TN 38119<br />
            United States
          </p>
        </div>

        {/* UK Office */}
        <div>
          <p className="text-sm font-semibold text-gray-400">UK Office:</p>
          <p className="text-sm text-white">
            Gateway East, White City<br />
            London W12 7TU<br />
            United Kingdom
          </p>
        </div>
      </div>


    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full md:w-2/3 lg:w-3/4">
      <div>
        <h3 className="text-white font-semibold mb-4">About Us</h3>
        <ul className="space-y-2 text-sm">
          <li className="hover:text-white"><Link href="/story">Our Story</Link></li>
          <li className="hover:text-white"><Link href="/team">Team</Link></li>
          <li className="hover:text-white"><Link href="/career">Careers</Link></li>
          <li className="hover:text-white"><Link href="/mission">Mission & Vision</Link></li>
        </ul>
      </div>

      <div>
        <h3 className="text-white font-semibold mb-4">Industries We Serve</h3>
        <ul className="space-y-2 text-sm">
          <li className="hover:text-white"><Link href="/automotive-industry">Automotive</Link></li>
          <li className="hover:text-white"><Link href="/banking-and-finance">Banking</Link></li>
          <li className="hover:text-white"><Link href="/healthcare-industries">Healthcare</Link></li>
          <li className="hover:text-white"><Link href="/pharmaceuticals">Pharmaceutical</Link></li>
          <li className="hover:text-white"><Link href="/manufacturing-industries">Manufacturing</Link></li>
        </ul>
      </div>

      <div>
        <h3 className="text-white font-semibold mb-4">Company</h3>
        <ul className="space-y-2 text-sm">
          <li className="hover:text-white"><Link href="/about">About Bookdataz</Link></li>
          <li className="hover:text-white"><Link href="/about">Our Values</Link></li>
          <li className="hover:text-white"><Link href="/about">Customer Reviews</Link></li>
        </ul>
      </div>

      <div>
        <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
        <ul className="space-y-2 text-sm">
          <li className="hover:text-white"><Link href="/contact">Request a Demo</Link></li>
          <li className="hover:text-white"><Link href="/contact">Contact Us</Link></li>
          <li className="hover:text-white"><Link href="/contact">Support</Link></li>
        </ul>
      </div>
    </div>
  </div>

  <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
    Designed & Developed by <span className="text-white font-medium">Bookdataz</span>. © {new Date().getFullYear()} <span className="text-white font-medium">Bookdataz</span>. All rights reserved.
  </div>
</div>


);
};

export default Footer;
