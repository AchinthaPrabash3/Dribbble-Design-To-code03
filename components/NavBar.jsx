/* eslint-disable no-unused-vars */
import React from "react";
import Logo from "../src/assets/icon1.svg";
import { hover, motion } from "motion/react";
function NavBar() {
  const routes = [
    {
      name: "features",
      link: "#features",
    },
    {
      name: "program",
      link: "#programs",
    },
    {
      name: "reviews",
      link: "#reviews",
    },
    {
      name: "FAQ",
      link: "#qAndA",
    },
    {
      name: "Contacts",
      link: "#contact",
    },
  ];

  return (
    <nav className="flex justify-between items-center">
      <motion.a
        whileHover="hover"
        href="#"
        className="flex items-center gap-2 bg-white w-fit px-3 py-2 rounded-full outline-8 outline-white/50 self-center"
      >
        <motion.img
          variants={{ hover: { rotate: 180, transition: { duration: 0.5 } } }}
          src={Logo}
          alt="logo"
          className="size-5"
        />
        <motion.h1
          whileHover={{
            scale: 0.95,
            transition: { duration: 0.5, ease: "easeIn" },
          }}
          className=" font-lexend capitalize text-xl text-shadow-lg"
        >
          nourish
        </motion.h1>
      </motion.a>
      <motion.ul
        animate={{
          y: ["-100%", 0],
          transition: { duration: 0.3 },
        }}
        className="lg:flex hidden items-center bg-white/40 py-2 px-4 rounded-full gap-4 overflow-hidden"
      >
        {routes.map(({ name, link }, i) => (
          <motion.li
            whileHover={{
              scale: 1.1,
              rotate: 2,
              transition: { type: "spring" },
            }}
            key={i}
            className="capitalize px-5 py-2 bg-white rounded-full shadow-md"
          >
            <a href={link}>{name}</a>
          </motion.li>
        ))}
      </motion.ul>
      <motion.button
        initial={{ rotate: 0 }}
        whileHover={{
          rotate: [0, 2, 0, -2, 0],
          transition: { repeat: Infinity },
        }}
        className="flex items-center gap-2 border border-black bg-white w-fit px-6 py-2 rounded-full outline-8 outline-white/50 self-center cursor-pointer"
      >
        Go on a trip!
      </motion.button>
    </nav>
  );
}

export default NavBar;
