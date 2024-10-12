import React from "react";
import Service from "../components/Service";
import Portfolio from "../components/Portfolio";
import Hero from "../components/Hero";
import { useEffect } from "react";
const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero />
      <Service />
      <Portfolio />
    </div>
  );
};

export default Services;
