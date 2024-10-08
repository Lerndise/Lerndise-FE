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
      title: "Personalised and Adaptive learning",
      text: "By analyzing students data in real time, our platform adapts to provide tailored learning and assessment, ensuring that every student can learn at their own pace and excel.",
    },
    {
      id: 2,
      img: Img2,
      title: "Course content generation",
      text: "AI tools for efficient course content creation, reducing the teacher's workload, thereby making it accessible, time-saving, and cost-effective.",
    },
    {
      id: 3,
      img: Img3,
      title: "Data Management and Machine learning",
      text: "Enhance your data quality with automated extraction, seamless cataloging and intelligent insight with actionable information.",
    },
    {
      id: 4,
      img: Img4,
      title: "Customer Support",
      text: "We ensure our customers get the most out of our platform, providing assistance to help overcome challenges, every step of the way.",
    },
  ];

  return (
    <div>
      <section className="border-b border-solid border-nav-border">
        <NavBar />
      </section>
      <div className="px-4 md:px-10 lg:px-[100px] bg-grey-100 py-[50px] lg:py-[100px]">
        <section className="flex flex-col-reverse gap-20 lg:flex-row lg:gap-10 justify-between">
          <div className="flex flex-col gap-8">
            <Text
              header={
                <>
                  Unlock{" "}
                  <span className="text-lerndise-purple">
                    Limitless Learning{" "}
                  </span>
                  Possibilities
                </>
              }
            >
              Experience an AI-powered learning management platform designed to
              foster success and participation. Tailored to meet the needs of
              primary and secondary school students, teachers, parents, and
              school administrators, our solution elevates learning with
              personalized experiences, boosting motivation.
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
      <div className="bg-lerndise-purple px-4 md:px-10 lg:px-0 py-[80px] flex flex-col gap-8">
        <section className="flex justify-center">
          <div className="w-auto lg:w-[724px] flex flex-col gap-3 text-white">
            <h3 className="text-white font-headingFont font-semibold text-center text-3xl md:text-4xl lg:text-5xl">
              {" "}
              Why use Lerndise?
            </h3>
            <p className="text-center text-custom-text-body font-bodyRegularFont text-base md:text-xl">
              Gain access to personalised learning experiences, inclusive and
              interactive tools, and an AI driven environment that adapts to
              individual needs and enhance collaboaration across your entire
              educational community.
            </p>
          </div>
        </section>
        <section className="grid md:grid-cols-2 xl:grid-cols-4 content-center items-center gap-4 justify-items-center">
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
      <section className="px-4 md:px-10 py-[50px] lg:py-[80px] bg-grey-100 my-8">
        <div className="flex flex-col items-center gap-6">
          <h3 className="xl:w-[700px] 2xl:w-[1000px] font-semibold text-center text-2xl md:text-4xl text-balance">
            {" "}
            Easily manage all Your school activities here; Teachers, Students,
            parents, Overall School administration
          </h3>
          <BeautifulButton width="300px">Let's get started</BeautifulButton>
        </div>
        <Features />
      </section>
      <section className="px-4 md:px-10 my-8">
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
