import { configureStore } from "@reduxjs/toolkit";
import {
  productReducer,
  productDetailsReducer,
} from "./reducers/productReducer";
import {
  forgotPasswordReducer,
  profileReducer,
  userReducer,
} from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    products: productReducer,
    productDetails: productDetailsReducer,
    user: userReducer,
    profile: profileReducer,
    forgotPassword: forgotPasswordReducer,
  },
});

export default store;
