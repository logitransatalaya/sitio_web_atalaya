import { Banner } from 'components/Banner'
import CardInfoBanner from 'components/CardInfoBanner'
import Modal from 'components/Modal'
import SistemaGestionInfo from 'components/SistemaGestionInfo'
import React, { useState } from 'react'
import styled from '../../styles/sistemaGestionIntegrado.module.css'

const sistemaGestionIntegrado = () => {
	const [showModal, setShowModal] = useState(false)

	const handleModal = () => {
		setShowModal(!showModal)
	}

	console.log(showModal)

	return (
		<div className={`${styled.containerSGI}`}>
			<Banner url={'../gestion.png'} />
			<CardInfoBanner handleModal={handleModal}>
				<p>
					Esta política aplica para todos los trabajadores de la
					organización independientemente de su modalidad de
					contratación y demás partes Interesadas (Clientes,
					empleados, proveedores, accionistas) así como para todos los
					centros de trabajo donde{' '}
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
	)
}

export default sistemaGestionIntegrado
