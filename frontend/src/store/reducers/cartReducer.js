import {
  ADD_TO_CART,
  LOAD_CART_FROM_STORAGE,
  REMOVE_CART_ITEM,
  SAVE_SHIPPING_INFO,
  LOAD_SHIPPING_INFO_FROM_STORAGE,
  LOAD_ORDER_CONFIRMATION_FROM_STORAGE,
} from "../constants/cartConstant";

const initialState = {
  cartItems: [],
  shippingInfo: {},
  orderConfirmation: {},
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;

      const isItemExist = state.cartItems.find(
        (i) => i.product === item.product
      );

      if (isItemExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.product === isItemExist.product ? item : i
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case LOAD_CART_FROM_STORAGE:
      return {
        ...state,
        cartItems: action.payload,
      };

    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.product !== action.payload),
      };

    case SAVE_SHIPPING_INFO:
      return {
        ...state,
        shippingInfo: action.payload,
      };

    case LOAD_SHIPPING_INFO_FROM_STORAGE:
      return {
        ...state,
        shippingInfo: action.payload,
      };

    case LOAD_ORDER_CONFIRMATION_FROM_STORAGE:
      return {
        ...state,
        orderConfirmation: action.payload,
      };

    default:
      return state;
  }
};
