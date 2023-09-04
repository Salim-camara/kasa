import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "./../assets/images/banner2.png";
import "./../styles/pages/About.css";
import data from "./../assets/data/about.json";
import Collapse from "../components/Collapse";

const About = () => {
  return (
    <div style={{ flex: 1 }}>
      <div className="about">
        <Header />
        <img src={Banner} className="about--img" />
        <div className="about__collapse--container">
          {data.map((el, i) => {
            return (
              <div className="about__collapse" key={i}>
                <Collapse title={el.title} description={el.description} />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
