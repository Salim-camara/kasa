import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Caroussel from "../components/Caroussel";
import Data from "./../assets/data/logements.json";
import Banner from "./../assets/images/banner.png";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./../styles/pages/Sheet.css";

const Sheet = () => {
  const location = useLocation();
  const data = location;
  const tmpData = Data[0];

  useEffect(() => {
    console.log("l15 ", tmpData);
  }, []);

  return (
    <div>
      <div className="sheet">
        <Header />
        <div className="sheet--caroussel">
          <Caroussel />
        </div>
        <div className="sheet__info">
          <div className="sheet__info__left">
            <h1 className="sheet__info__left--title">{tmpData.title}</h1>
            <h3 className="sheet__info__left--location">{tmpData.location}</h3>
            <div className="tag">
              <p className="tag--text">tag</p>
            </div>
          </div>
          <div className="sheet__info__right">
            <div className="sheet__info__right__top">
              <p className="sheet__info__right__top--host">
                {tmpData.host.name.split(" ")[0]}
                <br />
                {tmpData.host.name.split(" ")[1]}
              </p>
              <img src={Banner} className="sheet__info__right__top--avatar" />
            </div>
            <div className="sheet__info__right__bottom"></div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Sheet;
