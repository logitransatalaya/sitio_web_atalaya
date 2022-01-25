export const useEmailTo = () => {
	const sendEmail = (body) => {
		const { type_client, name, mail, phone, affair, comments } = body

		window.open(
			`mailto:servicioalcliente@logitransatalaya.com?subject=${
				affair || 'Estoy interesado en contactarme con ustedes'
			}&body=${`Tipo de cliente: ${type_client}. %0D%0A
			nombre: ${name}. %0D%0A
			E-mail: ${mail}. %0D%0A
			Celular: ${phone}. %0D%0A
			Asunto: ${affair}. %0D%0A
			Comentarios: ${comments}. %0D%0A %0D%0A`}`
		)
	}

	return {
		sendEmail
	}
}
