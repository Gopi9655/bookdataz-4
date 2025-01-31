"use client";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  LineElement,
  PointElement,
  RadarController,
  RadialLinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Pie, Line, Radar } from "react-chartjs-2";
import { useRouter } from "next/navigation";

// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  LineElement,
  PointElement,
  RadarController,
  RadialLinearScale,
  Tooltip,
  Legend
);

const DataDisplay = ({ industryData }) => {
  const router = useRouter();

  // Labels for Data Selling Business
  const dataCategories = ["Customer Leads", "Email Records", "Verified Contacts"];
  
  // Bar Chart Data
  const barData = {
    labels: dataCategories,
    datasets: [
      {
        label: "Total Data Available (in Thousands)",
        data: industryData.barData,
        backgroundColor: ["#4F46E5", "#3B82F6", "#06B6D4"],
      },
    ],
  };

  // Pie Chart Data
  const pieData = {
    labels: dataCategories,
    datasets: [
      {
        data: industryData.pieData,
        backgroundColor: ["#4F46E5", "#3B82F6", "#06B6D4"],
      },
    ],
  };

  // Line Chart Data (Tracking Growth)
  const lineData = {
    labels: ["Q1", "Q2", "Q3", "Q4", "Q5"],
    datasets: [
      {
        label: "Data Growth Over Time",
        data: industryData.lineData,
        borderColor: "#3B82F6",
        fill: false,
      },
    ],
  };

  // Radar Chart Data (Industry Performance Metrics)
  const radarData = {
    labels: ["Data Accuracy", "Engagement Rate", "Conversion", "Retention", "Market Demand"],
    datasets: [
      {
        label: "Industry Performance",
        data: industryData.radarData,
        backgroundColor: "rgba(79, 70, 229, 0.2)",
        borderColor: "#4F46E5",
      },
    ],
  };

  return (
    <div className="max-w-screen-lg mx-auto  md:px-12 py-12">
      {/* SEO-Optimized Heading */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-10">
          {industryData.name} Data Insights
        </h1>
        <p className="text-lg text-gray-500 leading-relaxed">{industryData.description}</p>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Total Data Available</h2>
          <Bar data={barData} />
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Data Distribution</h2>
          <Pie data={pieData} />
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Data Growth Over Time</h2>
          <Line data={lineData} />
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Industry Performance Metrics</h2>
          <Radar data={radarData} />
        </div>
      </div>

      {/* Back Button */}
      <div className="text-center mt-10">
        <button
          onClick={() => router.push("/")}
          className="bg-customBlue text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default DataDisplay;
