import React, { useEffect } from "react";
import "./App.css";
import Header from "./component/layout/Header/Header";
import Footer from "./component/layout/Footer/Footer";
import WebFont from "webfontloader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store/store";
import { loadUser } from "./store/actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions.jsx";
import { useSelector } from "react-redux";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Header />

      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route exact path="/login" element={<LoginSignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
