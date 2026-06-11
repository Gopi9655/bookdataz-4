"use client";

import { FiChevronRight } from "react-icons/fi";
import { twMerge } from "tailwind-merge";
import GlassCard from "./GlassCard";

const CategoryCard = ({ category, onSubCategorySelect, className }) => (
  <GlassCard
    className={twMerge(
      "group relative cursor-pointer overflow-hidden border-slate-300 bg-white text-gray-700 shadow-md transition-shadow duration-300 hover:shadow-xl",
      className
    )}
  >
    <div
      className="absolute inset-x-0 top-0 h-2 origin-left bg-red-400 transition-transform duration-300 group-hover:scale-x-105"
      aria-hidden="true"
    />
    <h2 className="text-2xl font-extrabold tracking-tight text-customBlue">
      {category.title}
    </h2>
    <p className="mb-6 mt-4 font-semibold">
      Total Records:{" "}
      <span className="text-2xl font-extrabold tabular-nums text-red-400">
        {category.dataCount.toLocaleString()}
      </span>
    </p>
    <ul className="max-h-48 space-y-4 overflow-y-auto pr-3">
      {category.subCategories.map((subCategory) => (
        <li key={subCategory}>
          <button
            type="button"
            className="flex w-full items-center gap-4 text-left text-lg transition-colors duration-200 hover:text-red-500"
            onClick={() => onSubCategorySelect?.(subCategory)}
          >
            <FiChevronRight className="flex-shrink-0 text-red-400" />
            {subCategory}
          </button>
        </li>
      ))}
    </ul>
  </GlassCard>
);

export default CategoryCard;
