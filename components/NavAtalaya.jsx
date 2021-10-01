import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import styles from 'styles/Nav.module.css'

export const NavAtalaya = () => {
	return (
		<Navbar fixed='top' className='shadow p-3 mb-5 bg-white rounded'>
			<Container>
				<Navbar.Brand href='#home'>ATALAYA</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link href='#home'>INICIO</Nav.Link>
						<NavDropdown
							title='QUIENES SOMOS'
							id='basic-nav-dropdown'
						>
							<NavDropdown.Item href='#action/3.1'>
								SOBRE NOSOTROS
							</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.2'>
								SEDES
							</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.3'>
								SEGURIDAD VIAL
							</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.4'>
								SISTEMA DE GESTIÓN INTEGRADO
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href='#link'>SERVICIOS</Nav.Link>
						<Nav.Link href='#link'>CONTÁCTENOS</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
