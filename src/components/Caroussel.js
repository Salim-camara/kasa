import React, { useState, useEffect } from "react";
import Data from "./../assets/data/logements.json";
import Banner from "./../assets/images/banner.png";
import "./../styles/components/Caroussel.css";

const Caroussel = ({ data }) => {
  const [indexImg, setIndexImg] = useState(0);

  const handlePrevious = () => {
    if (indexImg === 0) {
      setIndexImg((prev) => data.pictures?.length - 1);
      return;
    }
    setIndexImg((prev) => prev - 1);
  };

  const handleNext = () => {
    if (indexImg === data.pictures?.length - 1) {
      setIndexImg(0);
      return;
    }
    setIndexImg((prev) => prev + 1);
  };

  return (
    <div className="caroussel" style={{ position: "relative" }}>
      {data?.pictures?.length > 1 && (
        <p className="arrow" onClick={handlePrevious}>
          {"<"}
        </p>
      )}
      {data && data?.pictures && (
        <img src={data.pictures[indexImg]} className="caroussel--img" />
      )}
      {data?.pictures.length > 1 && (
        <p className="arrow--right" onClick={handleNext}>
          {">"}
        </p>
      )}
      {data?.pictures.length > 1 && (
        <div
          style={{
            position: "absolute",
            bottom: 10,
            left: "50%",
            width: 80,
            marginLeft: -40,
          }}
        >
          <p style={{ color: "white", fontWeight: "bolder" }}>
            {indexImg + 1}/{data?.pictures?.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default Caroussel;
