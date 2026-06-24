import { twMerge } from "tailwind-merge";

const GlassCard = ({
  as: Component = "div",
  className,
  children,
  ...props
}) => (
  <Component
    className={twMerge(
      "rounded-3xl border border-[color:var(--card-border)] bg-[var(--card-bg)] p-6 shadow-[0_28px_64px_-40px_rgba(var(--shadow-rgb),0.28)] backdrop-blur-md lg:p-8",
      className
    )}
    {...props}
  >
    {children}
  </Component>
);

export default GlassCard;
