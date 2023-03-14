import React from "react";
import './../styles/components/Card.css';
import { useNavigate } from "react-router-dom";

const Card = ({ logement, redirect }) => {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => { navigate('/logement', { test: 'test' }); }}>
      <img src={logement.cover} className="card--img"/>
      <p className="card--text">{logement.title}</p>
    </div>
  );
};

export default Card;
