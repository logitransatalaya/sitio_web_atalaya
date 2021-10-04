import { Banner } from 'components/Banner'
import CardInfoBanner from 'components/CardInfoBanner'
import DataProcessingPolicy from 'components/DataProcessingPolicy'
import Modal from 'components/Modal'
import React, { useState } from 'react'

const dataTreatment = () => {
	const [showModal, setShowModal] = useState(false)

	const handleModal = () => {
		setShowModal(!showModal)
	}
	return (
		<div style={{ marginBottom: '150px' }}>
			<Banner
				url={'politica-de-tratamiento-de-datos.png'}
				urlMobile={'politica-de-tratamiento-de-datos-mobile.png'}
			/>
			<CardInfoBanner handleModal={handleModal}>
				En cumplimiento a lo dispuesto en la Ley 1581 de 2012 y su
				Decreto reglamentario 1377 de 2013 y a las demás disposiciones
				que las modifiquen, la compañía Logística y Transporte Atalaya
				S.A.S., en adelante ATALAYA adopta la presente política para el
				tratamiento en materia de protección de Datos Personales, en
				adelante la Política, en relación con la recolección, uso y
				transferencia de los mismos.
			</CardInfoBanner>
			{showModal && (
				<Modal handleModal={handleModal}>
					<DataProcessingPolicy />
				</Modal>
			)}
		</div>
	)
}

export default dataTreatment
