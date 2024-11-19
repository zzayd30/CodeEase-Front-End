import React from "react";
import 'toastr/build/toastr.min.css';
import $ from 'jquery';
import toastr from 'toastr';

const ServiceCard = (params) => {

  const showSuccessToast = () => {
    toastr.success('Added to cart', 'Success', {
      positionClass: 'toast-bottom-right',
      closeButton: true,
      progressBar: true,
    });
  };

  return (
    <>
      <div className="main_Card hover:scale-105 transition-transform duration-300">
        <div className="p-6 gap-2 flex items-center bg-card flex-col h-[40vh]">
          <div className="text-primary text-6xl">
            <params.icon />
          </div>
          <div className="hover:underline cursor-pointer text-lg font-bold">{params.name}</div>
          <div className="font-normal text-center">{params.desc}</div>
        </div>
        <div className="price flex justify-center items-center bg-[#8a8acd] h-12">
          <div className="w-1/2 text-white hover:cursor-pointer hover:text-black">Price: {params.Price}</div>
          <div className="cart w-1/2">
            <button
              onClick={() => {
                showSuccessToast()
              }}
              className="bg-white text-[#8a8acd] hover:text-white hover:bg-primary px-3 py-1 rounded-xl"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
