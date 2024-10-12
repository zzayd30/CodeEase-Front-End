import React from "react";
import { motion } from "framer-motion";
const FeatureCard = ({ Icon, heading, detail }) => {
  return (
    <div className="flex shadow-xl h-full duration-500 ease-in-out hover:bg-primary group hover:text-white flex-col justify-center px-2  py-10 lg:py-20 items-center">
      <Icon className="text-6xl duration-500 ease-in-out group-hover:text-white text-blue-500" />
      <p className="text-xl my-3 font-semibold text-center">{heading}</p>
      <p className="text-center">{detail}</p>
    </div>
  );
};

export default FeatureCard;
