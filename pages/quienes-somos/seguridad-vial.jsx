import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import styled from 'styles/seguridadvial.module.css'

const seguridadVial = () => {
	return (
		<div className={`${styled.containerCom}`}>
			<div className={`${styled.container}`}>
				<div>
					<h2 className={`${styled.title}`}>
						Política de Seguridad Vial
					</h2>
				</div>
				<div className={`${styled.imgandinfo}`}>
					<div className={`${styled.border} ${styled.imgcontainer}`}>
						<img
							src='/seguridadvial1.png'
							alt='foto barco camion xD'
							width='100%'
							height='100%'
						/>
					</div>
					<div className={`${styled.text} ${styled.border}`}>
						<p>
							<strong>
								LOGÍSITICA Y TRANSPORTE ATALAYA S.A.S.
							</strong>{' '}
							es una empresa dedicada a transporte masivo en
							general, pasajeros, mixto, especial, transporte de
							residuos y mercancías peligrosas, transporte
							tercerizado, transporte de mercancías licitas,
							transporte logístico portuario, aéreo, prorrateo,
							depósito de transito aduanero, importaciones,
							alquiler de maquinaria amarilla, grúas telescópicas,
							agrícola, tracto camiones, adecuaciones con camión
							cisterna, cama baja. Tratamiento de aguas
							residuales, asesoría y consultoría, ambiental,
							civil. Arrendamiento de todo tipo de bienes
							inmuebles, aserias y consultorías financieras.
							<br />
							Los trabajadores que manejen vehículos de propiedad
							y/o al servicio de{' '}
							<strong>
								LOGÍSITICA Y TRANSPORTE ATALAYA S.A.S.
							</strong>{' '}
							deberán respetar las normas de tránsito, atendiendo
							especialmente las relacionadas con límites de
							velocidad.
						</p>
					</div>
				</div>
				<div className={`${styled.containparagraphs}`}>
					<p>
						La compañía en su compromiso de preservar la vida humana
						y la continuidad de las operaciones, ha establecido los
						siguientes lineamientos, los cuales son de obligatorio
						cumplimiento para conductores propios y terceros:
					</p>
				</div>
			</div>
		</div>
	)
}

export default seguridadVial
