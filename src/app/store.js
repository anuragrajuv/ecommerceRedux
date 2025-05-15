import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../redux/productSlice';
import cartReducer from '../redux/cartSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer
  },
});
