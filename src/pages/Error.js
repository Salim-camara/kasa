import React from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import './../styles/pages/Error.css';


const Error = () => {
    const navigate = useNavigate();

    return(
        <div className="error">
            <Header />
            <p className="error__title">404</p>
            <p className="error__subTitle">Oups! La page que vous demandez n'existe pas.</p>
            <a onClick={() => navigate('/')} className="error__link">Retourner sur la page d'accueil</a>
        </div>
    )
}

export default Error;