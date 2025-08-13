"use client";
import { assets, socialLinks } from "@/assets/assets";
import Image from "next/image";
import { useEffect, useState } from "react";
import SocialSidebar from "./SocialSidebar";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  });
  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-70%]">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <SocialSidebar></SocialSidebar>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm" : ""
        } duration-300`}
      >
        <a href="#top">
          <Image
            src={assets.logo}
            alt="logo"
            className="w-36 md:w-56 cursor-pointer"
          />
        </a>
        <ul
          className={`hidden lg:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? "" : "bg-white/70 shadow-sm"
          } duration-300`}
        >
          <li>
            <a href="#top" className="font-Ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-Ovo">
              About Me
            </a>
          </li>
          <li>
            <a href="#services" className="font-Ovo">
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="font-Ovo">
              My Work
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
          >
            Contact{" "}
            <Image alt="arrow" src={assets.arrow_icon} className="w-3" />
          </a>
          <button className="block lg:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        {/* mobile menu */}
        <ul
          className={`flex lg:hidden flex-col gap-4 py-20 px-6 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500 ${
            isMenuOpen ? "translate-x-0" : "translate-x-64"
          }`}
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <a className="font-Ovo" href="#top" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about" onClick={closeMenu}>
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#services" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#work" onClick={closeMenu}>
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact" onClick={closeMenu}>
              Contact me
            </a>
          </li>
          <div className="flex gap-2 px-3 py-2 border border-gray-600 rounded-full justify-center">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-400 rounded-full text-gray-700 hover:text-black hover:border-black socialHover hover:-translate-y-1 duration-500 backdrop-blur-2xl"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
