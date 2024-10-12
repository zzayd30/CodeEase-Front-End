import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { InView } from "react-intersection-observer";
import Pic1 from "../assets/testimonial-1.jpg";
import Pic2 from "../assets/testimonial-2.jpg";
import Pic3 from "../assets/testimonial-3.jpg";
import { FaQuoteLeft } from "react-icons/fa";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

import { motion } from "framer-motion";

const testimonialsData = [
  {
    pic: Pic1,
    detail:
      "I was looking for professionals for my work then I found ATechSole that are professionals and very good behaviour.",
    name: "Muhammad Tahir",
    position: "CEO of Al Syed Institute",
  },
  {
    pic: Pic2,
    detail:
      "I am very happy to work with ATechSole. They are very committed and deliver in time.",
    name: "Mussadaq Hussain",
    position: "CEO of The Grace Academy",
  },
  {
    pic: Pic3,
    detail:
      "I am very gald to work with the professionals of ATechSole. They know how to work this is my first experience that was amazing",
    name: "Haram Fatima",
    position: "CEO of Bunzy Shop",
  },
];

const Testimonial = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 987,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className=" p-s">
      <div className="container">
        <div className="w-full ">
          <InView triggerOnce={true} threshold={0.01}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 200 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-full"
              >
                <div className="text-5xl font-bold text-center">
                  What Our Clients Say
                </div>
                <p className=" text-center mt-2">
                  Here are reviews from some of our clients. See what they have
                  to say about us.
                </p>
              </motion.div>
            )}
          </InView>
        </div>

        <div>
          <InView triggerOnce={true} threshold={0.01}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 200 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-full"
              >
                <Slider ref={sliderRef} {...settings} className="mt-5">
                  {testimonialsData.map((testimonial, index) => (
                    <div key={index} className="p-5 ">
                    
                      <div className="bg-white gap-5 flex flex-col p-5 rounded-lg shadow-lg  w-full">
                        <p className="text-lg flex">
                            
                        <FaQuoteLeft className="text-blue-500 text-9xl" />
                            {testimonial.detail}
                            </p>
                        <div className="flex gap-5 items-center">
                          <img
                            className="rounded-full items-center h-16 w-16"
                            src={testimonial.pic}
                          />
                          <div className="text-start">
                            <h3 className="mt-4 font-bold">
                              {testimonial.name}
                            </h3>
                            <p className="text-gray-500">
                              {testimonial.position}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </motion.div>
            )}
          </InView>
        </div>

        <div className="flex justify-center gap-5 mt-4">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="bg-light rounded-full hover:text-white  text-primary p-4   hover:bg-primary duration-500 ease-in-out"
          >
            <GoChevronLeft className="text-4xl" />
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="bg-light rounded-full hover:text-white  text-primary p-4   hover:bg-primary duration-500 ease-in-out"
          >
            <GoChevronRight className="text-4xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
