/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi2";

function CustomBtn({ text }) {
  return (
    <motion.button
      whileHover="hover"
      variants={{
        hover: {
          scale: 1.05,
          transition: { type: "spring", bounce: 0.5 },
        },
      }}
      className="flex w-fit items-center pr-1 bg-black text-white py-1 pl-10 rounded-full"
    >
      <p className="pr-10 first-letter:uppercase font-light">{text}</p>
      <div className="size-11 relative rounded-full bg-white overflow-hidden">
        <motion.div
          variants={{ hover: { x: "200%" } }}
          className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
        >
          <HiOutlineArrowRight className="stroke-black size-6" />
        </motion.div>
        <motion.div
          variants={{ hover: { x: "140%" } }}
          className="absolute top-1/2 -translate-y-1/2  -translate-x-full"
        >
          <HiOutlineArrowRight className="stroke-black size-6" />
        </motion.div>
      </div>
    </motion.button>
  );
}

export default CustomBtn;
