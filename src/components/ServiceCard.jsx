import React from "react";
import 'toastr/build/toastr.min.css';
import toastr from 'toastr';
import { toast } from "react-toastify";

const ServiceCard = ({ serviceName, serviceDescription, servicePrice }) => {
  
  const handleAddToCart = async () => {
    const email = localStorage.getItem("current-email");
    try {
      const response = await fetch("http://localhost:3000/api/add-to-cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          serviceName,
          servicePrice,
        }),
      });

      const data = await response.json();
      if (data.success) {
        toast.success(data.message, "Success");
      } else {
        toast.error(data.message, "Error");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to add to cart", "Error");
    }
  };

  return (
    <div className="main_Card hover:scale-105 transition-transform duration-300">
      <div className="p-6 gap-2 flex items-center bg-card flex-col h-[40vh]">
        <div className="hover:underline cursor-pointer text-lg font-bold">{serviceName}</div>
        <div className="font-normal text-center">{serviceDescription}</div>
      </div>
      <div className="price flex justify-center items-center bg-[#8a8acd] h-12">
        <div className="w-1/2 text-white hover:cursor-pointer hover:text-black">Price: {servicePrice}</div>
        <div className="cart w-1/2">
          <button
            onClick={handleAddToCart}  // No need to pass serviceId
            className="bg-white text-[#8a8acd] hover:text-white hover:bg-primary px-3 py-1 rounded-xl"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;