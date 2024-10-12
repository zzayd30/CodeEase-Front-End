import React from "react";
import Offers from "../components/Offers";
import Work from "../components/Work";
import AdvanceFeature from "../components/AdvanceFeature";
import Hero from "../components/Hero";
import { useEffect } from "react";
const OverView = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  return (
    <div>
      <Hero />
      <Offers />
      <AdvanceFeature />
    </div>
  );
};

export default OverView;
