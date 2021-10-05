import React from 'react'
import { BtnsContacts } from './BtnsContacts'
import styled from '../styles/btnsContact.module.css'

const ContainerBtns = () => {
	return (
		<div className={styled.container}>
			<BtnsContacts icon='wspweb' title='Whatsapp' />
			<BtnsContacts icon='viajesyturismoweb' title='viajes y turismo' />
		</div>
	)
}

export default ContainerBtns
