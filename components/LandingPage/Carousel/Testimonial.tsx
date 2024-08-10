import React from "react";
import CarouselX from "./CarouselX";
import { EmblaOptionsType } from "embla-carousel";
import Testimonial1 from "@/public/Testimonial1.svg";
import Testimonial2 from "@/public/Testimonial2.svg";
import Testimonial3 from "@/public/Testimonial3.svg";

const Testimonial: React.FC = () => {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDES = [
    {
      id: 1,
      img: Testimonial1,
      author: "Alfred Chinwe",
      about: `"As a biologist conducting research in the field, I have found
 this platform to be an invaluable resource. 
The AI-integrated tool has saved me countless hours
 by efficiently summarizing relevant papers and identifying
"`,
    },
    {
      id: 2,
      img: Testimonial2,
      author: "John Mark",
      about: `"As a biologist conducting research in the field, I have found
 this platform to be an invaluable resource. 
The AI-integrated tool has saved me countless hours
 by efficiently summarizing relevant papers and identifying"`,
    },
    {
      id: 3,
      img: Testimonial3,
      author: "Chinedu Daniel",
      about: `"As a biologist conducting research in the field, I have found
 this platform to be an invaluable resource. 
The AI-integrated tool has saved me countless hours
 by efficiently summarizing relevant papers and identifying"`,
    },
    {
      id: 4,
      img: Testimonial2,
      author: "Paschal Noah",
      about: `"As a biologist conducting research in the field, I have found
 this platform to be an invaluable resource. 
The AI-integrated tool has saved me countless hours
 by efficiently summarizing relevant papers and identifying"`,
    },
  ];
  return <CarouselX slides={SLIDES} options={OPTIONS} />;
};

export default Testimonial;
