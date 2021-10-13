import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import styles from 'styles/Nav.module.css'
import { BtnToggle } from './BtnToggle'
import { Container } from './Container'

export const NavAtalaya = () => {
	const [stateNav, setStateNav] = useState(true)
	return (
		<div className={styles.container_shadow}>
			<Container>
				<nav
					className={
						stateNav
							? styles.navbar
							: `${styles.navbar} ${styles.navbarShow}`
					}
				>
					<span className={styles.logo}>
						<Link to='/'>
							<img src='/logoazul.png' alt='' />
						</Link>
					</span>
					<ul className={styles.menu}>
						<li>
							<Link to='/'>INICIO</Link>
						</li>
						<li className={styles.subMenu}>
							<div className={styles.iconListItem}>
								<svg
									aria-hidden='true'
									focusable='false'
									data-prefix='fas'
									data-icon='chevron-right'
									className='svg-inline--fa fa-chevron-right fa-w-10'
									role='img'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 320 512'
								>
									<path d='M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z'></path>
								</svg>
							</div>
							<a
								href='##'
								style={{ color: '#053b77', cursor: 'pointer' }}
							>
								QUIENES SOMOS
							</a>
							<ul className={styles.listSubMenu}>
								<li className={styles.listItem}>
									<div className={styles.iconListItem}>
										<svg
											aria-hidden='true'
											focusable='false'
											data-prefix='fas'
											data-icon='chevron-right'
											className='svg-inline--fa fa-chevron-right fa-w-10'
											role='img'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 320 512'
										>
											<path d='M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z'></path>
										</svg>
									</div>
									<Link to='/quienes-somos/sobre-nosotros'>
										SOBRE NOSOTROS
									</Link>
								</li>
								<li className={styles.listItem}>
									<div className={styles.iconListItem}>
										<svg
											aria-hidden='true'
											focusable='false'
											data-prefix='fas'
											data-icon='chevron-right'
											className='svg-inline--fa fa-chevron-right fa-w-10'
											role='img'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 320 512'
										>
											<path d='M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z'></path>
										</svg>
									</div>
									<Link to='/quienes-somos/sedes'>SEDES</Link>
								</li>
								<li className={styles.listItem}>
									<div className={styles.iconListItem}>
										<svg
											aria-hidden='true'
											focusable='false'
											data-prefix='fas'
											data-icon='chevron-right'
											className='svg-inline--fa fa-chevron-right fa-w-10'
											role='img'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 320 512'
										>
											<path d='M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z'></path>
										</svg>
									</div>
									<Link to='/quienes-somos/seguridad-vial'>
										SEGURIDAD VIAL
									</Link>
								</li>
								<li className={styles.listItem}>
									<div className={styles.iconListItem}>
										<svg
											aria-hidden='true'
											focusable='false'
											data-prefix='fas'
											data-icon='chevron-right'
											className='svg-inline--fa fa-chevron-right fa-w-10'
											role='img'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 320 512'
										>
											<path d='M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z'></path>
										</svg>
									</div>
									<Link to='/quienes-somos/sistema-gestion-integrado'>
										SISTEMA DE GESTIÓN INTEGRADO
									</Link>
								</li>
							</ul>
						</li>
						<li>
							<Link to='/servicios'>SERVICIOS</Link>
						</li>

						<li>
							<Link to='/contactenos'>CONTACTENOS</Link>
						</li>
					</ul>
				</nav>
			</Container>
			<div
				className={styles.icons_handleMenu}
				onClick={() => setStateNav(!stateNav)}
			>
				<BtnToggle />
			</div>
		</div>
	)
}