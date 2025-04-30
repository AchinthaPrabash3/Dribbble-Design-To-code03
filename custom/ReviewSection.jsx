/* eslint-disable no-unused-vars */
import React from "react";
import Logo from "../src/assets/icon1.svg";
import Asset1 from "../src/assets/asset1.png";
import ReviewCard from "../components/ReviewCard";
import { motion } from "motion/react";

function ReviewSection() {
  const reviews = [
    {
      year: "2023",
      month: "September",
      title: "This adventure was a dream",
      desc: "Exciting excursions and stunning surroundings made every moment deeply transformative.",
      profImage: "",
      name: "Maya Patel",
      job: "Fitness trainer",
    },
    {
      year: "2024",
      month: "April",
      title: "The trip exceeded expectations",
      desc: "Thrilling activities, breathtaking locations, and a supportive community empowered me.",
      profImage: "",
      name: "Ethan Walker",
      job: "Engineer",
    },
    {
      year: "2024",
      month: "June",
      title: "Welcoming atmosphere inspired me",
      desc: "As a solo traveler, I was nervous, but the welcoming atmosphere inspired me. Exploration, adventure, and free time connected me.",
      profImage: "",
      name: "Riley Evans",
      job: "Designer",
    },
    {
      year: "2024",
      month: "August",
      title: "This retreat was a profound journey",
      desc: "Exploration, nature, and adventure fostered deep reflection and transformative connection.",
      profImage: "",
      name: "Olivia Carter",
      job: "Dancer",
    },
  ];

  return (
    <section className="py-12 pb-32 pt-32" id="reviews">
      <div>
        <motion.p
          whileHover={{ rotate: 5, scale: 1.05 }}
          className="mx-auto py-2 px-3 bg-sky-100 text-blue-400 w-fit rounded-full text-xl mb-12 capitalize cursor-pointer"
        >
          reviews
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 },
          }}
          viewport={{ once: true, amount: 0.7 }}
          className="[&_h2]:xl:text-7xl [&_h2]:lg:text-6xl [&_h2]:text-5xl  md:flex flex-col items-center hidden"
        >
          <div className="flex items-center justify-center gap-4 [&_h2]:text-blue-600">
            <h2 className=" first-letter:capitalize">what our</h2>
            <img
              className="object-top mt-5 h-14 w-[150px] rounded-full object-cover"
              src="https://media.istockphoto.com/id/1369171053/photo/group-of-sporty-people-walks-in-mountains-at-sunset-with-backpacks.jpg?s=612x612&w=0&k=20&c=ajQuWt2YRWd0FPaCpdKz2Tt3WX2NI1ddeZjf8HIxlwU="
              alt=""
            />
            <h2>customers feel</h2>
          </div>
          <div className="flex items-center gap-5">
            <h2>about us</h2>
            <img
              className="mt-5 h-14 w-[150px] rounded-full object-cover"
              src={Asset1}
              alt=""
            />
            <img className="mt-5 size-10 " src={Logo} alt="" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 },
          }}
          viewport={{ once: true, amount: 0.7 }}
        >
          <h2 className=" first-letter:capitalize text-center text-5xl font-bold md:hidden visible">
            <span className="text-blue-600">what our customers feel</span> about
            us
          </h2>
        </motion.div>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20, transition: { duration: 0.5 } }}
          viewport={{ once: true, amount: 0.6 }}
          className="xl:w-1/2 mx-auto text-center mt-5"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
          aliquam ipsum possimus omnis optio. Consequatur perspiciatis corporis
          vitae tenetur ullam.
        </motion.p>
      </div>
      <motion.div
        whileInView="inview"
        variants={{
          inview: {
            opacity: 1,
            transition: { duration: 0.5, staggerChildren: 0.3 },
          },
        }}
        initial={{ opacity: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        className=" grid xl:grid-cols-4 md:grid-cols-2 gap-2 mt-12"
      >
        {reviews.map((review, i) => (
          <motion.div
            variants={{ inview: { opacity: [0, 1], y: [20, 0] } }}
            className="cursor-pointer select-none flex grow"
          >
            <ReviewCard {...review} key={i} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default ReviewSection;
