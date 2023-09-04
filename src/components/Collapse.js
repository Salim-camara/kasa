import React, { useState, useEffect } from "react";
import "./../styles/components/Collapse.css";
import Arrow from "./../assets/images/vector.png";

const Collapse = ({ title, description, style }) => {
  const [showDesc, setShowDesc] = useState(false);

  return (
    <div className="collapse" style={style}>
      <div className="collapse__title">
        <p className="collapse__title--text">{title}</p>
        <img
          src={Arrow}
          className="collapse__title--img"
          onClick={() => setShowDesc((prev) => !prev)}
          style={
            showDesc
              ? { transform: "rotate(180deg)" }
              : { transform: "rotate(0deg)" }
          }
        />
      </div>
      <div
        className="collapse__description"
        style={showDesc ? { display: "flex" } : { display: "none" }}
      >
        {description && typeof description !== "string" ? (
          description?.map((el, i) => (
            <p className="collapse__description--text" key={i}>
              {el}
            </p>
          ))
        ) : (
          <p className="collapse__description--text">{description}</p>
        )}
      </div>
    </div>
  );
};

export default Collapse;
