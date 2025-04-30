/* eslint-disable no-unused-vars */
import React from "react";
import NavBar from "../components/NavBar";
import Logo from "../src/assets/icon1.svg";

import { hover, motion } from "motion/react";
import Animations from "../components/Animations";
import CustomBtn from "../components/CustomBtn";
import { CiWarning } from "react-icons/ci";

function HeroSection() {
  return (
    <div>
      <div className="flex items-center gap-3 justify-center flex-row-reverse">
        <p className="text-center py-2 uppercase">
          this is a portfolio project
        </p>
        <CiWarning className="size-6" />
      </div>
      <section className="bg-sky-200 rounded-3xl py-6 px-8" id="home">
        <NavBar />
        <div className="flex xl:flex-row flex-col-reverse mt-10 gap-8">
          <div className="grid w-full xl:w-[45%]  grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              className="col-span-3  p-5 bg-white pb-12 rounded-3xl"
            >
              <div className="flex items-center md:gap-5 gap-3 justify-center md:justify-start">
                <h1 className="2xl:text-7xl xl:text-6xl xs:text-6xl text-5xl lg:text-8xl md:text-7xl  capitalize">
                  adventure
                </h1>
                <img
                  src={Logo}
                  className=" md:size-14 size-6 self-end md:mb-3 mb-2"
                />
              </div>
              <h1 className="2xl:text-7xl xl:text-6xl xs:text-6xl text-5xl lg:text-8xl md:text-7xl text-center md:text-left">
                of your lifetime
              </h1>
              <p className="mt-9 mb-10 font-light md:text-xl text-center md:text-left">
                explore scenic trails to magnificent waterfalls, surrounded by
                lush landscapes that invigorate your senses and forge
                unforgettable memories in nature
              </p>
              <div className="flex items-center gap-4 md:flex-row flex-col">
                <CustomBtn text="reserve a spot!" />
                <motion.button
                  whileHover="hover"
                  variants={{ hover: { scale: 1.05 } }}
                  className="border-2 border-black h-12 px-5 rounded-full relative overflow-hidden "
                >
                  <motion.div
                    variants={{ hover: { width: "100%" } }}
                    className="absolute h-12 z-0  top-1/2 -translate-y-1/2 left-0 bg-black"
                  ></motion.div>
                  <motion.p
                    variants={{ hover: { color: "white" } }}
                    className="relative z-10"
                  >
                    Get a consoltation
                  </motion.p>
                </motion.button>
              </div>
            </motion.div>
            <Animations />
          </div>
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 1, type: "spring", bounce: 0.2 },
            }}
            className="bg-[url('https://cff2.earth.com/uploads/2023/06/02100547/Mountain-2.jpg')] xl:flex-1 xl:h-auto h-[400px] bg-cover rounded-3xl xl:mask-r-from-50% mask-b-from-50%  xl:mask-b-from-100% flex xl:items-end xl:justify-start items-start justify-center pt-4 gap-4 pl-4 pb-4"
          >
            <p className="bg-white px-3 py-1 rounded-full">next trip</p>
            <p className="bg-slate-200/50 backdrop-blur-xl px-3 py-1 rounded-full hidden md:visible">
              Jul 12-22, 2025
            </p>
            <img src={Logo} alt="" className="size-8" />
            <p className="bg-slate-200/50 backdrop-blur-xl px-3 py-1 rounded-full">
              Italian Dolomites
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
