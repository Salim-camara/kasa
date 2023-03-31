import React, { useState, useEffect } from "react";
import "./../styles/components/Tags.css";

const Tags = ({ text }) => {
  return (
    <div className="tag">
      <p className="tag--text">{text}</p>
    </div>
  );
};

export default Tags;
