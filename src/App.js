import React from "react";

import {
  Footer,
  // Blog,
  // Possibility,
  Features,
  WhatGPT3,
  Header,
  ContactForm,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";

import "./App.css";
import Counter from "./components/counter/Counter";
import TrustedOrgs from "./containers/trustedOrgs/TrustedOrgs";

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGPT3 />
    <Features />
    <Counter />
    {/* <Possibility /> */}
    <CTA />
    {/* <Blog /> */}
    <TrustedOrgs />
    <ContactForm />
    <Footer />
  </div>
);

export default App;
