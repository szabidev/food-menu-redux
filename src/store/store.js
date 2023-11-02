import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import productReducer from "./ui";

const store = configureStore({
  reducer: { cart: cartReducer, ui: productReducer },
});

export default store;
