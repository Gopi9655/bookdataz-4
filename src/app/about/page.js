"use client";
import dynamic from "next/dynamic";

// Dynamically import motion to prevent SSR errors
const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: false });
const MotionH1 = dynamic(() => import("framer-motion").then((mod) => mod.motion.h1), { ssr: false });
const MotionP = dynamic(() => import("framer-motion").then((mod) => mod.motion.p), { ssr: false });

const AboutPage = () => {
  return (
    <div>
      {/* First Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/aboutImages/i4b_EMEA_data_specialists_banner_2.jpg')",
        }}
      >
        <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
          <div className="py-10 max-w-xl">
            <MotionH1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl font-extrabold tracking-normal leading-[1.5] text-gray-900 sm:text-3xl"
            >
              We are BookDataz, the leading
              <span className="text-customBlue tracking-normal"> Database Provider</span>
            </MotionH1>
            <MotionP
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="mt-4 mb-10 text-lg text-gray-500 leading-[2]"
            >
              Our B2B contact database is developed specifically for organizations in the USA, UK,
              and Europe, helping sales and marketing teams drive pipelines effectively.
            </MotionP>
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.4 }}
              className="mt-6"
            >
              <a
                href="#"
                className="inline-block px-6 py-3 text-white bg-customBlue hover:bg-blue-700 font-medium text-lg rounded-lg shadow"
              >
                Find Out More
              </a>
            </MotionDiv>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="bg-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
          <MotionH1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-8"
          >
            Why Choose BookDataz?
          </MotionH1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Global Reach",
                description: "Connect with businesses worldwide with our expansive geographical database coverage.",
                icon: "/aboutImages/global-svgrepo-com.svg",
              },
              {
                title: "High-Quality Data",
                description: "Ensure accuracy and reliability with our regularly verified data resources.",
                icon: "/aboutImages/data-svgrepo-com.svg",
              },
              {
                title: "Custom Solutions",
                description: "Tailored data services to meet your unique business needs.",
                icon:"/aboutImages/solution-key-connect-svgrepo-com.svg",
              },
              
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white text-customBlue rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto">
                  <img src={feature.icon} alt={feature.title} className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <a
              href="#"
              className="inline-block px-8 py-4 bg-white text-customBlue font-medium text-lg rounded-lg shadow hover:bg-gray-100"
            >
              Learn More About Our Services
            </a>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="bg-gray-100 py-16">
  <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl font-bold text-customBlue mb-4">
        Industries We Serve
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto">
        From healthcare to retail, our databases empower businesses across various industries to achieve their goals.
      </p>
    </MotionDiv>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Healthcare", img: "/aboutImages/about-healthcare.jpg" },
              { name: "Retail", img: "/aboutImages/about-retail.jpg" },
              { name: "Technology", img: "/aboutImages/about-tech.jpg" },
              { name: "Finance", img: "/aboutImages/about-finance.jpg" },
              { name: "Manufacturing", img: "/aboutImages/about-manufacturing.jpg" },
              { name: "Education", img: "/aboutImages/about-education.jpg" },
            ].map((industry, index) => (
              <div
          key={index}
          className="relative bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img
            src={industry.img}
            alt={industry.name}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-customBlue bg-opacity-50">
            <h3 className="text-2xl font-semibold text-white">
              {industry.name}
            </h3>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

      {/* Fourth Section: Testimonials */}
      <div className="bg-customBlue text-white py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
          <MotionH1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-8"
          >
            What Our Clients Say
          </MotionH1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "John Doe",
                role: "Marketing Manager",
                quote: "BookDataz helped us scale our campaigns with accurate and reliable data. Highly recommended!",
              },
              {
                name: "Jane Smith",
                role: "Sales Director",
                quote: "The quality of data provided by BookDataz has been instrumental in closing deals efficiently.",
              },
              {
                name: "Robert Lee",
                role: "CEO",
                quote: "Their customizable solutions are exactly what our business needed to expand into new markets.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl text-left"
              >
                <p className="italic text-gray-800">"{testimonial.quote}"</p>
                <div className="mt-4">
                  <h3 className="font-bold text-lg text-customBlue">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fifth Section: Call to Action */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-customBlue mb-6">Ready to Elevate Your Business?</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-8">
            Partner with BookDataz to access premium databases and unlock growth opportunities in your target markets.
          </p>
          <a
            href="#"
            className="inline-block px-8 py-4 bg-customBlue text-white font-medium text-lg rounded-lg shadow hover:bg-blue-700"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
