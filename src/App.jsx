import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./pages/Home";
import About from "./pages/About";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
import Cart from "./pages/Cart";
import "react-toastify/dist/ReactToastify.css";
import Admin from "./pages/Admin";
const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <ScrollToTopButton />
    </div>
  );
};

export default App;
