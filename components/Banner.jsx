import React from 'react'
import styles from '../styles/banner.module.css'

export const Banner = ({ url }) => {
	return (
		<div className={`${styles.container}`}>
			<div className={`mt-5 mb-4  ${styles.card}`}>
				<div style={{ width: '100%', borderRadius: '10px' }}>
					<img
						src={`${url}`}
						width='100%'
						height='400rem'
						alt='banners de atalaya'
					/>
				</div>
			</div>
		</div>
	)
}
