import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Caroussel from "../components/Caroussel";
import Data from "./../assets/data/logements.json";
import Banner from "./../assets/images/banner.png";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./../styles/pages/Sheet.css";
import Rating from "../components/Rating";
import Tags from "../components/Tags";
import Collapse from "../components/Collapse";

const Sheet = ({ state }) => {
  const location = useLocation();
  const [data, setData] = useState();
  const tmpData = Data[0];
  const params = useParams();

  useEffect(() => {
    Data.map((el) => {
      if (el.id === params.id) {
        setData(el);
      }
    });
  }, []);

  return (
    <div>
      <div className="sheet">
        <Header />
        <div className="sheet--caroussel">
          <Caroussel data={data} />
        </div>
        <div className="sheet__info">
          <div className="sheet__info__left">
            <h1 className="sheet__info__left--title">{data?.title}</h1>
            <h3 className="sheet__info__left--location">{data?.location}</h3>
            <div className="sheet__info__left--tags">
              {data?.tags.map((el, i) => (
                <Tags text={el} />
              ))}
            </div>
          </div>
          <div className="sheet__info__right">
            <div className="sheet__info__right__top">
              <p className="sheet__info__right__top--host">
                {data?.host.name.split(" ")[0]}
                <br />
                {data?.host.name.split(" ")[1]}
              </p>
              <img src={Banner} className="sheet__info__right__top--avatar" />
            </div>
            <div className="sheet__info__right__bottom">
              <Rating rate={data?.rating} />
            </div>
          </div>
        </div>
        <div className="sheet__collapseContainer">
          <div style={{ width: "45%" }}>
            <Collapse title={"Description"} description={data?.description} />
          </div>
          <div style={{ width: "45%" }}>
            <Collapse
              title={"Equipements"}
              description={data?.equipments}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sheet;
