import React from 'react'
import { useData } from '../../context/dataContext'
import styles from './Catalog.module.css'
import Item from '../Item/Item'

const Catalog = () => {

	const data = useData()

  return (
	 <section>
		<div className='container'>
			<ul className={styles.ul}>
				{data.map(item => (
					<Item key={item.id} item={item}></Item>
				))}
			</ul>
		</div>
	 </section>
  )
}

export default Catalog
