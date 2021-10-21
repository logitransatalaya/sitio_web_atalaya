import Modal from 'components/Modal'
import { Helmet } from 'react-helmet'
import { Banner } from 'components/Banner'
import React, { useState, useEffect } from 'react'
import PrivacyPolicy from 'components/PrivacyPolicy'
import CardInfoBanner from 'components/CardInfoBanner'

export const PrivacyPolicies = () => {
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
		<>
			<Helmet>
				<title>
					Política de privacidad - Logística y Transporte Atalaya
					S.A.S
				</title>
				<meta
					name='description'
					content='Logística y transporte Atalaya es conciente de que el uso inadecuado de la información puede dar lugar a varios tipos de sanciones, entre ellas de tipo penal, contenidas en la Ley 1273 de 2009: Delitos Informáticos - Artículo 269 F. Violación de los Datos Personales: "El que, sin estar facultado para ello, con provecho propio o de un tercero, obtenga, compile, sustraiga, ofrezca, venda, intercambie, envíe, compre, intercepte, divulgue, modifique o emplee códigos personales, datos personales contenidos en ficheros, archivos, bases de datos o medios semejantes, incurrirá en pena de prisión de cuarenta y ocho (48) a noventa y seis (96) meses y en multa de 100 a 1000 salarios mínimos legales mensuales vigentes".'
				/>
				<link rel='icon' href='/favicon.png' />
			</Helmet>
			<div style={{ marginBottom: '150px', paddingTop: '2rem' }}>
				<Banner
					url={'privacidad-de-datos.png'}
					urlMobile={'politica-de-privacidad-mobile.png'}
				/>
				<CardInfoBanner handleModal={handleModal}>
					<p>
						<strong>Logística y transporte Atalaya</strong> es
						conciente de que el uso inadecuado de la información
						puede dar lugar a varios tipos de sanciones, entre ellas
						de tipo penal, contenidas en la Ley 1273 de 2009:
						Delitos Informáticos - Artículo 269 F. Violación de los
						Datos Personales: &quot;El que, sin estar facultado para
						ello, con provecho propio o de un tercero, obtenga,
						compile, sustraiga, ofrezca, venda, intercambie, envíe,
						compre, intercepte, divulgue, modifique o emplee códigos
						personales, datos personales contenidos en ficheros,
						archivos, bases de datos o medios semejantes, incurrirá
						en pena de prisión de cuarenta y ocho (48) a noventa y
						seis (96) meses y en multa de 100 a 1000 salarios
						mínimos legales mensuales vigentes&quot;.
					</p>
				</CardInfoBanner>
				{showModal && (
					<Modal handleModal={handleModal}>
						<PrivacyPolicy />
					</Modal>
				)}
			</div>
		</>
	)
}
