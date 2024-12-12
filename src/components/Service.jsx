import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import 'toastr/build/toastr.min.css';
import toastr from 'toastr';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("Web Development");
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:3000/api/services?category=${activeCategory}`);
        const data = await response.json();
        setActiveCategory(data.data[0].category);
        console.log(data.data[0].category, "Asds");
        setServices(data.data);
      } catch (error) {
        toastr.error(error.message, "Error");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [activeCategory]);

  const renderServiceCards = () => {
    if (loading) {
      return <p>Loading services...</p>;
    }

    if (services.length === 0) {
      return <p>No services available for this category.</p>;
    }

    return (
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="service-card"
      >
        {services?.map((service) => (
          <ServiceCard
            key={service._id} // Use MongoDB _id for unique key
            serviceName={service.serviceName}
            serviceDescription={service.serviceDescription}
            servicePrice={service.servicePrice}
          />
        ))}
      </motion.div>
    );
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
          className={`px-4 duration-300 ease-in-out py-2 mx-2 ${activeCategory === "Web Development"
            ? "bg-primary text-white"
            : "bg-gray-300"
            }`}
          onClick={() => setActiveCategory("Web Development")}
        >
          Web Development
        </button>
        <button
          className={`px-4 duration-300 ease-in-out py-2 mx-2 ${activeCategory === "Software Development"
            ? "bg-primary text-white"
            : "bg-gray-300"
            }`}
          onClick={() => setActiveCategory("Software Development")}
        >
          Software Development
        </button>
        <button
          className={`px-4 duration-300 ease-in-out py-2 mx-2 ${activeCategory === "App Development"
            ? "bg-primary text-white"
            : "bg-gray-300"
            }`}
          onClick={() => setActiveCategory("App Development")}
        >
          App Development
        </button>
        <button
          className={`px-4 duration-300 ease-in-out py-2 mx-2 ${activeCategory === "Cyber Security"
            ? "bg-primary text-white"
            : "bg-gray-300"
            }`}
          onClick={() => setActiveCategory("Cyber Security")}
        >
          Cybersecurity
        </button>
      </div>
      {renderServiceCards()}
    </div>
  );
};

export default Services;