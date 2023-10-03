import React from "react";
import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <img src={require("../assets/logo.png")} />
      <nav>
        <ul className="header_nav">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <button className="header_btn">Free Trial</button>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
