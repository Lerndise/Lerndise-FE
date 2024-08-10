"use client";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignRight } from "lucide-react";
import Brand from "./Brand";
import Link from "next/link";
import Image from "next/image";
import ContactIcon from "@/public/ContactIcon.svg";
import { Button } from "../ui/button";
import BeautifulButton from "@/components/LandingPage/BeautifulButton";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navList = [
    { id: 1, name: "Products", to: "/" },
    { id: 2, name: "Edu Marketplace", to: "/" },
    { id: 3, name: "Blog", to: "/" },
    { id: 4, name: "About Us", to: "/" },
    { id: 5, name: "FAQs", to: "/" },
    { id: 4, name: "Login", to: "/" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <AlignRight className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <Brand />
        <nav className="mt-8">
          <ul className="space-y-3">
            {navList.map((item) => (
              <li key={item.id}>
                <Link href={item.to} onClick={handleLinkClick}>
                  <Button variant="link" className="w-full justify-start">
                    {item.name}
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col gap-5 mt-5">
          <Link className="" href="/">
            <Button
              variant="link"
              className="text-base flex gap-2 text-lerndise-purple items-center"
              onClick={handleLinkClick}
            >
              <Image src={ContactIcon} alt="Contact Icon" />
              Contact
            </Button>
          </Link>
          <Link className="" target="blank" href="/">
            <BeautifulButton onClick={handleLinkClick} width="154px" height="40px" fontSize="1rem" borderRadius="9999px">Book a Demo</BeautifulButton>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
