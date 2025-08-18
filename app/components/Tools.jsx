// import { toolsData } from "@/assets/assets";
// import Image from "next/image";
// import React from "react";

// const Tools = () => {
//   return (
//     <div id="skills" className="w-full px-5 sm:px-[12%] py-10 scroll-mt-20">
//       <h4 className="text-center mb-2 text-lg font-Ovo">My daily used</h4>
//       <h2 className="text-center text-5xl font-Ovo">Tech Stacks</h2>
//       <div className="space-y-4 mt-8">
//         {/* First row */}
//         <ul className="flex items-center justify-center gap-3 sm:gap-5">
//           {toolsData.slice(0, 7).map((tool, index) => (
//             <li
//               key={index}
//               className="flex items-center justify-center aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 w-12 sm:w-28 sm:p-1 boxHover"
//             >
//               <Image src={tool} alt="Tools" className="w-6 sm:w-16" />
//             </li>
//           ))}
//         </ul>

//         {/* Second row */}
//         <ul className="flex items-center gap-3 sm:gap-5 justify-center">
//           {toolsData.slice(7, 14).map((tool, index) => (
//             <li
//               key={index}
//               className="flex items-center justify-center aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 w-12 sm:w-28 sm:p-1  boxHover"
//             >
//               <Image src={tool} alt="Tools" className="w-6 sm:w-16" />
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Tools;

import { toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // delay between each child
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Tools = () => {
  return (
    <div id="skills" className="w-full px-5 sm:px-[12%] py-10 scroll-mt-20">
      {/* Heading */}
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        My daily used
      </motion.h4>

      <motion.h2
        className="text-center text-5xl font-Ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Tech Stacks
      </motion.h2>

      <div className="space-y-4 mt-8">
        {/* First row */}
        <motion.ul
          className="flex items-center justify-center gap-3 sm:gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {toolsData.slice(0, 7).map((tool, index) => (
            <motion.li
              key={index}
              className="flex items-center justify-center aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 w-12 sm:w-28 sm:p-1 boxHover"
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image src={tool} alt="Tools" className="w-6 sm:w-16" />
            </motion.li>
          ))}
        </motion.ul>

        {/* Second row */}
        <motion.ul
          className="flex items-center gap-3 sm:gap-5 justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {toolsData.slice(7, 14).map((tool, index) => (
            <motion.li
              key={index}
              className="flex items-center justify-center aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 w-12 sm:w-28 sm:p-1 boxHover"
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image src={tool} alt="Tools" className="w-6 sm:w-16" />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Tools;
