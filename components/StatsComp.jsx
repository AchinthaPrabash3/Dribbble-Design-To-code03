/* eslint-disable no-unused-vars */
import React from "react";
import Logo from "../src/assets/icon1.svg";
import { motion } from "motion/react";

function StatsComp({ text, des }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white h-[200px] rounded-4xl hover:bg-blue-500 transition-all duration-300 group p-5  *:select-none *:cursor-pointer flex-1"
    >
      <img src={Logo} className="size-6 ml-auto group-hover:stroke-white  " />
      <h3 className=" group-hover:text-white text-6xl">{text}</h3>
      <p
        className="group-hover:text-white capitalize mt-2"
        dangerouslySetInnerHTML={{ __html: des }}
      ></p>
    </motion.div>
  );
}

export default StatsComp;
