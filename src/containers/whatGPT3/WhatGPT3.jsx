import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="Why Paragon Media?"
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
        laudantium et doloribus reiciendis, consequatur molestiae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
        laudantium et doloribus reiciendis, consequatur molestiae."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        Lorem ipsum dolor sit amet consectetur,
      </h1>
      <p>Lorem, ipsum dolor.</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Lorem"
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. "
      />
      <Feature
        title="Lorem ipsum"
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
        laudantium et doloribus reiciendis, consequatur molestiae."
      />
      <Feature
        title="Lorem ipsum"
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
        laudantium et doloribus reiciendis, consequatur molestiae."
      />
    </div>
  </div>
);

export default WhatGPT3;
