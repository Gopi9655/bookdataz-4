"use client";

import DataDisplay from './DataDisplay';

const IndustryDetails = ({ industryData }) => {
    return (
        <div className="min-h-screen bg-gray-100">
            <main className="py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                            About {industryData.name}
                        </h2>
                        <p className="text-gray-600 leading-relaxed">{industryData.description}</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Keywords</h2>
                        <div className="flex flex-wrap gap-3">
                            {industryData.keywords.map((keyword) => (
                                <span key={keyword} className="bg-white rounded-lg shadow px-4 py-2 text-gray-700">
                                    {keyword}
                                </span>
                            ))}
                        </div>
                    </section>

                    <section className="mb-8">
                        <DataDisplay industryData={industryData} />
                    </section>

                    <section className="bg-blue-500 text-white py-8 px-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">
                            Interested in {industryData.name} Data?
                        </h2>
                        <p className="mb-6">
                            Contact us today to learn more about how our data can help your business grow.
                        </p>
                        <a href="/contact">
                            <button className="bg-white text-blue-500 py-2 px-6 rounded-md hover:bg-gray-100 transition duration-200">
                                Contact Us
                            </button>
                        </a>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default IndustryDetails;
