import React, { useState } from 'react'
import styled from 'styles/About.module.css'

const FormAbout = () => {
	const [selectStatus, setselectStatus] = useState('default')
	const [selectStatus2, setselectStatus2] = useState('default')

	const handleSelect = (e) => {
		setselectStatus(e.target.value)
	}

	const animationSelect = () => {
		const result =
			selectStatus === 'default'
				? `${styled.form_select}`
				: `${styled.form_select} ${styled.form_select_focus}`
		return result
	}

	const animationSelect2 = () => {
		const result =
			selectStatus2 === 'default'
				? `${styled.form_select}`
				: `${styled.form_select} ${styled.form_select_focus}`
		return result
	}

	return (
		<form className={styled.form}>
			<h2 className={styled.form_title}>
				Déjenos conocer su requerimiento y pronto lo contactaremos
			</h2>
			<div className={styled.form_container}>
				<div className={styled.form_group}>
					<select
						id='asunto'
						className={animationSelect()}
						defaultValue={selectStatus}
						onChange={handleSelect}
					>
						<option value='default' disabled hidden></option>
						<option value='persona'>Persona</option>
						<option value='empresa'>Empresa</option>
					</select>
					<label htmlFor='asunto' className={styled.form_label}>
						Asunto:
					</label>
					<span className={styled.form_line}></span>
				</div>
				<div className={styled.form_group}>
					<input
						type='text'
						id='name'
						className={styled.form_input}
						placeholder=' '
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
						defaultValue={selectStatus2}
						onChange={(e) => setselectStatus2(e.target.value)}
					>
						<option
							value='default'
							selected
							disabled
							hidden
						></option>
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
					/>
					<label htmlFor='message' className={styled.form_label}>
						Comentarios:
					</label>
					<span className={styled.form_line_textarea}></span>
				</div>
			</div>
			<div className={styled.politics_btn}>
				<div className={styled.politics}>
					<input id='check' type='checkbox' />
					<label htmlFor='check'>
						Estoy de acuerdo con las políticas de tratamiento de
						datos personales <span>Ver políticas</span>
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
