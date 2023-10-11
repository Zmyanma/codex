import React from "react";
import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <img src={require("../assets/logo.png")} />
      <nav>
        <ul className="header_nav">
          <li>
            <a className="underline">Home</a>
          </li>
          <li>
            <a className="underline">Services</a>
          </li>
          <li>
            <a className="underline">Pricing</a>
          </li>
          <li>
            <a className="underline">Testimonials</a>
          </li>
          <li>
            <a className="underline">Blog</a>
          </li>
          <button className="header_btn">Free Trial</button>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
