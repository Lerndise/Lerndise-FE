import Brand from "./Brand";
import Link from "next/link";
import { Button } from "../ui/button";
import ContactIcon from "@/public/ContactIcon.svg";
import Image from "next/image";
import MobileNav from "./MobileNav";
import BeautifulButton from "@/components/LandingPage/BeautifulButton";

const NavBar = () => {
  const navList = [
    { id: 1, name: "Products", to: "/" },
    { id: 2, name: "Edu Marketplace", to: "/" },
    { id: 3, name: "Blog", to: "/" },
    { id: 4, name: "About Us", to: "/" },
    { id: 5, name: "FAQs", to: "/" },
    { id: 4, name: "Login", to: "/" },
  ];

  return (
    <div className="flex items-center justify-between px-4 lg:px-[100px] py-4">
      <Brand />
      <section className="lg:hidden">
        <MobileNav />
      </section>
      <div className="hidden lg:flex gap-8">
        <ul className="hidden lg:flex gap-8 lg:items-center p-0">
          {navList.map((list) => (
            <li key={list.id} className="p-0">
              <Link href={list.to}>
                <Button
                  variant="link"
                  className={`text-base px-0 ${
                    list.name === "Login" ? "font-bold" : ""
                  }`}
                >
                  {list.name}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-5">
          <Link className="hidden lg:block" href="/">
            <Button
              variant="link"
              className="text-base flex gap-2 text-lerndise-purple items-center"
            >
              <Image src={ContactIcon} alt="Contact Icon" />
              Contact
            </Button>
          </Link>
          <Link className="hidden lg:block" target="blank" href="/">
            <BeautifulButton width="154px" height="40px" fontSize="1rem" borderRadius="9999px">Book a Demo</BeautifulButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
