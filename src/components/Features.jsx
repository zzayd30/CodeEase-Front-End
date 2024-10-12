import React from "react";
import FeatureCard from "./FeatureCard";
import { FaLaptopCode } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { motion } from "framer-motion";
import { BsArrowRepeat } from "react-icons/bs";
import { FaDrawPolygon } from "react-icons/fa";
import { InView } from "react-intersection-observer";
const Features = () => {
  return (
    <div className="flex justify-center   my-40">
      <div className="flex container  flex-col justify-center items-center">
        <InView triggerOnce={true} threshold={0.01}>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 200 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col w-full wow   justify-center items-center gap-5"
            >
              <div className="text-4xl font-bold text-center">
                Advance Features
              </div>
              <p className="lg:w-1/2 text-center">
                Unravel the power of our Next-Gen IT services in the favor of
                your exclusive business mission.
              </p>
            </motion.div>
          )}
        </InView>
        <div className="flex mt-10 flex-col lg:flex-row justify-between gap-5">
          <InView triggerOnce={true} threshold={0.01}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 200 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-full lg:w-1/4"
              >
                <FeatureCard
                  Icon={BiEdit}
                  detail="We offer our Clients to make customization opportunity anytime, Whenever he wants."
                  heading="Fully Customizable"
                />
              </motion.div>
            )}
          </InView>
          <InView triggerOnce={true} threshold={0.01}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 200 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-full lg:w-1/4"
              >
                <FeatureCard
                  Icon={BsArrowRepeat}
                  detail="Enabling independently designed applications to work together."
                  heading="App Integration"
                />
              </motion.div>
            )}
          </InView>
          <InView triggerOnce={true} threshold={0.01}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 200 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full lg:w-1/4"
              >
                <FeatureCard
                  Icon={FaLaptopCode}
                  detail="We develop apps and Websites with high Resolution."
                  heading="High Resolution"
                />
              </motion.div>
            )}
          </InView>
          <InView triggerOnce={true} threshold={0.01}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 200 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="w-full lg:w-1/4"
              >
                <FeatureCard
                  Icon={FaDrawPolygon}
                  detail="We offer our clients to make consultancy 24/7."
                  heading="24/7 Consultancy"
                />
              </motion.div>
            )}
          </InView>
          {/* <FeatureCard
            Icon={BsArrowRepeat}
            detail="enabling independently designed applications to work together."
            heading="App Integration"
          />
          <FeatureCard
            detail="We develop apps and Websites with high Resolution."
            Icon={FaLaptopCode}
            heading="High Resolution"
          />
          <FeatureCard
            Icon={FaDrawPolygon}
            detail="We offer our clients to make consultancy 24/7."
            heading="24/7 Consultancy" 
            />
            */}
        </div>
      </div>
    </div>
  );
};

export default Features;
