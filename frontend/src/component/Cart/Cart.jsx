import React, { useEffect } from "react";
import "./Cart.css";
import "./CartItemCard";
import CartItemCard from "./CartItemCard";
import { useSelector, useDispatch } from "react-redux";
import {
  addItemsToCart,
  loadCartFromStorage,
  removeItemFromCart,
} from "../../store/actions/cartAction";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { Link, useNavigate } from "react-router-dom";
import MetaData from "../Layout/MetaData";
import Loader from "../Layout/Loader/Loader";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems, loading } = useSelector((state) => state.cart);

  // Function to increase the quantity
  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  // Function to decrease the quantity
  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  // Load cart data from localStorage when the component mounts
  useEffect(() => {
    // Dispatch the loadCartFromStorage action
    dispatch(loadCartFromStorage());
  }, [dispatch]);

  // Calculate the gross total based on the cart items
  const calculateGrossTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Remove Item from Cart
  const deleteCartItems = (id) => {
    dispatch(removeItemFromCart(id));
  };

  // Check Out
  const checkOutHandler = () => {
    navigate("/login?redirect=shipping");
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {cartItems.length === 0 ? (
            <div className="emptyCart">
              <MetaData title="Cart is Empty" />
              <RemoveShoppingCartIcon />
              <p>No Product in Your Cart</p>
              <Link to="/products">View Products</Link>
            </div>
          ) : (
            <>
              <div className="cartPage">
                <MetaData title="Cart" />
                <div className="cartHeader">
                  <p>Product</p>
                  <p>Quantity</p>
                  <p>Subtotal</p>
                </div>

                {cartItems &&
                  cartItems.map((item) => (
                    <div className="cartContainer" key={item.product}>
                      <CartItemCard
                        item={item}
                        deleteCartItems={deleteCartItems}
                      />
                      <div className="cartInput">
                        <button
                          onClick={() =>
                            decreaseQuantity(item.product, item.quantity)
                          }
                        >
                          -
                        </button>
                        <input type="number" value={item.quantity} readOnly />
                        <button
                          onClick={() =>
                            increaseQuantity(
                              item.product,
                              item.quantity,
                              item.stock
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                      <p className="cartSubtotal">{`₹${
                        item.price * item.quantity
                      }`}</p>
                    </div>
                  ))}

                <div className="cartGrossProfit">
                  <div></div>
                  <div className="cartGrossProfitBox">
                    <p>Gross Total</p>
                    <p className="amount">{`₹${calculateGrossTotal()}`}</p>
                  </div>
                  <div></div>
                  <div className="checkOutBtn">
                    <button onClick={checkOutHandler}>Check Out</button>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Cart;
