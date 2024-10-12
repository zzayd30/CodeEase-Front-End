import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Service";
import Offers from "../components/Offers";
import Features from "../components/Features";
import AdvanceFeature from "../components/AdvanceFeature";
import Work from "../components/Work";

const Home = () => {
  return (
    <>
      <div className="home">
        <Hero />
        <Offers />
        <Features />
        <AdvanceFeature />
        <Work />
      </div>
    </>
  );
};

export default Home;
