import React from "react";
import Services from "../components/Service";
import { useEffect } from "react";
import Hero from "../components/Hero";
const Edu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero />
      <Services />
    </div>
  );
};

export default Edu;
