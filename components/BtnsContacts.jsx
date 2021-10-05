import React, { useEffect, useState } from 'react'
import styled from '../styles/btnsContact.module.css'
import Image from 'next/image'

const initialState = {
	wsp: '',
	vt: ''
}

export const BtnsContacts = ({ icon, iconResponsive, title }) => {
	const [showToolTip, setShowToolTip] = useState(true)
	const [handleWidth, setHandleWidth] = useState(0)
	const [hiddenTooltip, setHiddenTooltip] = useState(false)
	const [image, setImage] = useState(initialState)

	useEffect(() => {
		const widthScreen = window.innerWidth
		setHandleWidth(widthScreen)

		window.onresize = function () {
			setHandleWidth(window.innerWidth)
		}

		const hiddenTooltip = () => {
			handleWidth < 600 ? setHiddenTooltip(true) : setHiddenTooltip(false)
			handleWidth < 600
				? setImage({
						...image,
						wsp: iconResponsive,
						vt: iconResponsive
				  })
				: setImage({
						...image,
						wsp: icon,
						vt: icon
				  })
		}

		hiddenTooltip()
	}, [handleWidth])

	useEffect(() => {
		const handleToolTip = () => {
			setTimeout(() => {
				setShowToolTip(false)
			}, 4000)
		}
		handleToolTip()
	}, [])

	return (
		<div className={`${styled.btnsContact} ${styled.btnW}`}>
			{title === 'Whatsapp' ? (
				<a
					className={styled.acontainer}
					href='https://wa.me/573006123886?text=Hablalo%20pai%20le%20habla%20el%20Kalixto'
					target='_blank'
				>
					<Image
						src={`/icons/${image.wsp}.svg`}
						width='100%'
						height='100%'
						className={styled.wsp}
					/>
					{!hiddenTooltip && (
						<span
							className={`${
								showToolTip
									? `${styled.tiptextW} ${styled.visible}`
									: styled.tiptextW
							}`}
						>
							Contactanos por Whatsapp
						</span>
					)}
				</a>
			) : (
				<a className={styled.acontainer} href=''>
					<Image
						src={`/icons/${image.vt}.svg`}
						width='100%'
						height='100%'
						className={styled.vt}
					/>

					{!hiddenTooltip && (
						<span
							className={`${
								showToolTip
									? `${styled.tiptextVT} ${styled.visible}`
									: styled.tiptextVT
							}`}
						>
							paginaturismo.com
						</span>
					)}
				</a>
			)}
		</div>
	)
}
