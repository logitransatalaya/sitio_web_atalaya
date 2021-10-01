import { Button } from 'components/Button'
import { CardService } from 'components/CardService'
import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import styles from '../styles/Service.module.css'

const servicios = () => {
	return (
		<div className={`container ${styles.container_service}`}>
			<Row>
				<h1 className={`${styles.title_main} ${styles.form_title}`}>
					En{' '}
					<span className={`${styles.subtitle_main}`}>
						ATALAYA S.A.S
					</span>{' '}
					gestionamos la logística de su empresa prestando servicios
					especializados en:
				</h1>
			</Row>
			<div className={` ${styles.row}`}>
				<CardService image={'/logistica.png'} />
				<CardService image={'/transporte.png'} />
				<CardService image={'/bodega.png'} />
				<CardService image={'/especiales.png'} />
				<CardService image={'/alquiler.png'} />
				<CardService image={'/consultoria.png'} />
				<CardService image={'/mensajeria.png'} />
				<CardService image={'/software.png'} />
			</div>
			<Button />
		</div>
	)
}

export default servicios
