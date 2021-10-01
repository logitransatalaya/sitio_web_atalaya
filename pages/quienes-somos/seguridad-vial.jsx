import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'

const seguridadVial = () => {
	return (
		<Container fluid>
			<Row className='justify-content-md-center'>
				<h2>Política de Seguridad Vial</h2>
			</Row>
			<Row>
				<Col>
					<Image
						src='/seguridadvial1.png'
						alt='foto barco camion xD'
						width='200'
						height='200'
					/>
				</Col>
				<Col>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Nulla dolorum commodi dolorem ex consectetur,
						aliquid vitae facere suscipit iusto. Dolorum maxime
						placeat voluptas culpa accusantium, officiis quos
						perferendis aperiam error.
					</p>
				</Col>
			</Row>
		</Container>
	)
}

export default seguridadVial
