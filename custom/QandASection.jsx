/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import React from "react";
import Logo from "../src/assets/icon1.svg";
import QandACard from "../components/QandACard";

function QandASection() {
  const faqs = [
    {
      id: 1,
      title: "What is Nourish?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      title: "Where is the next trip?",
      desc: "Italian Dolomites. These majestic mountains offer breathtaking views, charming villages, and opportunities for hiking and exploring. Combine your yoga practice with outdoor adventures in this stunning region.",
    },
    {
      id: 3,
      title: "When is the next trip?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      title: "What equipment I need to have?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section id="qAndA" className="mb-32 scroll-mt-10">
      <p className="px-3 py-2 rounded-full bg-sky-100 text-blue-500 w-fit mb-5">
        FAQ
      </p>
      <div className="flex md:flex-row flex-col justify-between md:items-center mb-10 md:gap-0  gap-4">
        <div className="flex gap-4 items-center">
          <h2 className="text-6xl first-letter:uppercase">
            frequently asked{" "}
            <span className="capitalize text-blue-400">questions</span>
          </h2>
          <img src={Logo} alt="" className="size-9 mt-2" />
        </div>
        <p className="text-sm first-letter:uppercase">
          get the answers you need below. <br /> if yuo can't find them,{" "}
          <span className=" underline capitalize font-bold">
            reach out to us
          </span>
        </p>
      </div>
      <motion.div
        whileInView="inview"
        initial={{ opacity: 0 }}
        variants={{
          inview: {
            opacity: 1,
            transition: { duration: 0.5, staggerChildren: 0.3 },
          },
        }}
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col gap-3"
      >
        {faqs.map((faq) => (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            variants={{
              inview: {
                opacity: 1,
                x: 0,
              },
            }}
          >
            <QandACard {...faq} key={faq.id} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default QandASection;
