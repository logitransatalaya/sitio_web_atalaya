import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from 'styles/Footer.module.css'

export const FooterAtalaya = () => {
	return (
		<div className='w-100'>
			<Row className={styles.section1_footer}>
				<Col xs={12} md={4} lg={4} className='text-center mt-5'>
					<h3>Logo</h3>
					<div>
						<p>Facebook</p>
						<p>Instagram</p>
					</div>
				</Col>
				<Col xs={12} md={4} lg={4} className='mt-5'>
					<h5 className={styles.link_father}>CONTACTO</h5>
					<b>Correos</b>
					<p className={styles.link_son}>
						<small>
							<a href='#'>
								servicioalcliente@logitransatalaya.com
							</a>
						</small>
					</p>
					<p className={styles.link_son}>
						<small>
							<a href='#'>gerencia@logitransatalaya.com</a>
						</small>
					</p>
					<p className={styles.link_son}>
						<small>
							<a href='#'>contabilidad@logitransatalaya.com</a>
						</small>
					</p>
					<p className={styles.link_son}>
						<small>
							<a href='#'>logistica@logitransatalaya.com</a>
						</small>
					</p>
					<p className={styles.link_son}>
						<small>
							<a href='#'>
								servicioalcliente@logitransatalaya.com
							</a>
						</small>
					</p>
					<br />
					<b>Teléfonos</b>
					<p>
						<small>(+57) 314 555 4981 - (+57) 314 555 4761</small>
					</p>
				</Col>
				<Col xs={12} md={4} lg={4} className='mt-5'>
					<h5 className={styles.link_father}>TE PUEDE INTERESAR</h5>
					<p className={styles.link_son}>
						<small>
							<a href='#'>Políticas de privacidad</a>
						</small>
					</p>
					<p className={styles.link_son}>
						<small>
							<a href='#'>Políticas de tratamiento de datos</a>
						</small>
					</p>
					<p className={styles.link_son}>
						<small>
							<a href='#'>Sedes</a>
						</small>
					</p>
				</Col>
			</Row>
			<Row className={styles.section2_footer}>
				<p className='text-center'>
					© Copyright 2021 -{' '}
					<b>Logística y Transporte Atalaya S.A.S</b> - Colombia
				</p>
			</Row>
		</div>
	)
}
