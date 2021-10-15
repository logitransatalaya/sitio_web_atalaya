import React from 'react'
import { Carousel } from 'react-bootstrap'
import styled from 'styles/Home.module.css'

export const Slider = () => {
	return (
		<div className={styled.slider}>
			<Carousel>
				<Carousel.Item>
					<img
						className={styled.imgNormal}
						src='/slider/primera.jpg'
						alt=''
					/>
					<img
						className={styled.imgResponsive}
						src='/slider/primeraR.png'
						alt=''
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className={styled.imgNormal}
						src='/slider/segunda.png'
						alt=''
					/>
					<img
						className={styled.imgResponsive}
						src='/slider/segundaR.png'
						alt=''
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className={styled.imgNormal}
						src='/slider/tercera.png'
						alt=''
					/>
					<img
						className={styled.imgResponsive}
						src='/slider/terceraR.png'
						alt=''
					/>
				</Carousel.Item>
			</Carousel>
		</div>
	)
}
