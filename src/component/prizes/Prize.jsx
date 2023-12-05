import React from "react";
import Medal from "./img/9486889 1.svg";
import Gold from "./img/gold_medal 1.svg";
import Silver from "./img/silver_medal 1.svg";
import Bronze from "./img/bronze_medal 1.svg";
import LibertyA from "./img/Liberty company logo white colour.svg";
import LibertyLogo from "./img/Liberty company logo white.svg";
import Whisper from "./img/wisper logo white.svg";
import Winwise from "./img/Winwise logo White colour 1.svg";
import Visual from "./img/Vizual Plus.png";
import Paybox from "./img/Paybox.png";
import spstar from "./img/sata gra (1).png";
import wstar from "./img/star (4).png";
import dstar from "./img/star pu (2).png";
import gstar from "./img/star (5).png";

const Prize = () => {
  return (
    <div className="relative font-normal px-10 py-12 border-b-[1px] border-customWhite    bg-customBurger flex text-[12px] flex-col font-mont text-center  text-white  items-center justify-center lg:px-32 lg:block   ">
      <div className="lg:w-full lg:flex lg:flex-row lg:justify-between lg:items-center">
        <div className=" lg:w-2/3 ">
          <img src={dstar} alt="spstar" className="absolute left-16 top-8" />
        </div>
        <div className=" lg:w-1/3   lg:text-left">
          <h1 className="font-clash font-bold text-[20px] leading-[24.6px] lg:text-[32px] lg:leading-[39.36px]">
            Prizes and <br />{" "}
            <span className="text-primaryColor ">Rewards</span>
          </h1>
          <img src={dstar} alt="spstar" className="absolute right-28 top-16" />

          <h2 className=" px-6 mt-4  leading-[20.51px] lg:text-[16px] lg:leading-[27.34px] lg:px-0 lg:w-[400px]">
            Highlight of the prizes or rewards for winners and for participants.
          </h2>
        </div>
      </div>

      <div className="lg:flex lg:flex-row lg:gap-4 lg:items-end lg:justify-center lg:w-full     ">
        <div className="lg:w-1/2 lg:flex lg:justify-center">
          <img
            src={Medal}
            alt="medal"
            className="my-16 lg:w-[548px] lg:h-[482px]"
          />
        </div>
        <img src={wstar} alt="wstar" className=" absolute top-[38%] left-16" />
        <img src={wstar} alt="wstar" className="absolute top-[40%] right-16" />

        {/* Medals */}
        <div className=" relative my-16 gap-4 text-[12px]  flex flex-row lg:gap-8  lg:flex lg:flex-row lg:justify-center lg:items-end lg:relative lg:top-0 lg:w-1/2  ">
          {/* <img src={wstar} alt="wstar" className="absolute top-0 right-0" /> */}

          {/* Silver */}
          <div className="  relative px-4 w-1/3  h-[150px] justify-center items-center bg-silver  flex flex-col medal-box  border-primaryColor rounded-lg border-[1px] lg:h-[296px] lg:w-[212px] ">
            <img
              src={Silver}
              alt="silver"
              className=" absolute top-0  -mt-12 lg:w-[179px] lg:h-[180px] lg:-mt-24"
            />
            <div className="lg:mt-16">
              <p className="font-bold leading-[25.97px] lg:text-[36px]   ">
                2nd
              </p>
              <p className="font-semibold leading-[25.97px] lg:text-[24px]  ">
                Runner
              </p>
              <p className="font-bold text-[14px] leadimg-[30.3px] text-primaryColor lg:text-[32px]  ">
                N300,000
              </p>
            </div>
          </div>

          {/* Gold */}
          <div className=" mt-4 relative w-1/3 px-4 h-[150px] bg-gold flex flex-col justify-center items-center  border-customPurple rounded-lg border-[1px] lg:h-[347px] lg:w-[212px] lg:-mb-8">
            <img
              src={Gold}
              alt="gold"
              className=" absolute top-0 max-w-sm -mt-24 lg:w-[296px] lg:h-[296px]  lg:-mt-40"
            />
            <div className="lg:mt-20">
              <p className="font-bold leading-[25.97px] lg:text-[36px]  ">
                1st
              </p>
              <p className="font-semibold leading-[25.97px] lg:text-[24px]  ">
                Runner
              </p>
              <p className="font-bold text-[14px] leadimg-[30.3px] text-customPurple  lg:text-[32px]  ">
                N400,000
              </p>
            </div>
          </div>

          {/* Bronze */}
          <div className=" w-1/3 px-4 flex flex-col items-center justify-center h-[150px]  bg-silver border-primaryColor rounded-lg border-[1px] relative lg:h-[296px] lg:w-[212px]">
            <img
              src={Bronze}
              alt="bronze"
              className="absolute top-0 -mt-12 lg:w-[179px] lg:h-[180px] lg:-mt-24"
            />
            <div className="lg:mt-16">
              <p className="font-bold leading-[25.97px] lg:text-[36px]  ">
                3rd
              </p>
              <p className="font-semibold leading-[25.97px] lg:text-[24px]  ">
                Runner
              </p>
              <p className="font-bold text-[14px] leadimg-[30.3px] text-primaryColor lg:text-[32px] lg:leading-[69.25px]">
                N150,000
              </p>
            </div>
          </div>
        </div>
      </div>

      <img src={gstar} alt="gstar" className="absolute top-[62%] right-36" />

      <div className="sponsors my-10  ">
        <div className="lg:flex lg:flex-col lg:items-center">
          <h1 className="font-clash font-bold text-[20px] leading-[27.5px] lg:text-[32px]  ">
            Partners and Sponsors
          </h1>
          <p className=" leading-[20.5px] mt-4 lg:text-[14px] lg:leading-[27.5px] lg:w-[500px]">
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>

        {/* partners and sponsors */}
        <div className="relative my-12 py-6 px-4 flex flex-col items-center justify-center  border-primaryColor   lg:py-28  lg:px-0  rounded-lg border-[1px]  ">
          <img src={dstar} alt="wstar" className="absolute top-0 left-4" />

          <img
            src={spstar}
            alt="spstar"
            className="absolute top-16 left-[55%]"
          />
          <img src={wstar} alt="wstar" className="absolute bottom-0 right-12" />

          <div className="flex flex-row ">
            {/* liberty assured */}
            <div class="relative    w-1/3 px-8  py-4">
              <img
                src={LibertyA}
                alt="logo"
                className="liberty lg:w-[120.56px] lg:h-[113.90px]   "
              />
              <div class="absolute top-0 right-0 h-12 bg-primaryColor w-[2px] lg:h-28   "></div>
              <div class="absolute bottom-0 left-0 w-[80%] bg-primaryColor h-[2px]"></div>
            </div>

            {/* liberty pay */}
            <div class="relative   w-1/3  px-6 lg:px-10 py-6 lg:flex lg:items-center  ">
              <img
                src={LibertyLogo}
                alt="logo"
                className="liberty lg:w-[213.19px] lg:h-[40.43px]   lg:bottom-12   "
              />
              <div class="absolute top-0 right-0 h-12 bg-primaryColor w-[2px] lg:h-28  "></div>
              <div class="absolute bottom-0 w-[70%] bg-primaryColor h-[2px]"></div>
            </div>

            {/* winwise */}
            <div class="relative   w-1/3  px-8 py-4">
              <img
                src={Winwise}
                alt="logo"
                className="liberty lg:w-[131.59px] lg:h-[107.33px]    "
              />
              <div class="absolute bottom-0 right-0 w-[80%] bg-primaryColor h-[2px]"></div>
            </div>
          </div>

          <div className="flex flex-row">
            {/* Whisper */}
            <div class="relative   w-1/3 px-6 py-4">
              <img
                src={Whisper}
                alt="logo"
                className="liberty lg:w-[147.03px] lg:h-[109.54px]    "
              />
              <div class="absolute bottom-0 right-0 h-12 bg-primaryColor w-[2px] lg:h-28  "></div>
            </div>

            {/* paybox */}
            <div class="relative   w-1/3  flex items-center justify-center  px-6 py-4 lg:flex lg:items-end ">
              <img
                src={Paybox}
                alt="logo"
                className="liberty lg:w-[204.37px]     "
              />

              <div class="absolute bottom-0 right-0 h-12 bg-primaryColor w-[2px] lg:h-28   "></div>
            </div>

            {/* virtualplus */}
            <div class="relative   w-1/3  px-6 py-4 lg:flex lg:items-end ">
              <img
                src={Visual}
                alt="logo"
                className="liberty  lg:w-[231px]   "
              />
            </div>
          </div>
        </div>
        {/* <div class="relative">
          <p class="relative ">Your content</p>

          <div class="absolute inset-0 border-2 border-black"></div>
        </div> */}
      </div>
    </div>
  );
};

export default Prize;
