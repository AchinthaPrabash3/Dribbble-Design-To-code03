/* eslint-disable no-unused-vars */
import React from "react";
import Logo from "../src/assets/icon1.svg";
import CustomBtn from "../components/CustomBtn";
import { GoLocation } from "react-icons/go";
import { IoMailOutline } from "react-icons/io5";
import InputBox from "../components/InputBox";
import { motion } from "motion/react";

function ContactSection() {
  return (
    <motion.section
      whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
      initial={{ opacity: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      className="pb-24"
      id="contact"
    >
      <div className="p-9 bg-sky-100 rounded-3xl flex lg:flex-row flex-col gap-10">
        <div className=" p-8 rounded-2xl bg-white">
          <p className="px-3 py-2 rounded-full bg-sky-100 text-blue-500 mb-5 w-fit">
            contacts
          </p>
          <div className="flex items-center gap-4 mb-5">
            <h1 className="xl:text-7xl md:text-5xl text-4xl first-letter:uppercase flex-none">
              get in touch
            </h1>
            <img src={Logo} className="size-10" />
          </div>
          <p className="mb-10 font-light text-xl">
            We're here to help you embark on your next adventure!{" "}
            <br className="xl:block hidden" />
            if you have questions about our trips or are ready to book,{" "}
            <br className="lg:block hidden" />
            please fill out our contact from or drop us an email
          </p>
          <div className="flex xl:flex-row flex-col justify-between items-start gap-5 xl:gap-0">
            <div className="flex text-gray-400 gap-5">
              <div className="size-10 rounded-full bg-sky-100 grid place-content-center">
                <GoLocation className="stroke-1 stroke-blue-500 fill-blue-500" />
              </div>
              <p className="text-lg">
                Am Eichenhain 12,
                <br />
                80805 Munchen <br />
                Germany
              </p>
            </div>
            <div className="flex text-gray-400 items-center gap-5">
              <div className="size-10 rounded-full bg-sky-100 grid place-content-center">
                <IoMailOutline className="stroke-1 stroke-blue-500 fill-blue-500" />
              </div>
              <p className="text-lg">contact@nourish.ai</p>
            </div>
          </div>
        </div>
        <div className="grow h-fulls">
          <form action="" className="flex flex-col h-full">
            <div className="flex lg:flex-row flex-col gap-5">
              <InputBox label={"first name"} id={"Fname"} />
              <InputBox label={"last name"} id={"lname"} />
            </div>
            <div className="mt-5">
              <InputBox label={"email"} id={"email"} />
            </div>
            <div className="flex flex-col grow mt-2">
              <label htmlFor="me" className="capitalize mb-1">
                Message
              </label>
              <textarea
                name=""
                id="message"
                placeholder="Message"
                className="grow bg-white rounded-2xl p-2 placeholder:capitalize placeholder:text-gray-300"
              />
            </div>
            <div className="mt-5 ">
              <CustomBtn text={"Send Message"} />
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
}

export default ContactSection;
