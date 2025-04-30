/* eslint-disable no-unused-vars */
import React from "react";
import Logo from "../src/assets/icon1.svg";
import CustomBtn from "../components/CustomBtn";
import { IoArrowUpCircle } from "react-icons/io5";
import { hover, motion } from "motion/react";

function FooterSection() {
  const socials = [
    {
      name: "facebook",
      link: "#",
    },
    {
      name: "X/twitter",
      link: "#",
    },
    {
      name: "instagram",
      link: "#",
    },
  ];
  return (
    <section>
      <motion.div
        whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
        initial={{ opacity: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        className="flex lg:flex-row flex-col p-14 bg-sky-100 rounded-3xl gap-6"
      >
        <div className="bg-white rounded-2xl p-9 lg:w-[60%] flex-none h-fit">
          <h1 className="flex xl:text-4xl text-2xl flex-wrap items-center gap-3 leading-none">
            <span className="text-blue-500">
              Ignite your sense of adventure,
            </span>
            dive into transformative explorations!
          </h1>
          <div className="flex justify-between mt-12 xl:items-center gap-5 xl:flex-row flex-col">
            <p className="font-light first-letter:uppercase text-lg text-wrap">
              <span className="font-normal ">
                embark on a unforgatable adventures
              </span>
              <br />
              that inspire growth and expolre stunning landscapes
            </p>
            <CustomBtn text="Reserve a spot!" />
          </div>
        </div>
        <div className="flex grow xl:flex-row flex-col xl:gap-12 xl:pl-12 gap-3 ">
          <div className="bg-[url('https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover rounded-4xl xl:w-[40%] flex-1"></div>
          <div className="bg-[url('https://images.pexels.com/photos/925263/pexels-photo-925263.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-center rounded-4xl xl:w-[60%] flex-1"></div>
        </div>
      </motion.div>
      <footer className="mt-12 pb-12">
        <div className="pb-8 flex lg:flex-row flex-col justify-between items-center border-b mb-8">
          <a href="#home">
            <div className="flex gap-2 items-center">
              <img src={Logo} className="size-5" />
              <h1 className="text-3xl">Nourish</h1>
            </div>
          </a>
          <div className="flex gap-4 items-center">
            {socials.map((social, i) => (
              <motion.a
                whileHover="hover"
                className="relative"
                href={social.link}
              >
                <div key={i} className="flex items-center gap-1 relative z-10">
                  <p>{social.name}</p>
                  <IoArrowUpCircle className="size-6 rotate-45" />
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  variants={{ hover: { width: "100%" } }}
                  className="h-0.5 bg-black rounded-full mt-0.5 absolute"
                ></motion.div>
              </motion.a>
            ))}
          </div>
        </div>
        <div>
          <div className="flex gap-3">
            <p className="text-sm border-r pr-3">
              Designed by
              <a
                className="text-blue-500 font-medium pl-2"
                href="https://dribbble.com/shots/25312810-Landing-page-for-a-travel-agency"
                target="_blank"
              >
                Olha Sitchenko
              </a>
            </p>

            <p className="text-sm  ">
              Developed by
              <a
                className="text-blue-500 font-medium pl-2"
                href="https://github.com/AchinthaPrabash3"
                target="_blank"
              >
                Achintha Prabash
              </a>
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default FooterSection;
