import React from 'react'
import { CardGroup, Card, Row, Col } from 'react-bootstrap'
import style from 'styles/sedes.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const sedes = () => {
	return (
		<div>
			<h1 className={`${style.main_title}`}>
				En Atalaya S.A.S contamos con las siguientes sedes
				<h1 />
				<h1 />
				en el territorio nacional:
			</h1>
			<div className={`${style.container}`}>
				<Row xs={1} md={2} className={`${style.CardContainer}`}>
					<Card className={`${style.cards}`}>
						<Card.Body>
							<Card.Title className={`${style.title}`}>
								Cartagena-Bolivar
							</Card.Title>
							<Card.Img src='/cartagena.png' />
							<Card.Text
								className={`${style.address} ${style.title_address}`}
							>
								<h3>Sede principal</h3>
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
							<Card.Img src='/medellin.png' />
							<Card.Text
								className={`${style.address} ${style.title_address}`}
							>
								<h3>Sucursal de Antioquia</h3>
							</Card.Text>

							<Card.Text className={`${style.address}`}>
								<b>DIRECCIÓN: </b> Calle 20 E # 45 - 39 OF. 201
							</Card.Text>
						</Card.Body>
					</Card>
				</Row>
			</div>
		</div>
	)
}

export default sedes
