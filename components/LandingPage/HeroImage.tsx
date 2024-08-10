import React from "react";
import Image from "next/image";
import HeroImg from "@/public/HeroImage.svg";
import Star1 from "@/public/Star1.svg";
import Star3 from "@/public/Star3.svg";
import Star4 from "@/public/Star4.svg";
import illustration from "@/public/smallIllustration.png";

const HeroImage = () => {
  return (
    <div className="relative px-6 lg:px-0 w-full flex flex-col justify-center items-center">
      <Image
        className="w-10 h-10 absolute left-10 md:left-[30%] lg:left-2 xl:left-20 top-3"
        src={Star1}
        alt="Image of a star"
      />
      <Image
        className="absolute left-7 md:left-[25%] lg:left-0 xl:left-10 top-[40%]"
        src={Star4}
        alt="Image of a star"
      />
      <Image
        className="w-10 h-10 absolute right-10 md:right-[30%] lg:right-2 xl:right-10 top-3"
        src={Star3}
        alt="Image of a star"
      />
      <Image
        className="w-10 h-10 absolute right-5 md:right-[25%] lg:right-0 xl:right-10 top-[40%]"
        src={Star1}
        alt="Image of a star"
      />
      <Image
        className="w-[200px] lg:w-auto"
        src={HeroImg}
        alt="Image of a school child"
      />
      <div className="absolute -bottom-12">
        <div className="relative bg-white border-[3px] border-solid border-lerndise-purple p-4 xl:p-6 rounded-[20px]">
          <p className="text-xs font-bold text-center">
            Fun and effective for Primary and Secondary school Learners
          </p>
          <Image
            className="w-10 lg:w-auto absolute -top-5 -right-4"
            src={illustration}
            alt="Small illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
