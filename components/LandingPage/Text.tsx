"use client";
import React, { ReactNode } from "react";
import { TypeAnimation } from "react-type-animation";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode | string;
  className?: string;
}

const Text: React.FC<Props> = ({ children, className }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <h2
        className={cn(
          "font-headingFont font-semibold text-left text-3xl md:text-4xl lg:text-5xl text-black lg:w-[600px]",
          className
        )}
      >
        <TypeAnimation
          sequence={[
            "Unlock ",
            "Unlock Limitless Learning",
            "Unlock Limitless Learning Possibilities",
          ]}
          wrapper="span"
          speed={10}
          style={{ display: "inline-block" }}
          repeat={Infinity}
          cursor={true}
          className="type-animation"
        />
      </h2>
      <p
        className={`w-[300px] md:w-[600px] ${className} text-custom-text-body text-left font-bodyRegularFont text-base md:text-xl`}
      >
        {children}
      </p>
    </div>
  );
};

export default Text;
