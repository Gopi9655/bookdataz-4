import { twMerge } from "tailwind-merge";

const GlassCard = ({
  as: Component = "div",
  className,
  children,
  ...props
}) => (
  <Component
    className={twMerge(
      "rounded-3xl border border-[#e8d9cc] bg-[#fffdfa]/90 p-6 shadow-[0_28px_64px_-40px_rgba(64,42,32,0.22)] backdrop-blur-md lg:p-8",
      className
    )}
    {...props}
  >
    {children}
  </Component>
);

export default GlassCard;
