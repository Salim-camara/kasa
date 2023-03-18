import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Caroussel from "../components/Caroussel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./../styles/pages/Sheet.css";

const Sheet = () => {
  const location = useLocation();
  const data = location;

  return (
    <div>
      <div className="sheet">
        <Header />
        <div className="sheet--caroussel">
          <Caroussel />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Sheet;
