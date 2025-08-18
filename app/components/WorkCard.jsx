import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import WorkModal from "./WorkModal";
import { motion } from "framer-motion";

const WorkCard = ({ work }) => {
  const { title, image, techStack, subTitle, liveLink } = work;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className="border-[1px] border-gray-500 rounded-xl p-4 boxHover duration-500"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Main project image */}
        <Image
          src={image}
          alt={title}
          className="w-full h-auto rounded-lg border-b-3 border-gray-400"
        />

        {/* Title */}
        <h3 className="mt-2 font-semibold">{title}</h3>
        <h4 className="text-sm">{subTitle}</h4>

        {/* Tech stack */}
        <div className="mt-2">
          <p className="text-xs underline">Tech Stack</p>
          <div className="flex gap-2 mt-2">
            {techStack.map((img, index) => (
              <motion.div
                key={index}
                className="w-7 h-7 relative border p-1 rounded-2xl"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <Image src={img} alt="" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-3">
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <motion.div
              className="flex items-center gap-1 text-xs border border-gray-500 rounded-2xl px-4 py-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <p>live preview</p>
              <Image src={assets.arrow_icon} alt="" className="w-2 h-2" />
            </motion.div>
          </a>
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-sm hover:underline cursor-pointer"
          >
            details
          </button>
        </div>
      </motion.div>

      {/* Modal */}
      <WorkModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        work={work}
      />
    </>
  );
};

export default WorkCard;
