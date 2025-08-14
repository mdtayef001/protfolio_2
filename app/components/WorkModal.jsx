import Image from "next/image";
import React, { useEffect } from "react";
import { FaGithub, FaRegArrowAltCircleRight } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";

const WorkModal = ({ isOpen, onClose, work }) => {
  if (!isOpen) return null;

  const {
    title,
    image,
    techStack,
    description,
    github,
    subTitle,
    keyHighlights,
    challengesFaced,
    futurePlans,
  } = work;

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-gradient-to-br from-white to-gray-100 rounded-2xl shadow-2xl p-4 sm:p-6 w-11/12 md:w-2/3 lg:w-1/2 max-h-[90vh] overflow-y-auto">
        {/* Modal Header with Close Button */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
            <h3 className="text-lg text-gray-600">{subTitle}</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 transition-colors duration-200"
          >
            <IoCloseCircleOutline size={28} />
          </button>
        </div>

        {/* Image */}
        <div className="mb-5 rounded-xl overflow-hidden shadow-lg">
          <Image src={image} alt={title} className="w-full h-64 object-cover" />
        </div>

        {/* Tech Stack & GitHub */}
        <div className="flex flex-col md:flex-row justify-between items-start lg:items-end py-2 mb-4">
          <div>
            <p className="text-xs font-semibold underline mb-2 text-gray-500">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-3">
              {techStack.map((img, index) => (
                <div
                  key={index}
                  className="w-8 h-8 relative border border-gray-200 p-1 rounded-xl shadow-sm hover:scale-110 transition-transform duration-200"
                >
                  <Image src={img} alt="" className="object-contain" />
                </div>
              ))}
            </div>
          </div>

          <a
            href={github}
            target="_blank"
            className="mt-3 md:mt-0 flex items-center gap-2 text-white bg-gradient-to-r from-purple-500 to-indigo-500 px-3 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
          >
            <FaGithub /> Github Repo
          </a>
        </div>

        {/* Overview Card */}
        <div className="bg-white rounded-xl shadow-md p-5 space-y-4 border border-gray-100">
          {/* Overview */}
          <div>
            <h4 className="font-semibold text-lg text-gray-700 mb-2">
              Overview
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
              {description || "No additional details available."}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="font-semibold text-lg text-gray-700 mb-2">
              Key Highlights
            </h4>
            {keyHighlights
              ? keyHighlights.map((h, index) => (
                  <p
                    key={index}
                    className="text-gray-600 text-sm flex items-center gap-2 mb-1"
                  >
                    <FaRegArrowAltCircleRight /> {h}
                  </p>
                ))
              : "No additional Highlights available."}
          </div>

          {/* Challenges */}
          <div>
            <h4 className="font-semibold text-lg text-gray-700 mb-2">
              Challenges Faced
            </h4>
            {challengesFaced
              ? challengesFaced.map((challenge, index) => (
                  <p
                    key={index}
                    className="text-gray-600 text-sm flex items-center gap-2 mb-1"
                  >
                    <FaRegArrowAltCircleRight /> {challenge}
                  </p>
                ))
              : "No Challenges Found"}
          </div>

          {/* Future Plans */}
          <div>
            <h4 className="font-semibold text-lg text-gray-700 mb-2">
              Future Plans
            </h4>
            {futurePlans
              ? futurePlans.map((plan, index) => (
                  <p
                    key={index}
                    className="text-gray-600 text-sm flex items-center gap-2 mb-1"
                  >
                    <FaRegArrowAltCircleRight /> {plan}
                  </p>
                ))
              : "No Future Plans Found"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkModal;
