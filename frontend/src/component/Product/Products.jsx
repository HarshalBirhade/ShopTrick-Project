import React, { useEffect, useState } from "react";
import "./Products.css";
import { useParams } from "react-router-dom";
import { getProduct, clearErrors } from "../../store/actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Layout/Loader/Loader";
import Product from "../Home/Product";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import { useAlert } from "react-alert";
import MetaData from "../Layout/MetaData";
import Modal from "react-modal";

const categories = ["Shirts", "Jeans", "Footwear", "Accessories"];

// Define custom styles for the modal dialog
const customStyles = {
  content: {
    top: "50%",
    left: "0",
    right: "auto",
    bottom: "auto",
    transform: "translateY(-50%)",
    width: "15vmax",
    padding: "2vmax",
    boxSizing: "border-box",
  },
};

const Products = () => {
  const { keyword } = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 3000]);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false); // State to control the modal

  const { products, loading, error, productCount, resultPerPage } = useSelector(
    (state) => state.products
  );

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    event.preventDefault();
    setPrice(newPrice);
  };

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors);
    }
    dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings, alert, error]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="Products" />
          <h2 className="productsHeading">Products</h2>
          <button onClick={toggleModal} className="filterButton">
            Filter
          </button>

          <Modal
            className="filterBox"
            isOpen={modalIsOpen}
            onRequestClose={toggleModal}
            style={customStyles}
            contentLabel="Filter Box"
          >
            <div>
              <p>Price</p>
              <Slider
                value={price}
                onChange={priceHandler}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={0}
                max={3000}
              />
            </div>

            <div className="categoryBox">
              <p>Categories</p>
              <ul>
                {categories.map((cat) => (
                  <li
                    className="category-link"
                    key={cat}
                    onClick={() => setCategory(cat)}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p>Ratings Above</p>
              <Slider
                value={ratings}
                onChange={(e, newRatings) => setRatings(newRatings)}
                aria-labelledby="continuous-slider"
                min={0}
                max={5}
                valueLabelDisplay="auto"
              />
            </div>

            <button onClick={toggleModal}>Close</button>
          </Modal>

          <div className="products">
            {products &&
              products.map((product) => (
                <Product key={product._id} product={product} />
              ))}
          </div>

          {resultPerPage < productCount && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Products;
