import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const TeamCard = (params) => {
  return (
    <div className="flex group hover:shadow-2xl ease-in-out duration-300  cursor-pointer flex-col">
      <img className="w-full h-full" src={params.pic} />
      <div className="bg-card group-hover:bg-primary p-4 text-center flex flex-col gap-2">
        <div className="group-hover:text-white text-lg"> {params.name}</div>
        <div className="font-light text-sm group-hover:text-white">
          {" "}
          {params.post}
        </div>
        <div className=" flex group-hover:text-white justify-center gap-4">
          <FaTwitter />
          <FaFacebookSquare />
          <FaLinkedin />
          <FaInstagram />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
