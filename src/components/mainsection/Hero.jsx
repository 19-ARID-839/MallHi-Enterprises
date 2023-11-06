import React from "react"; // Add this import statement

import { BsFacebook, BsYoutube } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import hero2 from "../../assets/hero2.png";
//
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <div className="main---container-hero">
        <div className="hero--conatiner--1">
          <div className="heading--hero">
            <p>
              <span>Mallhi</span> Rent A Car
            </p>
          </div>
          <div className="hero---text1">
            <p>
              Unmatched Wheels, Unforgettable Journeys. Your Reliable Ride
              Awaits Rent a Car, Embrace Convenience, and Explore with
              Confidence. Mallhi Transport: Where Travel Dreams Come True
            </p>
          </div>
          <div className="social--hero">
            <p>
              <BsFacebook />
            </p>
            <p>
              <AiFillInstagram />
            </p>
            <p>
              {" "}
              <BsYoutube />
            </p>
          </div>
        </div>
        <div className="hero--container--2">
          <img src={hero2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
