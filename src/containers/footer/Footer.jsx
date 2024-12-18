import React from "react";
import { Link } from "react-router-dom";
import instagramIcon from "../../assets/instagram-icon.svg";
import linkedinIcon from "../../assets/linkedin.svg";

import "./footer.css";

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Social Media</p>
        <div
          className="gpt3__footer-social-icons"
          style={{ alignItems: "center" }}
        >
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a
            href="https://www.linkedin.com/company/paragon-mediallc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <Link to="/terms-conditions">
          <p>Terms & Conditions</p>
        </Link>
        <Link to="/privacy-policy">
          <p>Privacy Policy</p>
        </Link>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>nick@paragonmedia.io</p>
      </div>
    </div>
    <div className="gpt3__footer-copyright">
      <p>@2024 Paragon Media. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
