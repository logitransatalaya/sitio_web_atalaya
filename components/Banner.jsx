import React from 'react'

export const Banner = ({ url }) => {
	return (
		<div className=''>
			<div style={{ width: '100%' }}>
				<img
					src={`${url}`}
					width='100%'
					height='600px'
					alt='banners de atalaya'
				/>
			</div>
		</div>
	)
}
