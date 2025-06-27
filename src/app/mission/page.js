import React from 'react';

export default function MissionVision() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white text-gray-800 font-sans min-h-screen">
      {/* Hero Section */}
      <section className="py-10 px-6 md:px-24 bg-custom-blue text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-black">
            Our <span className="text-red-400">Purpose</span>
          </h1>
          <p className="text-xl  md:text-2xl max-w-4xl mx-auto text-customBlue">
            Driving innovation in B2B data solutions while empowering businesses and professionals worldwide
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-8 px-6 md:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-red-500/10 rounded-full animate-pulse"></div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-custom-blue relative z-10">
                <div className="flex items-center mb-6">
                  <div className="bg-custom-blue/10 p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-custom-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-custom-blue">Mission</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To revolutionize B2B data intelligence by delivering the most accurate, compliant, and actionable contact databases, 
                  enabling businesses to forge meaningful connections and drive growth. We commit to maintaining the highest standards 
                  of data integrity while fostering innovation in data collection and verification technologies.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">How We Fulfill Our Mission</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-xl mt-0.5">✓</span>
                <span className="text-gray-700">Pioneering advanced data verification techniques that set industry benchmarks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-xl mt-0.5">✓</span>
                <span className="text-gray-700">Maintaining strict compliance with global data protection regulations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-xl mt-0.5">✓</span>
                <span className="text-gray-700">Continuously expanding and updating our database with precision</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-xl mt-0.5">✓</span>
                <span className="text-gray-700">Developing intuitive tools that transform raw data into business opportunities</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-6 md:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-custom-blue/10 rounded-full animate-bounce-slow"></div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-red-500 relative z-10">
                <div className="flex items-center mb-6">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-red-500">Vision</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To become the globally recognized gold standard in B2B data intelligence, where businesses instinctively turn to BookDataZ 
                  when they need reliable, ethical data solutions. We envision a business ecosystem where every connection made through our 
                  data creates mutual value, fostering sustainable growth and innovation across industries worldwide.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Our Path Forward</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-custom-blue text-xl mt-0.5">→</span>
                <span className="text-gray-700">Global expansion with localized data solutions for key markets</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-custom-blue text-xl mt-0.5">→</span>
                <span className="text-gray-700">AI-driven predictive analytics for smarter business connections</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-custom-blue text-xl mt-0.5">→</span>
                <span className="text-gray-700">Strategic partnerships with leading CRM and marketing platforms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-custom-blue text-xl mt-0.5">→</span>
                <span className="text-gray-700">Continuous investment in data privacy and security infrastructure</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6 md:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-custom-blue mb-4">
            Our Core <span className="text-red-500">Values</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
            The principles that guide every decision we make and every interaction we have
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🧭',
                title: 'Integrity',
                description: 'We maintain uncompromising honesty in our data and business practices'
              },
              {
                icon: '🌐',
                title: 'Innovation',
                description: 'We constantly push boundaries to deliver cutting-edge data solutions'
              },
              {
                icon: '🤝',
                title: 'Partnership',
                description: 'We view every client relationship as a long-term collaboration'
              },
              {
                icon: '🛡️',
                title: 'Responsibility',
                description: 'We handle data with ethical consideration and respect for privacy'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-custom-blue">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}