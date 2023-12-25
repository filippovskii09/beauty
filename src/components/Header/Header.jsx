import React from 'react'
import LangSelect from './LangSelect/LangSelect'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../images/icons/logo.svg'
import { ReactComponent as Search} from '../../images/icons/search.svg'
import { ReactComponent as Account} from '../../images/icons/account.svg'
import { ReactComponent as Heart} from '../../images/icons/heart.svg'
import { ReactComponent as Cart} from '../../images/icons/cart.svg'

const Header = () => {
  return (
	 <header className={styles.header}>
		<div className={styles.headerContainer}>
			<div className={styles.headerTop}>
				<p className={styles.headerItem}>Безкоштовна доставка по Україні!</p>
				<div className={styles.headerTopWrapper}>
					<ul className={styles.headerTopList}>
						<li className={styles.headerItem}>
							<a href="#" id="style-2" data-replace="Акції"><span>Акції</span></a>
						</li>
						<li className={styles.headerItem}>
							<a href="#" id="style-2" data-replace="Доставка та оплата"><span>	Доставка та оплата </span></a>
						</li>
						<li className={styles.headerItem}> 
							<a href="#" id="style-2" data-replace="Про магазин"><span>Про магазин</span></a>
						</li>
						<li className={styles.headerItem}>
							<a href="#" id="style-2" data-replace="Блог"><span>Блог</span></a>
						</li>
					</ul>
					<LangSelect/>
				</div>
			</div>
			<div className={styles.headerLine}></div>
			<div className={styles.headerBottom}>
				<Link to='/'>
					<Logo/>
				</Link>
				<div className={styles.headerBottomWrapper}>
					<ul className={styles.headerBottomList}>
						<li className={styles.headerBottomItem}>
							<Link><Search/></Link>
						</li>
						<li className={styles.headerBottomItem}>
							<Link><Account/></Link>
						</li>
						<li className={styles.headerBottomItem}>
							<Link><Heart/></Link>
						</li>
						<li className={styles.headerBottomItem}>
							<Link to='/cart'><Cart/></Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	 </header>
  )
}

export default Header
