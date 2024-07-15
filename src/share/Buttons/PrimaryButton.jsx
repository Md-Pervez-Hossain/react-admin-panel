import { twMerge } from "tailwind-merge";

const PrimaryButton = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "bg-primary text-white px-[12px] py-[8px] rounded-lg cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
};
export default PrimaryButton;
