import { toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Tools = () => {
  return (
    <div id="tools" className="w-full px-5 sm:px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My daily used</h4>
      <h2 className="text-center text-5xl font-Ovo">Tech Stacks</h2>
      <div className="space-y-4 mt-8">
        {/* First row */}
        <ul className="flex items-center justify-center gap-3 sm:gap-5">
          {toolsData.slice(0, 7).map((tool, index) => (
            <li
              key={index}
              className="flex items-center justify-center aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 w-12 sm:w-28 sm:p-1 boxHover"
            >
              <Image src={tool} alt="Tools" className="w-6 sm:w-16" />
            </li>
          ))}
        </ul>

        {/* Second row */}
        <ul className="flex items-center gap-3 sm:gap-5 justify-center">
          {toolsData.slice(7, 14).map((tool, index) => (
            <li
              key={index}
              className="flex items-center justify-center aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 w-12 sm:w-28 sm:p-1 boxHover"
            >
              <Image src={tool} alt="Tools" className="w-6 sm:w-16" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tools;
