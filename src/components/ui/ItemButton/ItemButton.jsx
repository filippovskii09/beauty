import React from 'react'
import styles from './ItemButton.module.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../slice/cartSlice';

const ItemButton = ({ item }) => {
	const dispatch = useDispatch();

	const handleAddToCart = () => {
		console.log(item.id);
		dispatch(addToCart(item))
	}

  return (
	 <button onClick={handleAddToCart} className={styles.button}>
		Додати до кошика
	 </button>
  )
}

export default ItemButton
