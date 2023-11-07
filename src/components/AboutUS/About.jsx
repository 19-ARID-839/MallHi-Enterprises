import React from "react";
import "./About.css";
import star from "../../assets/star.svg";
import p from "../../assets/p.png";
import p2 from "../../assets/p2.png";
const About = () => {
  return (
    <>
      <div className="about-main-conatiner-1" id="about">
        <p>
          What They <span>Say</span> About Us
        </p>
      </div>
      <div className="about-main-container-2">
        <p>
          Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis.
        </p>
      </div>
      <div className="main-conatiner-31">
        <div className="about-main-container-3">
          <div className="about-card">
            <div className="about-image">
              <img src={p} alt="" />
            </div>
            <div className="about-name">Jack Sparrow</div>
            <div className="about-rating">
              <img src={star} alt="" />
            </div>
            <div className="about-description">
              <p>
                Gorem ipsum dolor sit amet, consectetur  adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus.
              </p>
            </div>
          </div>
        </div>
        <div className="about-main-container-3">
          <div className="about-card">
            <div className="about-image">
              <img src={p2} alt="" />
            </div>
            <div className="about-name">Jack Sparrow</div>
            <div className="about-rating">
              <img src={star} alt="" />
            </div>
            <div className="about-description">
              <p>
                Gorem ipsum dolor sit amet, consectetur  adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
