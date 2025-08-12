import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 md:gap-2">
      <div className="pt-14">
        <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2x1 mb-3 font-Ovo">
        Hi! I'm Purna Deb Paul
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6x1 lg:text-[66px] font-Ovo">
        - Frontend Focused -<br />
        MERN Stack Developer.
      </h1>

      <p className="max-w-2xl mx-auto font-Ovo">
        Frontend Engineer | React & MERN Stack Developer | Focused on Scalable
        Web Apps, Clean UI & Engaging UX | WordPress Enthusiast
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          Download My Resume{" "}
          <Image src={assets.download_icon} alt="" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
