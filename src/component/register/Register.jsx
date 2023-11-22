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
    <div className=" backdrop  font-normal px-16 py-14 border-b-[1px] border-customWhite    bg-darkPurple   text-[12px]   font-mont    text-white   ">
      <h1 className="  text-left font-clash font-bold text-[15px] leading-[18.45px] text-primaryColor mb-6">
        Register
      </h1>

      <div className="mt-8 flex flex-col items-center relative justify-center">
        <img src={Designer} alt="designer" />
        <img src={sata} alt="star" className="absolute right-0 top-24" />
      </div>

      <div className="flex mt-8 flex-row gap-6 items-center justify-start  ">
        <h2 className=" text-white text-left font-normal leading-[14.63px]">
          Be part of this movement!
        </h2>
        <div className="relative ">
          <img src={line} alt="line" />
          <div className="absolute bottom-2  left-6 ">
            <img src={EmojiG} alt="emoji" className="  " />
          </div>
          <div className="absolute bottom-2 right-4">
            <img src={EmojiB} alt="emoji" />
          </div>
        </div>
      </div>

      <h1 className="mt-3 uppercase text-left text-white text-[20px] leading-[24.38px] font-normal">
        create your account
      </h1>
      <Form />
      <div className=" mt-16   "></div>
    </div>
  );
};

export default Register;
