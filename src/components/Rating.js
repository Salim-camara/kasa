import React, { useState, useEffect } from "react";
import "./../styles/components/Rating.css";
import StarGrey from "./../assets/images/starGrey.png";
import StarActive from "./../assets/images/starActive.png";

const Rating = ({ rate }) => {
  const [stars, setStars] = useState([]);

  const handleStars = () => {
    for (let i = 0; i < 5; i++) {
      setStars((prev) => [
        ...prev,
        <img
          src={i <= parseInt(rate) ? StarActive : StarGrey}
          className="rating--img"
        />,
      ]);
    }
  };

  useEffect(() => {
    setStars([]);
    handleStars();
  }, [rate]);
  return <div className="rating">{stars?.map((el) => el)}</div>;
};

export default Rating;
