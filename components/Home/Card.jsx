import React from 'react'
import Image from 'next/image'
import styled from 'styles/Home.module.css'

export const HomeCard = () => {
	return (
		<div className={styled.card}>
			<div className={styled.iconsContainer}>
				<Image src='/icons/users.svg' width='35' height='35' alt='' />
			</div>
			<div style={{ padding: 0, marginTop: '1rem' }}>
				<h3>Quienes Somos</h3>
				<div>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Officiis sunt, odio excepturi perspiciatis culpa architecto
					labore inventore dolor suscipit molestias? Lorem ipsum,
					dolor sit amet consectetur adipisicing elit. Autem,
					temporibus?
				</div>
				<div>
					<p>+</p>
				</div>
			</div>
		</div>
	)
}
