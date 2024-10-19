import React, { useState } from "react";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import {
  IoGlobeOutline,
  IoPeopleOutline,
  IoSyncCircleOutline,
  IoSettingsSharp,
} from "react-icons/io5";
import {
  FaShoppingCart,
  FaChartLine,
  FaCogs,
  FaRobot,
  FaMobileAlt,
  FaCodeBranch,
  FaShieldAlt,
  FaLockOpen,
  FaBug,
  FaBuilding,
} from "react-icons/fa";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("webDevelopment");

  const renderServiceCards = () => {
    if (activeCategory === "webDevelopment") {
      return (
        <motion.div
          key="webDevelopment"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="service-card"
        >
          <ServiceCard
            name="Custom Website Design & Development"
            icon={IoGlobeOutline}
            desc="Tailored websites that reflect your brand's identity."
            Price="$49.99"
          />
          <ServiceCard
            name="E-commerce Solutions"
            icon={FaShoppingCart}
            desc="Building secure and scalable online stores."
            Price="$49.99"
          />
          <ServiceCard
            name="CMS Solutions"
            icon={FaCogs}
            desc="Simplifying content updates with WordPress, Joomla, and custom CMS."
            Price="$49.99"
          />
          <ServiceCard
            name="SEO & Digital Marketing Integration"
            icon={FaChartLine}
            desc="Optimizing your website for search engines and digital marketing."
            Price="$49.99"
          />
          <ServiceCard
            name="Maintenance & Support"
            icon={IoSettingsSharp}
            desc="Ongoing support to keep your website up-to-date and secure."
            Price="$49.99"
          />
        </motion.div>
      );
    } else if (activeCategory === "softwareDevelopment") {
      return (
        <motion.div
          key="softwareDevelopment"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          className="service-card"
        >
          <ServiceCard
            name="Custom Software Solutions"
            icon={FaCogs}
            desc="Developing software to streamline your business processes."
            Price="$49.99"
          />
          <ServiceCard
            name="Enterprise Resource Planning (ERP)"
            icon={FaBuilding}
            desc="Integrating various business functions into a single system."
            Price="$49.99"
          />
          <ServiceCard
            name="Customer Relationship Management (CRM)"
            icon={IoPeopleOutline}
            desc="Tools to manage customer interactions and data."
            Price="$49.99"
          />
          <ServiceCard
            name="Automation Tools"
            icon={FaRobot}
            desc="Reducing manual work through automated solutions."
            Price="$49.99"
          />
        </motion.div>
      );
    } else if (activeCategory === "appDevelopment") {
      return (
        <motion.div
          key="appDevelopment"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          className="service-card"
        >
          <ServiceCard
            name="iOS & Android App Development"
            icon={FaMobileAlt}
            desc="Creating mobile apps for both platforms with seamless user experiences."
            Price="$49.99"
          />
          <ServiceCard
            name="Cross-Platform Apps"
            icon={FaCodeBranch}
            desc="Using technologies like React Native to develop apps for multiple platforms."
            Price="$49.99"
          />
          <ServiceCard
            name="App Maintenance & Updates"
            icon={IoSyncCircleOutline}
            desc="Keeping your app current with the latest features and security patches."
            Price="$49.99"
          />
        </motion.div>
      );
    } else if (activeCategory === "cyberSecurity") {
      return (
        <motion.div
          key="cyberSecurity"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          className="service-card"
        >
          <ServiceCard
            name="Vulnerability Assessments & Penetration Testing"
            icon={FaShieldAlt}
            desc="Identifying and addressing potential security threats."
            Price="$49.99"
          />
          <ServiceCard
            name="Ransomware Recovery"
            icon={FaLockOpen}
            desc="Specialized tools and strategies to recover from ransomware attacks."
            Price="$49.99"
          />
          <ServiceCard
            name="Malware Analysis & Removal"
            icon={FaBug}
            desc="Protecting your systems from malicious software."
            Price="$49.99"
          />
          <ServiceCard
            name="Security Training & Awareness"
            icon={IoPeopleOutline}
            desc="Educating your team on cybersecurity best practices."
            Price="$49.99"
          />
        </motion.div>
      );
    }
  };

  return (
    <div className="container p-s text-center">
      <div className="text-center">
        <p className="font-bold text-3xl">Services</p>
        <p className="my-3">
          We provide services that can grow your business. Our team is available
          for guidance 24/7. Here are some of our services.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 justify-center my-5 gap-2">
        <button
          className={`px-4 duration-300 ease-in-out py-2 mx-2 ${activeCategory === "webDevelopment"
              ? "bg-primary text-white"
              : "bg-gray-300"
            }`}
          onClick={() => setActiveCategory("webDevelopment")}
        >
          Web Development
        </button>
        <button
          className={`px-4 duration-300 ease-in-out py-2 mx-2 ${activeCategory === "softwareDevelopment"
              ? "bg-primary text-white"
              : "bg-gray-300"
            }`}
          onClick={() => setActiveCategory("softwareDevelopment")}
        >
          Software Development
        </button>
        <button
          className={`px-4 duration-300 ease-in-out py-2 mx-2 ${activeCategory === "appDevelopment"
              ? "bg-primary text-white"
              : "bg-gray-300"
            }`}
          onClick={() => setActiveCategory("appDevelopment")}
        >
          App Development
        </button>
        <button
          className={`px-4 duration-300 ease-in-out py-2 mx-2 ${activeCategory === "cyberSecurity"
              ? "bg-primary text-white"
              : "bg-gray-300"
            }`}
          onClick={() => setActiveCategory("cyberSecurity")}
        >
          Cybersecurity
        </button>
      </div>
      {renderServiceCards()}
    </div>
  );
};

export default Services;
