// components/Footer.tsx
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    // Background gradient using customBlue and deep blues for a rich theme.
    // Generous vertical padding and precise horizontal padding (px-36 on large screens).
    <footer className="bg-gradient-to-br from-slate-900 via-customBlue to-blue-950 text-blue-200 py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-36">
      <div className="max-w-7xl mx-auto"> {/* Main content confined to a max-width for readability */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24"> {/* Increased main column gap for spaciousness */}

          {/* Left Column: Contact Info & Offices */}
          {/* This column is slightly wider on large screens for better balance and content grouping */}
          <div className="flex flex-col w-full lg:w-1/3 xl:w-1/4 space-y-7"> {/* Increased vertical spacing for clarity */}

            {/* Contact Info Group */}
            <div>
              <p className="text-sm pb-1"> {/* Added bottom padding for a subtle visual separation */}
                <span className="font-semibold text-red-500">Phone:</span>{" "} {/* Highlighted with red-500 */}
                <Link href="tel:+19013005501" className="text-white hover:text-red-500 transition-colors">
                  +1 (901)-300-5501
                </Link>
              </p>
              <p className="text-sm">
                <span className="font-semibold text-red-500">Email:</span>{" "} {/* Highlighted with red-500 */}
                <a href="mailto:sales@bookdataz.com" className="text-white hover:text-red-500 transition-colors">
                  sales@bookdataz.com
                </a>
              </p>
            </div>

            {/* US Office Group */}
            <div>
              <p className="text-sm font-semibold text-red-500 mb-1">US Office:</p> {/* Highlighted with red-500, tight mb-1 */}
              <p className="text-sm text-white leading-relaxed"> {/* leading-relaxed for better readability */}
                6150 Poplar Ave, Suite 200<br />
                Memphis, TN 38119<br />
                United States
              </p>
            </div>

            {/* UK Office Group */}
            <div>
              <p className="text-sm font-semibold text-red-500 mb-1">UK Office:</p> {/* Highlighted with red-500, tight mb-1 */}
              <p className="text-sm text-white leading-relaxed"> {/* leading-relaxed for better readability */}
                Gateway East, White City<br />
                London W12 7TU<br />
                United Kingdom
              </p>
            </div>

            {/* Social Media Icons - Larger icons and clear spacing */}
            <div className="flex space-x-6 mt-6"> {/* Increased space-x for icon separation and mt-6 for clear break */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition-colors text-3xl"> {/* text-3xl for more prominence */}
                <FaLinkedinIn />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition-colors text-3xl">
                <FaInstagram />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition-colors text-3xl">
                <FaFacebookF />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition-colors text-3xl">
                <FaTwitter />
              </a>
            </div>
          </div>


          {/* Right Columns: Navigation Links Grid */}
          {/* Responsive grid for links, ensuring good distribution across screen sizes */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-16 w-full lg:w-2/3 xl:w-3/4"> {/* Adjusted md:gap for better spread */}

            {/* Company Links */}
            <div>
              {/* Heading with red-500 underline for strong highlight */}
              <h3 className="text-white text-lg font-semibold mb-6 relative after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-[3px] after:bg-red-500"> {/* Increased mb, underline width/thickness, red-500 */}
                Company
              </h3>
              <ul className="space-y-3.5 text-sm"> {/* Slightly increased space-y for fine spacing */}
                <li><Link href="/about" className="hover:text-white transition-colors">About Bookdataz</Link></li>
                <li><Link href="/story" className="hover:text-white transition-colors">Our Story</Link></li>
                <li><Link href="/team" className="hover:text-white transition-colors">Team</Link></li>
                <li><Link href="/mission" className="hover:text-white transition-colors">Mission & Vision</Link></li>
                <li><Link href="/#testimonials" className="hover:text-white transition-colors">Customer Reviews</Link></li>
              </ul>
            </div>

            {/* Industries We Serve - Updated with all specified links */}
            <div>
              {/* Heading with red-500 underline for strong highlight */}
              <h3 className="text-white text-lg font-semibold mb-6 relative after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-[3px] after:bg-red-500"> {/* Increased mb, underline width/thickness, red-500 */}
                Industries We Serve
              </h3>
              <ul className="space-y-3.5 text-sm"> {/* Slightly increased space-y for fine spacing */}
                <li><Link href="/automotive-industry" className="hover:text-white transition-colors">Automotive</Link></li>
                <li><Link href="banking-and-finance" className="hover:text-white transition-colors">Banking and Finance</Link></li>
                <li><Link href="construction-companies" className="hover:text-white transition-colors">Construction</Link></li>
                <li><Link href="/educational-industries" className="hover:text-white transition-colors">Education</Link></li>
                <li><Link href="/healthcare-industries" className="hover:text-white transition-colors">Healthcare Technology</Link></li>
                <li><Link href="/manufacturing-industries" className="hover:text-white transition-colors">Manufacturing</Link></li>
                <li><Link href="/real-estate" className="hover:text-white transition-colors">Real Estate</Link></li>
                <li><Link href="/retail-industries" className="hover:text-white transition-colors">Retail</Link></li>
              </ul>
            </div>

            {/* Get in Touch */}
            <div>
              {/* Heading with red-500 underline for strong highlight */}
              <h3 className="text-white text-lg font-semibold mb-6 relative after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-[3px] after:bg-red-500"> {/* Increased mb, underline width/thickness, red-500 */}
                Get in Touch
              </h3>
              <ul className="space-y-3.5 text-sm"> {/* Slightly increased space-y for fine spacing */}
                <li><Link href="/contact" className="hover:text-white transition-colors">Request a Demo</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
                <li><Link href="/contact">Support</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright & Disclaimer Section - Separated with a robust border and centered */}
      <div className="border-t-2 border-blue-700 mt-20 md:mt-28 pt-8 text-center text-sm text-blue-300 max-w-7xl mx-auto"> {/* Thicker border, more margin, more padding */}
        Designed & Developed by <span className="text-white font-semibold">Bookdataz</span>. © {new Date().getFullYear()} <span className="text-white font-semibold">Bookdataz</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;