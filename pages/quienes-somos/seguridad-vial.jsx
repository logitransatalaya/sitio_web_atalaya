import Modal from 'components/Modal'
import React, { useState } from 'react'
import { Banner } from 'components/Banner'
import styled from 'styles/seguridadvial.module.css'
import CardInfoBanner from 'components/CardInfoBanner'
import RoadSafetyPolicies from 'components/RoadSafetyPolicies'

const seguridadVial = () => {
	const [showModal, setShowModal] = useState(false)

	const handleModal = () => {
		setShowModal(!showModal)
	}

	return (
		<div className={`${styled.container}`}>
			<Banner url={'../vial.png'} />
			<CardInfoBanner handleModal={handleModal}>
				<p>
					<strong>LOGÍSITICA Y TRANSPORTE ATALAYA S.A.S.</strong> es
					una empresa dedicada a transporte masivo en general,
					pasajeros, mixto, especial, transporte de residuos y
					mercancías peligrosas, transporte tercerizado, transporte de
					mercancías licitas, transporte logístico portuario, aéreo,
					prorrateo, depósito de transito aduanero, importaciones,
					alquiler de maquinaria amarilla, grúas telescópicas,
					agrícola, tracto camiones, adecuaciones con camión cisterna,
					cama baja. Tratamiento de aguas residuales, asesoría y
					consultoría, ambiental, civil. Arrendamiento de todo tipo de
					bienes inmuebles, aserias y consultorías financieras. <br />
					Los trabajadores que manejen vehículos de propiedad y/o al
					servicio de LOGÍSITICA Y TRANSPORTE ATALAYA S.A.S, deberán
					respetar las normas de tránsito, atendiendo especialmente
					las relacionadas con límites de velocidad.
				</p>
			</CardInfoBanner>
			{showModal && (
				<Modal handleModal={handleModal}>
					<RoadSafetyPolicies />
				</Modal>
			)}
		</div>
	)
}

export default seguridadVial
