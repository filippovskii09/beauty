import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components';
import CartItem from '../CartItem/CartItem';

export const Li = styled.li`
	max-width: 300px;
	list-style: none;
	display: flex;
	flex-direction: column;
	align-items:center;
	border: 1px solid #000;
	padding: 10px;
	p {
		padding: 5px;
	}
	img {
		max-width: 300px;
	}
`

const Cart = () => {
	const cartItems = useSelector((state) => state.cart);

  return (
	 <section>
		{cartItems.map(item => (
			<CartItem key={item.id} item={item}/>
		))}
	 </section>
  )
}

export default React.memo(Cart)
