import React from "react";
// import gpt3Logo from "../../logo.svg";
// Import organization logos
import org1 from "../../assets/humana.svg";
import org2 from "../../assets/allState.svg";
import org3 from "../../assets/Ehealth.svg";
import org4 from "../../assets/unitedHealthCare.svg";

import "./footer.css";

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">
        Lorem ipsum dolor sit amet consectetur, adipisicing.
      </h1>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>

    {/* Organization Logos Section */}
    <div className="gpt3__footer-logos">
      <h4>Trusted By Organisations Like:</h4>
      <div className="gpt3__footer-logos_container">
        <img src={org1} alt="Organization 1 Logo" />
        <img src={org2} alt="Organization 2 Logo" />
        <img src={org3} alt="Organization 3 Logo" />
        <img src={org4} alt="Organization 4 Logo" />
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2024 Paragon Media. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
