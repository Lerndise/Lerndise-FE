import React from "react";
import Image from "next/image";
import HeroImg from "@/public/HeroImage.svg";
import Star1 from "@/public/Star1.svg";
import Star3 from "@/public/Star3.svg";
import Star4 from "@/public/Star4.svg";
import illustration from "@/public/smallIllustration.png";

const HeroImage = () => {
  return (
    <div className="relative w-full flex flex-col justify-center items-center">
      <Image
        className="absolute left-20 top-3"
        src={Star1}
        alt="Image of a star"
      />
      <Image
        className="absolute left-16 top-[40%]"
        src={Star4}
        alt="Image of a star"
      />
      <Image
        className="absolute right-16 top-3"
        src={Star3}
        alt="Image of a star"
      />
      <Image
        className="absolute right-10 top-[40%]"
        src={Star1}
        alt="Image of a star"
      />
      <Image src={HeroImg} alt="Image of a school child" />
      <div className="absolute -bottom-12">
        <div className="relative bg-white border-[3px] border-solid border-lerndise-purple p-6 rounded-[20px]">
          <p className="text-xs font-bold">
            Fun and effective for Primary and Secondary school Learners
          </p>
          <Image
            className="absolute -right-8 -top-8"
            src={illustration}
            alt="Small illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
