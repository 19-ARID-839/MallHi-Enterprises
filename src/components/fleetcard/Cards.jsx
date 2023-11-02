import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import { BsFillCartFill } from "react-icons/bs";
import "./Card.css";

import Data from "./Data";

function ncard(val) {
  return (
    <div className="dis">
      <div className="card">
        <div className="card-image">
          <img src={val.image} alt="" />
        </div>
        <div className="title-rating">
          <div className="card-title">
            <p className="cardtitle">{val.name}</p>
          </div>
          <div className="card-rating">
            <p className="cardrating">
              <AiTwotoneStar className="rating-icons" />
              {val.rating}
            </p>
          </div>
        </div>
        <div className="card-description">
          <p className="card-description">{val.description}</p>
        </div>
        <div className="card-profile">
          <p>
            <BiSolidUser className="ico" />
            {val.user}
          </p>
          <p>
            <BsFillCartFill className="ico" />
            {val.cart}
          </p>
        </div>
      </div>
    </div>
  );
}
const Cards = () => {
  return (
    <>
      <div className="Products">{Data.map(ncard)}</div>
    </>
  );
};

export default Cards;
