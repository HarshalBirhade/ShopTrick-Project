import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./reducers/productReducer";

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;
