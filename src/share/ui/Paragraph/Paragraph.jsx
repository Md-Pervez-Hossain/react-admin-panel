import React from "react";
import { twMerge } from "tailwind-merge";

const Paragraph = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "lg:text-base text-[14px]    lg:leading-[28px] leading-[24px] text-gray-600   font-inter font-medium ",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Paragraph;
