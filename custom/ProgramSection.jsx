/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Logo from "../src/assets/icon1.svg";
import CustomBtn from "../components/CustomBtn";

function ProgramSection() {
  const data = [
    {
      name: "Sorapis lake",
      des: `Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.`,
      images:
        "https://thephotohikes.com/wp-content/uploads/2024/01/Lago-di-Sorapis-11.jpg",
    },
    {
      name: "Sorapis lake",
      des: `Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.`,
      images:
        "https://thephotohikes.com/wp-content/uploads/2024/01/Lago-di-Sorapis-11.jpg",
    },
    {
      name: "Sorapis lake",
      des: `Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.`,
      images:
        "https://thephotohikes.com/wp-content/uploads/2024/01/Lago-di-Sorapis-11.jpg",
    },
    {
      name: "Sorapis lake",
      des: `Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.`,
      images:
        "https://thephotohikes.com/wp-content/uploads/2024/01/Lago-di-Sorapis-11.jpg",
    },
    {
      name: "Sorapis lake",
      des: `Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.`,
      images:
        "https://thephotohikes.com/wp-content/uploads/2024/01/Lago-di-Sorapis-11.jpg",
    },
    {
      name: "Sorapis lake",
      des: `Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.`,
      images:
        "https://thephotohikes.com/wp-content/uploads/2024/01/Lago-di-Sorapis-11.jpg",
    },
  ];
  const [pressed, setPressed] = useState(0);
  const containerRef = useRef(null);

  const scrollToIndex = (index) => {
    const container = containerRef.current;
    if (container) {
      const itemWidth = container.scrollWidth / data.length;
      container.scrollTo({
        left: itemWidth * index,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToIndex(pressed);
  }, [pressed]);

  return (
    <section className="px-4 py-20" id="programs">
      <div
        className="w-full flex overflow-hidden scroll-smooth"
        id="program-container"
        ref={containerRef}
      >
        {data.map(({ name, des, images }, i) => (
          <div className=" min-w-full flex items-center gap-12" key={i}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
              viewport={{ once: false, amount: 0.5 }}
              className="w-1/2 [&_h3]:text-7xl  px-5 py-12"
            >
              <motion.p
                whileHover={{ scale: 1.05, rotate: 10 }}
                className="capitalize mb-4 px-3 py-2 bg-sky-100 text-blue-400 w-fit rounded-full cursor-pointer"
              >
                program
              </motion.p>
              <motion.div className="flex items-center gap-3">
                <h3>Adventure to</h3>
                <img src={Logo} className="size-10 mt-3" />
              </motion.div>
              <h3 className="text-blue-500 mt-3 font-semibold">{name}</h3>
              <p className="mt-10 text-lg font-light">{des}</p>
              <div className="mt-12">
                <CustomBtn text="Go on a trip!" />
              </div>
            </motion.div>
            <div className="flex-1 h-full">
              <motion.img
                initial={{ x: 0 }}
                whileInView={{
                  y: [100, 0],
                  opacity: [0, 1],
                  transition: { duration: 0.5 },
                }}
                src={images}
                alt=""
                className=" rounded-3xl object-cover size-full"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3 items-center mt-4">
        <p>{pressed + 1} /</p>
        {data.map((item, i) => (
          <motion.button
            whileHover={{ scale: 1.05 }}
            className={`h-1 rounded-full ${
              pressed > i
                ? "bg-slate-100"
                : pressed === i
                ? "bg-blue-400"
                : "bg-sky-100"
            } flex-1 cursor-pointer`}
            onClick={() => setPressed(i)}
            key={i}
          ></motion.button>
        ))}
        <p>/ {data.length}</p>
      </div>
    </section>
  );
}

export default ProgramSection;
