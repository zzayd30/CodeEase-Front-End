import React from "react";
import { BiEdit } from "react-icons/bi";
import { BsArrowRepeat } from "react-icons/bs";
import { FaDrawPolygon } from "react-icons/fa";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

const Offers = () => {
  return (
    <div className="p-s flex flex-col lg:flex-row gap-10">
      <div className="flex container flex-col lg:flex-row justify-center gap-10">
        <InView triggerOnce={true} threshold={0.01}>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              className="w-full lg:w-1/3 "
              initial={{ opacity: 0, y: 200 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-light rounded-lg hover:bg-primary hover:-translate-y-4 hover:text-white transform duration-500 ease-in-out cursor-pointer p-10 flex flex-col justify-between items-center gap-5 h-full">
                <div className="flex flex-col items-center">
                  <BiEdit className="text-8xl" />
                  <p className="text-xl my-3 font-semibold text-center">
                    Custom Development Solution
                  </p>
                  <p className="text-center">
                    Our developers craft custom software solutions by leveraging
                    cutting- edge technologies, like blockchain and AI, to
                    streamline workflow and relaibility.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </InView>

        <InView triggerOnce={true} threshold={0.01}>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              className="w-full lg:w-1/3"
              initial={{ opacity: 0, y: 200 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-light rounded-lg hover:bg-primary hover:text-white transform duration-500 ease-in-out cursor-pointer p-10 flex flex-col justify-between items-center gap-5 h-full  hover:-translate-y-4 ">
                <div className="flex flex-col items-center">
                  <BsArrowRepeat className="text-8xl" />
                  <p className="text-xl my-3 font-semibold text-center">
                    Our Product
                  </p>
                  <p className="text-center">
                    We strive to elevate experiences, foster collaboration, and
                    prioritize the well-being of our users. Embrace the future
                    of education, business, healthcare, and retail, where
                    seamless integration meets unparalleled excellence.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </InView>

        <InView triggerOnce={true} threshold={0.01}>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              className="w-full lg:w-1/3"
              initial={{ opacity: 0, y: 200 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="bg-light rounded-lg hover:bg-primary hover:text-white transform duration-500 ease-in-out cursor-pointer p-10 flex flex-col justify-between items-center gap-5 h-full  hover:-translate-y-4 ">
                <div className="flex flex-col items-center">
                  <FaDrawPolygon className="text-8xl" />
                  <p className="text-xl my-3 font-semibold text-center">
                    Courses We Offer
                  </p>
                  <p className="text-center">
                    We offer differnet courses which are based on programming
                    languange. like web-development, web-designing,
                    App-development, Phython, SQL, MERNSTACK.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </InView>
      </div>
    </div>
  );
};

export default Offers;
