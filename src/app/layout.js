// app/layout.js
import "./globals.css";
import Navbar from "../../components/Navbar";
export const metadata = {
  title: "Affordable, Reliable Databases for Your Business Growth | Bookdataz.com",
  description:
    "Discover high-quality databases tailored to your business needs. Bookdataz offers verified, up-to-date data solutions to help you target the right audience and scale your business. Contact us today for customized database packages!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="relative">
      <body className="antialiased text-black">
        {/* Sticky Navbar at the top (transparent → white on scroll) */}
        <Navbar />

        {/* Main page content */}
        <main>{children}</main>

        {/* Sticky Contact Us Mail Icon */}
        <div
          className="fixed bottom-4 right-4 z-50 bg-customBlue p-3 rounded-full shadow-lg hover:scale-110 transition"
          title="Contact Us"
        >
          <a
            href="mailto:contact@bookdataz.com"
            className="flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M2.01 6.03A2 2 0 0 1 4 4h16a2 2 0 0 1 1.99 2.03L12 11 2.01 6.03zM22 8.43l-10 5-10-5V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.43z" />
            </svg>
          </a>
        </div>
      </body>
    </html>
  );
}
