import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import "./dashboard.css";
import { Link } from "react-router-dom";
import "chart.js/auto";
import { useSelector, useDispatch } from "react-redux";
import { getAdminProduct } from "../../store/actions/productAction";
import { getAllOrders } from "../../store/actions/orderAction";
import { getAllUsers } from "../../store/actions/userAction";
import MetaData from "../Layout/MetaData";

function Dashboard() {
  const { products } = useSelector((state) => state.products);
  const { orders } = useSelector((state) => state.allOrders);
  const { users } = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllOrders());
    dispatch(getAllUsers());
  }, [dispatch]);

  let totalAmount = 0;
  orders &&
    orders.forEach((item) => {
      totalAmount += item.totalPrice;
    });

  return (
    <>
      <div className="dashboard">
        <MetaData title="Dashboard - Admin Panel" />
        <Sidebar />
        <div className="dashboardContainer">
          <h1>Dashboard</h1>

          <div className="dashboardSummary">
            <div>
              <p>
                Total Amount <br /> ₹{totalAmount}
              </p>
            </div>

            <div className="dashboardSummaryBox2">
              <Link to="/admin/products">
                <p>Products</p>
                <p>{products && products.length}</p>
              </Link>
              <Link to="/admin/orders">
                <p>Orders</p>
                <p>{orders && orders.length}</p>
              </Link>
              <Link to="/admin/users">
                <p>Users</p>
                <p>{users && users.length}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
