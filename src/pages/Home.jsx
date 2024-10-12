import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Service";
import Offers from "../components/Offers";
import Features from "../components/Features";
import AdvanceFeature from "../components/AdvanceFeature";
import Work from "../components/Work";
import { useEffect } from "react";
import Testonomail from "../components/Testonomail";
import Pic1 from '../assets/hero.jpg'
import Pic2 from '../assets/hero.jpg'
import Pic3 from '../assets/hero.jpg'
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="home">
        <Hero />
        <Offers />
        <Features />
        <AdvanceFeature />
        <Work />
        <Testonomail />
      </div>
    </>
  );
};

export default Home;
