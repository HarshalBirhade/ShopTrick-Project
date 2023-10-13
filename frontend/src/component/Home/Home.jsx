import React, { useEffect } from "react";
import "./home.css";
import Product from "./Product";
import MetaData from "../Layout/MetaData";
import { getProduct, clearErrors } from "../../store/actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Layout/Loader/Loader";
import { useAlert } from "react-alert";
const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="ShopTrick-Ecommerce" />
          <div className="banner">
            <h1>Welcome ! The e-commerce platform that cares </h1>
          </div>

          <h2 className="homeHeading">Featured Product</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => <Product product={product} />)}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
