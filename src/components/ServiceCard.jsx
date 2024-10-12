import React from "react";

const ServiceCard = (params) => {
  return (
    <div className="p-6 gap-2 flex items-center hover:bg-primary bg-card flex-col">
      <div className=" text-primary text-6xl">
        <params.icon />
      </div>
      <div className="hover:underline cursor-pointer text-lg font-bold">{params.name}</div>
      <div className="font-normal text-center">{params.desc}</div>
    </div>
  );
};

export default ServiceCard;
