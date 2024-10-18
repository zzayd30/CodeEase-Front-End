import React from "react";
import Features from "../components/Features";
import Offers from "../components/Offers";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
const Feature = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Offers />
      <Features />
      <Footer />
    </div>
  );
};

export default Feature;
