import React from "react";

import "./footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <Link to="/contact">Contact</Link>
        <Link to="/about">About Us</Link>
      </div>

      <div className="midFooter">
        <h1>ShopTrick🛒</h1>
        <p>Copyright 2023 &copy; Peacefull Tech☮️</p>
      </div>

      <div className="rightFooter">
        <Link to="https://www.instagram.com/">Instagram</Link>
        <Link to="https://www.facebook.com/">Facebook</Link>
        <Link to="https://twitter.com/">Twitter</Link>
      </div>
    </footer>
  );
}

export default Footer;
