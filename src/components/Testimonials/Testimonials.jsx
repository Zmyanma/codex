import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials_text">
        <h2>Let’s see our User’s Review</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          scelerisque tellus interdum venenatis auctor et nibh. Rhoncus a, sed
          lobortis nisi.
        </p>
      </div>
      <div className="world_map">
        <img src={require("../assets/map.png")} alt="" />
      </div>
    </div>
  );
};

export default Testimonials;
