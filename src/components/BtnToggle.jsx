import React from 'react'
import styles from 'styles/BtnToggle.module.css'

export const BtnToggle = ({ state }) => {
	console.log('entra')
	const styleToggle = state
		? styles.toggle
		: `${styles.toggle} ${styles.active}`

	return <div className={styleToggle}></div>
}
