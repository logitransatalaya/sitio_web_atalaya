import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import styles from '../styles/Service.module.css'

const servicios = () => {
	return (
		<div className={`container ${styles.container_service}`}>
			<Row>
				<h1 className={`${styles.title_main} ${styles.form_title}`}>
					En ATALAYA S.A.S gestionamos la logística de su empresa
					prestando servicios especializados en:
				</h1>
			</Row>

			<Row className='mt-4 justify-content-center '>
				<Col className='justify-content-center' xs={7} md={6} lg={3}>
					<Card
						as={Col}
						variant='primary'
						bg={'red'}
						text={'hola'}
						style={{ width: '16rem' }}
						className='mt-2'
					>
						<img src='/logistica.png' />
					</Card>
				</Col>
				<Col xs={7} md={6} lg={3}>
					<Card
						as={Col}
						variant='primary'
						bg={'red'}
						text={'hola'}
						style={{ width: '16rem' }}
						className='mt-2'
					>
						<img src='/transporte.png' />
					</Card>
				</Col>
				<Col xs={12} md={6} lg={3}>
					<Card
						as={Col}
						variant='primary'
						bg={'red'}
						text={'hola'}
						style={{ width: '16rem' }}
						className='mt-2'
					>
						<img src='/bodega.png' />
					</Card>
				</Col>
				<Col xs={12} md={6} lg={3}>
					<Card
						as={Col}
						variant='primary'
						bg={'red'}
						text={'hola'}
						style={{ width: '16rem' }}
						className='mt-2'
					>
						<img src='/especiales.png' />
					</Card>
				</Col>
			</Row>
			<Row className='mt-4 justify-content-center'>
				<Col xs={12} md={6} lg={3}>
					<Card
						as={Col}
						variant='primary'
						bg={'red'}
						text={'hola'}
						style={{ width: '16rem' }}
						className='mt-2'
					>
						<img src='/consultoria.png' />
					</Card>
				</Col>
				<Col xs={12} md={6} lg={3}>
					<Card
						as={Col}
						variant='primary'
						bg={'red'}
						text={'hola'}
						style={{ width: '16rem' }}
						className='mt-2'
					>
						<img src='/alquiler.png' />
					</Card>
				</Col>
				<Col xs={12} md={6} lg={3}>
					<Card
						as={Col}
						variant='primary'
						bg={'red'}
						text={'hola'}
						style={{ width: '16rem' }}
						className='mt-2'
					>
						<img src='/mensajeria.png' />
					</Card>
				</Col>
				<Col mt={3} xs={12} md={6} lg={3}>
					<Card
						as={Col}
						variant='primary'
						bg={'red'}
						text={'hola'}
						style={{ width: '16rem' }}
						className='mt-2'
					>
						<img src='/software.png' />
					</Card>
				</Col>
			</Row>

			<Row className='mt-5 mb-5 justify-content-center'>
				<Col md={3}>
					<button className={styles.button_service}>
						!Solicita una cotizacion¡
					</button>
				</Col>
			</Row>
		</div>
	)
}

export default servicios
