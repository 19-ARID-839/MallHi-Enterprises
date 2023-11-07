import React from "react";
import a from "../../assets/a.png";
import Frame21 from "../../assets/Frame21.svg";
import Frame22 from "../../assets/Frame22.svg";
import Frame23 from "../../assets/Frame23.svg";
import Frame24 from "../../assets/Frame24.svg";
import "./choose.css";

const Choose = () => {
  return (
    <div className="main-container-choose">
      <div className="choose-1">
        <div className="lower-container">
          <img src={a} alt="Your Image" />
        </div>
      </div>
      <div className="sub-conatiner-2">
        <div className="choose-2">
          <div className="choose-heading">
            <p>
              Why <span>Should</span> You Choose US
            </p>
          </div>
        </div>
        <div className="cho">
          <p>
            Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
        </div>
        <div className="choose-3">
          <div className="sub-heading">
            <div className="choose-card">
              <img src={Frame21} alt="" />
              <div className="sub-heading-choose">Extensive Fleet</div>
              <p>
                Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.Porem
                ipsum dolor sit amet, consectetur
              </p>
            </div>
            <div className="choose-card">
              <img src={Frame22} alt="" />
              <div className="sub-heading-choose">Affordable Rates</div>
              <p>
                Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.Porem
                ipsum dolor sit amet, consectetur
              </p>
            </div>
          </div>
          <div class="sub-heading">
            <div class="choose-card">
              <img src={Frame23} alt="" />
              <div className="sub-heading-choose">24/7 Customer Support</div>
              <p>
                Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.Porem
                ipsum dolor sit amet, consectetur
              </p>
            </div>
            <div class="choose-card">
              <img src={Frame24} alt="" />
              <div className="sub-heading-choose">Professional Drivers</div>
              <p>
                Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.Porem
                ipsum dolor sit amet, consectetur
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
