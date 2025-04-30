/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import React from "react";
import StatsComp from "./StatsComp";

function Animations() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="grid md:grid-cols-subgrid col-span-3 grid-cols-1 gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <StatsComp text={"10k+"} des={`happy <br/> customers`} />
      </motion.div>
      <motion.div variants={itemVariants}>
        <StatsComp text={"1k+"} des={`wonderful <br/> adventures`} />
      </motion.div>
      <motion.div variants={itemVariants}>
        <StatsComp text={"10+"} des={`waterfalls <br/> were visited`} />
      </motion.div>
    </motion.div>
  );
}

export default Animations;
