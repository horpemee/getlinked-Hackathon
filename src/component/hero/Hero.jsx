import React from "react";
import Shape from "./images/Vector 4.svg";
import Globe from "./images/1f4a5.svg";
import bStar from "./images/star.svg";
import sStar from "./images/star (1).svg";
import Hacker from "./images/Hack.svg";
import Creative from "./images/Creative 1.svg";
import Chain from "./images/chain.svg";

const Hero = () => {
  const register =
    "linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)";

  return (
    // hero section
    <div className="  px-10 py-6   items-center flex flex-col text-center bg-customBurger lg:px-0   ">
      <div className="relative   md:w-full md:text-right   ">
        <h2 className="font-mont font-bold italic text-[16px] leading-[19.5px] text-white my-4 md:left-0 lg:text-[38px] lg:mr-20 ">
          Igniting a Revolution in HR Innovation
        </h2>
        <img
          src={Shape}
          alt="vec"
          className="absolute right-0 top-[38px] md:w-[253px] md:right-20"
        />

        <div className=" md:flex md:flex-row lg:pl-28  ">
          <div className="grid1 md:flex md:flex-col md:items-start md:text-left lg:w-1/2   ">
            <section className=" relative ">
              <div className="icons mt-2 relative">
                <img
                  src={bStar}
                  alt="bStar"
                  className="absolute left-28 lg:w-[26px] lg:h-[32px]"
                />
                <img
                  src={sStar}
                  alt="sStar"
                  className="absolute right-8 lg:top-10 lg:-right-28   lg:w-[26px] lg:h-[32px]"
                />
              </div>

              {/* <img src={Heroes} alt="heroImage" className='absolute'  /> */}
              <div className="relative  mt-6 py-4 lg:pt-24 lg:pb-10">
                <h1 className="font-clash font-bold text-[32px] leading-[39.36px] text-white lg:text-[80px] lg:leading-[98.4px] ">
                  getlinked Tech
                </h1>
                <img
                  src={Creative}
                  alt="creative"
                  className="absolute right-[70px] top-[0px] lg:w-[53px] lg:h-[73px] lg:right-[28%] lg:top-12"
                />

                {/* <div className="lg:bg-primaryColor lg:flex"> */}
                <h1 className="font-clash font-bold text-[32px] leading-[39.36px] text-white flex flex-row items-center justify-center md:items-start md:justify-start lg:text-[80px] lg:leading-[98.4px]">
                  Hackathon <span className="text-primaryColor"> 1.0</span>
                  <div className="flex flex-row  place-items-start ">
                    <img
                      src={Chain}
                      alt="chain"
                      className="lg:w-[86px] lg:h-[86px]"
                    />
                    <img
                      src={Globe}
                      alt="vector"
                      className="lg:w-[58px] lg:h-[58px] lg:flex lg:items-end"
                    />
                  </div>
                </h1>
                {/* </div> */}

                <p className="font-mont font-normal px-8 text-[13px] leading-[21.58px] text-white my-2 md:px-0 lg:text-[20px] lg:leading-[33.2px] md:w-2/3">
                  Participate in getlinked tech Hackathon 2023 stand a chance to
                  win a Big prize
                </p>
              </div>
            </section>

            <div className="flex relative flex-row items-center justify-center lg:mb-12 ">
              <button
                className="text-[16px] py-4 w-[172px] rounded text-white  leading-[19.5px] font-mont font-normal items-center "
                style={{
                  background: register,
                }}
              >
                Register
              </button>
              <img src={sStar} alt="sStar" className="absolute right-[15%]" />
            </div>

            <span className="flex flex-row items-center gap-6 justify-center my-4 text-[48px] leading-[63.84px] font-normal text-white lg:text-[64px] lg:leading-[85.12px]">
              <p className="font-unica">
                00
                <sub className="text-[14px] font-mont leading-[18.62px]">H</sub>
              </p>
              <p className="font-unica">
                00
                <sub className="text-[14px] font-mont  leading-[18.62px]">
                  M
                </sub>
              </p>
              <p className="font-unica">
                00
                <sub className="text-[14px] font-mont  leading-[18.62px]">
                  S
                </sub>
              </p>
              {/* 00 00 */}
            </span>
          </div>

          <div className="grid2 md:m-0 md:w-1/2 md:flex   md:justify-end ">
            <img
              src={Hacker}
              alt="hacker"
              className="lg:w-[828px] lg:h-[715px] lg:pt-12   "
            />
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
