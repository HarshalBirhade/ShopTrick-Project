import {
  ADD_TO_CART,
  LOAD_CART_FROM_STORAGE,
  REMOVE_CART_ITEM,
  SAVE_SHIPPING_INFO,
  LOAD_SHIPPING_INFO_FROM_STORAGE,
  LOAD_ORDER_CONFIRMATION_FROM_STORAGE,
} from "../constants/cartConstant";
import instance from "./axios";

// Add to Cart
export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await instance.get(`/api/v1/product/${id}`);

  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data.product._id,
      name: data.product.name,
      price: data.product.price,
      image: data.product.images[0].url,
      stock: data.product.stock,
      quantity,
    },
  });

  sessionStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cart.cartItems)
  );
};

// Load cart data from sessionStorage when the application starts
export const loadCartFromStorage = () => (dispatch) => {
  const savedCartItems = sessionStorage.getItem("cartItems");
  if (savedCartItems) {
    const parsedCartItems = JSON.parse(savedCartItems);
    dispatch({
      type: LOAD_CART_FROM_STORAGE,
      payload: parsedCartItems,
    });
  }
};

//Remove From Card
export const removeItemFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: id,
  });
  sessionStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cart.cartItems)
  );
};

// Save Shipping Info
export const saveShippingInfo = (data) => async (dispatch) => {
  dispatch({
    type: SAVE_SHIPPING_INFO,
    payload: data,
  });

  sessionStorage.setItem("shippingInfo", JSON.stringify(data));
};

// Load shipping info from local storage
export const loadShippingInfoFromStorage = () => (dispatch) => {
  const savedShippingInfo = sessionStorage.getItem("shippingInfo");
  if (savedShippingInfo) {
    const parsedShippingInfo = JSON.parse(savedShippingInfo);
    dispatch({
      type: LOAD_SHIPPING_INFO_FROM_STORAGE,
      payload: parsedShippingInfo,
    });
  }
};

// Load order confirmation info from local storage
export const loadOrderConfirmationFromStorage = () => (dispatch) => {
  const savedOrderConfirmation = sessionStorage.getItem("orderConfirmation");
  if (savedOrderConfirmation) {
    const parsedOrderConfirmation = JSON.parse(savedOrderConfirmation);
    dispatch({
      type: LOAD_ORDER_CONFIRMATION_FROM_STORAGE,
      payload: parsedOrderConfirmation,
    });
  }
};
