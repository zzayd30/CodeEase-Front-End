import React from "react";
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa";
import { GrSend } from "react-icons/gr";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <InView triggerOnce={true} threshold={0.01}>
      {({ inView, ref }) => (
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full "
        >
          <div className="bg-footer flex flex-col">
            <div className="container  bg-footer gap-10 footer-s grid md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col gap-5">
                <div className="text-white text-xl">Address</div>
                <p className="text-footer-text  text-base flex gap-5 items-center">
                  <MdLocationPin className="text-xl" /> 2nd floor Asharfia
                  complex muslim town Lahore
                </p>
                <p className="text-footer-text text-base flex gap-5 items-center">
                  <FaPhoneAlt className="text-xl" /> +92-325-3344552
                </p>
                <p className="text-footer-text text-base flex gap-5 items-center">
                  <IoMdMail className="text-xl" />
                  info@ATechSole.com
                </p>

                <p className="flex  text-white gap-1">
                  <div
                    onClick={() => navigate("/About")}
                    className="bg-transparent border-footer-text border p-3 items-center justify-center group hover:bg-white flex duration-500 ease-in-out cursor-pointer  rounded-full"
                  >
                    {" "}
                    <FaTwitter
                      className="group-hover:text-black
                   text-lg  duration-500 ease-in-out "
                    />
                  </div>
                  <div
                    onClick={() => navigate("/About")}
                    className="bg-transparent border-footer-text border p-3  items-center justify-center group hover:bg-white flex duration-500 ease-in-out cursor-pointer  rounded-full"
                  >
                    {" "}
                    <FaFacebookF
                      className="group-hover:text-black
                   text-xl  duration-500 ease-in-out "
                    />
                  </div>
                  <div
                    onClick={() => navigate("/About")}
                    className="bg-transparent border-footer-text border p-3  items-center justify-center group hover:bg-white flex duration-500 ease-in-out cursor-pointer  rounded-full"
                  >
                    {" "}
                    <FaInstagram
                      className="group-hover:text-black
                   text-xl duration-500 ease-in-out "
                    />
                  </div>
                  <div
                    onClick={() => navigate("/About")}
                    className="bg-transparent border-footer-text border p-3  items-center justify-center group hover:bg-white flex duration-500 ease-in-out cursor-pointer  rounded-full"
                  >
                    {" "}
                    <FaLinkedinIn
                      className="group-hover:text-black
                    duration-500 ease-in-out text-xl "
                    />
                  </div>
                </p>
              </div>
              <div className="flex h-auto lg:max-h-[35vh] flex-col justify-between">
                <div className="text-white text-xl pb-5">Quick Link</div>

                <p
                  onClick={() => navigate("/About")}
                  className="flex gap-4 h-8 hover:text-lg ease-in-out duration-500 hover:text-white cursor-pointer hover:underline items-start -ml-1 text-footer-text"
                >
                  <FaAngleRight /> About
                </p>
                <p
                  onClick={() => navigate("/Contact")}
                  className="flex gap-4 h-8 hover:text-lg ease-in-out duration-500 hover:text-white hover:underline cursor-pointer items-start -ml-1 text-footer-text"
                >
                  <FaAngleRight /> Contact
                </p>
                <p
                  onClick={() => navigate("/Feature")}
                  className="flex gap-4 h-8 hover:text-lg ease-in-out duration-500 hover:text-white hover:underline cursor-pointer items-start -ml-1 text-footer-text"
                >
                  <FaAngleRight /> Features
                </p>
                <p
                  onClick={() => navigate("/Overview")}
                  className="flex gap-4 h-8 hover:text-lg ease-in-out duration-500 hover:text-white hover:underline items-start -ml-1 cursor-pointer text-footer-text"
                >
                  <FaAngleRight /> Overview
                </p>
              </div>
              <div className="flex lg:max-h-[35vh] flex-col justify-between">
                <div className="text-white text-xl pb-5">Industries</div>

                <p
                  onClick={() => navigate("/Education")}
                  className="flex gap-4 h-8 hover:text-lg ease-in-out duration-500 hover:text-white cursor-pointer hover:underline items-start -ml-1 text-footer-text"
                >
                  <FaAngleRight /> Education
                </p>
                <p
                  onClick={() => navigate("/Business")}
                  className="flex gap-4 h-8 hover:text-lg ease-in-out duration-500 hover:text-white hover:underline cursor-pointer items-start -ml-1 text-footer-text"
                >
                  <FaAngleRight /> Businesses
                </p>
                <p
                  onClick={() => navigate("/Health")}
                  className="flex gap-4 h-8 hover:text-lg ease-in-out duration-500 hover:text-white hover:underline cursor-pointer items-start -ml-1 text-footer-text"
                >
                  <FaAngleRight /> Health
                </p>
                <p
                  onClick={() => navigate("/Retail")}
                  className="flex gap-4 h-8 hover:text-lg ease-in-out duration-500 hover:text-white hover:underline items-start -ml-1 cursor-pointer text-footer-text"
                >
                  <FaAngleRight /> Retail
                </p>
              </div>

              <div className="h-full flex lg:max-h-[35vh] flex-col justify-between">
                <div className="text-white text-xl">Newsletter</div>
                <p className="text-footer-text text-base my-5  md:my-0 text-justify">
                  We are going to launch a new education system Website. For
                  More Details Emial us
                </p>

                <div className=" relative flex overflow-hidden ">
                  <input
                    placeholder="Your Email"
                    className="pl-5 outline-none w-full rounded-full h-12"
                  ></input>
                  <div className="absolute end-5 top-3">
                    <GrSend className="text-2xl text-blue-500" />
                  </div>
                </div>
              </div>
            </div>

            <div className="container bg-footer">
              <hr className="border-footer-text" />

              <div class="py-5 ">
                <div class="flex flex-col lg:flex-row justify-between">
                  <div class="w-full lg:w-1/2 text-center  mb-3">
                    ©{" "}
                    <a
                      class="text-white underline"
                      href="https://ATechSole.com"
                    >
                      ATechSole
                    </a>
                    , All Right Reserved. Designed By{" "}
                    <a
                      class="text-white underline"
                      href="https://ATechSole.com"
                    >
                      ATechSole
                    </a>
                  </div>
                  <div class=" w-full lg:w-1/2 text-center ">
                    <div class=" text-white flex justify-center gap-10">
                      <a
                        href="/"
                        className="hover:text-footer-text hover:underline"
                      >
                        Home
                      </a>
                      <a
                        href="/"
                        className="hover:text-footer-text hover:underline"
                      >
                        Cookies
                      </a>
                      <a
                        href="/"
                        className="hover:text-footer-text hover:underline"
                      >
                        Help
                      </a>
                      <a
                        className="hover:text-footer-text hover:underline"
                        href="/"
                      >
                        FQAs
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </InView>
  );
};

export default Footer;
