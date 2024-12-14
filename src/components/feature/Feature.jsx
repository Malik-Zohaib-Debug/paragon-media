import React from "react";
import "./feature.css";

const Feature = ({ title, text, text2 }) => (
  <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    {text2 ? (
      <div>
        <div className="gpt3__features-container_feature-text">
          <p>{text}</p>
        </div>
        <div className="gpt3__features-container_feature-text">
          <p style={{ marginTop: "10px" }}>{text2}</p>
        </div>
      </div>
    ) : (
      <div className="gpt3__features-container_feature-text">
        <p>{text}</p>
      </div>
    )}
  </div>
);

export default Feature;
