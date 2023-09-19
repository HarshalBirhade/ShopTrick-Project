import { configureStore } from "@reduxjs/toolkit";
import {
  productReducer,
  productDetailsReducer,
} from "./reducers/productReducer";
import { userReducer } from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    products: productReducer,
    productDetails: productDetailsReducer,
    user: userReducer,
  },
});

export default store;
