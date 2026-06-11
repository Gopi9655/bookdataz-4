import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Button from "./Button";
import GlassCard from "./GlassCard";

const IndustryCard = ({
  title,
  description,
  icon,
  iconAlt = "",
  href,
  actionLabel = "Learn more",
  children,
  className,
}) => (
  <GlassCard className={twMerge("h-full", className)}>
    {icon && (
      <Image
        src={icon}
        alt={iconAlt}
        width={50}
        height={50}
        className="mb-4"
      />
    )}
    <h3 className="text-xl font-semibold text-customBlue">{title}</h3>
    {description && <p className="mt-3 leading-relaxed">{description}</p>}
    {children}
    {href && (
      <Button href={href} variant="outline" size="sm" className="mt-6">
        {actionLabel}
      </Button>
    )}
  </GlassCard>
);

export default IndustryCard;
