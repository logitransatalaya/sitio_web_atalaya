import React, { useState, useEffect } from 'react'
import { Banner } from 'components/Banner'
import CardInfoBanner from 'components/CardInfoBanner'
import Modal from 'components/Modal'
import PrivacyPolicy from 'components/PrivacyPolicy'

const privacyPolicies = () => {
	const [showModal, setShowModal] = useState(false)

	const handleModal = () => {
		setShowModal(!showModal)
	}

	useEffect(() => {
		if (showModal) {
			document.body.style.position = 'fixed'
			document.body.style.top = `-${window.scrollY}px`
			document.body.style.paddingRight = '15px'
		} else if (!showModal) {
			const scrollY = document.body.style.top
			document.body.style.position = ''
			document.body.style.top = ''
			document.body.style.paddingRight = '0'
			window.scrollTo(0, parseInt(scrollY || '0') * -1)
		}
	}, [showModal])

	return (
		<div style={{ marginBottom: '150px' }}>
			<Banner
				url={'privacidad-de-datos.png'}
				urlMobile={'politica-de-privacidad-mobile.png'}
			/>
			<CardInfoBanner handleModal={handleModal}>
				<p>
					<strong>Logística y transporte Atalaya</strong> es conciente
					de que el uso inadecuado de la información puede dar lugar a
					varios tipos de sanciones, entre ellas de tipo penal,
					contenidas en la Ley 1273 de 2009: Delitos Informáticos -
					Artículo 269 F. Violación de los Datos Personales: &quot;El
					que, sin estar facultado para ello, con provecho propio o de
					un tercero, obtenga, compile, sustraiga, ofrezca, venda,
					intercambie, envíe, compre, intercepte, divulgue, modifique
					o emplee códigos personales, datos personales contenidos en
					ficheros, archivos, bases de datos o medios semejantes,
					incurrirá en pena de prisión de cuarenta y ocho (48) a
					noventa y seis (96) meses y en multa de 100 a 1000 salarios
					mínimos legales mensuales vigentes".
				</p>
			</CardInfoBanner>
			{showModal && (
				<Modal handleModal={handleModal}>
					<PrivacyPolicy />
				</Modal>
			)}
		</div>
	)
}

export default privacyPolicies
