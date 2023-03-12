import React from "react";
import './../styles/components/Card.css';

const Card = ({ logement }) => {
  console.log("l5 ", logement);
  return (
    <div className="card">
      <img src={logement.cover} className="card--img"/>
      <p className="card--text">{logement.title}</p>
    </div>
  );
};

export default Card;
