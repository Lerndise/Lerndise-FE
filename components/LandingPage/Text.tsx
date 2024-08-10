import React from "react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
interface Props {
  header: ReactNode;
  children: ReactNode | string;
  className?: string;
}

const Text = ({ header, children, className }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <h2
        className={cn(
          "font-headingFont font-semibold text-left text-3xl md:text-4xl lg:text-5xl text-black lg:w-[500px] xl:w-[600px]",
          className
        )}
      >
        {header}
      </h2>
      <p
        className={`w-auto xl:w-[600px] ${className} text-custom-text-body text-left font-bodyRegularFont text-base md:text-xl`}
      >
        {children}
      </p>
    </div>
  );
};

export default Text;
