import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Service";
import Offers from "../components/Offers";
import Features from "../components/Features";
import AdvanceFeature from "../components/AdvanceFeature";
import Work from "../components/Work";
import { useEffect } from "react";
import Testonomail from "../components/Testonomail";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="home bg-white">
        <Hero />
        <Offers />
        <Features />
        <AdvanceFeature />
        <Work />
        <Testonomail />
      </div>
      <Footer />
    </>
  );
};

export default Home;
