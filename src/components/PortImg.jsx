import React from "react";
import { IoEyeSharp } from "react-icons/io5";
import { MdOutlineOpenInNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const PortImg = ({ img, title, detail }) => {
  const navigate = useNavigate();
  return (
    <div
      className="relative bg-cover group bg-center h-56 w-full  flex items-center justify-center"
      style={{ backgroundImage: `url(${img}) ` }}
    >
      {/* Dark Overlay */}
      <div className="absolute group-hover:opacity-60 duration-500 ease-in-out  inset-0 bg-black opacity-40"></div>

      {/* Overlay Text */}
      <div className="relative flex flex-col gap-2 group-hover:hidden duration-200 ease-in-out text-center text-light z-10">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-xs">{detail}</p>
      </div>
      <div className="relative group-hover:flex gap-2 hidden text-center text-light text-2xlitems-center  justify-center duration-200 ease-in-out z-10">
        <div className=" portfolio-img ">
          <IoEyeSharp
            className="text-2xl"
            onClick={() => window.open(img, "_blank")}
          />
        </div>
        <div className="portfolio-img">
          <MdOutlineOpenInNew
            onClick={() => navigate("/Services")}
            className="text-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default PortImg;
