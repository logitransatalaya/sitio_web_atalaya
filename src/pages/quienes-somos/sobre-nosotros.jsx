import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Container } from 'components/Container'
import styled from 'styles/Sobre-nosotros.module.css'
import { Card } from 'components/sobre-nosotros/Card'

export const SobreNosotros = () => {
	return (
		<>
			<Helmet>
				<title>
					Sobre Nosotros - Logística y Transporte Atalaya S.A.S
				</title>
				<meta
					name='description'
					content='Es una empresa Colombiana de Logística y Transporte, que cumple con todos los estándares de calidad en el servicio y confiabilidad,contamos con talento experto en logística, modelos de gestión en seguridad y control.'
				/>
				<link rel='icon' to='/favicon.png' />
			</Helmet>
			<Container>
				<div className={styled.SobreNosotros}>
					<div className={styled.initialTextContainer}>
						<img src='/sobrenosotros.png' alt='' />
						<div>
							<h3>Logística y Transporte ATALAYA S.A.S</h3>
							<p>
								<strong>ATALAYA S.A.S</strong> es una empresa
								Colombiana de Logística y Transporte, que cumple
								con todos los estándares de calidad en el
								servicio y confiabilidad, contamos con talento
								experto en logística, modelos de gestión en
								seguridad y control, distribución de mercadería
								a nivel nacional y urbano, manejo de
								contenedores (puertos Cartagena) y alianzas en
								transporte OTM.
							</p>
							<div className={styled.SolicitaCotizacion}>
							<Link to='/contactenos'>
								¡Solicita una cotización!
							</Link>
							</div>
						</div>
					</div>
					<div className={styled.SecondPartContainer}>
						<h4>¿PORQUÉ ELEGIRNOS?</h4>
						<div className={styled.CardContainer}>
							<Card icon='security' title='Seguridad' />
							<Card icon='paper' title='Control' />
							<Card
								icon='developer'
								title='Tecnología de punta'
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}
