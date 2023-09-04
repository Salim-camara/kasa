import React, { useState } from "react";
import Header from "../components/Header";
import Banner from "./../assets/images/banner.png";
import "./../styles/pages/Home.css";
import Data from "./../assets/data/logements.json";
import Card from "../components/Card";
import Footer from "../components/Footer";

const Home = () => {
  const [logements, setlogements] = useState(Data);

  return (
    <div>
      <div className="home">
        <div style={{ width: "100%" }}>
          <Header />
        </div>
        <div className="home__banner">
          <img src={Banner} className="home__banner--img" />
          <div className="home__banner__textContainer">
            <p className="home__banner--text">Chez vous,&nbsp;</p>
            <p className="home__banner--text">partout et ailleurs</p>
          </div>
        </div>
        <div className="home__cards">
          {logements.map((el, i) => {
            return <Card logement={el} key={el.id} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
