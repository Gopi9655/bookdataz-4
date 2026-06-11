"use client";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    BarElement,
    ArcElement,
    RadarController,
    RadialLinearScale,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar, Doughnut, Line, Radar } from "react-chartjs-2";
import GlassCard from "./ui/GlassCard";

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    BarElement,
    ArcElement,
    RadarController,
    RadialLinearScale,
    Tooltip,
    Legend
);

const DataDisplay = ({ industryData }) => {
    const labelsFor = (values) => values.map((_, index) => `Value ${index + 1}`);
    const gridColor = "rgba(148, 163, 184, 0.16)";
    const tickColor = "#cbd5e1";
    const legendColor = "#e2e8f0";
    const tooltipOptions = {
        backgroundColor: "#020617",
        borderColor: "rgba(147, 197, 253, 0.28)",
        borderWidth: 1,
        titleColor: "#f8fafc",
        bodyColor: "#cbd5e1",
        padding: 12,
    };
    const cartesianOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: tooltipOptions,
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { color: tickColor },
                border: { color: gridColor },
            },
            y: {
                beginAtZero: true,
                grid: { color: gridColor },
                ticks: { color: tickColor },
                border: { color: gridColor },
            },
        },
    };

    const barData = {
        labels: labelsFor(industryData.barData),
        datasets: [
            {
                label: "Bar data",
                data: industryData.barData,
                backgroundColor: ["#60a5fa", "#3b82f6", "#f97316"],
                borderRadius: 8,
            },
        ],
    };

    const pieData = {
        labels: labelsFor(industryData.pieData),
        datasets: [
            {
                label: "Pie data",
                data: industryData.pieData,
                backgroundColor: ["#60a5fa", "#2563eb", "#f97316"],
                borderColor: "#071a2d",
                borderWidth: 4,
            },
        ],
    };

    const lineData = {
        labels: labelsFor(industryData.lineData),
        datasets: [
            {
                label: "Line data",
                data: industryData.lineData,
                borderColor: "#60a5fa",
                backgroundColor: "#60a5fa",
                pointBackgroundColor: "#f97316",
                pointBorderColor: "#fed7aa",
                pointRadius: 4,
                pointHoverRadius: 6,
                tension: 0.35,
                fill: false,
            },
        ],
    };

    const radarData = {
        labels: labelsFor(industryData.radarData),
        datasets: [
            {
                label: "Radar data",
                data: industryData.radarData,
                backgroundColor: "rgba(96, 165, 250, 0.18)",
                borderColor: "#60a5fa",
                pointBackgroundColor: "#f97316",
                pointBorderColor: "#fed7aa",
            },
        ],
    };

    const doughnutOptions = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "64%",
        plugins: {
            legend: {
                position: "bottom",
                labels: {
                    color: legendColor,
                    boxWidth: 10,
                    boxHeight: 10,
                    padding: 18,
                    usePointStyle: true,
                },
            },
            tooltip: tooltipOptions,
        },
    };
    const radarOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: tooltipOptions,
        },
        scales: {
            r: {
                beginAtZero: true,
                angleLines: { color: gridColor },
                grid: { color: gridColor },
                pointLabels: { color: tickColor, font: { size: 11 } },
                ticks: {
                    color: tickColor,
                    backdropColor: "transparent",
                    showLabelBackdrop: false,
                },
            },
        },
    };
    const panels = [
        {
            title: "Bar data",
            count: industryData.barData.length,
            chart: <Bar data={barData} options={cartesianOptions} />,
        },
        {
            title: "Pie data",
            count: industryData.pieData.length,
            chart: <Doughnut data={pieData} options={doughnutOptions} />,
        },
        {
            title: "Line data",
            count: industryData.lineData.length,
            chart: <Line data={lineData} options={cartesianOptions} />,
        },
        {
            title: "Radar data",
            count: industryData.radarData.length,
            chart: <Radar data={radarData} options={radarOptions} />,
        },
    ];

    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {panels.map((panel) => (
                <GlassCard
                    key={panel.title}
                    as="section"
                    className="min-w-0 overflow-hidden border-blue-300/15 bg-slate-950/45"
                >
                    <div className="mb-6 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                        <h3 className="text-lg font-semibold text-white">{panel.title}</h3>
                        <span className="rounded-full border border-blue-300/15 bg-blue-400/10 px-3 py-1 text-xs font-semibold tabular-nums text-blue-200">
                            {panel.count} values
                        </span>
                    </div>
                    <div className="relative h-72 min-w-0 w-full sm:h-80">
                        {panel.chart}
                    </div>
                </GlassCard>
            ))}
        </div>
    );
};

export default DataDisplay;
