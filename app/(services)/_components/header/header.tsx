"use client";

import Link from "next/link";
import React, {useState} from "react";
import {Menu, X} from "lucide-react";

import Wrapper from "@/components/wrapper/wrapper";
import {cn} from "@/lib/utils";
import {AboutIcon, HomeIcon, PhoneIcon, ServicesIcon} from "@/components/Icons/icons";
import {Button} from "@/components/ui/button";
import {useUser} from "@/context/user";

function Header() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const {User} = useUser();

  function toggleMobileMenu() {
    setShowMobileNav((prevState) => !prevState);
  }

  return (
    <header className="py-6 shadow-[0px_1px_4px_1px_#F9F9F9]">
      <Wrapper className="flex items-center justify-between">
        <Link className="text-lg font-medium hover:text-blue" href={"/"}>
          Spacefinda
        </Link>

        <nav className="text-[#707070] hidden md:flex gap-8">
          <Link href={"/"}>Home</Link>
          <Link href={"/services"}>Services</Link>
          <Link href={"/about-us"}>About Us</Link>
          <Link href={"/contact-us"}>Contact us</Link>
        </nav>

        {!User ? (
          <div className="font-medium hidden md:flex gap-5 text-center">
            <Link
              className="font-medium rounded-[11px] w-28 py-2 px-3 border border-blue bg-blue text-white hover:bg-transparent hover:text-blue"
              href={"/auth/business/login"}
            >
              Business
            </Link>
            <Link
              className="rounded-[11px] w-28 py-2 px-3 border border-[#505050] hover:bg-[#505050] hover:text-white"
              href={"/auth/client/signin"}
            >
              Client
            </Link>
          </div>
        ) : (
          <Link
            className="hidden lg:flex gap-4"
            href={User.role === "business" ? "/dashboard/overview" : "/account/bookings"}
          >
            <Button className="bg-blue text-white min-w-32">
              {User.role === "business" ? "Dashboard" : "Account"}
            </Button>
          </Link>
        )}

        <button className="md:hidden" onClick={toggleMobileMenu}>
          <Menu />
        </button>
      </Wrapper>

      <div
        className={cn(
          "lg:hidden h-screen transition-all w-full fixed top-0 bg-white p-4 sm:p-8 z-50",
          showMobileNav ? "left-0" : "-left-full",
        )}
      >
        <button
          className="absolute right-8 top-8 hover:scale-110 transition-all active:scale-90"
          onClick={toggleMobileMenu}
        >
          <X />
        </button>

        <ul className="space-y-8 pt-10">
          <li>
            <Link className="mobile-nav-link" href={"/"}>
              <HomeIcon />
              Home
            </Link>
          </li>
          <li>
            <Link className="mobile-nav-link" href={"/services"}>
              <ServicesIcon />
              Services
            </Link>
          </li>
          <li>
            <Link className="mobile-nav-link" href={"/about-us"}>
              <AboutIcon />
              About us
            </Link>
          </li>
          <li>
            <Link className="mobile-nav-link" href={"/contact-us"}>
              <PhoneIcon />
              Contact Us
            </Link>
          </li>
          <>
            {!User ? (
              <>
                <li>
                  <Link href={"/auth/client/signin"}>
                    <Button className="bg-blue text-white w-full">Client</Button>
                  </Link>
                </li>
                <li>
                  <Link href={"/auth/business"}>
                    <Button className="border-grey-100 py-2 font-medium w-full" variant={"outline"}>
                      Business
                    </Button>
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link
                  className="flex"
                  href={User.role === "business" ? "/dashboard/overview" : "/account/bookings"}
                >
                  <Button className="bg-blue text-white w-full">
                    {User.role === "business" ? "Dashboard" : "Account"}
                  </Button>
                </Link>
              </li>
            )}
          </>
        </ul>
      </div>
    </header>
  );
}

export default Header;
