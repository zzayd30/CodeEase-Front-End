import React from "react";
import ServiceCard from "./ServiceCard";
import { IoDesktopSharp } from "react-icons/io5";
import {
  IoIosLaptop,
  IoIosPhonePortrait,
  IoIosTabletPortrait,
  IoIosDesktop,
} from "react-icons/io";

import { IoDesktopOutline } from "react-icons/io5";

const Services = () => {
  return (
    <div className="container p-s">
      <div>
        <div className="text-center">
          <p className="font-bold text-3xl">Services</p>
          <p className="my-3">
            We provide all services that can grow you business. our team is
            availbale for your guidance 24/7. Here are some our services.
          </p>
        </div>

        <div className="service-card">
          <ServiceCard
            name="Web Design"
            icon={IoIosDesktop}
            desc="We design your website as per requirments."
          />
          <ServiceCard
            name="Web Development"
            icon={IoIosLaptop}
            desc="We develop your website as per requirments of your business"
          />
          <ServiceCard
            name="App Design"
            icon={IoIosPhonePortrait}
            desc="We design you business App as per requirments."
          />
          <ServiceCard
            name="App Development"
            icon={IoIosTabletPortrait}
            desc="We develop your business App as per requirments."
          />
          <ServiceCard
            name="SEO"
            icon={IoIosDesktop}
            desc="We boost your business through SEO."
          />
          <ServiceCard
            name="Digital markeeting"
            icon={IoIosLaptop}
            desc="We make SEO of your page and business."
          />
          <ServiceCard
            name="E-Commerce Solution"
            icon={IoIosPhonePortrait}
            desc="We provide best E-Commerce solution."
          />
          <ServiceCard
            name="Cyber-Security"
            icon={IoIosTabletPortrait}
            desc="We provide best Cyber-security option to protect our client."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
