import React from "react";
import profilePic from "../assets/profile.jpg";

export default function Intro() {
  return (
    <header className="intro">
      <div className="intro-left">
        <img src={profilePic} alt="Javeria Usmana" className="intro-photo" />
        <div className="intro-info">
          <h1>Javeria Usmana</h1>
          <h3>BSCS Student • Full Stack Developer</h3>
        </div>
      </div>

      <div className="intro-right">
        <button className="btn download">Download CV</button>
        <button className="btn hire">Hire Me</button>
      </div>
    </header>
  );
}





