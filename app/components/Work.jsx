import { workData } from "@/assets/assets";
import React from "react";
import WorkCard from "./WorkCard";

const Work = () => {
  return (
    <div id="work" className="w-full px-4 md:px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo ">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end and full-stack
        development.
      </p>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {workData.map((work, index) => (
            <WorkCard work={work} key={index}></WorkCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
