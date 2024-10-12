import React from "react";
import Features from "../components/Features";
import Offers from "../components/Offers";
import Hero from "../components/Hero";
import { useEffect } from "react";
const Feature = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  return (
    <div>
      <Hero />
      <Offers />
      <Features />
    </div>
  );
};

export default Feature;
