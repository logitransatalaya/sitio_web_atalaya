import FormAbout from 'components/Contactenos/FormAbout'
import React from 'react'
import styled from 'styles/About.module.css'

const contactenos = () => {
	return (
		<div className={styled.formContainer}>
			<FormAbout />
		</div>
	)
}

export default contactenos
