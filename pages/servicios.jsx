import React from 'react'
import { Row } from 'react-bootstrap'
import { Cards } from 'components/Cards'
import { Button } from 'components/Button'
import styles from '../styles/Service.module.css'

const servicios = ({ text }) => {
	return (
		<div className={`container ${styles.container_service}`}>
			<Row>
				<h1 className={`${styles.title_main} ${styles.form_title}`}>
					En
					<span className={`${styles.subtitle_main}`}>
						ATALAYA S.A.S
					</span>
					gestionamos la logística de su empresa
					<h1 />
					<h1 />
					prestando servicios especializados en:
				</h1>
			</Row>
			<Cards />
			<Button text={'¡SOLICITA UNA COTIZACION!'} to={'/contactenos'} />
		</div>
	)
}

export default servicios
