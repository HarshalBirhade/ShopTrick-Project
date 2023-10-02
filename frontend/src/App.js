import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./component/layout/Header/Header";
import Footer from "./component/layout/Footer/Footer";
import WebFont from "webfontloader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
import LoginSignUp from "./component/User/LoginSignUp";
import Profile from "./component/User/Profile";
import store from "./store/store";
import { loadUser } from "./store/actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from "react-redux";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrders from "./component/Orders/MyOrders.jsx";
import OrderDetails from "./component/Orders/OrderDetails";
import Dashboard from "./component/Admin/Dashboard.jsx";
import ProductList from "./component/Admin/ProductList.jsx";
import NewProduct from "./component/Admin/NewProduct";
import UpdateProduct from "./component/Admin/UpdateProduct.jsx";
import OrderList from "./component/Admin/OrderList.jsx";
import ProcessOrder from "./component/Admin/ProcessOrder.jsx";
import UserList from "./component/Admin/UserList.jsx";
import UpdateUser from "./component/Admin/UpdateUser.jsx";
import ProductReviews from "./component/Admin/ProductReviews.jsx";
import axios from "axios";
import Payment from "./component/Cart/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());

    getStripeApiKey();
  }, []);

  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route exact path="/process/payment" element={<Payment />} />
            </Route>
          </Routes>
        </Elements>
      )}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route path="/search" element={<Search />} />
        <Route exact path="/login" element={<LoginSignUp />} />

        <Route element={<ProtectedRoute />}>
          <Route exact path="/account" element={<Profile />} />
          <Route exact path="/me/update" element={<UpdateProfile />} />
          <Route exact path="/password/update" element={<UpdatePassword />} />
          <Route exact path="/order/confirm" element={<ConfirmOrder />} />
          <Route exact path="/success" element={<OrderSuccess />} />
          <Route exact path="/orders" element={<MyOrders />} />
          <Route exact path="/order-details/:id" element={<OrderDetails />} />
          <Route
            exact
            isAdmin={true}
            path="/admin/dashboard"
            element={<Dashboard />}
          />
          <Route
            exact
            isAdmin={true}
            path="/admin/products"
            element={<ProductList />}
          />
          <Route
            exact
            isAdmin={true}
            path="/admin/product"
            element={<NewProduct />}
          />

          <Route
            exact
            isAdmin={true}
            path="/admin/product/:id"
            element={<UpdateProduct />}
          />

          <Route
            exact
            isAdmin={true}
            path="/admin/orders"
            element={<OrderList />}
          />

          <Route
            exact
            isAdmin={true}
            path="/admin/order/:id"
            element={<ProcessOrder />}
          />

          <Route
            exact
            isAdmin={true}
            path="/admin/users"
            element={<UserList />}
          />
          <Route
            exact
            isAdmin={true}
            path="/admin/user/:id"
            element={<UpdateUser />}
          />
          <Route
            exact
            isAdmin={true}
            path="/admin/reviews"
            element={<ProductReviews />}
          />
        </Route>

        <Route exact path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/login/shipping" element={<Shipping />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
