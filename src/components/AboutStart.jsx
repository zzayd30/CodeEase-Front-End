import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import About_pic from '../assets/about.jpg'
const AboutStart = () => {
  return (
    <div className="p-s bg-over-light">
      <div className="container py-28 flex flex-col gap-10">
        <div className="flex flex-col-reverse lg:flex-row">
          <InView triggerOnce={true} threshold={0.01}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 200 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-full lg:w-1/2"
              >
                <div className="container lg:mx-5 my-10 flex flex-col text-start justify-center">
                  <div className="flex my-5 gap-10 items-center">
                    <h1 className="text-4xl font-bold">
                      Manage & Push Your Business To The Next Level
                    </h1>
                  </div>
                  <div>
                    <p className="py-5">
                      Embrace the future of education, business, healthcare, and
                      retail, where seamless integration meets unparalleled
                      excellence.
                    </p>
                  </div>
                  <div className="w-10/12 flex flex-col gap-5 mx-auto">
                    <div className="flex flex-col gap-3">
                      <p className="font-medium text-xl">First Working Process</p>
                      <p>Scroll Down! and Directley make contact with us.</p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="font-medium text-xl">24/7 Hours Support</p>
                      <p>
                        ur developers are available for your support 24/7 Hours
                      </p>
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
                initial={{ opacity: 0, scale: 0.2 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-full lg:w-1/2"
              >
                <img src={About_pic} />
              </motion.div>
            )}
          </InView>
        </div>
      </div>
    </div>
  );
};

export default AboutStart;
