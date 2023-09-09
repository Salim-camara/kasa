import React from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import "./../styles/pages/Error.css";
import Footer from "../components/Footer";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div className="error">
        <Header />
        <p className="error__title">404</p>
        <p className="error__subTitle">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <a onClick={() => navigate("/")} className="error__link">
          Retourner sur la page d'accueil
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
