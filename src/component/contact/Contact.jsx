import React from "react";
import "./contact.css";
import Media from "../footer/Media.js";
import sStar from "../register/img/star pu.svg";
import bStar from "./img/star (1).svg";
import sata from "../register/img/sata gra (1).svg";
import star from "../register/img/star.svg";
import back from "./img/Group 1.png";
import { Link } from "react-router-dom";

const Contact = ({ text, flexDirection = "column", alignItems = "start" }) => {
  const submit =
    "linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)";
  return (
    <div className=" backdrop relative font-semibold px-10 py-14 border-b-[1px] border-customWhite    bg-customBurger flex text-[12px] flex-col font-mont    text-white  items-center justify-center    lg:px-32  lg:h-screen ">
      <img
        src={sata}
        alt="star"
        className="absolute top-20 right-[50%] lg:left-[15%] lg:w-[21px] lg:h-[25px]"
      />
      <div className="md:flex md:flex-row md:w-10/12    md:items-start md:justify-between  ">
        <header className=" ">
          <Link to="/">
            <img src={back} alt="back" className="mb-12 md:hidden" />
          </Link>

          <div className=" md:mt-20 md:flex md:flex-col md:items-start sm:hidden ">
            <h1 className="text-primaryColor text-[32px] font-bold leading-[39.36px]">
              Get in touch
            </h1>
            <span className="text-white text-[16px] font-normal leading-[19.5px]   ">
              <p className="my-6">
                Contact <br /> Information
              </p>
              <p className="my-4">
                27, Alara street <br /> yaba 100012 <br /> lagos state
              </p>
              <p className="my-4">Call Us : 07067981819</p>
              <p className="mt-4">we are open from Monday-Friday</p>
              <p>08:00am - 05:00pm</p>
            </span>
            <div className=" mt-12 self-start  ">
              <Media
                text="Share on"
                flexDirection="column"
                alignItems={alignItems}
              />
            </div>
          </div>

          <h1 className="text-left pr-10  font-clash font-bold text-[20px] leading-[24.6px] text-primaryColor mb-6 sm:hidden">
            Questions or need assistance? <br /> Let us know about it{" "}
          </h1>
          <img
            src={star}
            alt="star"
            className="absolute right-20 top-40 lg:right-64 lg:top-14 lg:w-[26px] lg:h-[32px]"
          />
        </header>

        <h2 className=" text-white pr-28 mt-4 font-normal leading-[14.63px] sm:hidden">
          Email us below to any question related to our event
        </h2>

        <form className="md:px-12 md:py-8 lg:py-14 lg:px-20 box w-full flex   flex-col gap-4 mt-10 md:w-[650px] bg-darkPurple  ">
          <h1 className="text-left pr-10  font-clash font-bold text-[20px] leading-[24.6px] text-primaryColor mb-6">
            Questions or need assistance? <br /> Let us know about it{" "}
          </h1>
          <h2 className=" text-white pr-28 mt-4 font-normal leading-[14.63px] sm:mt-0 md:hidden">
            Email us below to any question related to our event
          </h2>
          <input type="text" placeholder="Team's Name" className="bg-input" />
          <input type="number" placeholder="Phone no" className="bg-input" />
          <input type="email" placeholder="Email" className="bg-input" />

          <textarea
            type="text"
            placeholder="Message"
            className="message mb-8 bg-input text-[16px] leading-[19.5px] text-white"
          ></textarea>
          <img
            src={bStar}
            alt="star"
            class="absolute right-6 bottom-[32%] lg:bottom-[10%] lg:right-44 lg:w-[30px] lg:h-[36px]"
          />

          <img
            src={sStar}
            alt="star"
            className="absolute bottom-[22%] lg:bottom-[23%] lg:left-[46%] lg:w-[26px] lg:h-[32px]"
          />

          <button
            className="w-1/2 flex text-center m-auto   items-center pointer justify-center text-[16px] px-14 py-4 rounded text-white  leading-[19.5px] font-mont font-normal"
            style={{
              background: submit,
            }}
          >
            Submit
          </button>
        </form>

        <div className=" mt-16 md:hidden text-[16px] leading-[19.5px]  ">
          <Media text="Share on" flexDirection="column" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
