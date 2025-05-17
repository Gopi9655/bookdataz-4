// src/components/DataDisplay.jsx
"use client";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    RadarController,
    RadialLinearScale,
    Tooltip,
    Legend,
} from "chart.js";
import { Line, Radar } from "react-chartjs-2";

// Register necessary Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    RadarController,
    RadialLinearScale,
    Tooltip,
    Legend
);

const DataDisplay = ({ industryData }) => {
    // Line Chart Data (Tracking Growth)
    const lineData = {
        labels: ["Q1", "Q2", "Q3", "Q4"],
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
        <div className="max-w-screen-lg mx-auto py-12">
            {/* SEO-Optimized Heading */}
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {industryData.name} Data Insights
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed">{industryData.description}</p>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Data Growth Over Time</h2>
                    <Line data={lineData} />
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Industry Performance Metrics</h2>
                    <Radar data={radarData} />
                </div>
            </div>
        </div>
    );
};

export default DataDisplay;