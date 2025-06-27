import React from 'react';

export default function Story() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white text-gray-800 font-sans">

      {/* Section 1: Founding Vision */}
      <section className="py-20 px-6 md:px-36 bg-white shadow-inner-top">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-6 animate-fade-in-left">
            <h2 className="text-5xl font-extrabold text-custom-blue leading-tight">
              The Birth of <span className="block text-red-500">BookDataZ</span>
            </h2>
            <p className="text-xl leading-relaxed text-gray-700">
              In a market overwhelmed by low-quality data providers, <strong>BookDataZ</strong> was born in the United States to stand out
              as a brand of trust. We envisioned a world where sales and marketing teams could access compliant, clean, and precisely
              targeted B2B email databases — and we built exactly that.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              What began as a small data aggregation and validation operation soon became a global platform trusted by thousands of businesses.
              Our early focus on accuracy and compliance paved the path for rapid, responsible growth.
            </p>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="bg-gray-100 p-8 rounded-3xl shadow-2xl border-l-8 border-red-500 space-y-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Did You Know?</h3>
              <ul className="list-none space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-2xl mt-0.5">✔</span>
                  <span>In our first year, BookDataZ manually verified over <strong>1 million contacts</strong>, ensuring 98% deliverability.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-2xl mt-0.5">✔</span>
                  <span>We operate with <strong>zero tolerance for outdated data</strong> — every record is cleaned every 90 days.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-2xl mt-0.5">✔</span>
                  <span>BookDataZ offers <strong>industry-specific segmentation</strong> to ensure your outreach always reaches the right decision-makers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-2xl mt-0.5">✔</span>
                  <span>We were among the first U.S.-based B2B data companies to align completely with <strong>GDPR, CCPA, and CAN-SPAM</strong> policies.</span>
                </li>
              </ul>
            </div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-custom-blue/10 rounded-full animate-bounce-slow hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* Section 2: Scaling Beyond Borders */}
      <section className="py-24 px-6 md:px-36 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="bg-custom-blue/5 border border-custom-blue/20 p-8 rounded-3xl shadow-xl space-y-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <h3 className="text-2xl font-bold text-custom-blue mb-4">Global Highlights</h3>
              <ul className="list-none space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-custom-blue text-2xl mt-0.5">🌐</span>
                  <span><strong>Clients in 160+ countries</strong>, including the U.S., U.K., Germany, Australia, and the Middle East.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-custom-blue text-2xl mt-0.5">📈</span>
                  <span>Coverage of <strong>over 75 industries</strong> — from SaaS startups to Fortune 500 enterprises.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-custom-blue text-2xl mt-0.5">🔗</span>
                  <span>Real-time integration with CRMs like <strong>Salesforce, HubSpot, and Zoho</strong>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-custom-blue text-2xl mt-0.5">🔬</span>
                  <span>Global team of <strong>100+ data scientists and compliance experts</strong> ensuring 24/7 quality control.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-custom-blue text-2xl mt-0.5">📊</span>
                  <span>Daily processing of over <strong>150,000 data records</strong> across healthcare, fintech, manufacturing, and tech sectors.</span>
                </li>
              </ul>
            </div>
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-red-500/10 rounded-full animate-pulse-slow hidden lg:block"></div>
          </div>

          <div className="lg:w-1/2 space-y-6 animate-fade-in-right">
            <h2 className="text-5xl font-extrabold text-custom-blue leading-tight">
              Scaling <span className="block text-red-500">Beyond Borders</span>
            </h2>
            <p className="text-xl leading-relaxed text-gray-700">
              After establishing our reputation in the U.S., we expanded rapidly across international markets — tailoring data to
              meet local regulations and business practices. Our reach now spans industries like healthcare, education, finance, manufacturing, and technology.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              With every expansion, we uphold our core principle: quality over quantity. Every database is curated with accuracy, privacy,
              and conversion efficiency in mind.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Our Vision & Promise */}
      <section className="py-24 px-6 md:px-36 bg-gradient-to-br from-gray-100 to-gray-200 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center space-y-10">
          <h2 className="text-5xl font-extrabold text-custom-blue leading-tight max-w-4xl mx-auto">
            Our Ongoing <span className="block text-red-500">Mission & Commitment</span>
          </h2>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto text-gray-700">
            BookDataZ is more than a product — it's a partnership. Our clients rely on us to help them find the right decision-makers,
            at the right time, in the right industries. That responsibility drives our innovation and integrity.
          </p>

          <div className="mt-12 flex flex-col md:flex-row justify-center gap-8">
            <div className="bg-white border-l-8 border-custom-blue px-8 py-8 shadow-2xl rounded-2xl max-w-md transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Vision</h3>
              <p className="text-lg text-gray-700">
                To become the world's most trusted B2B database brand — empowering ethical marketing through high-quality, relevant data.
              </p>
            </div>
            <div className="bg-white border-l-8 border-red-500 px-8 py-8 shadow-2xl rounded-2xl max-w-md transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Promise</h3>
              <p className="text-lg text-gray-700">
                BookDataZ ensures unmatched data accuracy, human-verified integrity, and total legal compliance with every record delivered.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}