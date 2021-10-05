import React from 'react'
import styled from '../styles/btnsContact.module.css'
import Image from 'next/image'

export const BtnsContacts = ({ icon, IconResponsive, title }) => {
	const handleHref = () => {
		const response =
			title === 'Whatsapp'
				? ``
				: title === 'viajes y turismo'
				? alert('redireccionando a la pagina de turismo')
				: alert('no se que va acá')

		return response
	}

	return (
		<div className={`${styled.btnsContact} ${styled.btnW}`}>
			{title === 'Whatsapp' ? (
				<a
					className={styled.acontainer}
					href='https://wa.me/573006123886?text=Hablalo%20pai%20le%20habla%20el%20Kalixto'
					target='_blank'
				>
					<Image
						src={`/icons/${icon}.svg`}
						width='100%'
						height='100%'
					/>
				</a>
			) : (
				<a className={styled.acontainer} href=''>
					<Image
						src={`/icons/${icon}.svg`}
						width='100%'
						height='100%'
					/>
				</a>
			)}
		</div>
	)
}
