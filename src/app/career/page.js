import React from 'react';

export default function CareersLayout() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Section 1: Why Join BookDataZ? */}
      <section className="py-12 px-6 md:px-24 bg-gradient-to-br from-white to-custom-blue/5">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-custom-blue leading-tight">
            Why Join <span className="text-red-500">BookDataZ?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            At BookDataZ, we're not just building B2B data solutions; we're building careers. Join a team that values innovation, integrity, and impact.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Benefit Card 1 */}
            <div className="bg-white rounded-2xl shadow-md p-6 space-y-3 text-left border-l-4 border-custom-blue hover:shadow-lg transition-all duration-300">
              <div className="text-custom-blue text-3xl">🚀</div>
              <h3 className="text-xl font-bold text-gray-900">Impactful Work</h3>
              <p className="text-gray-700">
                Contribute to solutions that empower businesses worldwide with accurate and compliant data.
              </p>
            </div>

            {/* Benefit Card 2 */}
            <div className="bg-white rounded-2xl shadow-md p-6 space-y-3 text-left border-l-4 border-red-500 hover:shadow-lg transition-all duration-300">
              <div className="text-red-500 text-3xl">📚</div>
              <h3 className="text-xl font-bold text-gray-900">Growth Opportunities</h3>
              <p className="text-gray-700">
                We invest in our people with continuous learning and clear paths for career advancement.
              </p>
            </div>

            {/* Benefit Card 3 */}
            <div className="bg-white rounded-2xl shadow-md p-6 space-y-3 text-left border-l-4 border-custom-blue hover:shadow-lg transition-all duration-300">
              <div className="text-custom-blue text-3xl">🤝</div>
              <h3 className="text-xl font-bold text-gray-900">Collaborative Culture</h3>
              <p className="text-gray-700">
                Work alongside passionate experts in a supportive and inclusive environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Current Openings */}
      <section className="py-12 px-6 md:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-custom-blue leading-tight">
            Current <span className="text-red-500">Openings</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Ready to make your mark? Explore our exciting opportunities below.
          </p>

          <div className="mt-10 space-y-4 text-left">
            {/* Job Opening 1 */}
            <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-red-400 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:shadow-md transition-all">
              <div className="min-w-0">
                <h3 className="text-xl font-bold text-gray-900 truncate">Senior Data Scientist</h3>
                <p className="text-gray-700">Full-time • Remote</p>
              </div>
              <a href="#" className="bg-white text-black border border-gray-300 px-5 py-2 rounded-full font-medium hover:bg-gray-50 transition-colors shadow-sm whitespace-nowrap">
                Apply Now
              </a>
            </div>

            {/* Job Opening 2 */}
            <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-custom-blue flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:shadow-md transition-all">
              <div className="min-w-0">
                <h3 className="text-xl font-bold text-gray-900 truncate">B2B Sales Executive</h3>
                <p className="text-gray-700">Full-time • Bengaluru, India</p>
              </div>
              <a href="#" className="bg-white text-black border border-gray-300 px-5 py-2 rounded-full font-medium hover:bg-gray-50 transition-colors shadow-sm whitespace-nowrap">
                Apply Now
              </a>
            </div>

            {/* Job Opening 3 */}
            <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-red-400 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:shadow-md transition-all">
              <div className="min-w-0">
                <h3 className="text-xl font-bold text-gray-900 truncate">Marketing Content Creator</h3>
                <p className="text-gray-700">Full-time • Remote</p>
              </div>
              <a href="#" className="bg-white text-black border border-gray-300 px-5 py-2 rounded-full font-medium hover:bg-gray-50 transition-colors shadow-sm whitespace-nowrap">
                Apply Now
              </a>
            </div>

            {/* Job Opening 4 */}
            <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-custom-blue flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:shadow-md transition-all">
              <div className="min-w-0">
                <h3 className="text-xl font-bold text-gray-900 truncate">Junior Compliance Analyst</h3>
                <p className="text-gray-700">Full-time • New York, USA</p>
              </div>
              <a href="#" className="bg-white text-black border border-gray-300 px-5 py-2 rounded-full font-medium hover:bg-gray-50 transition-colors shadow-sm whitespace-nowrap">
                Apply Now
              </a>
            </div>
          </div>

          <div className="pt-6">
            <p className="text-gray-600">
              Don't see your perfect fit? <a href="#" className="text-custom-blue font-medium hover:underline">Send us your resume</a>
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Our Recruitment Process */}
      <section className="py-12 px-6 md:px-24 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-custom-blue leading-tight">
            Our <span className="text-red-500">Recruitment Process</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            We believe in a transparent and respectful hiring process.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Step 1 */}
            <div className="bg-white rounded-xl shadow-sm p-5 text-center border-b-4 border-custom-blue hover:shadow-md transition-all">
              <div className="text-custom-blue text-4xl font-bold">1</div>
              <h3 className="text-lg font-bold text-gray-900 mt-2">Application</h3>
              <p className="text-gray-700 text-sm mt-1">Submit your resume through our portal</p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl shadow-sm p-5 text-center border-b-4 border-red-500 hover:shadow-md transition-all">
              <div className="text-red-500 text-4xl font-bold">2</div>
              <h3 className="text-lg font-bold text-gray-900 mt-2">Initial Review</h3>
              <p className="text-gray-700 text-sm mt-1">We review and shortlist candidates</p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl shadow-sm p-5 text-center border-b-4 border-custom-blue hover:shadow-md transition-all">
              <div className="text-custom-blue text-4xl font-bold">3</div>
              <h3 className="text-lg font-bold text-gray-900 mt-2">Interviews</h3>
              <p className="text-gray-700 text-sm mt-1">Meet with hiring managers</p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-xl shadow-sm p-5 text-center border-b-4 border-red-500 hover:shadow-md transition-all">
              <div className="text-red-500 text-4xl font-bold">4</div>
              <h3 className="text-lg font-bold text-gray-900 mt-2">Offer</h3>
              <p className="text-gray-700 text-sm mt-1">Successful candidates receive offers</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}