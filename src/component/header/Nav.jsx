import React from "react";
import Close from "./Vector (1).svg";
import { Link } from "react-router-dom";
import Faq from "../faqs/Faq";
const Nav = ({ toggleMenu }) => {
  // const iconGradient = "linear-gradient(180deg, #903AFF 0%, #FF26B9 100%)";
  const register =
    "linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)";

  return (
    <div className=" absolute  z-10  overflow-hidden ">
      <nav className="bg-customBurger fixed px-10 py-6 h-full w-full top-0 left-0 font-inter font-medium text-[18px] leading-[21.78px] flex flex-col  ">
        <span className="   absolute right-10   pointer">
          <img
            src={Close}
            alt="close icon"
            className="md:hidden  p-2 w-[50px] h-[50px] border-4   pointer  "
            onClick={toggleMenu}
            style={{
              borderImage: `${register}`,
              borderImageSlice: "1",
              borderRadius: "50%",
            }}
          />
        </span>
        <div className="mt-24 flex flex-col  ">
          {[
            ["Timeline", "/"],
            ["Overview", "/overview"],
            ["FAQs", "/faq"],
            ["Contact", "/contact"],
          ].map(([links, path]) => (
            <Link to={path} className="text-white  mb-10">
              {links}
            </Link>
          ))}
        </div>

        <button
          className="text-[16px] py-4 w-[172px] rounded text-white  leading-[19.5px] font-mont font-normal"
          style={{
            background: register,
          }}
        >
          <a href="/register">Register</a>
        </button>
        {/* <p
          className="text-white border-4 border-register p-2  "
          style={{
            borderImage: `${register}`,
            borderImageSlice: "1",
            borderRadius: "50%",
          }}
        >
          hello
        </p> */}
      </nav>
    </div>
  );
};

export default Nav;
