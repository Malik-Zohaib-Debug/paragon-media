import React from "react";
import { google, instagram, tiktok, meta, youtube } from "./imports";
import "./brand.css";

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google} width="130px" height="100px" />
    </div>
    <div>
      <img src={instagram} width="130px" height="100px" />
    </div>
    <div>
      <img src={tiktok} width="130px" height="100px" />
    </div>
    <div>
      <img src={meta} width="130px" height="100px" />
    </div>
    <div>
      <img src={youtube} width="130px" height="100px" />
    </div>
  </div>
);

export default Brand;
