import React from "react";
import Media from "./Media.js";
import contact from "./icon/contact.svg";
import location from "./icon/location.svg";
import wstar from "./icon/star (9).png";
import gstar from "./icon/star (10).png";
import swstar from "./icon/star (11).png";
import pstar from "./icon/sata gra (2).png";

const Footer = () => {
  return (
    <footer className="relative bg-footer px-10 py-14  text-white font-mont text-[12px]  lg:px-32 ">
      <div className="   border-customWhite flex flex-col  text-left md:grid md:grid-cols-3 md:gap-4 md:items-center md:justify-center">
        <div className="grid1">
          <img src={wstar} alt="wstar" className="absolute left-4 top-32" />
          <img
            src={gstar}
            alt="gstar"
            className="absolute top-[45%] left-[40%]"
          />
          <img
            src={swstar}
            alt="swstar"
            className="absolute  bottom-48 right-28"
          />
          <img
            src={pstar}
            alt="pstar"
            className="absolute bottom-24 left-[35%]"
          />

          <h1 className="mb-4 text-white text-[20px] leading-[24.6px] font-clash font-bold lg:text-[30px] lg:leading-[36.9px]">
            get<span className="text-primaryColor">linked</span>
          </h1>
          <p className="font-normal  leading-[20.69px] text-white lg:text-[12px] lg:leading-[20.69px]">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
          <span className=" flex flex-row items-center   leading-[20.69px] capitalize my-8 ">
            <p className="mr-2 pr-2 border-r-2 border-primaryColor">
              Terms of use
            </p>
            <p>privacy policy </p>
          </span>
        </div>

        <div className="grid-2 md:flex md:flex-col md:items-center md:justify-center  md:mt-4">
          <div className=" gap-4  capitalize links leading-[20.69px] flex flex-col   ">
            <h2 className="text-[14px] leading-[24.1px] text-primaryColor font-semibold  ">
              useful links
            </h2>
            <a href="/">overview</a>
            <a href="/">timeline</a>
            <a href="#faq">FAQ</a>
            <a href="/register">register </a>

            <div className="mb-12 md:mb-0">
              <Media />
            </div>
          </div>
        </div>

        <div className="grid-3 md:flex md:flex-col md:items-center md:justify-center">
          <h2 className="text-primaryColor font-semibold text-[14px] leading-[24.14px] capitalize mb-4   md:text-left">
            contact us
          </h2>
          <span className="mb-6 leading-[14.63px] flex flex-row gap-4 ">
            <img src={contact} alt="contact" />
            +234 6707653444
          </span>
          <span className="mb-14 items-start leading-[18.95px] flex flex-row gap-4  ">
            <img src={location} alt="location" />
            27,Alara Street
            <br /> Yaba 100012 <br /> Lagos State
          </span>
        </div>
      </div>
      <p className="leading-[14.63px] text-center  ">
        All rights reserved. © getlinked Ltd.
      </p>
    </footer>
  );
};

export default Footer;
