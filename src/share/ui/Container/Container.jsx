import { twMerge } from "tailwind-merge";

const Container = ({ children, className }) => {
  return (
    <div className={twMerge(" mx-auto lg:p-8 p-3", className)}>{children}</div>
  );
};
export default Container;
