import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import AuthenticatedLayout from "./AuthenticatedLayout";

const ProtectedRoute = ({ isAdmin }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  if (loading) {
    return null;
  }

  if (isAuthenticated === false) {
    return <AuthenticatedLayout />;
  }

  if (isAdmin && user.role !== "admin") {
    return <AuthenticatedLayout />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
