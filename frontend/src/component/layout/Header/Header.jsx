import React, { useState } from "react";
import "./header.css";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import PersonIcon from "@material-ui/icons/Person";

function Header3() {
  const navigate = useNavigate();
  const location = useLocation();
  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products/${keyword}`);
    } else {
      navigate("/products");
    }
  };

  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <nav>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
              <i className="fas fa-bars"></i>
            </label>

            <div className="logo">
              <Link to="/">
                <h2>ShopTrick🛒</h2>
              </Link>
            </div>
            <ul className="navUnorderLinks">
              <div className="inputBox">
                <form className="nav-search" onSubmit={searchSubmitHandler}>
                  <input
                    className="search-input"
                    type="text"
                    placeholder="   Search a product..."
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                </form>
                <button>
                  <SearchIcon fontSize="large" />
                </button>
              </div>
              <div className="navLinks">
                <li>
                  <Link
                    to="/products"
                    className={
                      location.pathname === "/products" ? "active" : ""
                    }
                  >
                    <ShoppingBasketIcon />
                    Products
                  </Link>
                </li>
                <li>
                  {isAuthenticated ? (
                    <Link
                      to="/account"
                      className={
                        location.pathname === "/account" ? "active" : ""
                      }
                    >
                      <PersonIcon />
                      {user.name}
                    </Link>
                  ) : (
                    <Link
                      to="/login"
                      className={location.pathname === "/login" ? "active" : ""}
                    >
                      <PersonIcon />
                      Sign in
                    </Link>
                  )}
                </li>
                {isAuthenticated && user.role === "admin" ? (
                  <>
                    <li>
                      <Link
                        to="/admin/dashboard"
                        className={
                          location.pathname === "/admin/dashboard"
                            ? "active"
                            : ""
                        }
                      >
                        <DashboardIcon />
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/orders"
                        className={
                          location.pathname === "/orders" ? "active" : ""
                        }
                      >
                        <ListAltIcon />
                        Orders
                      </Link>
                    </li>
                  </>
                ) : (
                  <li>
                    <Link
                      to="/orders"
                      className={
                        location.pathname === "/orders" ? "active" : ""
                      }
                    >
                      <ListAltIcon />
                      Orders
                    </Link>
                  </li>
                )}

                <li>
                  <Link
                    to="/cart"
                    className={location.pathname === "/cart" ? "active" : ""}
                  >
                    <ShoppingCartIcon />
                    Cart
                  </Link>
                </li>
              </div>
            </ul>
          </nav>
        </>
      )}
    </>
  );
}

export default Header3;
