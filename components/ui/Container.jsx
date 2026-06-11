import { twMerge } from "tailwind-merge";

const Container = ({
  as: Component = "div",
  className,
  children,
  ...props
}) => (
  <Component
    className={twMerge(
      "mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-10",
      className
    )}
    {...props}
  >
    {children}
  </Component>
);

export default Container;
