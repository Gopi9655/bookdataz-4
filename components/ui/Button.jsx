import Link from "next/link";
import { twMerge } from "tailwind-merge";

const variants = {
  primary: "bg-customBlue text-white hover:bg-blue-800 focus-visible:ring-customBlue/40",
  accent: "bg-orange-600 text-white hover:bg-orange-700 focus-visible:ring-orange-500/40",
  light: "bg-white text-customBlue hover:bg-blue-50 focus-visible:ring-white/50",
  outline:
    "border border-customBlue bg-transparent text-customBlue hover:bg-customBlue hover:text-white focus-visible:ring-customBlue/30",
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
    "inline-flex items-center justify-center rounded-full font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-4 disabled:cursor-not-allowed disabled:opacity-60",
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
