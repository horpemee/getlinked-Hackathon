import { useState } from "react";
import React from "react";
import Menuicon from "./Vector.svg";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const register =
    "linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)";
  const [menu, setMenu] = useState(false);

  const togglemenu = () => {
    setMenu(!menu);
  };

  return (
    <header className=" ">
      <div className="px-10 py-6 border-b-[1px] border-customWhite bg-customBurger flex flex-row font-clash font-bold text-[15px] leading-[18.45px] items-center justify-between md:text-[36px] md:leading-[44.28px]   md:pt-10 md:pb-6 lg:px-32 lg:pt-10 lg:pb-6 ">
        <Link to="/">
          <h1 className="text-white cursor ">
            get<span className="text-primaryColor">linked</span>
          </h1>
        </Link>

        <img
          src={Menuicon}
          alt="menu icon"
          onClick={togglemenu}
          className="md:hidden"
        />

        <div className="sm: hidden md:flex justify-between   ">
          <div className="  ">
            {[
              ["Timeline", "/"],
              ["Overview", "#overview"],
              ["FAQs", "#faq"],
              ["Contact", "/contact"],
            ].map(([links, path]) => (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <a
                key={links}
                href={typeof path === "string" ? path : "#"}
                className="text-white  text-[16px] leading-[19.5px] md:mx-2 lg:mx-12  md:font-normal register"
              >
                {links}
              </a>
            ))}
            <button
              className={`text-[16px] py-3 font-normal rounded text-white  leading-[19.5px] font-mont md:ml-4 md:w-[132px]  lg:ml-24 hover:bg-white hover:border-${register}`}
              style={{
                background: register,
              }}
            >
              <a href="/register">Register</a>
            </button>
          </div>
        </div>
      </div>

      <div className="md:hidden">{menu && <Nav toggleMenu={togglemenu} />}</div>
    </header>
  );
};

export default Header;
