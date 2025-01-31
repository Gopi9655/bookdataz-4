// src/components/IndustryDetails.jsx
"use client";

import { useRouter } from 'next/navigation';
import DataDisplay from './DataDisplay';

const IndustryDetails = ({ industryData }) => {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gray-100">
           

            <main className="py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Introduction Section */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                            About {industryData.name}
                        </h2>
                        <p className="text-gray-600 leading-relaxed">{industryData.description}</p>
                    </section>

                    {/* Subcategories Section */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Key Segments</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {industryData.subcategories.map((subcategory) => (
                                <div key={subcategory} className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition duration-200">
                                    <h3 className="font-medium text-gray-700">{subcategory}</h3>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Job Titles Section */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                            Job Titles in {industryData.name}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {industryData.jobTitles.map((jobTitle) => (
                                <div key={jobTitle} className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition duration-200">
                                    <h3 className="font-medium text-gray-700">{jobTitle}</h3>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Data Insights Section */}
                    <section className="mb-8">
                        <DataDisplay industryData={industryData} />
                    </section>

                    {/* Additional Sections */}
                    {industryData.sections.map((section) => (
                        <section key={section.title} className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-700 mb-4">{section.title}</h2>
                            <p className="text-gray-600 leading-relaxed">{section.content}</p>
                        </section>
                    ))}

                    {/* Call to Action */}
                    <section className="bg-blue-500 text-white py-8 px-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">
                            Interested in {industryData.name} Data?
                        </h2>
                        <p className="mb-6">
                            Contact us today to learn more about how our data can help your business grow.
                        </p>
                        <button
                            onClick={() => router.push("/contact")}
                            className="bg-white text-blue-500 py-2 px-6 rounded-md hover:bg-gray-100 transition duration-200"
                        >
                            Contact Us
                        </button>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default IndustryDetails;