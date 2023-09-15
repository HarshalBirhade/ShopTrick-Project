import React from "react";
import { FaMouse } from "react-icons/fa";
import "./home.css";
import Product from "./Product";
import MetaData from "../layout/MetaData";
const product = {
  name: "White School Shirt",
  images: [
    {
      url: "https://img.freepik.com/free-vector/one-happy-boy-with-green-backpack_1308-69184.jpg?size=626&ext=jpg",
    },
  ],
  price: 3000,
  _id: "harshal",
};
const Home = () => {
  return (
    <>
      <MetaData title="E-COMMERCE" />
      <div className="banner">
        <p>Welcome to E-commerce</p>
        <h1>Find Amazing Producs Below </h1>

        <a href="#container">
          <button>
            Scroll <FaMouse />
          </button>
        </a>
      </div>

      <h2 className="homeHeading">Featured Product</h2>

      <div className="container" id="container">
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
      </div>
    </>
  );
};

export default Home;
