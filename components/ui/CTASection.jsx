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
      "border-blue-400/30 bg-customBlue text-white shadow-md",
      className
    )}
  >
    <h2 className="text-2xl font-semibold">{title}</h2>
    {description && <p className="mt-4 leading-relaxed">{description}</p>}
    {children}
    {href && actionLabel && (
      <Button href={href} variant={buttonVariant} className="mt-6">
        {actionLabel}
      </Button>
    )}
  </GlassCard>
);

export default CTASection;
