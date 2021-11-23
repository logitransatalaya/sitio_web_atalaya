import React from 'react'
// import { Link } from 'react-router-dom'
import styled from 'styles/Home.module.css'

export const HomeCard = ({ type, title }) => {
	return (
		<div className={`${styled.card}`}>
			<div className={styled.imageContainer}>
				<img src={`/homeCards/${type}.png`} alt='' />
			</div>
			<div className={styled.cardTextcontent}>
				{type === 'quienes-somos' && (
					<div>
						<strong>Logística y transporte ATALAYA S.A.S</strong> es
						una empresa que ha sido conformada con el propósito de
						cerrar las brechas sociales para gestar cambios
						transculturales y así aportar a la construcción de una
						Colombia justa. <strong>ATALAYA S.A.S</strong> está
						conformada por un gran equipo de trabajo íntegro.
					</div>
				)}
				{type === 'mision' && (
					<div>
						Como <strong>ATALAYA S.A.S</strong> somos una compañia
						que brinda soluciones en logística integral de altos
						estándares de calidad, siendo así un pilar regional en
						el liderazgo de productos de primera, a través de un
						poderoso énfasis social.
					</div>
				)}
				{type === 'vision' && (
					<div>
						<strong>ATALAYA S.A.S</strong> en el año 2025 tendrá
						presencia en los 32 departamentos de Colombia para
						lograr posicionarnos en el mercado latinoamericano
						abriendo lazos a nivel mundial; liderando el mercado
						tecnológico, como uno de los máximos exponentes de la
						logística integral.
					</div>
				)}
			</div>
			{/* <div>
				<Link to='/'>
					<p>+</p>
				</Link>
			</div> */}
		</div>
	)
}
