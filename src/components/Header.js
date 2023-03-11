import React from "react";
import Logo from "./../assets/images/logo.png";
import "./../styles/components.js/Header.css";



const Header = () => {

    return (
        <div className="header">
            <img src={Logo} className="header--logo"/>
            <div className="header__right">
                <a className="header__right--link">Acceuil</a>
                <a className="header__right--link">A propos</a>
            </div>
        </div>
    )
}

export default Header;