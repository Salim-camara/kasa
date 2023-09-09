import React from "react";
import FooterLogo from "./../assets/images/footerLogo.png";
import "./../styles/components/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <img src={FooterLogo} className="footer--img" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
