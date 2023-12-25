import React, { useState } from 'react'
import {ReactComponent as Icon} from './heart-svgrepo-com.svg'
import styles from './ItemLike.module.css'

const ItemLike = () => {
	const [save, setSave] = useState(false);

	const handleSave = () => {
		setSave(save => !save)
	}

  return (
		<Icon className={save ? styles.checked : styles.like} onClick={handleSave}/>
	)
}

export default ItemLike
