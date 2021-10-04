import React, { useState } from 'react'
import styled from 'styles/About.module.css'
import Link from 'next/link'

const initialState = {
	type_client: 'default',
	name: '',
	mail: '',
	phone: '',
	affair: 'default',
	comments: ''
}
const FormAbout = () => {
	const [valuesInputs, setValuesInputs] = useState(initialState)
	const [checkInput, setCheckInput] = useState(false)

	const { type_client, name, mail, phone, affair, comments } = valuesInputs

	const handleInputs = (e) => {
		setValuesInputs({
			...valuesInputs,
			[e.target.name]: e.target.value
		})
	}

	const animationSelect = () => {
		const result =
			type_client === 'default'
				? `${styled.form_select}`
				: `${styled.form_select} ${styled.form_select_focus}`
		return result
	}

	const animationSelect2 = () => {
		const result =
			affair === 'default'
				? `${styled.form_select}`
				: `${styled.form_select} ${styled.form_select_focus}`
		return result
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		if (!checkInput) {
			return alert('Tienes que capetar las politicas')
		}

		alert('Se esta enviando')
	}

	return (
		<form className={styled.form} onSubmit={handleSubmit}>
			<h2 className={styled.form_title}>
				Déjenos conocer su requerimiento y pronto lo contactaremos
			</h2>
			<div className={styled.form_container}>
				<div className={styled.form_group}>
					<select
						id='cliente'
						className={animationSelect()}
						name={'type_client'}
						value={type_client}
						onChange={handleInputs}
					>
						<option value='default' disabled hidden></option>
						<option value='persona'>Persona</option>
						<option value='empresa'>Empresa</option>
					</select>
					<label htmlFor='cliente' className={styled.form_label}>
						Tipo de cliente:
					</label>
					<span className={styled.form_line}></span>
				</div>
				<div className={styled.form_group}>
					<input
						type='text'
						id='name'
						className={styled.form_input}
						placeholder=' '
						name={'name'}
						value={name}
						onChange={handleInputs}
					/>
					<label htmlFor='name' className={styled.form_label}>
						Nombre:
					</label>
					<span className={styled.form_line}></span>
				</div>
				<div className={styled.form_group}>
					<input
						type='text'
						id='email'
						className={styled.form_input}
						placeholder=' '
						name={'mail'}
						value={mail}
						onChange={handleInputs}
					/>
					<label htmlFor='email' className={styled.form_label}>
						E-mail:
					</label>
					<span className={styled.form_line}></span>
				</div>
				<div className={styled.form_group}>
					<input
						type='text'
						id='phone'
						className={styled.form_input}
						placeholder=' '
						name={'phone'}
						value={phone}
						onChange={handleInputs}
					/>
					<label htmlFor='phone' className={styled.form_label}>
						Celular:
					</label>
					<span className={styled.form_line}></span>
				</div>
				<div className={styled.form_group}>
					<select
						id='asunto'
						className={animationSelect2()}
						onChange={handleInputs}
						name={'affair'}
						value={affair}
						onChange={handleInputs}
					>
						<option value='default' disabled hidden></option>
						<option value='cotizacion'>Cotización</option>
						<option value='inquietud'>Inquietud</option>
						<option value='solicitudinfo'>
							Solicitud de información
						</option>
						<option value='otro'>Otro</option>
					</select>
					<label htmlFor='asunto' className={styled.form_label}>
						Asunto:
					</label>
					<span className={styled.form_line}></span>
				</div>
				<div className={styled.form_group}>
					<textarea
						type='text'
						id='message'
						className={`${styled.form_input} ${styled.form_textarea}`}
						placeholder=' '
						name={'comments'}
						value={comments}
						onChange={handleInputs}
					/>
					<label htmlFor='message' className={styled.form_label}>
						Comentarios:
					</label>
					<span className={styled.form_line_textarea}></span>
				</div>
			</div>
			<div className={styled.politics_btn}>
				<div className={styled.politics}>
					<input
						id='check'
						type='checkbox'
						name={'politics'}
						onChange={() => setCheckInput(!checkInput)}
					/>
					<label htmlFor='check'>
						Estoy de acuerdo con las políticas de tratamiento de
						datos personales{' '}
						<Link href='/dataTreatment'>
							<a target='_blank'>Ver políticas</a>
						</Link>
					</label>
				</div>
				<div className={styled.btn_container}>
					<button className={styled.btn_submit}>Enviar</button>
				</div>
			</div>
		</form>
	)
}

export default FormAbout
