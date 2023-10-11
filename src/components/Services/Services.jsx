import React from "react";
import "./Services.css";

const ServiceItems = [
  {
    id: 1,
    img: "box1.png",
    title: "Clean Code",
    text: "lorem ipsum dolor sit amet ecte adipiscing elitIpsum.",
  },
  {
    id: 2,
    img: "box2.png",
    title: "Data Analytic",
    text: "lorem ipsum dolor sit amet ecte adipiscing elitIpsum.",
  },
  {
    id: 3,
    img: "box3.png",
    title: "Fully Secured",
    text: "lorem ipsum dolor sit amet ecte adipiscing elitIpsum.",
  },
  {
    id: 4,
    img: "box4.png",
    title: "24/7 Support",
    text: "lorem ipsum dolor sit amet ecte adipiscing elitIpsum.",
  },
];

const Services = () => {
  return (
    <div className="services">
      <h2>
        We Provides best Feature
        <br /> for customar
      </h2>
      <div className="services_boxes">
        {ServiceItems.map((e) => (
          <div className="boxes">
            <img src={require(`../assets/${e.img}`)} />
            <div className="box_text">
              <h3>{e.title}</h3>
              <p>{e.text}</p>
              <a href="#">
                <img src={require("../assets/arrow_link.png")} alt="" />
              </a>
            </div>
          </div>
        ))}
        {/* <div className="boxes">
          <img src={require("../assets/box1.png")} />
          <div className="box_text">
            <h3>Clean Code</h3>
            <p>Lorem ipsum dolor sit amet ecte adipiscing elitIpsum.</p>
            <button>
              <img src={require("../assets/arrow_link.png")} />
            </button>
          </div>
        </div>
        <div className="boxes">
          <img src={require("../assets/box2.png")} />
          <div className="box_text">
            <h3>Data Analytic</h3>
            <p>Lorem ipsum dolor sit amet ecte adipiscing elitIpsum.</p>
            <button>
              <img src={require("../assets/arrow_link.png")} />
            </button>
          </div>
        </div>
        <div className="boxes">
          <img src={require("../assets/box3.png")} />
          <div className="box_text">
            <h3>Fully Secured</h3>
            <p>Lorem ipsum dolor sit amet ecte adipiscing elitIpsum.</p>
            <button>
              <img src={require("../assets/arrow_link.png")} />
            </button>
          </div>
        </div>
        <div className="boxes">
          <img src={require("../assets/box4.png")} />
          <div className="box_text">
            <h3>24/7 Support</h3>
            <p>Lorem ipsum dolor sit amet ecte adipiscing elitIpsum.</p>
            <button>
              <img src={require("../assets/arrow_link.png")} />
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Services;
