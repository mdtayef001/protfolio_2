import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEBFORM_API_KEY);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      id="contact"
      className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length: 90%_auto]'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Headings */}
      <motion.h4
        className="text-center mb-2 text-1g font-Ovo"
        variants={itemVariants}
      >
        Connect with me
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-Ovo"
        variants={itemVariants}
      >
        Get in touch
      </motion.h2>
      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
        variants={itemVariants}
      >
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </motion.p>

      {/* Form */}
      <motion.form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto border border-gray-500 rounded-xl p-4 backdrop-blur-2xl bg-white/150"
        variants={containerVariants}
      >
        <motion.div
          className="grid sm:grid-cols-2 gap-6 mb-8"
          variants={containerVariants}
        >
          <motion.input
            type="text"
            placeholder="Enter your name"
            required
            name="name"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            variants={itemVariants}
          />
          <motion.input
            type="email"
            placeholder="Enter your email"
            required
            name="email"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            variants={itemVariants}
          />
        </motion.div>
        <motion.textarea
          rows="3"
          placeholder="Enter your message"
          required
          name="message"
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
          variants={itemVariants}
        ></motion.textarea>

        <motion.button
          type="submit"
          className="py-2 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Submit now{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.button>
        {result && (
          <motion.div
            className="mt-4 flex justify-center"
            variants={itemVariants}
          >
            <p className="px-6 py-1 border border-green-500 bg-green-500/50 text-black text-xs rounded-full ">
              {result}
            </p>
          </motion.div>
        )}
      </motion.form>

      {/* Contact Info */}
      <motion.div className="mt-20 px-4" variants={containerVariants}>
        <motion.div className="text-center" variants={itemVariants}>
          <Image
            src={assets.logo}
            alt="Logo"
            className="w-40 sm:w-52 md:w-64 mx-auto mb-4"
          />

          <motion.div
            className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-center gap-3 sm:gap-6"
            variants={containerVariants}
          >
            {/* Email */}
            <motion.div
              className="flex items-center gap-2 text-sm sm:text-base justify-center"
              variants={itemVariants}
            >
              <MdAlternateEmail className="text-lg sm:text-xl" />
              <a
                href="mailto:purnadebpaul64@gmail.com"
                className="hover:text-blue-500 transition-colors"
              >
                <p className="truncate max-w-[220px] sm:max-w-none text-center">
                  purnadebpaul64@gmail.com
                </p>
              </a>
            </motion.div>

            <div className="hidden sm:block h-4 w-px bg-gray-600"></div>

            {/* WhatsApp */}
            <motion.div
              className="flex items-center gap-2 text-sm sm:text-base justify-center"
              variants={itemVariants}
            >
              <FaWhatsapp className="text-lg sm:text-xl text-green-500" />
              <p className="text-center">+8801916041901</p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.hr className="my-6 border-gray-700" variants={itemVariants} />

        <motion.div variants={itemVariants}>
          <p className="text-xs sm:text-sm text-center text-gray-400">
            © 2025 Purna Deb Paul. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
