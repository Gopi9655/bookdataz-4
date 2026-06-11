import React from 'react';
export default function TeamLayout() {
  return (
    <div className="bg-white text-gray-800 font-sans">

      {/* Section 1: Our Leadership / Founders */}
      <section className="py-14 px-36 bg-gradient-to-br from-gray-50 to-white"> {/* Changed px-6 md:px-12 lg:px-24 to px-36 */}
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <h2 className="text-5xl font-extrabold text-custom-blue leading-tight mb-4">
            Meet Our <span className="block text-red-500">Visionary Leaders</span>
          </h2>
          <p className="text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto">
            Our leadership team brings decades of experience, innovation, and passion to guide BookDataZ forward,
            ensuring we stay true to our mission of delivering exceptional B2B data.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

            {/* Leader 1 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-custom-blue/50 flex items-center justify-center bg-gray-200">
                {/* Placeholder for image */}
                <img src="/team/teammale1.jpg" alt="Sarah Chen" className="object-cover w-full h-full" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Brad Allen</h3>
              <p className="text-lg text-red-500 font-semibold mb-4">CEO & Founder</p>
              <p className="text-base text-gray-600 leading-relaxed">
                Brad Allen is the strategic mind behind BookDataZ, passionate about data integrity and ethical business practices.
                She ensures our vision translates into tangible client success.
              </p>
            </div>

            {/* Leader 2 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-custom-blue/50 flex items-center justify-center bg-gray-200">
                {/* Placeholder for image */}
                <img src="/team/team male 2.jpg " alt="David Lee" className="object-cover w-full h-full" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">David Lee</h3>
              <p className="text-lg text-red-500 font-semibold mb-4">CTO & Co-Founder</p>
              <p className="text-base text-gray-600 leading-relaxed">
                David leads our technological advancements, ensuring BookDataZ utilizes cutting-edge solutions for data aggregation and security.
                His expertise keeps us ahead of the curve.
              </p>
            </div>

            {/* Leader 3 (Optional: if you have a third leader) */}
            <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-custom-blue/50 flex items-center justify-center bg-gray-200">
                {/* Placeholder for image */}
                <img src="" alt="" className="object-cover w-full h-full" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Rohan Mehta</h3>
              <p className="text-lg text-red-500 font-semibold mb-4">Chief Operations Officer</p>
              <p className="text-base text-gray-600 leading-relaxed">
                Rohan Mehta optimizes our operational efficiency and scalability. Her focus on seamless processes ensures
                BookDataZ delivers data reliably and consistently to our global clientele.
              </p>
            </div>

          </div>
        </div>
      </section>

      ---

      {/* Section 2: Our Core Team */}
      <section className="py-14 px-36 bg-gray-100"> {/* Changed px-6 md:px-12 lg:px-24 to px-36 */}
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <h2 className="text-5xl font-extrabold text-custom-blue leading-tight mb-4">
            Meet Our <span className="block text-red-500">Dedicated Team</span>
          </h2>
          <p className="text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto">
            Our global team of experts is the backbone of BookDataZ. From data scientists to compliance specialists,
            each member is committed to excellence and client success.
          </p>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Team Member 1 */}
            <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:shadow-lg">
              <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-2 border-red-400 flex items-center justify-center bg-gray-200">
                <img src="/team/team leader 3.jpg" alt="John Doe" className="object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Roger Depay</h3>
              <p className="text-md text-custom-blue font-semibold mb-3">VP of sales</p>
              <p className="text-sm text-gray-600">Results-Oriented Sales Strategist</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:shadow-lg">
              <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-2 border-red-400 flex items-center justify-center bg-gray-200">
                <img src="/team/team leader 1.jpeg" alt="Jane Smith" className="object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">David Johnson</h3>
              <p className="text-md text-custom-blue font-semibold mb-3">Director of sales</p>
              <p className="text-sm text-gray-600">Sales Operations Leader</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:shadow-lg">
              <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-2 border-red-400 flex items-center justify-center bg-gray-200">
                <img src="/team/team male 3.jpg" alt="Michael Brown" className="object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Robert Haynes</h3>
              <p className="text-md text-custom-blue font-semibold mb-3">Business Development Manager</p>
              <p className="text-sm text-gray-600">Business Growth Architect</p>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:shadow-lg">
              <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-2 border-red-400 flex items-center justify-center bg-gray-200">
                <img src="/team/team male 4.jpg" alt="Jessica Green" className="object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Kevin Hughes</h3>
              <p className="text-md text-custom-blue font-semibold mb-3">Business Development Manager</p>
              <p className="text-sm text-gray-600">Sales-Driven Marketer
</p>
            </div>

             {/* Add more team members as needed, following the same structure */}
             {/* Team Member 5 */}
            <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:shadow-lg">
              <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-2 border-red-400 flex items-center justify-center bg-gray-200">
                <img src="/team/team male 5.jpg" alt="Chris Taylor" className="object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Peter Stenberg</h3>
              <p className="text-md text-custom-blue font-semibold mb-3">Business Development Manager</p>
              <p className="text-sm text-gray-600">Revenue Development Strategist</p>
            </div>

             {/* Team Member 6 */}
            <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:shadow-lg">
              <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-2 border-red-400 flex items-center justify-center bg-gray-200">
                <img src="/team/team male 6.jpeg" alt="Olivia King" className="object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Michael Brand</h3>
              <p className="text-md text-custom-blue font-semibold mb-3">Business Development Manager</p>
              <p className="text-sm text-gray-600">Data-Led Sales Planner</p>
            </div>
            {/* team 7 */}
                        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:shadow-lg">
              <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-2 border-red-400 flex items-center justify-center bg-gray-200">
                <img src="" alt="" className="object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Sophia Larson</h3>
              <p className="text-md text-custom-blue font-semibold mb-3">Senior Business Development Manager</p>
              <p className="text-sm text-gray-600">Senior Business Development Manager</p>
            </div>
            {/* team 8 */}
            <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:shadow-lg">
              <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-2 border-red-400 flex items-center justify-center bg-gray-200">
                <img src="" alt="" className="object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Michael Brand</h3>
              <p className="text-md text-custom-blue font-semibold mb-3">Business Development Manager</p>
              <p className="text-sm text-gray-600">Business Development Manager</p>
            </div>

            



          </div>
        </div>
      </section>

      ---

      {/* Section 3: Our Values & Culture */}
      <section className="py-14 px-36 bg-gradient-to-tl from-custom-blue/5 to-white"> {/* Changed px-6 md:px-12 lg:px-24 to px-36 */}
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <h2 className="text-5xl font-extrabold text-custom-blue leading-tight mb-4">
            Our <span className="block text-red-500">Core Values & Culture</span>
          </h2>
          <p className="text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto">
            At BookDataZ, our team thrives on a foundation of shared values that drive our innovation, collaboration,
            and commitment to excellence.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {/* Value Card 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 space-y-4 text-left border-l-4 border-custom-blue hover:shadow-xl transition-shadow duration-300">
              <div className="text-custom-blue text-4xl mb-3">💡</div> {/* Icon placeholder */}
              <h3 className="text-2xl font-bold text-gray-900">Innovation</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We foster a culture of continuous learning and adaptation, always seeking new ways to enhance our data solutions and client experience.
              </p>
            </div>

            {/* Value Card 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 space-y-4 text-left border-l-4 border-red-500 hover:shadow-xl transition-shadow duration-300">
              <div className="text-red-500 text-4xl mb-3">🤝</div> {/* Icon placeholder */}
              <h3 className="text-2xl font-bold text-gray-900">Collaboration</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our strength lies in teamwork. We encourage open communication and mutual support across all departments to achieve collective success.
              </p>
            </div>

            {/* Value Card 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 space-y-4 text-left border-l-4 border-custom-blue hover:shadow-xl transition-shadow duration-300">
              <div className="text-custom-blue text-4xl mb-3">🎯</div> {/* Icon placeholder */}
              <h3 className="text-2xl font-bold text-gray-900">Excellence</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are committed to delivering the highest quality in everything we do, from data accuracy to customer service, setting industry benchmarks.
              </p>
            </div>

             {/* Value Card 4 (Optional: if you have more values) */}
            <div className="bg-white rounded-xl shadow-lg p-8 space-y-4 text-left border-l-4 border-red-500 hover:shadow-xl transition-shadow duration-300">
              <div className="text-red-500 text-4xl mb-3">🔒</div> {/* Icon placeholder */}
              <h3 className="text-2xl font-bold text-gray-900">Integrity</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Trust is our currency. We operate with unwavering honesty, transparency, and adherence to ethical standards in all our interactions.
              </p>
            </div>

             {/* Value Card 5 (Optional) */}
            <div className="bg-white rounded-xl shadow-lg p-8 space-y-4 text-left border-l-4 border-custom-blue hover:shadow-xl transition-shadow duration-300">
              <div className="text-custom-blue text-4xl mb-3">🌱</div> {/* Icon placeholder */}
              <h3 className="text-2xl font-bold text-gray-900">Growth</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe in nurturing growth—for our employees, our clients, and our company. Continuous improvement is at the heart of our journey.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}