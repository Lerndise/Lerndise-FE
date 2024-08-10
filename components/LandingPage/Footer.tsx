/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Button } from "../ui/button";
import Twitter from "@/public/X.png";
import LinkedIn from "@/public/LinkedIn.svg";
import Facebook from "@/public/Facebook.svg";
import Instagram from "@/public/Instagram.svg";
import Copyright from "@/public/CopyRight.svg";
import Line from "@/public/Line.png";
import Image from "next/image";
import Brand from "./Brand";
import Link from "next/link";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

const Footer = () => {
  const about = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About us", link: "/" },
    { id: 3, name: "Blog", link: "/" },
    { id: 4, name: "Products", link: "/" },
    { id: 5, name: "Contact", link: "/" },
  ];
  const categories = [
    { id: 1, name: "Science", link: "/" },
    { id: 2, name: "Arts", link: "/" },
    { id: 3, name: "Humanities", link: "/" },
    { id: 4, name: "Physcial Education", link: "/" },
  ];
  const Support = [
    { id: 1, name: "FAQs", link: "/" },
    { id: 2, name: "Contact", link: "/" },
  ];

  // Get current year for copyright
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-footer-bg flex flex-col gap-10 px-[100px] py-[40px] mt-[40px]">
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <Brand />
          <div className="flex items-center gap-6">
            <h3 className="text-sm font-semibold">Follow us on Social media</h3>
            <section className="flex gap-4">
              <Button variant={"ghost"} className="p-0">
                <Image src={Facebook} alt="Facebook Icon" />
              </Button>
              <Button variant={"ghost"} className="p-0 h-auto">
                <Image src={LinkedIn} alt="LinkedIn Icon" />
              </Button>
              <Button variant={"ghost"} className="p-0">
                <Image src={Instagram} alt="Instagram Icon" />
              </Button>
              <Button variant={"ghost"} className="p-0">
                <Image src={Twitter} alt="Twitter Icon" />
              </Button>
            </section>
          </div>
        </div>
        <Image src={Line} alt="Line" />
      </div>
      <section className="text-black grid grid-cols-1 lg:grid-cols-[220px_220px_220px_1fr] lg:justify-between">
        <div>
          <h3 className="lg:text-lg font-semibold">ABOUT</h3>
          {about.map((item) => (
            <ul key={item.id} className="p-0">
              <Link href={item.link}>
                <Button variant="link" className="text-black text-sm p-0">
                  {item.name}
                </Button>
              </Link>
            </ul>
          ))}
        </div>
        <div>
          <h3 className="lg:text-lg font-semibold">CATEGORIES</h3>
          {categories.map((item) => (
            <ul key={item.id} className="p-0">
              <Link href={item.link}>
                <Button variant="link" className="text-black text-sm p-0">
                  {item.name}
                </Button>
              </Link>
            </ul>
          ))}
        </div>
        <div>
          <h3 className="lg:text-lg font-semibold">SUPPORT</h3>
          {Support.map((item) => (
            <ul key={item.id} className="p-0">
              <Link href={item.link}>
                <Button variant="link" className="text-black text-sm p-0">
                  {item.name}
                </Button>
              </Link>
            </ul>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="lg:text-lg font-semibold">GET IN TOUCH</h3>
          <div className="flex flex-col gap-3">
            <h3 className="text-sm">We don't send spam so don't worry.</h3>
            <div className="relative">
              <Input
                type={"text"}
                className={cn(
                  "focus:ring-lerndise-purple border-[1.5px] border-lerndise-purple focus:ring-2 h-[60px] w-full rounded-full bg-input-bg text-custom-black pr-10"
                )}
                placeholder="Enter your email"
              />
              <Button
                type="button"
                className="absolute bg-lerndise-purple rounded-full p-0 text-white w-[90px] inset-y-2 right-4  flex items-center"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center">
        <section className="">
          <Image src={Line} alt="Line" />
          <div className="mt-2 flex items-center gap-2 text-black">
            <Image src={Copyright} alt="" />
            <p className="text-xs sm:text-sm">
              {currentYear} Lerndise, All Rights Reserved.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
