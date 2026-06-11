import IndustryDetails from '../../../components/IndustryDetails';
import { mockData } from '@/resource/mockdata';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return Object.keys(mockData).map((industry) => ({ industry }));
}

const IndustryPage = async ({ params }) => {
  const { industry: industrySlug } = await params;
  const industryData = mockData[industrySlug];

  if (!industryData) {
    notFound();
  }

  return <IndustryDetails industryData={industryData} />;
};

export default IndustryPage;
