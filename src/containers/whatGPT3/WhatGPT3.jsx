import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="Why Paragon Media?"
        text="Paragon Media is a performance marketing agency focused on creating innovative solutions that enhance the consumer experience while driving substantial growth for our clients. Our end-to-end approach ensures a smooth process from the first interaction to the final purchase, enabling your insurance products to excel in a competitive market."
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
        title="Bespoke Analytics"
        text="We create custom reports for our clients, using our proprietary technology, to give detailed insight into their most important performance metrics. This collaboration allows us to have a synergistic relationship with our clients. We focus on the front end while they enhance the back end, resulting in new sales heights!"
      />
      <Feature
        title="Reduce CPA"
        text="Our experienced marketing team expertly and individually analyzes our client's custom reports to ensure we send the highest converting leads. We tailor our ads to meet their specific needs for every campaign, helping you reduce acquisition costs."
      />
      <Feature
        title="High Converting Leads"
        text="We provide the highest converting leads through hyperlocal targeting and pre-qualification processes to vet customers, ensuring your team only engages with prospects genuinely interested in your products and services."
      />
    </div>
  </div>
);

export default WhatGPT3;
