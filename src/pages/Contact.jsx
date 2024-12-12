import React, { useState, useEffect } from "react";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import Hero from '../components/Hero';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);  // To manage loading state
  const [errorMessage, setErrorMessage] = useState("");  // To handle error messages
  const [successMessage, setSuccessMessage] = useState(""); // For success feedback

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);  // Set loading to true when request starts
    setErrorMessage(""); // Reset previous error message

    // Prepare template parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    };

    // Send the email via EmailJS
    emailjs.send(
      'service_mji72wi',       // EmailJS service ID
      'template_itpqrmd',      // EmailJS template ID
      templateParams,          // Template parameters
      'udq9XLuX-kA06VzUz'           // EmailJS user ID
    )
      .then((response) => {
        setLoading(false); // Set loading to false after receiving response
        setSuccessMessage("Email sent successfully!");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => {
        setLoading(false);
        setErrorMessage("An error occurred while sending the email. Please try again.");
        console.error(error);
      });
  };

  return (
    <>
      <Navbar />
      <Hero />
      <div className="p-s ">
        <div className="container py-28 flex flex-col gap-10">
          <div className="flex flex-col gap-10 lg:flex-row">
            <InView triggerOnce={true} threshold={0.01}>
              {({ inView, ref }) => (
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: 200 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="w-full lg:w-1/2"
                >
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-5">
                      <p className="text-5xl font-bold ">Get In Touch</p>
                      <p>
                        For sharing ideas and exploring your business, make
                        contact with us. We are available for you 24/7.
                      </p>
                    </div>

                    <div className="flex gap-5">
                      <div>
                        <FaPhoneAlt className="bg-[#8a8acd] text-white text-4xl rounded-full p-2" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="">Call Us</p>
                        <p className="text-xl font-semibold">+92-300-0000000</p>
                      </div>
                    </div>
                    <div className="flex gap-5">
                      <div>
                        <IoMdMail className="bg-[#8a8acd] text-white text-4xl rounded-full p-2" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="">Mail Us</p>
                        <p className="text-xl font-semibold">
                          CodeEase@gmail.com
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-5">
                      <div>
                        <MdLocationPin className="bg-[#8a8acd] text-white text-4xl rounded-full p-2" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="">Our Office</p>
                        <p className="text-xl font-semibold">
                          Lahore, Pakistan
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
                  initial={{ opacity: 0, y: 200 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-full lg:w-1/2"
                >
                  <div className="py-20 lg:py-5">
                    <form onSubmit={handleSubmit}>
                      <div className="flex gap-5 flex-col">
                        <div className="flex flex-col md:flex-row gap-5 md:gap-3">
                          <div className="relative w-full">
                            <input
                              id="nameInput"
                              className="border w-full border-borderColor rounded-lg h-12 pl-2 pt-4 pb-1 duration-300 ease-in-out 
                            outline-none focus:border-blue-700 focus:ring ring-blue-200 z-10 peer"
                              placeholder=" "
                              type="text"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                            <label
                              htmlFor="nameInput"
                              className={`absolute duration-300 
                            ${name
                                  ? "top-3 left-0 scale-75 -translate-y-3 text-gray-400"
                                  : "top-1/2 scale-100 left-2 -translate-y-1/2 text-gray-500"
                                }
                            transform origin-0 pointer-events-none`}
                            >
                              Your Name
                            </label>
                          </div>

                          <div className="relative w-full">
                            <input
                              id="emailInput"
                              className="border w-full border-borderColor rounded-lg h-12 pl-2 pt-4 pb-1 duration-300 ease-in-out 
                            outline-none focus:border-blue-700 focus:ring ring-blue-200 z-10 peer"
                              placeholder=" "
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <label
                              htmlFor="emailInput"
                              className={`absolute duration-300 
                            ${email
                                  ? "top-3 left-0 scale-75 -translate-y-3 text-gray-400"
                                  : "top-1/2 scale-100 left-2 -translate-y-1/2 text-gray-500"
                                }
                            transform origin-0 pointer-events-none`}
                            >
                              Your Email
                            </label>
                          </div>
                        </div>

                        <div className="relative w-full">
                          <input
                            id="subjectInput"
                            className="border border-borderColor w-full rounded-lg h-12 pl-2 pt-4 pb-1 duration-300 ease-in-out 
                            outline-none focus:border-blue-700 focus:ring ring-blue-200 z-10 peer"
                            placeholder=" "
                            type="text"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                          />
                          <label
                            htmlFor="subjectInput"
                            className={`absolute duration-300 
                            ${subject
                                ? "top-3 left-0 scale-75 -translate-y-3 text-gray-400"
                                : "top-1/2 scale-100 left-2 -translate-y-1/2 text-gray-500"
                              }
                            transform origin-0 pointer-events-none`}
                          >
                            Subject
                          </label>
                        </div>

                        <div className="relative w-full">
                          <textarea
                            id="messageInput"
                            className="border border-borderColor w-full h-32 rounded-lg  pl-2 pt-4 pb-1 duration-300 ease-in-out 
                            outline-none focus:border-blue-700 focus:ring ring-blue-200 z-10 peer"
                            placeholder=" "
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                          />
                          <label
                            htmlFor="messageInput"
                            className={`absolute duration-300 
                            ${message
                                ? "top-3 left-0 scale-75 -translate-y-3 text-gray-400"
                                : " top-5 scale-100 left-2 -translate-y-1/2 text-gray-500"
                              }
                            transform origin-0 pointer-events-none`}
                          >
                            Your Message
                          </label>
                        </div>
                      </div>

                      {/* Display success or error message */}
                      {successMessage && <p className="text-green-500">{successMessage}</p>}
                      {errorMessage && <p className="text-red-500">{errorMessage}</p>}

                      <button
                        type="submit"
                        className="text-white bg-primary inline-block rounded-full px-10 py-3 border border-blue-500 ease-in-out duration-300 ring-gray-400 ring-opacity-50
                    hover:ring-2 cursor-pointer my-3"
                      >
                        {loading ? "Sending..." : "Send Message"}
                      </button>
                    </form>
                  </div>
                </motion.div>
              )}
            </InView>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
