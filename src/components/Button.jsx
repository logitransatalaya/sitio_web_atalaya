import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Service.module.css'

export const Button = ({ text, to }) => {
	return (
		<div className='mt-1 mb-5'>
			<div className={styles.button_service_center}>
				<Link className={`${styles.button_service}`} to={to}>
					{text}
				</Link>
			</div>
		</div>
	)
}
