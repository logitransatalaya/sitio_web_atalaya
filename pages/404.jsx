import NotFoundAnimation from 'components/NotFoundAnimation'
import React from 'react'
import styled from '../styles/notfound.module.css'

const NotFound = () => {
	return (
		<div className={`${styled.notFoundC}`}>
			<NotFoundAnimation />
		</div>
	)
}

export default NotFound
