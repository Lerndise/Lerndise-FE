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
      author: "Chinwe A., Middle School Teacher",
      about: `"Lerndise has been a game-changer. The AI-driven tools simplify lesson planning and provide valuable insights into students' progress. I can focus more on teaching and less on admin tasks. The collaborative feature also allows me to connect with my colleagues and share best practices easily. It's an essential part of my teaching toolkit."`,
    },
    {
      id: 2,
      img: Testimonial2,
      author: "John M., High school Student",
      about: `"Lerndise has transformed my learning experience. The interactive tools make studying enjoyable and effective. I love how the platform adapts to my needs and helps me track my progress in real time. It's like having a personal tutor who understands exactly what u need it succeed!"`,
    },
    {
      id: 3,
      img: Testimonial1,
      author: "Tosin A., School Administrator",
      about: `"Managing our School's operations has never been easier with Lerndise. The platform’s comprehensive analytics and finance management tools help us keep track of budgets, optimize resources, and make informed decisions. Communication features also enhance our interaction with parents and staff. Lerndise is a crucial asset for our school's success."`,
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
