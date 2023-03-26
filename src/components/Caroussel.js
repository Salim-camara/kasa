import React, { useState, useEffect } from "react";
import Data from "./../assets/data/logements.json";
import Banner from "./../assets/images/banner.png";
import "./../styles/components/Caroussel.css";

const Caroussel = ({ data }) => {
  const [indexImg, setIndexImg] = useState(0);

  useEffect(() => {
    console.log("l11", data);
  }, []);

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
    <div className="caroussel">
      <p className="arrow" onClick={handlePrevious}>
        {"<"}
      </p>
      {data && data.pictures && (
        <img
          src={data.pictures[indexImg]}
          className="caroussel--img"
        />
      )}
      <p className="arrow--right" onClick={handleNext}>
        {">"}
      </p>
    </div>
  );
};

export default Caroussel;
