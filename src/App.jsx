import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Services from "./pages/Services";
import Hero from "./components/Hero";
import Contact from "./pages/Contact";
import Feature from "./pages/Feature";
import OverView from "./pages/OverView";
import Edu from "./components/Edu";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Feature" element={<Feature />} />
        <Route path="/Overview" element={<OverView />} />
        <Route path="/Education" element={<Edu />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
