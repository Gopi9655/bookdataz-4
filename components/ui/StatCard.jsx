import { twMerge } from "tailwind-merge";
import GlassCard from "./GlassCard";

const StatCard = ({ value, label, className, valueClassName, labelClassName }) => (
  <GlassCard className={className}>
    <p className={twMerge("text-3xl font-bold", valueClassName)}>{value}</p>
    <p
      className={twMerge(
        "mt-2 text-xs font-medium uppercase tracking-wide",
        labelClassName
      )}
    >
      {label}
    </p>
  </GlassCard>
);

export default StatCard;
