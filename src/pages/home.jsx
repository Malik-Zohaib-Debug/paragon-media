import React from "react";
import "../App.css";
import { Brand, Navbar } from "../components";
import { ContactForm, Features, Footer, Header, WhatGPT3 } from "../containers";
import Counter from "../components/counter/Counter";
import Services from "../containers/services/Services";
import TrustedOrgs from "../containers/trustedOrgs/TrustedOrgs";

const Home = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <WhatGPT3 />
    <Features />
    <Counter />
    <TrustedOrgs />
    {/* <Possibility /> */}
    {/* <CTA /> */}
    {/* <Blog /> */}
    <Services />
    <Brand />
    <ContactForm />
    <Footer />
  </div>
);

export default Home;
