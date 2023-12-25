import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../slice/cartSlice';

const CartItem = ({ item }) => {
	const dispatch = useDispatch()

	const [count, setCount] = useState(item.quantity);

	const increment = () => {
		setCount(count + 1);
		dispatch(addToCart(item));
	 };
  
	 const decrement = () => {
		setCount(count - 1);
		if (count === 1) {
		  dispatch(removeFromCart(item.id));
		}
	 };

  return (
	 <li>
		<img src={item.image} alt={item.name}/>
		<h2>{item.name}</h2>
		<p>
			{new Intl.NumberFormat('uk-UA', {
				style: 'currency',
				currency: 'UAH',
			}).format(item.price * count)}
		</p>
		<div>
			<button onClick={decrement} >-</button>
			<p>{count}</p>
			<button onClick={increment} >+</button>
		</div>
	 </li>
  )
}

export default CartItem
