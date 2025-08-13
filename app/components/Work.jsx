import { workData } from "@/assets/assets";
import React, { useState } from "react";
import WorkCard from "./WorkCard";

const Work = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <div id="mywork" className="w-full px-4 md:px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo ">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end and full-stack
        development.
      </p>

      {/* Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {workData.slice(0, visibleCount).map((work, index) => (
          <WorkCard work={work} key={index} />
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < workData.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 border border-gray-700 hover:bg-[#fcf4ff] hover:-translate-y-1 rounded-3xl duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Work;
