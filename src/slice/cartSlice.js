import { createSlice } from "@reduxjs/toolkit"

const calculateTotal = (cart) => {
	return cart.reduce((total, item) => {
	  return total + item.price * item.quantity;
	}, 0);
 };

export const cartSlice = createSlice({
	name: 'cart',
	initialState: JSON.parse(localStorage.getItem('cart')) || [],
	reducers: {
		addToCart: (state, action) => {
			const { id } = action.payload;
			const existingItemIndex = state.findIndex(item => item.id === id);
	
			if (existingItemIndex !== -1) {
			  // Modify the existing item in the draft
			  state[existingItemIndex].quantity += 1;
			} else {
			  // Add a new item to the draft
			  state.push({ ...action.payload, quantity: 1 });
			}

			state.total = calculateTotal(state.items);
	
			// Save the updated state to localStorage
			localStorage.setItem('cart', JSON.stringify(state));
		 },
		 removeFromCart: (state, action) => {
			const itemId = action.payload;
			const newState = state.filter(item => item.id !== itemId);
	
			// Save the updated state to localStorage
			localStorage.setItem('cart', JSON.stringify(newState));
	
			return newState;
		 },	
	}
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;