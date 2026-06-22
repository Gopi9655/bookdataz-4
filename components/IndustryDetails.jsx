import {
    ArrowRight,
    BarChart3,
    ChartNoAxesCombined,
    Crosshair,
    Database,
    PieChart,
    Radar,
    Sparkles,
} from "lucide-react";

import DataDisplay from "./DataDisplay";
import Button from "./ui/Button";
import Container from "./ui/Container";
import Section from "./ui/Section";

const IndustryDetails = ({ industryData }) => {
    const sum = (values) => values.reduce((total, value) => total + value, 0);
    const summaries = [
        { label: "Bar data total", value: sum(industryData.barData), icon: BarChart3 },
        { label: "Pie data total", value: sum(industryData.pieData), icon: PieChart },
        { label: "Line data points", value: industryData.lineData.length, icon: ChartNoAxesCombined },
        { label: "Radar data points", value: industryData.radarData.length, icon: Radar },
    ];
    const dataGroups = [
        { label: "Bar data", values: industryData.barData },
        { label: "Pie data", values: industryData.pieData },
        { label: "Line data", values: industryData.lineData },
        { label: "Radar data", values: industryData.radarData },
    ];

    return (
        <div className="min-h-screen overflow-hidden bg-brandWarm-50 text-slate-950">
            <section className="relative isolate overflow-hidden border-b border-slate-200 py-20 lg:py-28">
                <div
                    className="absolute inset-0 -z-20 opacity-40"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(90,52,38,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(90,52,38,0.05) 1px, transparent 1px)",
                        backgroundSize: "56px 56px",
                        maskImage: "linear-gradient(to bottom, black 12%, transparent 92%)",
                    }}
                />
                <div className="absolute left-[8%] top-12 -z-10 h-72 w-72 rounded-full bg-blue-400/15 blur-3xl" />
                <div className="absolute right-[5%] top-1/3 -z-10 h-80 w-80 rounded-full bg-orange-400/12 blur-3xl" />

                <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
                    <div className="max-w-3xl">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                            <Sparkles size={14} className="text-orange-500" />
                            Industry intelligence
                        </div>
                        <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                            {industryData.name}
                        </h1>
                        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                            {industryData.description}
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            {industryData.keywords.map((keyword) => (
                                <span
                                    key={keyword}
                                    className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-800"
                                >
                                    {keyword}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="premium-card premium-card-light premium-card-hover relative overflow-hidden rounded-3xl p-5 text-slate-900 lg:p-6">
                        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-orange-300/25 blur-3xl" />
                        <span className="absolute inset-x-0 top-0 h-1 premium-accent" aria-hidden="true" />
                        <div className="relative flex items-center justify-between gap-4 border-b border-slate-200 pb-5">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
                                    Analytics overview
                                </p>
                                <h2 className="mt-2 text-xl font-semibold text-slate-950">
                                    {industryData.name}
                                </h2>
                            </div>
                            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-blue-200 bg-blue-50 text-blue-700">
                                <Database size={22} />
                            </div>
                        </div>
                        <div className="relative mt-5 grid gap-3">
                            {dataGroups.map((group) => (
                                <div
                                    key={group.label}
                                    className="flex flex-col gap-3 rounded-2xl border border-blue-100 bg-blue-50/55 p-4 sm:flex-row sm:items-center sm:justify-between"
                                >
                                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                                        {group.label}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {group.values.map((value, index) => (
                                            <span
                                                key={`${group.label}-${index}`}
                                                className="rounded-lg border border-orange-200 bg-orange-50 px-2.5 py-1 text-xs font-semibold tabular-nums text-orange-700"
                                            >
                                                {value}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            <Section className="relative border-t border-slate-200 bg-gradient-to-b from-brandWarm-100 to-brandWarm-50">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,227,209,0.6),transparent_38%)]" />
                <div className="relative">
                    <div className="mb-10 flex max-w-3xl items-start gap-4 lg:mb-12">
                        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-blue-200 bg-blue-50 text-blue-700">
                            <Crosshair size={22} />
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-700">
                                Data summary
                            </p>
                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                                {industryData.name} analytics
                            </h2>
                        </div>
                    </div>

                    <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                        {summaries.map((summary) => {
                            const Icon = summary.icon;

                            return (
                                <div
                                    key={summary.label}
                                    className="premium-card premium-card-light premium-card-hover relative overflow-hidden rounded-3xl p-6"
                                >
                                    <span
                                        className="absolute inset-x-0 top-0 h-1 premium-accent"
                                        aria-hidden="true"
                                    />
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <p className="text-3xl font-bold tabular-nums tracking-tight text-slate-950">
                                                {summary.value}
                                            </p>
                                            <p className="mt-2 text-xs font-bold uppercase leading-5 tracking-[0.14em] text-slate-500">
                                                {summary.label}
                                            </p>
                                        </div>
                                        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-blue-200/80 bg-blue-50 text-blue-700">
                                            <Icon size={20} />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <DataDisplay industryData={industryData} />
                </div>
            </Section>

            <Section className="border-t border-slate-200 bg-brandWarm-50">
                <div className="premium-card relative overflow-hidden rounded-3xl border border-orange-200 bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white shadow-[0_34px_80px_-48px_rgba(194,65,12,0.65)] lg:p-8">
                    <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-700/20 blur-3xl" />
                    <span className="absolute inset-x-0 top-0 h-1 premium-accent" aria-hidden="true" />
                    <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
                        <div className="max-w-2xl">
                            <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange-50">
                                BookDataZ
                            </p>
                            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                                Explore {industryData.name} data
                            </h2>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <Button href="/contact" variant="accent" size="lg" className="gap-2">
                                Contact Us <ArrowRight size={18} />
                            </Button>
                            <Button
                                href="/datacard"
                                variant="outline"
                                size="lg"
                                className="border-white/50 text-white hover:border-white hover:bg-white hover:text-orange-600"
                            >
                                Browse Datacards
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default IndustryDetails;
