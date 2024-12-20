import React from "react";
import targetedAds from "../../assets/targetedAds.jpeg";
import conversionOptimization from "../../assets/conversionOptimization.jpeg";
import analyticsReporting from "../../assets/analyticsReporting.jpeg";
import strategyRefinement from "../../assets/strategyRefinement.svg";

import "./services.css";

const servicesData = [
  {
    title: "Targeted Ad Compaigns",
    // text: "Boost your sales pipelines with our highly qualified Medicare leads, designed to meet your regulatory needs and maximize call center efficiency.",
    image: targetedAds,
  },
  {
    title: "Conversion Optimization",
    // text: "Optimize your customer acquisition with our pre-qualified health insurance leads, tailored to reduce costs and improve agent productivity.",
    image: conversionOptimization,
  },
  {
    title: "Analytics and Reporting",
    // text: "Grow your business with our high-quality home improvement leads, specializing in window replacement, roof replacement, bathroom renovation, solar installations, and more.",
    image: analyticsReporting,
  },
  {
    title: "Continuous Strategy Refinement",
    // text: "Drive more business with our expertly vetted debt relief leads, designed to connect you with clients seeking financial recovery.",
    image: strategyRefinement,
  },
];

const Services = () => (
  <div className="gpt3__services section__padding" id="services">
    {/* Main Heading */}
    <div className="gpt3__services-main-heading">
      <h1 className="gradient__text">Services We Offer</h1>
      <p>Comprehensive Google and Facebook Marketing.</p>
    </div>

    <div className="gpt3__services-container">
      {servicesData.map((item, index) => (
        <div className="gpt3__service-item" key={item.title + index}>
          <img
            src={item.image}
            alt={item.title}
            className="gpt3__service-image"
          />
          <h3 className="gpt3__service-title">{item.title}</h3>
        </div>
      ))}
    </div>
  </div>
);

export default Services;
