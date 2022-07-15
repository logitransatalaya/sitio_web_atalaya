import { useEffect } from 'react'
import { Map } from 'components/Map'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Cards } from 'components/Cards'
import styled from 'styles/Home.module.css'
import { Slider } from 'components/Home/Slider'
import { HomeCard } from 'components/Home/Card'
import { Container } from 'components/Container'

export const Home = () => {
	useEffect(() => window.scrollTo(0, 0), [])

	return (
		<div className={styled.container}>
			<Helmet>
				<title>Home - Logística y Transporte Atalaya S.A.S</title>
				<meta
					name='description'
					content='Logística y transporte Atalaya medellin antioquia colombia blog'
				/>
				<link rel='icon' href='/favicon.png' />
			</Helmet>
			<Slider />
			<Container>
				<h2>
					Ofrecemos soluciones especializadas
					<br />y adaptadas a las necesidades de los clientes
				</h2>
				<div className={styled.CardContainer}>
					<HomeCard type='quienes-somos' />
					<HomeCard type='mision' />
					<HomeCard type='vision' />
				</div>
				<div className={`${styled.NuestroAlcance}`}>
					<div>
						<img src='/imgAlcance.png' alt='Logotipo de atalaya' />
					</div>
					<div>
						<h3>
							<b>Nuestro alcance</b>
						</h3>
						<br />
						<p>
							En <b>ATALAYA</b> resolvemos todas sus necesidades
							logísticas a través de medios aéreos, marítimos y
							terrestre, para ello contamos con un equipo humano
							competente, y una <b>infraestructura tecnológica</b>{' '}
							a la vanguardia que soporta nuestra operación.
						</p>
						<div className={styled.ConoceMas}>
							<h5>
								<Link to='/quienes-somos/sobre-nosotros'>
									Conoce más
								</Link>
							</h5>
						</div>
					</div>
				</div>
				<div className={styled.ServiceCard}>
					<h3>Nuestros Servicios</h3>
					<p>
						Gestionamos la logística de su empresa prestando
						servicios especializados en:
					</p>
				</div>
				<Cards />
				<div className={styled.map}>
					<h4>EN ATALAYA S.A.S NOS ENCARGAMOS DE TODO</h4>
					<Link to='/contactenos'>¡Solicita una cotización!</Link>
					<Map />
				</div>
			</Container>
		</div>
	)
}
