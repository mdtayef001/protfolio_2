import { workData } from "@/assets/assets";
import React, { useState } from "react";
import WorkCard from "./WorkCard";
import { motion } from "framer-motion";

const Work = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <div id="mywork" className="w-full px-4 md:px-[12%] py-10 scroll-mt-20">
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        My portfolio
      </motion.h4>

      <motion.h2
        className="text-center text-5xl font-Ovo"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        My latest work
      </motion.h2>

      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end and full-stack
        development.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {workData.slice(0, visibleCount).map((work, index) => (
          <WorkCard work={work} key={index} />
        ))}
      </div>

      {visibleCount < workData.length && (
        <div className="flex justify-center mt-8">
          <motion.button
            onClick={handleLoadMore}
            className="px-6 py-2 border border-gray-700 hover:bg-[#fcf4ff] rounded-3xl duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Load More
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default Work;
