import React from 'react'
import styled from 'styled-components'
import ItemButton from '../ui/ItemButton/ItemButton'
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
const Item = ({ item }) => {

  return (
	<Li key={item.id}>
		<img src={item.image} alt={item.name}/>
		<h4>{item.name}</h4>
		<p>
			{new Intl.NumberFormat('uk-UA', {
				style: 'currency',
				currency: 'UAH',
			}).format(item.price)}
		</p>
		<ItemButton item={item}/>
	</Li>
  )
}

export default Item
