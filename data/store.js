import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../data/local/productSlice";

export const store = configureStore({
    reducer: {
        products: productsReducer,
    }
})