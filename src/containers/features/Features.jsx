import React from "react";
import medicareImg from "../../assets/medicare.svg";
import insuranceImg from "../../assets/insurance.svg";
import improvementImg from "../../assets/home-insurance.svg";
import debtImg from "../../assets/debt-relief.svg";
import "./features.css";

const featuresData = [
  {
    title: "Medicare",
    text: "Boost your sales pipelines with our highly qualified Medicare leads, designed to meet your regulatory needs and maximize call center efficiency.",
    image: medicareImg,
  },
  {
    title: "Health Insurance",
    text: "Optimize your customer acquisition with our pre-qualified health insurance leads, tailored to reduce costs and improve agent productivity.",
    image: insuranceImg,
  },
  {
    title: "Home Improvement",
    text: "Grow your business with our high-quality home improvement leads, specializing in window replacement, roof replacement, bathroom renovation, solar installations, and more.",
    image: improvementImg,
  },
  {
    title: "Debt Relief",
    text: "Drive more business with our expertly vetted debt relief leads, designed to connect you with clients seeking financial recovery.",
    image: debtImg,
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    {/* Main Heading */}
    <div className="gpt3__features-main-heading">
      <h1 className="gradient__text">Verticals We Serve</h1>
      <p>Find out more about how we can help you today.</p>
    </div>

    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <div className="gpt3__feature-item" key={item.title + index}>
          <img
            src={item.image}
            alt={item.title}
            className="gpt3__feature-image"
          />
          <h3 className="gpt3__feature-title">{item.title}</h3>
          <p className="gpt3__feature-text">{item.text}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Features;
