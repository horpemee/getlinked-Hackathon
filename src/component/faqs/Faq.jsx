import * as React from "react";
import FaqContainer from "./FaqContainer";
import pStar from "./icon/star pu.png";
import QuestionAvatar from "./icon/cwok_casual_21 1 (3).png";
import spStar from "./icon/sata gra.png";
import star from "./icon/star.png";
import Bstar from "./icon/star (1).png";
// import { Link } from "react-router-dom";

// import Plus from "./icon/+.png"
// import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import Questionmark from "./icon/_.png";
import Smallmark from "./icon/_ (1).png";
import Smamark from "./icon/_ (2).png";
import "./faq.css";

const Faq = () => {
  return (
    <div className="md:grid md:grid-cols-2 bg-darkPurple lg:px-32  ">
      {/* <Link to="/faq"> */}
      <div className="    px-10 text-center text-white py-14 font-mont font-normal text-[12px] lg:w-[70%] ">
        <img src={pStar} alt="pstar" />
        <h1 className="font-clash font-bold text-[20px] leading-[26.6px] lg:text-left lg:text-[32px] lg:leading-[42.56px] ">
          Frequently Ask
          <br /> <span className="text-primaryColor ">Question</span>
        </h1>
        <h2 className="font-bold  mb-6   leading-[27.5px] lg:text-left lg:text-[14px]">
          We got answers to the questions that you might want to ask about
          getlinked Hackathon 1.0
        </h2>
        <FaqContainer />
      </div>
      <div className=" mt-12 pb-12 flex flex-col items-center justify-center relative">
        <span className=" flex flex-row  ">
          <img
            src={Smallmark}
            alt="mark"
            className=" absolute left-[20%] top-2"
          />
          <img
            src={Questionmark}
            alt="mark"
            className="absolute left-[40%] top-[-10%] "
          />
          <img src={spStar} alt="pstar" />
          <img
            src={spStar}
            alt="pstar"
            className="absolute top-[35%] left-[25%]"
          />
          <img
            src={star}
            alt="star"
            className="absolute bottom-[40%] left-[15%]"
          />
          <img
            src={Bstar}
            alt="bstar"
            className="absolute bottom-12 right-[30%]"
          />
          <img src={Smamark} alt="mark" className="absolute right-[40%]" />
        </span>

        <div>
          <img
            src={QuestionAvatar}
            alt="question"
            className="lg:w-[741px] lg:h-[741px]"
          />
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default Faq;
