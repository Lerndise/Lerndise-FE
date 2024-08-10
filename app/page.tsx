/* eslint-disable react/no-unescaped-entities */
import React from "react";
import NavBar from "@/components/LandingPage/NavBar";
import Text from "@/components/LandingPage/Text";
import { Button } from "@/components/ui/button";
import HeroImage from "@/components/LandingPage/HeroImage";
import BenefitCard from "@/components/LandingPage/BenefitCard";
import Img1 from "@/public/img1.svg";
import Img2 from "@/public/img2.svg";
import Img3 from "@/public/img3.svg";
import Img4 from "@/public/img4.svg";
import Features from "@/components/LandingPage/Features";
import BeautifulButton from "@/components/LandingPage/BeautifulButton";
import SubjectTabsCarousel from "@/components/LandingPage/SubjectTabsCarousel";
import Search from "@/components/LandingPage/Search";
import Testimonial from "@/components/LandingPage/Carousel/Testimonial";
import BlogPreview from "@/components/LandingPage/BlogPreview";
import Footer from "@/components/LandingPage/Footer";

const LandingPage = () => {
  const benefits = [
    {
      id: 1,
      img: Img1,
      title: "Interactive and adaptive Learning",
      text: "We Tailor material to each student’s needs, real-time assessment, tailored guidance and personalized experience.",
    },
    {
      id: 2,
      img: Img2,
      title: "Course Content Generation",
      text: "Our Learning Platform generates course materials, reducing the Teachers’ workload, thereby making it accessible, efficient and cost effective.",
    },
    {
      id: 3,
      img: Img3,
      title: "Data Management, AI and machine learning",
      text: "Data extraction, automate cataloguing, and improve data quality is our priority.",
    },
    {
      id: 4,
      img: Img4,
      title: "Customer Support",
      text: "We ensure our customers are successful in solving the challenges they might face.",
    },
  ];

  return (
    <div>
      <section className="border-b border-solid border-nav-border">
        <NavBar />
      </section>
      <div className="px-4 lg:px-[100px] bg-grey-100 lg:py-[100px]">
        <section className="flex gap-10 justify-between">
          <div className="flex flex-col gap-8">
            <Text>
              Our AI powered Learning Management platform creates an immersive
              educational experience tailored to individual needs, increase the
              motivation and participation of students in primary and secondary
              school.
            </Text>
            <div className="font-bodyMediumFont flex gap-3 items-center mt-4">
              <BeautifulButton width="230px">Get Started</BeautifulButton>
              <Button
                variant="outline"
                className="bg-white w-[230px] h-[60px] border-[2px] border-solid border-lerndise-purple"
              >
                Book a Demo
              </Button>
            </div>
          </div>
          <HeroImage />
        </section>
      </div>
      <div className="bg-lerndise-purple py-[80px] flex flex-col gap-8">
        <section className="flex justify-center">
          <div className="w-[300px] lg:w-[724px] flex flex-col gap-3 text-white">
            <h3 className="text-white font-headingFont font-semibold text-center text-3xl md:text-4xl lg:text-5xl">
              {" "}
              Why use Lerndise?
            </h3>
            <p className="text-center text-custom-text-body font-bodyRegularFont text-base md:text-xl">
              Unlock the world of possibilities with our world class
              comprehensive package. Gain access to expert-led courses,
              interactive learning tools and our AI driven learning environment.
            </p>
          </div>
        </section>
        <section className="flex gap-4 justify-center">
          {benefits.map((benefit) => (
            <BenefitCard
              key={benefit.id}
              img={benefit.img}
              title={benefit.title}
              text={benefit.text}
            />
          ))}
        </section>
      </div>
      <section className="py-[80px] bg-grey-100 my-8">
        <div className="flex flex-col items-center gap-6">
          <h3 className="font-headingFont font-semibold text-center text-3xl md:text-4xl text-balance">
            {" "}
            Easily manage all Your school activities here; Teachers, Students,
            parents, Overall School administration
          </h3>
          <BeautifulButton>Let's get started</BeautifulButton>
        </div>
        <Features />
      </section>
      <section className="pt-[80px]">
        <Search />
        <SubjectTabsCarousel />
      </section>
      <section className="pb-[80px] flex flex-col gap-4">
        <h3 className="text-center text-4xl font-bold text-lerndise-purple">
          Testimonials
        </h3>
        <Testimonial />
      </section>
      <section className="px-4 lg:px-[100px] flex flex-col gap-4">
        <h3 className="text-center text-4xl font-bold text-lerndise-purple">
          Latest News and Resources
        </h3>
        <BlogPreview />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default LandingPage;
