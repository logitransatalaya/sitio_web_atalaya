import React from 'react'
import { CardGroup, Card, Row, Col } from 'react-bootstrap'
import style from 'styles/sedes.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'components/Button'
import styles from '../../styles/Service.module.css'

const sedes = () => {
	return (
		<div>
			<Row>
				<h1
					className={`mt-4 ${styles.title_main} ${styles.form_title} `}
				>
					En Atalaya S.A.S contamos con las siguientes sedes en el
					territorio nacional:
				</h1>
			</Row>
			<div className={`${style.container}`}>
				<Row xs={1} md={2} className={`${style.CardContainer}`}>
					<Card className={`${style.cards}`}>
						<Card.Body>
							<Card.Title className={`${style.title}`}>
								Cartagena-Bolivar
							</Card.Title>
							<div className={style.boxImgSedes}>
								<Card.Img src='/cartagena.png' />
							</div>
							<Card.Text
								className={`${style.address} ${style.title_address}`}
							>
								<b>Sede principal</b>
							</Card.Text>

							<Card.Text className={`${style.address}`}>
								<b>DIRECCION:</b> Diagonal 21 N° 15-02 Barrio el
								Bosque, Cartagena de Indias
							</Card.Text>
						</Card.Body>
					</Card>
					<Card className={`${style.cards}`}>
						<Card.Body>
							<Card.Title className={`${style.title}`}>
								Bello-Antioquia
							</Card.Title>
							<div className={style.boxImgSedes}>
								<Card.Img src='/medellin.png' />
							</div>
							<Card.Text
								className={`${style.address} ${style.title_address}`}
							>
								<b>Sucursal de Antioquia</b>
							</Card.Text>

							<Card.Text className={`${style.address}`}>
								<b>DIRECCIÓN: </b> Calle 20 E # 45 - 39 OF. 201
							</Card.Text>
						</Card.Body>
					</Card>
				</Row>
			</div>
			<Button text={'!Solicita una cotizacion¡'} to={'/contactenos'} />
		</div>
	)
}

export default sedes
