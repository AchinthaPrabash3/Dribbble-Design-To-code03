/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import React, { useState } from "react";

function QandACard({ id, title, des }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`${
        isOpen ? "text-white" : "text-black"
      } bg-gray-100 rounded-3xl overflow-hidden select-none relative cursor-pointer`}
    >
      <motion.div
        animate={{ width: isOpen ? "100%" : 0 }}
        className=" left-0 absolute top-1/2 -translate-y-1/2 h-full bg-blue-500"
      ></motion.div>
      <div className="relative">
        <div
          className=" p-5 h-24 md:text-4xl text-3xl flex gap-3"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex gap-4">
            <p
              className={`${
                isOpen ? "text-sky-300" : "text-blue-500"
              } font-bold`}
            >
              /0{id}
            </p>
            <h3>{title}</h3>
          </div>
        </div>
        <motion.div
          animate={{
            height: isOpen ? "" : 0,
            display: isOpen ? "" : "none",
          }}
          className=""
        >
          <motion.p
            animate={{ opacity: isOpen ? 1 : 0 }}
            className="p-4 md:text-xl "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            expedita quis ipsa commodi repellendus ratione! Deleniti quidem
            facilis esse necessitatibus quaerat laudantium voluptate velit. Eos
            ea incidunt saepe repudiandae ut?
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

export default QandACard;
