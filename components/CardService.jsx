import React from 'react'
import styles from '../styles/Service.module.css'

export const CardService = ({ image }) => {
	return (
		<div
			style={{
				width: '100%',
				display: 'flex',
				justifyContent: 'center'
			}}
		>
			<img className={`${styles.images}`} src={image} />
		</div>
	)
}
