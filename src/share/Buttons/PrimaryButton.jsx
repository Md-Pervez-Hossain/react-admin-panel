import { twMerge } from "tailwind-merge";

const PrimaryButton = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={twMerge(
        "bg-primary text-white px-[12px] py-[8px] rounded-lg cursor-pointer hover:bg-secondary hover:text-white transition-all duration-500",
        className
      )}
    >
      {children}
    </div>
  );
};
export default PrimaryButton;
