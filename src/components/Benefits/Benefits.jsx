import React from "react";
import "./Benefits.css";

const Benefits = () => {
  return (
    <div className="benefits">
      <div className="benefits_img">
        <img src={require("../assets/benefits_img.png")} />
      </div>
      <div className="benefits_text">
        <h2>It’s very helpful for operating system</h2>
        <ul>
          <li>
            <b>Ultra fast & Secure</b>
          </li>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. vitae velit
            proin justo, elementum sit. In morbi dolor sodales vestibulum cras.
            Consequat.
          </p>
          <li>
            <b>Allows customization</b>
          </li>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. vitae velit
            proin justo, elementum sit. In morbi dolor sodales vestibulum cras.
            Consequat.
          </p>
          <li>
            <b>Smart contract</b>
          </li>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. vitae velit
            proin justo, elementum sit. In morbi dolor sodales vestibulum cras.
            Consequat.
          </p>
        </ul>
      </div>
    </div>
  );
};

export default Benefits;
