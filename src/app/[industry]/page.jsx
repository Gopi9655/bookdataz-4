import DataDisplay from "../../../components/DataDisplay";
import { mockData } from "@/resource/mockdata";
export default async function IndustryPage({ params }) {
  // Unwrap params to access `industry`
  const { industry } = await params;

  // Fetch the data for the selected industry
  const industryData = mockData[industry] || {
    name: "Unknown Industry",
    barData: [],
    pieData: [],
  };

  return <DataDisplay industryData={industryData} />;
}


