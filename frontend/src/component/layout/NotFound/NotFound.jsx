import React from "react";
import ErrorIcon from "@material-ui/icons/Error";
import "./notFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="PageNotFound">
      <ErrorIcon />

      <p>Page Not Found </p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
