import React from 'react'
import styles from '../styles/Service.module.css'

export const Button = ({ text }) => {
	return (
		<div className='mt-1 mb-5'>
			<div className={styles.button_service_center}>
				<button className={styles.button_service}>{text}</button>
			</div>
		</div>
	)
}
