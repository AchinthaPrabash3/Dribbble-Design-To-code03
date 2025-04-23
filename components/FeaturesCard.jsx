/* eslint-disable no-unused-vars */
import { hover, motion } from "motion/react";
import React from "react";

function FeaturesCard({ title, desc }) {
  return (
    <motion.div
      whileHover="hover"
      variants={{ hover: { scale: 1.05 } }}
      className="bg-gray-100 p-10 rounded-3xl py-12 cursor-pointer relative overflow-hidden"
    >
      <motion.div
        variants={{ hover: { width: "100%" } }}
        className="absolute h-full bg-blue-500 top-1/2 -translate-y-1/2 z-0 left-0 "
      ></motion.div>
      <motion.h2
        variants={{ hover: { color: "white" } }}
        className="text-3xl first-letter:capitalize relative z-10"
        dangerouslySetInnerHTML={{ __html: title }}
      ></motion.h2>
      <motion.p
        variants={{ hover: { color: "white" } }}
        dangerouslySetInnerHTML={{ __html: desc }}
        className="text-lg mt-4 relative z-10 font-light"
      ></motion.p>
    </motion.div>
  );
}

export default FeaturesCard;
