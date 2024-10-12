import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { animate } from "framer-motion";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSlow, setIsSlow] = useState(true);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
      setTimeout(() => {
        setIsSlow(false);
      }, 1000);
    } else {
      setIsVisible(false);
      setIsSlow(true);
    }
  };

  const scrollToTop = () => {
    animate(window.pageYOffset, 0, {
      duration: 2,
      ease: [0.7, 0, 0.2, 1],
      onUpdate: (latest) => {
        window.scrollTo(0, latest);
      },
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-5 right-5 bg-blue-400 bg-opacity-70 text-white p-3 rounded-full shadow-lg transition-all ${
            isSlow ? "duration-1000 ease-in" : "duration-300 ease-out"
          } hover:bg-blue-700 transform hover:scale-110`}
          style={{ zIndex: 1000 }}
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
