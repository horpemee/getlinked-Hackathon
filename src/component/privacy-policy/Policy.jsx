import React from "react";
import Tick from "./img/list terms.png";
import Backdrop from "./img/Vector.png";
import Img from "./img/08 1.png";
import sstar from "./img/star (6).png";
import bdstar from "./img/star pu (3).png";
import swstar from "./img/star (7).png";
import mwstar from "./img/star (8).png";

const Policy = () => {
  const readmore =
    "linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)";

  return (
    <div className="relative font-normal px-10 py-14 border-b-[1px] border-customWhite bg-customBurger flex text-[12px] flex-col font-mont text-center  text-white  items-center justify-center lg:px-32 lg:pr-20 lg:text-left  lg:py-20 lg:w-full ">
      <div className="md:grid md:grid-cols-2">
        <div className="grid1   lg:my-16  lg:px-16">
          <img src={sstar} alt="sstar" className="absolute top-8 right-28" />
          <h1 className="font-clash font-bold text-[20px] leading-[24.6px] lg:text-[32px] lg:leading-[39.36px] ">
            Privacy Policy and <br />{" "}
            <span className="text-primaryColor ">Terms</span>
          </h1>
          <h2 className="text-ofWhite leading-[27.5px] lg:text-[14px] ">
            Last updated on September 12, 2023
          </h2>
          <p className="leading-[22.61px] mt-10 lg:text-[14px] lg:leading-[26.38px] lg:w-1/2">
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>
          <img
            src={bdstar}
            alt="bdstar"
            className="absolute top-[15%] right-16"
          />
          <img
            src={bdstar}
            alt="bdstar"
            className="absolute top-[47%] left-2"
          />

          <div className="mt-14 content-box py-14 px-4 border-primaryColor rounded-lg border-[1px] lg:text-[14px] lg:leading-[30.3px] lg:p-20 lg:w-[80%] lg:flex lg:flex-col  lg:items-center">
            <p className="leading-[25.97px]">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>

            <h2 className="text-left mt-10 primaryColor font-bold text-[13px] leading-[28.13px] text-primaryColor lg:text-[16px] lg:leading-[34.62px] lg:items-start lg:w-full  ">
              Licensing Policy
            </h2>
            <p className="text-left leading-[25.97px] font-bold lg:items-start lg:w-full">
              Here are terms of our Standard License:
            </p>
            <span className="mt-6 leading-[21.11px] flex flex-row gap-4 items-start text-left">
              <img src={Tick} alt="tick" />
              The Standard License grants you a non-exclusive right to navigate
              and register for our event
            </span>

            <span className="mt-6 mb-6 leading-[21.95px] flex flex-row gap-4 items-start text-left">
              <img src={Tick} alt="tick" />
              You are licensed to use the item available at any free source
              sites, for your project developement
            </span>

            <button
              className="text-[12px] mr-4 py-3  px-4 rounded text-white  leading-[14.63px] font-mont font-normal lg:text-[16px] lg:leading-[19.5px] lg:px-8 "
              style={{
                background: readmore,
              }}
            >
              Read More
            </button>
          </div>
        </div>
        <div className=" my-16 relative flex flex-col items-center justify-center   lg:justify-start  lg:mt-2">
          <img src={bdstar} alt="bdstar" className="absolute top-16 left-4" />
          <img src={swstar} alt="swstar" className="absolute top-24 right-24" />
          <img
            src={mwstar}
            alt="mwstar"
            className="absolute bottom-16 left-16"
          />
          <img
            src={sstar}
            alt="mwstar"
            className="absolute bottom-14 right-12"
          />
          <img
            src={Backdrop}
            alt="backdrop"
            className="z-10 lg:w-[530px] lg:h-[648px]  "
          />
          <img
            src={Img}
            alt="img"
            className=" mr-8 -mt-52  lg:w-[559px] lg:h-[749px] lg:absolute lg:top-[40%] lg:left-18 "
          />
        </div>
      </div>
    </div>
  );
};

export default Policy;
