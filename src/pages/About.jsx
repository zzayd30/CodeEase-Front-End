import React from "react";
import Hero from "../components/Hero";
import Offers from "../components/Offers";
import AboutStart from "../components/AboutStart";
import Team from '../components/Team'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Offers />
      <AboutStart />
      <Team />
      <Footer />
    </div>
  );
};

export default About;
