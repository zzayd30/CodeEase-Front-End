import React from "react";
import { Link } from "react-router-dom";
import Hero_pic from '../assets/hero.jpg'
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="hero-back    h-auto">
      <div className=" gap-10 container py-40 flex flex-col lg:flex-row ">
        <div className="flex lg:w-1/2 flex-col gap-10 justify-center">
          <motion.div
            initial={{ y: -70 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-5"
          >
            <h1 className=" text-4xl text-white font-bold text-center">
              Decode Complexities With Our Enterprise Services
            </h1>
            <p className="text-light text-justify ">
              We build, repair, and manage enterprise software development,
              security opterations, and data-base infrastructure to bring
              seamless efficiency to table
            </p>
          </motion.div>
          <div className="flex justify-center items-center bg-white px-4 py-2 relative w-full rounded-full">
            <input
              type="email"
              placeholder="Your Email"
              className=" text-gray-500 py-2 relative bg-white rounded-full focus:outline-none w-full"
            />
            <button className="m-2 px-4 py-2 text-white bg-primary rounded-full  end-0 absolute">
              Explore Your Solution
            </button>
          </div>
        </div>

        <div className=" w-full flex justify-center lg:w-1/2">
          <motion.div
            initial={{ scale: 0.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img className="rounded-lg" src={Hero_pic} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
