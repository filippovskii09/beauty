import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../slice/cartSlice'
const persistedCart = JSON.parse(localStorage.getItem('cart')) || [];

export const store = configureStore({
	reducer: {
		cart: cartReducer,
	},
	preloadedState: {
		cart: persistedCart
	}
})