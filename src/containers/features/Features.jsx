import React from "react";
import medicareImg from "../../assets/medicare.svg";
import insuranceImg from "../../assets/insurance.svg";
import improvementImg from "../../assets/home-insurance.svg";
import debtImg from "../../assets/debt-relief.svg";
import "./features.css";

const featuresData = [
  {
    title: "Medicare",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laudantium et doloribus reiciendis, consequatur molestiae.",
    image: medicareImg,
  },
  {
    title: "Health Insurance",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laudantium et doloribus reiciendis, consequatur molestiae.",
    image: insuranceImg,
  },
  {
    title: "Home Improvement",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laudantium et doloribus reiciendis, consequatur molestiae.",
    image: improvementImg,
  },
  {
    title: "Debt Relief",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laudantium et doloribus reiciendis, consequatur molestiae.",
    image: debtImg,
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    {/* Main Heading */}
    <div className="gpt3__features-main-heading">
      <h1 className="gradient__text">Explore Our Services</h1>
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
