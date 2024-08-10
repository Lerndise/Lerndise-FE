"use client";
import React, { useEffect } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Admin from "@/public/admin.png";
import Students from "@/public/Student.png";
import Teachers from "@/public/Teachers.png";
import Parents from "@/public/Parents.png";
import Finance from "@/public/Finance.png";
import Communication from "@/public/Communication.png";
import MarketPlace from "@/public/MarketPlace.png";
import Image, { StaticImageData } from "next/image";

interface SectionProps {
  imageFirst: boolean;
  image: StaticImageData;
  title: string;
  description: string;
}

interface SectionData {
  image: StaticImageData;
  title: string;
  description: string;
}

const Section: React.FC<SectionProps> = ({
  imageFirst,
  image,
  title,
  description,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="flex flex-col md:flex-row md:items-center md:gap-4 my-20 md:w-[900px]"
    >
      {imageFirst ? (
        <>
          <motion.div className="w-full md:w-1/2 h-auto mb-8 md:mb-0">
            <Image
              src={image}
              alt={title}
              className="rounded-md"
              layout="responsive"
            />
          </motion.div>
          <motion.div className="w-full md:w-1/2 md:pl-8">
            <h2 className="text-2xl font-bold  mb-2 text-lerndise-purple">
              {title}
            </h2>
            <p className="text-[15px]">{description}</p>
          </motion.div>
        </>
      ) : (
        <>
          <motion.div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-2 text-lerndise-purple">
              {title}
            </h2>
            <p className="text-[15px]">{description}</p>
          </motion.div>
          <motion.div className="w-full md:w-1/2 h-auto">
            <Image
              src={image}
              alt={title}
              className="rounded-md"
              layout="responsive"
            />
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

const Features: React.FC = () => {
  const sections: SectionData[] = [
    {
      image: Admin,
      title: "School Management Solution",
      description:
        "Track your administrative tasks, ranging from student management, Attendance tracking, course management, Financial management, Library management, Time table generation, Staff management, Exam management Report and Analytics",
    },
    {
      image: Students,
      title: "Student Learning Portal",
      description:
        "Student being able to track their course registrations, class attendance, all gradings and communicate with their teachers.",
    },
    {
      image: Teachers,
      title: "Teachers Copilot",
      description:
        "We designed it to assist teachers in their teaching journey, providing personalized lesson planning, student engagement strategies, assess student progress and real-time feedback.",
    },

    {
      image: Parents,
      title: "Parents and Guardian Connect",
      description:
        "Easily Track your kids performance, communicate with the teachers and be part of kids learning growth",
    },
    {
      image: Finance,
      title: "Finance management",
      description:
        "Maintain positive cash flow, manage budgets, identify financial errors, project your school’s financial needs, allocate funds for growth, and prepare for unexpected events.",
    },
    {
      image: Communication,
      title: "Communication Management",
      description:
        "We encourage open dialogue between teachers, students, and parents. Manage regular newsletters, parent-teacher conferences, and school events",
    },
    {
      image: MarketPlace,
      title: "Lerndise EduMarketplace",
      description:
        "Track your administrative tasks, ranging from student management, Attendance tracking, course management, Financial management, Library management, Time table generation, Staff management, Exam management Report and Analytics",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      {sections.map((section, index) => (
        <Section
          key={index}
          imageFirst={index % 2 === 0}
          image={section.image}
          title={section.title}
          description={section.description}
        />
      ))}
    </div>
  );
};

export default Features;
