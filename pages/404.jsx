import NotFoundAnimation from 'components/NotFoundAnimation'
import React from 'react'
import styled from '../styles/notfound.module.css'

const NotFound = () => {
	return (
		<div className={`${styled.notFoundC}`}>
			<div className={`${styled.btn_backCont}`}>
				<button className={`${styled.btn_back}`}>
					volver al inicio
				</button>
			</div>
			<NotFoundAnimation />
		</div>
	)
}

export default NotFound
