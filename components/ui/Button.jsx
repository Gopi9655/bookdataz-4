import Link from "next/link";
import { twMerge } from "tailwind-merge";

// Theme-aware variants — colours resolve from the CSS variable layer
// (see globals.css / lib/themePalettes) so every palette restyles buttons.
const variants = {
  primary:
    "border border-transparent bg-[var(--btn-primary-bg)] text-[color:var(--btn-primary-text)] shadow-[0_18px_40px_-24px_rgba(var(--shadow-rgb),0.7)] hover:brightness-110 focus-visible:ring-[color:var(--btn-primary-bg)]",
  accent:
    "border border-[color:var(--logo-orange-border)] bg-[linear-gradient(135deg,var(--logo-orange-soft)_0%,var(--logo-orange)_46%,var(--logo-orange-deep)_100%)] text-white shadow-[0_18px_42px_-18px_var(--logo-orange-glow)] hover:brightness-105 focus-visible:ring-[color:var(--logo-orange)]",
  light:
    "border border-[color:var(--card-border)] bg-[var(--card-bg)] text-[color:var(--heading)] shadow-[0_16px_34px_-22px_rgba(var(--shadow-rgb),0.3)] hover:border-[color:var(--accent-border)] focus-visible:ring-[color:var(--accent)]",
  outline:
    "border border-[color:var(--card-border)] bg-[var(--card-bg)] text-[color:var(--text-main)] shadow-[0_12px_28px_-24px_rgba(var(--shadow-rgb),0.3)] hover:border-[color:var(--logo-orange)] hover:text-[color:var(--logo-orange-deep)] focus-visible:ring-[color:var(--logo-orange)]",
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
