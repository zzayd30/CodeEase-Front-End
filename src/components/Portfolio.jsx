import React from "react";
import PortImg from "./PortImg";
import Img1 from "../assets/portfolio-1.jpg";
import Img2 from "../assets/portfolio-2.jpg";
import Img3 from "../assets/portfolio-3.jpg";
import Img4 from "../assets/portfolio-4.jpg";
import Img5 from "../assets/portfolio-5.jpg";
import Img6 from "../assets/portfolio-6.jpg";

const Portfolio = () => {
  return (
    <div className="bg-card p-s">
      <div className="container py-12">
        <div className="flex flex-col">
          <div className="flex flex-col justify-center items-center">
            <p className="font-semibold text-3xl">Portfolio</p>
            <p className="my-3 text-center">
              Here is some of works that we done beofore with our clients that
              belong to different businesses
            </p>

            <ul className=" flex-wrap   justify-center  text-white text-xs flex">
              <li className="bg-primary mb-2 py-10px uppercase px-20px ">
                All
              </li>
              <li className="py-10px uppercase mb-2 px-20px bg-Portfolio hover:bg-primary duration-300 ease-in-out cursor-pointer">
                Web Design
              </li>
              <li className="py-10px uppercase mb-2 px-20px bg-Portfolio hover:bg-primary duration-300 ease-in-out cursor-pointer">
                Web Development
              </li>
              <li className="py-10px uppercase mb-2 px-20px bg-Portfolio hover:bg-primary duration-300 ease-in-out cursor-pointer">
                App Design
              </li>
              <li className="py-10px uppercase px-20px bg-Portfolio mb-2 hover:bg-primary duration-300 ease-in-out cursor-pointer">
                App Development
              </li>
            </ul>
          </div>

          <div className="port-img mt-10 ">
            <PortImg
              img={Img1}
              title="Custom Website"
              detail="WEB DEVELOPMENT"
            />
            <PortImg img={Img2} title="Dashboard" detail="WEB DESIGN" />
            <PortImg
              img={Img3}
              title="Web Development"
              detail="WEB DEVELOPMENT"
            />
            <PortImg
              img={Img4}
              title="E-Commerce App"
              detail="App DEVELOPMENT"
            />
            <PortImg
              img={Img5}
              title="Management App"
              detail="App DEVELOPMENT"
            />
            <PortImg
              img={Img6}
              title="Block-Chain App"
              detail="WEB DEVELOPMENT"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
