import React from "react";
import "./Fleettop.css";
const FleetTop = () => {
  return (
    <>
      <div className="fleettop-main-container" id="fleet">
        <div className="fleettop-container-1">
          <div className="heading">
            Our <span>Vehicle</span> Fleet
          </div>
        </div>
        <div className="fleettop-container-2">
          <div className="fleet-text">
            <p>
              Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
          </div>
        </div>
      </div>
      <div className="fleet-main-container-2">
        <div className="fleet-butons">
          <button className="bt-1">TOYOTA</button>
          <button className="bt">HONDA</button>
          <button className="bt">MERCEDES</button>
          <button className="bt">BMW</button>
          <button className="bt">KIA</button>
        </div>
      </div>
    </>
  );
};

export default FleetTop;
