import Brand from "@/components/LandingPage/Brand";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import React, { ReactNode } from "react";
import { Montserrat } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Link from "next/link";
import { CircleHelp } from "lucide-react";

const montserrat = Montserrat({ subsets: ["latin"] });

interface AdminAuthProps {
  children: ReactNode;
}

const layout = ({ children }: AdminAuthProps) => {
  const categories = [
    { id: 1, name: "About Lerndise", link: "/" },
    { id: 2, name: "LMS", link: "/" },
    { id: 3, name: "Privacy", link: "/" },
    { id: 4, name: "Terms", link: "/" },
  ];

  return (
    <div className={`grid grid-rows-[80px_1fr_80px] ${montserrat.className}`}>
      <section className="py-6 px-6 border border-solid shadow-header flex justify-between">
        <Toaster />
        <div className="flex gap-3 items-center">
          <div className="border-r-2 border-solid border-lerndise-purple-100 inline-flex pr-3 pb-2">
            <Brand />
          </div>
          <p className="text-lerndise-orange font-semibold text-xs">
            Shaping minds, empowering futures
          </p>
        </div>
        <Navigation />
        <section className="flex gap-4">
          <div className="relative h-10">
            <div className="absolute inset-0 bg-gradient-to-r from-[#C67250] via-[#D65C13] to-[#440F7C] rounded-lg blur-sm"></div>
            <Link href={"/admin/auth/login"}>
              <Button className="relative h-full bg-white text-black font-bold py-2 px-8 rounded-lg hover:bg-[#D65C13] hover:text-white">
                Login
              </Button>
            </Link>
          </div>
          <Link href="/admin/auth/signup">
            <Button className=" text-white bg-black font-bold py-2 px-8 rounded-lg hover:bg-[#440F7C]">
              Register
            </Button>
          </Link>
        </section>
      </section>
      <section className="bg-grey-200">{children}</section>
      <section className="py-6 px-6 flex items-center justify-between text-sm">
        <div className="flex gap-3 items-center">
          <div className="">
            <Brand />
          </div>
          <p className="text-lerndise-orange font-semibold pt-[7px] text-xs">
            Shaping minds, empowering futures
          </p>
        </div>
        <div className="hidden lg:flex gap-5">
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
        <div className="flex gap-5">
          <div className="flex gap-3 items-center">
            <CircleHelp fill="#000" className="w-5 h-5 text-white" />
            <p>Help</p>
          </div>
          <p className="font-semibold">support@lerndise.com</p>
        </div>
      </section>
    </div>
  );
};

export default layout;
