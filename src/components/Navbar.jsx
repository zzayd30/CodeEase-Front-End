import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const location = useLocation();
  const navigate = useNavigate();
  let lastScrollTop = 0;

  const handleScroll = () => {
    const currentScrollTop = window.pageYOffset;
    if (currentScrollTop > lastScrollTop) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;

    if (currentScrollTop > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getLinkClass = (path) => {
    return location.pathname === path ? " text-primary" : "";
  };

  // Determine if the navbar should be fixed based on screen width
  const isFixedNavbar = screenWidth > 1320;

  return (
    <div className="flex flex-col">
      <div
        className={`py-4 px-5 sm:px-10 flex justify-between md:py-5 items-center lg:fixed w-full transition-all ${isMenuOpen ? "border-b-2" : ""
          } lg:border-none duration-500 z-50 ${isScrolled || isFixedNavbar ? "bg-white" : "md:bg-transparent"
          } ${isVisible ? "top-0" : "-top-20"}`}
      >
        <div onClick={() => navigate("/")}>
          <h1
            className={`font-bold text-primary cursor-pointer text-2xl ${isScrolled || isFixedNavbar ? "text-primary" : "text-primary lg:text-white"
              }`}
          >
            CodeEase Solutions
          </h1>
        </div>

        <div
          className={`lg:flex gap-5 hidden font-semibold ${isScrolled || isFixedNavbar ? "text-black" : "text-light"
            }`}
        >
          <Link
            to="/Home"
            className={`cursor-pointer ${isScrolled || isFixedNavbar ? "hover:text-primary duration-500 ease-in-out" : ""
              } ${isScrolled || isFixedNavbar ? getLinkClass("/") : ""}`}
          >
            Home
          </Link>
          <Link
            to="/About"
            className={`cursor-pointer ${isScrolled || isFixedNavbar ? "hover:text-primary duration-500 ease-in-out" : ""
              } ${isScrolled || isFixedNavbar ? getLinkClass("/About") : ""}`}
          >
            About
          </Link>
          <Link
            to="/Services"
            className={`cursor-pointer ${isScrolled || isFixedNavbar ? "hover:text-primary duration-500 ease-in-out" : ""
              } ${isScrolled || isFixedNavbar ? getLinkClass("/Services") : ""}`}
          >
            Services
          </Link>
          <Link
            to="/Contact"
            className={`cursor-pointer ${isScrolled || isFixedNavbar ? "hover:text-primary duration-500 ease-in-out" : ""
              } ${isScrolled || isFixedNavbar ? getLinkClass("/Contact") : ""}`}
          >
            Contact
          </Link>
        </div>

        <div className="hidden lg:flex">
          <Link
            to="/Chat"
            className={`cursor-pointer rounded-full px-5 py-2 ${isScrolled || isFixedNavbar ? "bg-primary text-white" : "bg-white text-primary  text-lg"
              }`}
          >
            Chat With Us
          </Link>
        </div>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className={`border border-gray-300 rounded-full p-2 outline-none focus:outline-none active:scale-95 transition-transform`}
          >
            {isMenuOpen ? (
              <FiX className="text-2xl duration-500 ease-in-out rotate-90" />
            ) : (
              <FiMenu className="duration-500 ease-in-out text-2xl" />
            )}
          </button>
        </div>
      </div>

      <div className="justify-center flex">
        <hr
          className={`transition-all w-11/12 duration-500 ease-in-out ${isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
        />
      </div>

      <div
        className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden bg-white flex flex-col items-start ml-5 font-semibold gap-5 ${isMenuOpen ? "h-[30vh] opacity-100" : "h-0 opacity-0"
          }`}
      >
        <Link
          to="/Home"
          className={`cursor-pointer hover:text-primary duration-500 ease-in-out justify-start flex ${getLinkClass(
            "/Home"
          )}`}
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/About"
          className={`cursor-pointer hover:text-primary duration-500 ease-in-out ${getLinkClass(
            "/About"
          )}`}
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </Link>
        <Link
          to="/Services"
          className={`cursor-pointer hover:text-primary duration-500 ease-in-out ${getLinkClass(
            "/Services"
          )}`}
          onClick={() => setIsMenuOpen(false)}
        >
          Services
        </Link>
        <Link
          to="/Contact"
          className={`cursor-pointer hover:text-primary duration-500 ease-in-out ${getLinkClass(
            "/Contact"
          )}`}
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
