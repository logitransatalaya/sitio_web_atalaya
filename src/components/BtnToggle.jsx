import React from 'react'
import styles from 'styles/BtnToggle.module.css'

export const BtnToggle = ({ state }) => {
	// const styleToggle = state
	// 	? styles.toggle
	// 	: `${styles.toggle} ${styles.active}`

	return <div className={styles.toggle}></div>
}
