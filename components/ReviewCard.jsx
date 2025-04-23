/* eslint-disable no-unused-vars */
import { hover, motion } from "motion/react";
import React from "react";
import { BiSolidQuoteAltRight } from "react-icons/bi";

function ReviewCard({ year, month, title, desc, profImage, name, job }) {
  return (
    <motion.div
      whileHover="hover"
      className="min-h-[350px] bg-slate-100  p-5 rounded-3xl relative overflow-hidden"
    >
      <motion.div
        variants={{ hover: { width: "100%" } }}
        className="absolute bg-blue-500 h-full top-1/2 -translate-y-1/2 left-0"
      ></motion.div>
      <motion.div
        variants={{ hover: { color: "white" } }}
        className="flex flex-col h-full relative z-10 justify-between grow flex-1"
      >
        <motion.div
          variants={{ hover: { borderColor: "white" } }}
          className="flex items-center border-gray-400 gap-2 border w-fit px-2 py-1 rounded-full cursor-pointer"
        >
          <p>{year}</p>
          <motion.div
            variants={{ hover: { backgroundColor: "white" } }}
            className="size-3 bg-blue-500 rounded-full"
          ></motion.div>
          <p>{month} trip</p>
        </motion.div>
        <motion.p
          variants={{ hover: { color: "white" } }}
          className=" break-all font-light text-gray-400 text-lg mt-5"
        >
          <motion.span
            variants={{ hover: { color: "white" } }}
            className="text-gray-700 font-medium"
          >
            {title} -{" "}
          </motion.span>{" "}
          {desc}
        </motion.p>

        <div className="grow flex-1 flex flex-col justify-end">
          <div className="w-full flex justify-end">
            <BiSolidQuoteAltRight className="size-12" />
          </div>
          <div className="flex items-center  gap-3">
            <img
              src="https://images.pexels.com/photos/157920/woman-face-curly-hair-157920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="size-14 rounded-full"
            />
            <div className="-space-y-1">
              <p className="font-semibold capitalize">{name}</p>
              <motion.p
                variants={{ hover: { color: "white" } }}
                className="text-sm text-gray-400 font-light"
              >
                {job}
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ReviewCard;
