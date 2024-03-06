"use client";
import Link from "next/link";
import Mobilemenu from "./Mobilemenu";
import clsx from "clsx";
import ThemeToggle from "./ThemeToggle";
import { Links } from "../constants/links";
import { IoMdPulse } from "react-icons/io";
import useMenuActive from "@/hooks/useMenuActive";
import Linkitem from "./Linkitem";
import { useState, useEffect } from "react";
import { RiArrowUpLine } from "react-icons/ri";
const Navbar = () => {
  const [scrollToTop, setScrollToTop] = useState(false);

  const handleScrollToTop = () => {
    const scrollToTop = () => {
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
      }
    };
    scrollToTop();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollToTop(true);
      } else {
        setScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className="w-full py-5 dark:bg-dark fixed z-[9999] bg-gray-100 shadow-xl">
      {scrollToTop && (
        <div
          className="fixed bottom-4 right-4 text-5xl z-10 bg-sky-400 rounded-full cursor-pointer transition-opacity duration-300 hover:opacity-80"
          onClick={handleScrollToTop}
        >
          <RiArrowUpLine className="p-2 text-white" />
        </div>
      )}
      <div className="wrapper flex  items-center justify-between">
        <Link href={"/"} className="flex-1">
          <div className="flex gap-1 items-center">
            <h1 className="font-bold text-gray-900 text-2xl dark:text-white">
              Ren-Tech
            </h1>
            <IoMdPulse className="text-3xl text-sky-400" aria-hidden="true" />
          </div>
        </Link>

        <div className="flex gap-8  max-lg:gap-5 items-center flex-1 max-md:hidden text-gray-600 font-bold dark:text-white justify-center">
          {Links.map((link, index) => {
            const isActive = useMenuActive(link.route);
            return (
              <Linkitem
                key={index}
                route={link.route}
                label={link.label}
                isActive={isActive}
              />
            );
          })}
        </div>
        <div className="flex-1 justify-end flex gap-3 items-center">
          <ThemeToggle />
          <Mobilemenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
