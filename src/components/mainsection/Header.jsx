import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiPhoneCall } from "react-icons/bi";
import Group34 from "../../assets/Group34.svg";
import "./Header.css";
import { AiOutlineClose } from "react-icons/ai";
const Header = () => {
  const [toggle, setISToggle] = useState(false);

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
              <BiPhoneCall />
              +92 333 0000111
            </p>
          </div>
          <div className="button--nav">
            <button className="bt-nav">BOOK NOW</button>
          </div>
        </div>
        <div className="main-hamburger">
          {toggle ? (
            // Show menu items and phone when toggle is true
            <>
              <div className="navbar-container-links--1">
                <AiOutlineClose
                  className="close"
                  onClick={() => setISToggle(false)}
                />
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
                <div className="phone--1">
                  <p>
                    <BiPhoneCall />
                    +92 333 0000111
                  </p>
                </div>
                <div className="button--nav--1">
                  <button className="bt-nav--1">BOOK NOW</button>
                </div>
              </div>
            </>
          ) : (
            // Show hamburger icon when toggle is false
            <RxHamburgerMenu
              className="hamburger"
              onClick={() => setISToggle(true)} // Clicking the hamburger sets toggle to true
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
