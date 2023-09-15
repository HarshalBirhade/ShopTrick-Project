import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./footer.css";
function Footer() {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>Download Our App</h4>
        <p>Download App for Android and IOS</p>
        <img src={playStore} alt="playStore" />
        <img src={appStore} alt="appStore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE</h1>
        <p>Copyright 2023 &copy; Peacefull Tech</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/">Instagram</a>
        <a href="https://www.facebook.com/">Facebook</a>
        <a href="https://twitter.com/">Twitter</a>
      </div>
    </footer>
  );
}

export default Footer;
