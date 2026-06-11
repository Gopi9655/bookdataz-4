"use client";

import DataDisplay from './DataDisplay';
import CTASection from "./ui/CTASection";
import GlassCard from "./ui/GlassCard";
import Section from "./ui/Section";

const IndustryDetails = ({ industryData }) => {
    return (
        <main className="min-h-screen bg-gray-100">
            <Section as="div" containerClassName="space-y-8">
                    <GlassCard as="section" className="border-gray-200 bg-white">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                            About {industryData.name}
                        </h2>
                        <p className="text-gray-600 leading-relaxed">{industryData.description}</p>
                    </GlassCard>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Keywords</h2>
                        <div className="flex flex-wrap gap-3">
                            {industryData.keywords.map((keyword) => (
                                <span key={keyword} className="rounded-full bg-white px-4 py-2 text-gray-700 shadow">
                                    {keyword}
                                </span>
                            ))}
                        </div>
                    </section>

                    <section>
                        <DataDisplay industryData={industryData} />
                    </section>

                    <CTASection
                        title={`Interested in ${industryData.name} Data?`}
                        description="Contact us today to learn more about how our data can help your business grow."
                        href="/contact"
                        actionLabel="Contact Us"
                        className="bg-blue-500"
                    />
            </Section>
        </main>
    );
};

export default IndustryDetails;
