import { Database, Layers3 } from "lucide-react";
import { twMerge } from "tailwind-merge";
import GlassCard from "./GlassCard";

const CategoryCard = ({ category, className }) => (
  <GlassCard
    as="article"
    className={twMerge(
      "group relative flex h-full flex-col overflow-hidden border-slate-200 bg-white text-slate-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-950/10",
      className
    )}
  >
    <div
      className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-orange-400"
      aria-hidden="true"
    />
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
          Total Records
        </p>
        <p className="mt-2 text-2xl font-bold tabular-nums tracking-tight text-slate-950">
          {category.dataCount}
        </p>
      </div>
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-100 text-blue-700 transition-colors duration-300 group-hover:bg-blue-700 group-hover:text-white">
        <Database size={21} />
      </div>
    </div>

    <h2 className="mt-7 text-2xl font-bold tracking-tight text-slate-950">
      {category.title}
    </h2>

    <div className="mt-5 flex items-center gap-2 border-b border-slate-200 pb-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
      <Layers3 size={15} className="text-blue-700" />
      Subcategories
    </div>
    <ul className="mt-4 grid gap-2.5">
      {category.subCategories.map((subCategory) => (
        <li
          key={subCategory}
          className="flex items-start gap-3 text-sm leading-6 text-slate-600"
        >
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
          {subCategory}
        </li>
      ))}
    </ul>
  </GlassCard>
);

export default CategoryCard;
