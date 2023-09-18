import { configureStore } from "@reduxjs/toolkit";
import {
  productReducer,
  productDetailsReducer,
} from "./reducers/productReducer";

const store = configureStore({
  reducer: {
    products: productReducer,
    productDetails: productDetailsReducer,
  },
});

export default store;
