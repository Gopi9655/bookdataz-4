import { twMerge } from "tailwind-merge";

const GlassCard = ({
  as: Component = "div",
  className,
  children,
  ...props
}) => (
  <Component
    className={twMerge(
      "rounded-3xl border border-white/20 bg-white/10 p-6 shadow-[0_24px_60px_-36px_rgba(2,8,23,0.55)] backdrop-blur-md lg:p-8",
      className
    )}
    {...props}
  >
    {children}
  </Component>
);

export default GlassCard;
