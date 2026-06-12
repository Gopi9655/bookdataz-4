import Link from "next/link";
import { twMerge } from "tailwind-merge";

const variants = {
  primary:
    "border border-blue-700/10 bg-customBlue text-white shadow-[0_14px_32px_-20px_rgba(5,45,82,0.7)] hover:bg-blue-900 focus-visible:ring-customBlue/40",
  accent:
    "border border-orange-400/40 bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-[0_16px_36px_-18px_rgba(234,88,12,0.9)] hover:from-orange-400 hover:to-orange-600 focus-visible:ring-orange-500/40",
  light:
    "border border-slate-200 bg-white text-customBlue shadow-[0_14px_30px_-22px_rgba(5,45,82,0.45)] hover:bg-orange-50 focus-visible:ring-white/50",
  outline:
    "border border-customBlue/25 bg-transparent text-customBlue hover:border-customBlue/50 hover:bg-customBlue hover:text-white focus-visible:ring-customBlue/30",
};

const sizes = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const Button = ({
  href,
  children,
  label,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  disabled = false,
  ...props
}) => {
  const content = children ?? label;
  const classes = twMerge(
    "inline-flex items-center justify-center rounded-full font-semibold transition duration-300 ease-out hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        aria-disabled={disabled || undefined}
        {...props}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={classes}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
