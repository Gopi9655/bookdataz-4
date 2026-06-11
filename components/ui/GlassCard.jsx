import { twMerge } from "tailwind-merge";

const GlassCard = ({
  as: Component = "div",
  className,
  children,
  ...props
}) => (
  <Component
    className={twMerge(
      "rounded-3xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-md lg:p-8",
      className
    )}
    {...props}
  >
    {children}
  </Component>
);

export default GlassCard;
