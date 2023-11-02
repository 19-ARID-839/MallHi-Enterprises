import React from "react";
//
import { BiPhoneCall } from "react-icons/bi";
import Group34 from "../../assets/Group34.svg";
import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-container-1">
          <div className="font-mall">
            <img src={Group34} alt="" />
          </div>
        </div>
        <div className="navbar-container-2">
          <div className="navbar-container-links">
            <p>
              <a href="#home">HOME</a>
            </p>
            <p>
              <a href="#fleet">FLEET</a>
            </p>
            <p>
              <a href="#service">SERVICES</a>
            </p>
            <p>
              <a href="#about">ABOUT US</a>
            </p>
            <p>
              <a href="#contact">CONTACT US</a>
            </p>
          </div>
        </div>
        <div className="navbar-container-3">
          <div className="phone">
            <p>
              {" "}
              <BiPhoneCall />
              +92 333 0000111
            </p>
          </div>
          <div className="button--nav">
            <button className="bt-nav">BOOK NOW</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
