/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import React from "react";
import FeaturesCard from "../components/FeaturesCard";

function FeaturesSection() {
  const featureData = [
    {
      title: "Stuning <br/> waterfalles",
      desc: "Hike the Dolomites to discover breathtaking, hidden waterfalls feedom and serenity",
    },
    {
      title: "Camping <br/> under the stars",
      desc: "Hike the Dolomites to discover breathtaking, hidden waterfalls feedom and serenity",
    },
    {
      title: "Scenic <br/> hikin trails",
      desc: "Hike the Dolomites to discover breathtaking, hidden waterfalls feedom and serenity",
    },
    {
      title: "cultural <br/> exploration",
      desc: "Hike the Dolomites to discover breathtaking, hidden waterfalls feedom and serenity",
    },
  ];

  const containerAnimations = {
    hidden: { opacity: 0 },
    visable: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };
  const childAnimations = {
    hidden: { opacity: 0, y: 20 },
    visable: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <section className="py-20" id="features">
      <motion.p
        initial={{ rotate: 0, scale: 1 }}
        whileHover={{
          rotate: 10,
          scale: 1.1,
          transition: { duration: 0.4, type: "spring" },
        }}
        viewport={{ once: true }}
        className="flex w-fit mx-auto px-3 py-2 bg-sky-400/20 rounded-full capitalize text-blue-400 mb-12 cursor-pointer"
      >
        features
      </motion.p>

      <motion.div
        whileInView={{ opacity: [0, 1], transition: { duration: 1.4 } }}
        viewport={{ once: true, amount: 0.1 }}
        className="flex-col flex [&_h1]:xl:text-7xl [&_h1]:lg:text-6xl [&_h1]:text-5xl  [&_h1]:font-medium items-center"
      >
        <div className="flex items-center gap-3 [&_h1]:text-blue-500">
          <h1>Elevate</h1>
          <img
            src="https://images.pexels.com/photos/4965885/pexels-photo-4965885.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="w-[150px] h-20 object-cover rounded-full"
          />
          <h1> your well-being.</h1>
        </div>
        <h1>Go to the mountains!</h1>
      </motion.div>
      <motion.p
        whileInView={{
          opacity: [0, 1],
          y: [20, 0],
          transition: { duration: 0.6, delay: 0.5 },
        }}
        viewport={{ once: true, amount: 0.1 }}
        className="xl:w-1/2 text-center mx-auto mt-4"
      >
        Enhance your adventure with waterfall hikes, thrilling exploration,
        gourment culinary experiences, and serene mountaintop views.
      </motion.p>
      <motion.div
        className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-24"
        variants={containerAnimations}
        initial="hidden"
        whileInView="visable"
        viewport={{ once: true, amount: 0.6 }}
      >
        {featureData.map((item, i) => (
          <motion.div variants={childAnimations}>
            <FeaturesCard {...item} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default FeaturesSection;
