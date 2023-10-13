import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./orderSuccess.css";
import { Link } from "react-router-dom";
import MetaData from "../Layout/MetaData";

const OrderSuccess = () => {
  return (
    <div className="orderSuccess">
      <MetaData title="Order Success" />
      <CheckCircleIcon />
      <p>Your Order has been Placed successfully </p>
      <Link to="/orders">View Orders</Link>
    </div>
  );
};

export default OrderSuccess;
