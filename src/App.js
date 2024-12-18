import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import PrivacyPolicy from "./pages/privacy-policy";
import TermsConditions from "./pages/termsConditions";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-conditions" element={<TermsConditions />} />
      {/* <Route path="*" /> */}
    </Routes>
  </BrowserRouter>
);

export default App;
