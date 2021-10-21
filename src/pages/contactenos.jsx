import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styles/About.module.css'
import FormAbout from 'components/Contactenos/FormAbout'

export const Contactenos = () => {
	return (
		<>
			<Helmet>
				<title>
					Contáctenos - Logística y Transporte Atalaya S.A.S
				</title>
				<meta
					name='description'
					content='Contáctenos. Déjenos conocer su requerimiento y pronto nos comunicaremos.'
				/>
				<link rel='icon' href='/favicon.png' />
			</Helmet>
			<div className={styled.formContainer}>
				<FormAbout />
			</div>
		</>
	)
}
