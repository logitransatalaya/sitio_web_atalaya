import Head from 'next/head'
import Modal from 'components/Modal'
import React, { useState } from 'react'
import { Banner } from 'components/Banner'
import CardInfoBanner from 'components/CardInfoBanner'
import SistemaGestionInfo from 'components/SistemaGestionInfo'
import styled from '../../styles/sistemaGestionIntegrado.module.css'

const SistemaGestionIntegrado = () => {
	const [showModal, setShowModal] = useState(false)

	const handleModal = () => {
		setShowModal(!showModal)
	}

	console.log(showModal)

	return (
		<>
			<Head>
				<title>SST - Logística y Transporte Atalaya S.A.S</title>
				<meta
					name='description'
					content='Política integral de calidad, seguridad, salud en el trabajo, ambiente, responsabilidad social empresarial y gestión de activos.'
				/>
				<link rel='icon' href='/favicon.png' />
			</Head>
			<div className={`${styled.containerSGI}`}>
				<Banner
					url={'../gestion.png'}
					urlMobile={'../gestion-integrado-mobile.png'}
				/>
				<CardInfoBanner handleModal={handleModal}>
					<p>
						Esta política aplica para todos los trabajadores de la
						organización independientemente de su modalidad de
						contratación y demás partes Interesadas (Clientes,
						empleados, proveedores, accionistas) así como para todos
						los centros de trabajo donde{' '}
						<strong>LOGÍSTICA Y TRANSPORTE ATALAYA S.A.S</strong>,
						desarrolla sus actividades.
					</p>
				</CardInfoBanner>
				{showModal && (
					<Modal handleModal={handleModal}>
						<SistemaGestionInfo />
					</Modal>
				)}
			</div>
		</>
	)
}

export default SistemaGestionIntegrado
