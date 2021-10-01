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
					<img src='/logo.png' alt='' />
				</span>
				<ul className={styles.menu}>
					<li>
						<a href=''>INICIO</a>
					</li>
					<li className={styles.subMenu}>
						<a href=''>QUIENES SOMOS</a>
						<ul className={styles.listSubMenu}>
							<li>
								<a href=''>SOBRE NOSOTROS</a>
							</li>
							<Link href='/quienes-somos/sedes'>
								<a href=''>SEDES</a>
							</Link>
							<li>
								<a href=''>SEGURIDAD VIAL</a>
							</li>
							<li>
								<a href=''>SISTEMA DE GESTIÓN INTEGRADO</a>
							</li>
						</ul>
					</li>
					<Link href='/servicios'>
						<a href=''>SERVICIOS</a>
					</Link>
					<li>
						<a href=''>CONTACTENOS</a>
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
