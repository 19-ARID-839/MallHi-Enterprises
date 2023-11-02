import React from "react";
import "./ServicesCard.css";
import Pro from "./Pro";
function ncard(val) {
  return (
    <>
      <div className="main-conatiner-services-card">
        <div className="card--1">
          <div className="card--img">
            <img src={val.img} alt="" />
          </div>
          <div className="title-descri">
            <div className="card--title">
              <p>{val.title}</p>
            </div>
            <div className="card-description">
              <p>{val.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
const ServicesCard = () => {
  return <div className="aw">{Pro.map(ncard)}</div>;
};

export default ServicesCard;
