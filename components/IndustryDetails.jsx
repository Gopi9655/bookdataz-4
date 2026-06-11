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
import GlassCard from "./ui/GlassCard";
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
        <div className="min-h-screen overflow-hidden bg-slate-950 text-white">
            <section className="relative isolate overflow-hidden py-20 lg:py-28">
                <div
                    className="absolute inset-0 -z-20 opacity-35"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(96,165,250,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.12) 1px, transparent 1px)",
                        backgroundSize: "52px 52px",
                        maskImage: "linear-gradient(to bottom, black 12%, transparent 95%)",
                    }}
                />
                <div className="absolute left-[8%] top-12 -z-10 h-72 w-72 rounded-full bg-blue-600/15 blur-3xl" />
                <div className="absolute right-[5%] top-1/3 -z-10 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />

                <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
                    <div className="max-w-3xl">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
                            <Sparkles size={14} />
                            Industry intelligence
                        </div>
                        <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                            {industryData.name}
                        </h1>
                        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                            {industryData.description}
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            {industryData.keywords.map((keyword) => (
                                <span
                                    key={keyword}
                                    className="rounded-full border border-blue-300/20 bg-white/[0.06] px-4 py-2 text-sm font-medium text-blue-100"
                                >
                                    {keyword}
                                </span>
                            ))}
                        </div>
                    </div>

                    <GlassCard className="relative overflow-hidden border-blue-300/20 bg-[#082d52]/75 p-5 shadow-2xl shadow-blue-950/40 lg:p-6">
                        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-400/20 blur-3xl" />
                        <div className="relative flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">
                                    Analytics overview
                                </p>
                                <h2 className="mt-2 text-xl font-semibold text-white">
                                    {industryData.name}
                                </h2>
                            </div>
                            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-400/15 text-blue-200">
                                <Database size={22} />
                            </div>
                        </div>
                        <div className="relative mt-5 grid gap-3">
                            {dataGroups.map((group) => (
                                <div
                                    key={group.label}
                                    className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.055] p-4 sm:flex-row sm:items-center sm:justify-between"
                                >
                                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                                        {group.label}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {group.values.map((value, index) => (
                                            <span
                                                key={`${group.label}-${index}`}
                                                className="rounded-lg bg-slate-950/50 px-2.5 py-1 text-xs font-semibold tabular-nums text-blue-100"
                                            >
                                                {value}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                </Container>
            </section>

            <Section className="relative border-t border-white/10 bg-[#071a2d]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.18),transparent_38%)]" />
                <div className="relative">
                    <div className="mb-10 flex max-w-3xl items-start gap-4 lg:mb-12">
                        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-400/10 text-blue-300">
                            <Crosshair size={22} />
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300">
                                Data summary
                            </p>
                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
                                {industryData.name} analytics
                            </h2>
                        </div>
                    </div>

                    <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                        {summaries.map((summary) => {
                            const Icon = summary.icon;

                            return (
                                <GlassCard
                                    key={summary.label}
                                    className="border-blue-300/15 bg-white/[0.06]"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <p className="text-3xl font-bold tabular-nums tracking-tight text-white">
                                                {summary.value}
                                            </p>
                                            <p className="mt-2 text-xs font-bold uppercase leading-5 tracking-[0.14em] text-slate-400">
                                                {summary.label}
                                            </p>
                                        </div>
                                        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blue-400/10 text-blue-300">
                                            <Icon size={20} />
                                        </div>
                                    </div>
                                </GlassCard>
                            );
                        })}
                    </div>

                    <DataDisplay industryData={industryData} />
                </div>
            </Section>

            <Section className="border-t border-white/10 bg-slate-950">
                <GlassCard
                    as="section"
                    className="relative overflow-hidden border-blue-300/20 bg-[#082d52]/80 shadow-2xl shadow-blue-950/30"
                >
                    <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />
                    <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
                        <div className="max-w-2xl">
                            <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-200">
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
                                className="border-white/20 text-white hover:border-blue-300 hover:bg-white/10"
                            >
                                Browse Datacards
                            </Button>
                        </div>
                    </div>
                </GlassCard>
            </Section>
        </div>
    );
};

export default IndustryDetails;
