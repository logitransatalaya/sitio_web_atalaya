import Link from 'next/link'
import React, { useState } from 'react'
import styles from 'styles/Nav.module.css'

export const NavAtalaya = () => {
	const [stateNav, setStateNav] = useState(true)
	return (
		<>
			<nav
				className={
					stateNav
						? styles.navbar
						: `${styles.navbar} ${styles.navbarShow}`
				}
			>
				<span className={styles.logo}>
					<img src='/logoazul.png' alt='' />
				</span>
				<ul className={styles.menu}>
					<li>
						<Link href='/'>
							<a>INICIO</a>
						</Link>
					</li>
					<li className={styles.subMenu}>
						<a href='#'>QUIENES SOMOS</a>
						<ul className={styles.listSubMenu}>
							<li>
								<Link href='#/quienes-somos/sobre-nosotros'>
									<a>SOBRE NOSOTROS</a>
								</Link>
							</li>
							<li>
								<Link href='/quienes-somos/sedes'>
									<a>SEDES</a>
								</Link>
							</li>
							<li>
								<Link href='/quienes-somos/seguridad-vial'>
									<a>SEGURIDAD VIAL</a>
								</Link>
							</li>
							<li>
								<Link href='/quienes-somos/sistema-gestion-integrado'>
									<a>SISTEMA DE GESTIÓN INTEGRADO</a>
								</Link>
							</li>
						</ul>
					</li>
					<li>
						<Link href='/servicios'>
							<a>SERVICIOS</a>
						</Link>
					</li>

					<li>
						<Link href='/contactenos'>
							<a>CONTACTENOS</a>
						</Link>
					</li>
				</ul>
			</nav>
			<div
				className={styles.icons_handleMenu}
				onClick={() => setStateNav(!stateNav)}
			>
				{stateNav ? '=' : 'X'}
			</div>
		</>
	)
}
