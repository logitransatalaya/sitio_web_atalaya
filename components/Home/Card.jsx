import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styles/Home.module.css'

export const HomeCard = ({ icon, title, description }) => {
	const [color, setColor] = useState('')

	const handleHover = (type) => {
		if (type === 'hover') setColor('Orange')
		if (type === 'unHover') setColor('')
	}

	return (
		<div
			onMouseEnter={() => handleHover('hover')}
			onMouseLeave={() => handleHover('unHover')}
			className={`${styled.card}`}
		>
			<div className={styled.iconsContainer}>
				<Image
					src={`/icons/${icon + color}.svg`}
					width='30'
					height='30'
					alt=''
				/>
			</div>
			<div style={{ padding: 0, marginTop: '1rem' }}>
				<h3>{title}</h3>
				<div>{description}</div>
			</div>
			<div>
				<Link href='/'>
					<a>
						<p>+</p>
					</a>
				</Link>
			</div>
		</div>
	)
}
