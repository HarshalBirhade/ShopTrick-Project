import React from "react";
import "./about.css";
import MetaData from "../MetaData";

const About = () => {
  return (
    <div className="aboutContainer">
      <MetaData title="About ShopTrick" />
      <div className="heroImg"></div>
      <div className="details">
        <h2 className="brandName">
          About <span>ShopTrick🛒</span>
        </h2>
        <br />
        <p>
          Welcome to ShopTrick, your one-stop destination for all things trendy
          and fashionable. We are passionate about fashion and committed to
          bringing you the latest and greatest in clothing, accessories, and
          more. At ShopTrick, we believe that style is a form of
          self-expression, and we want to help you express yourself in the most
          stylish way possible.
        </p>
        <br />
        <h2>What Sets Us Apart</h2>
        <br />
        <p>
          At ShopTrick, we take pride in our commitment to delivering the best
          shopping experience possible. Here's what sets us apart:
        </p>
      </div>
    </div>
  );
};

export default About;
