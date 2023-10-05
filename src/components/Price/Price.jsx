import React from "react";
import "./Price.css";

const PriceItems = [
  {
    id: 1,
    title: "Start-up",
    price: "$10/mo",
    text: "Singal user license",
  },
  {
    id: 2,
    title: "Classic",
    price: "$20/mo",
    text: "5 user license",
  },
  {
    id: 3,
    title: "Premium",
    price: "$30/mo",
    text: "10 user license",
  },
];

const Price = () => {
  return (
    <div className="price_plan">
      <div className="price_header">
        <h2>Choose your best pricing plan</h2>
        <p>
          Added for Monthly
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>{" "}
          Yearly
        </p>
      </div>
      <div className="price_boxes">
        {PriceItems.map((e) => (
          <div className="boxes">
            <h4>{e.title}</h4>
            <img src={require("../assets/line.png")} alt="" />
            <h3>{e.price}</h3>
            <p>Easy Customizable</p>
            <p>Commercia license</p>
            <p>{e.text}</p>
            <p>Hotline support 24/7</p>
            <button>TRY THIS PACKAGE</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;
