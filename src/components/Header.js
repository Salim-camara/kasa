import React from "react";
import Logo from "./../assets/images/logo.png";
import "./../styles/components/Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <img src={Logo} className="header--logo" />
      <div className="header__right">
        <a
          className="header__right--link"
          onClick={() => {
            navigate(`/`);
          }}
        >
          Acceuil
        </a>
        <a
          className="header__right--link"
          onClick={() => {
            navigate(`/about`);
          }}
        >
          A propos
        </a>
      </div>
    </div>
  );
};

export default Header;
