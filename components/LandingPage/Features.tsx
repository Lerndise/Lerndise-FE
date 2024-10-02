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
      className="flex flex-col md:flex-row md:items-center md:gap-4 my-6 md:w-[700px] lg:w-[900px]"
    >
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
    </motion.div>
  );
};

const Features: React.FC = () => {
  const sections: SectionData[] = [
    {
      image: Admin,
      title: "School Management Solution",
      description:
        "Get comprehensive insights into institution wide administrative activities ranging from student management, attendance tracking, lesson management, financial management, library management, staff management, report and analytics, allowing for data-driven decision-making, forward-thinking, and strategic planning.",
    },
    {
      image: Students,
      title: "Student Learning Portal",
      description:
        "Inclusive by design, and accessible to all, our platform enables students to track their lessons, attendance, and grades while simultaneously developing social-emotional skills alongside academic knowledge. We provide holistic development, promoting personal growth for a well rounded educational experience.",
    },
    {
      image: Teachers,
      title: "Teachers Copilot",
      description:
        "Designed to support teachers by offering lesson planning, student engagement strategies, progress assessments, and feedback. Our platform empowers teachers to focus on impactful teaching while continuously advancing professional growth.",
    },

    {
      image: Parents,
      title: "Parents and Guardian Connect",
      description:
        "Stay engaged with your child’s educational journey. This offers real-time updates on students' performance, facilitates communications with teachers, and keeps you actively involved in your Child's learning growth.",
    },
    {
      image: Finance,
      title: "Finance management",
      description:
        "Maintain positive cash flow, manage budgets effectively, identify financial discrepancies, and project future financial needs. Lerndise supports strategic fund allocation for growth.",
    },
    {
      image: Communication,
      title: "Communication Management",
      description:
        "Encourage seamless communication within your school community ensuring everyone stays informed and engaged. We support dialogue, between teachers, students, and parents and facilitate the management of newsletters, parent-teachers conferences, and school events.",
    },
    {
      image: MarketPlace,
      title: "Lerndise Edu Marketplace",
      description:
        "Discover a vibrant ecosystem of educational resources that connects educators and students. Whether you're looking for innovative lesson plan, supplementary learning resources, or specialised educational tools, engage with a community of professionals that align with your educational goals.",
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
