import React from "react";
import Service from "../components/Service";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { useEffect } from "react";
const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
      <Footer />
    </div>
  );
};

export default Services;
