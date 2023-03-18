import React, { useState, useEffect } from "react";
import Data from "./../assets/data/logements.json";
import Banner from "./../assets/images/banner.png";
import "./../styles/components/Caroussel.css";

const Caroussel = () => {
  const [indexImg, setIndexImg] = useState(0);
  const tmpData = Data[0];

  useEffect(() => {
    console.log("l8", indexImg);
  }, [indexImg]);

  const handlePrevious = () => {
    if(indexImg === 0) {
        setIndexImg((prev) => tmpData.pictures.length - 1);
        return;
    }
    setIndexImg((prev) => prev - 1);
  }

  const handleNext = () => {
    if(indexImg === tmpData.pictures.length - 1) {
        setIndexImg(0);
        return;
    }
    setIndexImg((prev) => prev + 1);
  }

  return (
    <div className="caroussel">
      <p className="arrow" onClick={handlePrevious}>{"<"}</p>
      {/* tmpDara.pictures[indexImg] */}
      <img src={Banner} className="caroussel--img" />
      <p className="arrow--right" onClick={handleNext}>{">"}</p>
    </div>
  );
};

export default Caroussel;
