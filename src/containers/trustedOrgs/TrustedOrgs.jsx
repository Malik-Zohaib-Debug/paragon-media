import React from "react";
import org1 from "../../assets/humana.svg";
import org2 from "../../assets/allState.svg";
import org3 from "../../assets/Ehealth.svg";
import org4 from "../../assets/unitedHealthCare.svg";
import "./trustedOrgs.css";

const TrustedOrgs = () => (
  <div className="gpt3__footer-logos">
    <h4>Trusted By Organizations Like:</h4>
    <div className="gpt3__footer-logos_container">
      <img src={org1} alt="Organization 1 Logo" />
      <img src={org2} alt="Organization 2 Logo" />
      <img src={org3} alt="Organization 3 Logo" />
      <img src={org4} alt="Organization 4 Logo" />
    </div>
  </div>
);

export default TrustedOrgs;
