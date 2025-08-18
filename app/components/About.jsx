import { assets, infoList } from "@/assets/assets";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <motion.div
      id="about"
      className="w-full px-5 sm:px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        About me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 max-w-none"
        >
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-4xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p className="mb-10 font-Ovo">
            I’m a MERN stack Frontend Developer passionate about building fast,
            responsive, and user-friendly web applications. Skilled in React.js,
            Next.js, TailwindCSS, Firebase, and CMS platforms, I create clean
            interfaces that enhance engagement and deliver smooth user
            experiences. I enjoy working with CMS solutions as one of my strong
            areas, and my goal is to grow as a React/MERN Developer, master
            full-stack development, and contribute to impactful open-source
            projects.
          </p>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 "
          >
            {infoList.map((item, index) => (
              <motion.li
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                key={index}
                className="border-[1px] border-gray-400 rounded-xl p-6 hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 cursor-pointer boxHover"
              >
                <Image src={item.icon} alt={item.title} className="w-7" />
                <h3 className="font-bold font-Ovo my-3 text-xl text-gray-700">
                  {item.title}
                </h3>
                <h4 className="text-gray-700 font-medium text-md mb-2">
                  {item.description}
                </h4>
                <p className="text-sm text-gray-600 ">At {item.institute}</p>
                <p className="text-sm text-gray-600">{item.duration}</p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
