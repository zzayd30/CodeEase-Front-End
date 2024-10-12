import React from "react";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import Pic1 from '../assets/overview-1.jpg'
import Pic2 from '../assets/overview-2.jpg'
import Pic3 from '../assets/overview-3.jpg'
const AdvanceFeature = () => {
  return (
    <div className="p-s bg-over-light">
      <div className="container py-28 flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row">
          <InView triggerOnce={true} threshold={0.01}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 200 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-full lg:w-1/2"
              >
                <img src={Pic1} />
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
                className="w-full lg:w-1/2"
              >
                <div className="container lg:mx-5 my-10 flex flex-col text-start justify-center">
                  <div className="flex my-5 gap-10 items-center">
                    <h1 className="text-4xl font-bold">01</h1>
                    <p className="font-semibold text-xl">
                      Custom Development Solution
                    </p>
                  </div>
                  <div>
                    <p>
                      we strive to elevate experiences, foster collaboration,
                      and prioritize the well-being of our users. Embrace the
                      future of education, business, healthcare, and retail,
                      where seamless integration meets unparalleled excellence.
                    </p>
                  </div>
                  <div>
                    <div className="flex my-5 items-center gap-5">
                      <FaCheckCircle className="text-blue-500" />
                      <p>Fully Customizable</p>
                    </div>
                    <div className="flex my-5 items-center gap-5">
                      <FaCheckCircle className="text-blue-500" />
                      <p>User Friendly Interface</p>
                    </div>
                    <div className="flex my-5 items-center gap-5">
                      <FaCheckCircle className="text-blue-500" />
                      <p>More Effective & Powerfull</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </InView>
        </div>

        <div className="flex flex-col-reverse lg:flex-row">
          <InView triggerOnce={true} threshold={0.01}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 200 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full lg:w-1/2"
              >
                <div className="container lg:mx-5 my-10 flex flex-col text-start justify-center">
                  <div className="flex my-5 gap-10 items-center">
                    <h1 className="text-4xl font-bold">02</h1>
                    <p className="font-semibold text-xl">Our Products</p>
                  </div>
                  <div>
                    <p>
                      We strive to elevate experiences, foster collaboration,
                      and prioritize the well-being of our users. Embrace the
                      future of education, business, healthcare, and retail,
                      where seamless integration meets unparalleled excellence.
                    </p>
                  </div>
                  <div>
                    <div className="flex my-5 items-center gap-5">
                      <FaCheckCircle className="text-blue-500" />
                      <p>Fully Customizable</p>
                    </div>
                    <div className="flex my-5 items-center gap-5">
                      <FaCheckCircle className="text-blue-500" />
                      <p>User Friendly Interface</p>
                    </div>
                    <div className="flex my-5 items-center gap-5">
                      <FaCheckCircle className="text-blue-500" />
                      <p>More Effective & Powerfull</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </InView>

          <InView triggerOnce={true} threshold={0.01}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 200 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-full lg:w-1/2"
              >
                <img src={Pic2} />
              </motion.div>
            )}
          </InView>
        </div>

        <div className="flex flex-col lg:flex-row">
          <InView triggerOnce={true} threshold={0.01}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 200 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-full lg:w-1/2"
              >
                <img src={Pic3} />
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
                className="w-full lg:w-1/2"
              >
                <div className="container lg:mx-5 my-10 flex flex-col text-start justify-center">
                  <div className="flex my-5 gap-10 items-center">
                    <h1 className="text-4xl font-bold">03</h1>
                    <p className="font-semibold text-xl">Courses We Offer</p>
                  </div>
                  <div>
                    <p>
                      We offer differnet courses which are based on programming
                      languange. like web-development, web-designing,
                      App-development, Phython, SQL, MERNSTACK
                    </p>
                  </div>
                  <div>
                    <div className="flex my-5 items-center gap-5">
                      <FaCheckCircle className="text-blue-500" />
                      <p>Life-time Mentorship</p>
                    </div>
                    <div className="flex my-5 items-center gap-5">
                      <FaCheckCircle className="text-blue-500" />
                      <p>Chance for Internship</p>
                    </div>
                    <div className="flex my-5 items-center gap-5">
                      <FaCheckCircle className="text-blue-500" />
                      <p>Under Exper's Mentorship</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </InView>
        </div>
      </div>
    </div>
  );
};

export default AdvanceFeature;
