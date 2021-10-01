import React, { useState } from 'react'
import styles from 'styles/Nav.module.css'
import Link from 'next/link'

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
				<span className={styles.logo}>Logo</span>
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
							<li>
								<a href=''>SEDES</a>
							</li>
							<li>
								<a href=''>SEGURIDAD VIAL</a>
							</li>
							<li>
								<a href=''>SISTEMA DE GESTIÓN INTEGRADO</a>
							</li>
						</ul>
					</li>
					<li>
						<a href=''>SERVICIOS</a>
					</li>
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
