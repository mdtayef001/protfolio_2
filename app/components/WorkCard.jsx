import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const WorkCard = ({ work }) => {
  const { title, image, techStack, subTitle, liveLink } = work;
  return (
    <div className="border-[1px] border-gray-500 rounded-xl p-4 boxHover duration-500">
      {/* Main project image */}
      <Image src={image} alt={title} className="w-full h-auto rounded-lg" />

      {/* Title */}
      <h3 className="mt-2 font-semibold">{title}</h3>
      <h4 className="text-sm ">{subTitle}</h4>

      {/* Tech stack icons - horizontal */}
      <div className="mt-2">
        <p className="text-xs underline">Tech Stack</p>
        <div className="flex gap-2 mt-2">
          {techStack.map((img, index) => (
            <div
              key={index}
              className="w-7 h-7 relative border p-1 rounded-2xl"
            >
              <Image src={img} alt="" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-3">
        <a href={liveLink} target="_blnk">
          <div className="flex items-center gap-1 text-xs border border-gray-500 rounded-2xl px-4 py-1">
            <p>live preview</p>
            <Image src={assets.arrow_icon} alt="" className="w-2 h-2" />
          </div>
        </a>
        <a href={liveLink} target="_blnk">
          <p className="text-sm hover:underline">details</p>
        </a>
      </div>
    </div>
  );
};

export default WorkCard;
