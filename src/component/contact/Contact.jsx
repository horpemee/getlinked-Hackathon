import React from "react";
import "./contact.css";
import Media from "../footer/Media.js";
import sStar from "../register/img/star pu.svg";
import bStar from "./img/star (1).svg";
import sata from "../register/img/sata gra (1).svg";
import star from "../register/img/star.svg";
import back from "./img/Group 1.png";
import { Link } from "react-router-dom";

const Contact = ({ text, flexDirection = "column" }) => {
  const submit =
    "linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)";
  return (
    <div className="relative backdrop font-semibold px-10 py-14 border-b-[1px] border-customWhite    bg-darkPurple flex text-[12px] flex-col font-mont    text-white  items-center justify-center">
      <img src={sata} alt="star" className="absolute top-20 right-[50%]" />

      <header className="">
        <Link to="/">
          <img src={back} alt="back" className="mb-12" />
        </Link>

        <h1 className="text-left pr-10  font-clash font-bold text-[20px] leading-[24.6px] text-primaryColor mb-6">
          Questions or need assistance? <br /> Let us know about it{" "}
        </h1>
        <img src={star} alt="star" className="absolute right-20 top-40" />
      </header>

      <h2 className=" text-white pr-28 mt-4 font-normal leading-[14.63px]">
        Email us below to any question related to our event
      </h2>

      <form className=" w-full flex   flex-col gap-4 mt-10">
        <input type="text" placeholder="Team's Name" className="bg-input" />
        <input type="number" placeholder="Phone no" className="bg-input" />
        <input type="email" placeholder="Email" className="bg-input" />

        <textarea
          type="text"
          placeholder="Message"
          className="message mb-8 bg-input text-[16px] leading-[19.5px] text-white"
        ></textarea>
        <img src={bStar} alt="star" class="absolute right-6 bottom-[32%] " />

        <img src={sStar} alt="star" className="absolute bottom-[22%]" />

        <button
          className="w-1/2 flex text-center m-auto   items-center pointer justify-center text-[16px] px-14 py-4 rounded text-white  leading-[19.5px] font-mont font-normal"
          style={{
            background: submit,
          }}
        >
          Submit
        </button>
      </form>

      <div className=" mt-16   ">
        <Media text="Share on" flexDirection="column" />
      </div>
    </div>
  );
};

export default Contact;
