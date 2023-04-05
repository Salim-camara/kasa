import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "./../assets/images/banner2.png";
import "./../styles/pages/About.css";

const About = () => {
  return (
    <div>
      <div className="about">
        <Header />
        <img src={Banner} className="about--img" />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default About;
