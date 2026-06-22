import { twMerge } from "tailwind-merge";
import Button from "./Button";
import GlassCard from "./GlassCard";

const CTASection = ({
  title,
  description,
  href,
  actionLabel,
  children,
  className,
  buttonVariant = "light",
}) => (
  <GlassCard
    as="section"
    className={twMerge(
      "premium-cta-espresso border-white/10 text-white shadow-[0_36px_72px_-44px_rgba(21,21,21,0.65)]",
      className
    )}
  >
    <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
    {description && <p className="mt-4 max-w-2xl leading-7 text-slate-300">{description}</p>}
    {children}
    {href && actionLabel && (
      <Button href={href} variant={buttonVariant} className="mt-6">
        {actionLabel}
      </Button>
    )}
  </GlassCard>
);

export default CTASection;
