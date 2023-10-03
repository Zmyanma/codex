import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about_us">
      <div className="about_text">
        <h1>Codext one of the best system in SAAS.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A nulla nulla
          etiam turpis quam diam et. Arcu nisi, sed aenean sit nisl.
        </p>
        <button className="about_btn">Try A Live Demo</button>
      </div>
      <div className="about_img">
        <img src={require("../assets/Group1.png")} />
      </div>
    </div>
  );
};

export default About;
