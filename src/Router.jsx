import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./NavBar";
import Home from "./App";
import Help from "./HelpPage";
import PrivacyPolicy from "./PrivacyPolicy";
import About from "./About";

const AppAll = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
};

export default AppAll;
