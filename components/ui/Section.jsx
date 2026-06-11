import { twMerge } from "tailwind-merge";
import Container from "./Container";

const Section = ({
  as: Component = "section",
  className,
  containerClassName,
  contained = true,
  children,
  ...props
}) => (
  <Component
    className={twMerge("py-20 lg:py-28", className)}
    {...props}
  >
    {contained ? (
      <Container className={containerClassName}>{children}</Container>
    ) : (
      children
    )}
  </Component>
);

export default Section;
