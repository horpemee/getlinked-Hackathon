import React from "react";
import "./register.css";
import Designer from "./img/3d-graphic-designer-showing-thumbs-up-png 1.svg";
import EmojiG from "./img/1f6b6-2640.svg";
import EmojiB from "./img/image_processing20200511-10310-13mnlsx.svg";
import line from "./img/Line 9.svg";
import sata from "./img/sata gra (1).svg";
import Form from "./form";

const Register = () => {
  return (
    <div className=" backdrop  font-normal px-16 py-14 border-b-[1px] border-customWhite bg-darkPurple text-[12px]  font-mont  text-white lg:px-32   ">
      <h1 className="  text-left font-clash font-bold text-[15px] leading-[18.45px] text-primaryColor mb-6 sm:hidden">
        Register
      </h1>

      <div className="lg:flex lg:flex-row    lg:items-start lg:justify-between    ">
        <div className="mt-8 flex flex-col items-center relative justify-center lg:mt-0  ">
          <img
            src={Designer}
            alt="designer"
            className="lg:w-[717px] lg:h-[717px]"
          />
          <img
            src={sata}
            alt="star"
            className="absolute right-0 top-24  lg:w-[28px] lg:h-[25px] lg:left-24 lg:top-12"
          />
        </div>

        <form className=" md:px-12 md:py-8 lg:py-14 lg:px-20 box md:w-[800px] md:flex md:flex-col md:text-start">
          <div className="flex mt-8 flex-col gap-6 items-start justify-start  ">
            <h1 className="  text-left font-clash font-bold text-[15px] leading-[18.45px] text-primaryColor mb-6 sm:hidden lg:block lg:text-[32px] lg:leading-[39.36px] ">
              Register
            </h1>
            <span className="flex flex-row gap-6 items-center">
              <h2 className=" text-white text-left font-normal leading-[14.63px] lg:text-[14px] lg:leading-[17.07px]">
                Be part of this movement!
              </h2>
              <div className="relative ">
                <img src={line} alt="line" />
                <div className="absolute bottom-2  left-6 ">
                  <img
                    src={EmojiG}
                    alt="emoji"
                    className=" absolute lg:w-[46px] lg:h-[32px] lg:left-12 lg:bottom-0 "
                  />
                </div>
                <div className="absolute bottom-2 right-4">
                  <img
                    src={EmojiB}
                    alt="emoji"
                    className="lg:w-[23px] lg:h-[28px]"
                  />
                </div>
              </div>
            </span>
          </div>

          <h1 className="mt-3 uppercase text-left text-white text-[20px] leading-[24.38px] font-normal lg:text-[24px] lg:leading-[29.26px]">
            create your account
          </h1>
          <Form />
        </form>

        <div className=" mt-16   "></div>
      </div>
    </div>
  );
};

export default Register;
