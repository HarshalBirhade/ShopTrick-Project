import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthenticatedLayout = () => {
  const { isAuthenticated } = useSelector((state) => state.user);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthenticatedLayout;
