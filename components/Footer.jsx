"use client";
import useMenuActive from "../hooks/useMenuActive";
import LinkItem from "./Linkitem";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Links } from "../constants/links";
import { IoMdPulse } from "react-icons/io";
const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded dark:bg-dark dark:text-white border-t dark:border-none">
      <div className="flex gap-1 items-center">
        <h1 className="font-bold text-gray-900 text-2xl dark:text-white">
          Ren-Tech
        </h1>
        <IoMdPulse className="text-3xl text-sky-400" aria-hidden="true" />
      </div>
      <nav className="grid grid-flow-col gap-4">
        {Links.map((link, index) => {
          const isActive = useMenuActive(link.route);
          return (
            <LinkItem
              key={index}
              route={link.route}
              label={link.label}
              isActive={isActive}
              footer
            />
          );
        })}
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4 text-2xl">
          <a className="cursor-pointer hover:text-blue-400">
            <FaInstagram />
          </a>
          <a className="cursor-pointer hover:text-blue-400">
            <FaFacebook />
          </a>
          <a className="cursor-pointer hover:text-blue-400">
            <FaWhatsapp />
          </a>
          <a className="cursor-pointer hover:text-blue-400">
            <BsTwitterX />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          Ren-Tech Industries Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
