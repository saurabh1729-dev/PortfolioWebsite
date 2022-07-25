import React from "react";
import SocialContact from "../../common/social-contact/index";
import "./about.css";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hy! 👋, I am <br />
          <span className="info-name">Saurabh Chaudhary</span>.<br /> I love
          experimenting with the web.
        </div>
        <div className="about-photo">
        <img src={require('../../../img/Coding-bro.png')} className="picture" alt="" />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;