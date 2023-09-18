import React, { useEffect } from "react";
import { FaMouse } from "react-icons/fa";
import "./home.css";
import Product from "./Product";
import MetaData from "../layout/MetaData";
import { getProduct, clearErrors } from "../../store/actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products, productCount } = useSelector(
    (state) => state.products
  );

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
            {products &&
              products.map((product) => <Product product={product} />)}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
