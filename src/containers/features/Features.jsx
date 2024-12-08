import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "Improving end distrusts instantly",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laudantium et doloribus reiciendis, consequatur molestiae.",
  },
  {
    title: "Become the tended active",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laudantium et doloribus reiciendis, consequatur molestiae.",
  },
  {
    title: "Message or am nothing",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laudantium et doloribus reiciendis, consequatur molestiae.",
  },
  {
    title: "Really boy law county",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laudantium et doloribus reiciendis, consequatur molestiae.",
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
        laudantium et doloribus reiciendis, consequatur molestiae.
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur,</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
