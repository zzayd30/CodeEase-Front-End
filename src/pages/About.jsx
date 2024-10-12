import React from "react";
import Hero from "../components/Hero";
import Offers from "../components/Offers";
import AboutStart from "../components/AboutStart";
import Team from '../components/Team'
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  return (
    <div>
     <Hero />
      <Offers />
      <AboutStart />
    <Team />
    </div>
  );
};

export default About;
