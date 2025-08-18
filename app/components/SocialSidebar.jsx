// import { socialLinks } from "@/assets/assets";

// const SocialSidebar = () => {
//   return (
//     <div className="hidden lg:flex fixed top-1/2 left-3 -translate-y-1/2 flex-col gap-4 z-50">
//       {socialLinks.map((social, index) => (
//         <a
//           key={index}
//           href={social.url}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="p-2 border border-gray-400 rounded-full text-gray-700 hover:text-black hover:border-black socialHover hover:-translate-y-1 duration-500 backdrop-blur-2xl"
//         >
//           {social.icon}
//         </a>
//       ))}
//     </div>
//   );
// };

// export default SocialSidebar;

import { socialLinks } from "@/assets/assets";
import { motion } from "framer-motion";

const SocialSidebar = () => {
  return (
    <div className="hidden lg:flex fixed top-1/2 left-3 -translate-y-1/2 flex-col gap-4 z-50">
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 border border-gray-400 rounded-full text-gray-700 hover:text-black hover:border-black socialHover duration-500 backdrop-blur-2xl"
          whileHover={{ scale: 1.2 }}
          animate={{
            y: [0, -6, 6, 0], // gentle up-down movement
          }}
          transition={{
            duration: 3 + index * 0.2, // slightly different duration per icon
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ display: "inline-block" }}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialSidebar;
