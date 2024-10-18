import React from "react";
import Offers from "../components/Offers";
import AdvanceFeature from "../components/AdvanceFeature";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

const OverView = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Offers />
      <AdvanceFeature />
      <Footer />
    </div>
  );
};

export default OverView;
