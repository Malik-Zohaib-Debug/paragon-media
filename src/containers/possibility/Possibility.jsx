import React from "react";
import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h4>
      <h1 className="gradient__text">
        Lorem ipsum dolor <br /> Lorem ipsum dolor sit amet consectetur,
        adipisicing elit.
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
        laudantium et doloribus reiciendis, consequatur molestiae. Lorem ipsum
        dolor sit amet consectetur, adipisicing elit. Architecto laudantium et
        doloribus reiciendis, consequatur molestiae.
      </p>
      <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h4>
    </div>
  </div>
);

export default Possibility;
