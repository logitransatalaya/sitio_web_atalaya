import React from 'react'
import { Banner } from 'components/Banner'
import CardInfoBanner from 'components/CardInfoBanner'

const privacyPolicies = () => {
	return (
		<div className='mb-4'>
			<Banner
				url={'privacidad-de-datos.png'}
				urlMobile={'politica-de-privacidad-mobile.png'}
			/>
			<CardInfoBanner>
				<p>
					{' '}
					<strong>Logística y transporte Atalaya</strong> es conciente
					de que el uso inadecuado de la información puede dar lugar a
					varios tipos de sanciones, entre ellas de tipo penal,
					contenidas en la Ley 1273 de 2009: Delitos Informáticos -
					Artículo 269 F. Violación de los Datos Personales: &quot;El
					que, sin estar facultado para ello, con provecho propio o de
					un tercero, obtenga, compile, sustraiga, ofrezca, venda,
					intercambie, envíe, compre, intercepte, divulgue, modifique
					o emplee códigos personales, datos personales contenidos en
					ficheros, archivos, bases de datos o medios semejantes,
					incurrirá en pena de prisión de cuarenta y ocho (48) a
					noventa y seis (96) meses y en multa de 100 a 1000 salarios
					mínimos legales mensuales vigentes&quot;. Comprendemos que
					es una gran responsabilidad y por eso existe el compromiso y
					esfuerzo para proteger su información. Los datos recopilados
					se utilizan con objetivos de difusión de nuestras
					actividades, así también para mantener y cumplir las
					obligaciones contractuales, legales y de transparencia que
					exijan algún tipo de comunicación. Parte de los datos se
					utilizan como referencia para optimizar la pertinencia de
					los contenidos y para garantizar la integridad,
					confidencialidad y disponibilidad de la información. ATALAYA
					no venderá, distribuirá ni arrendará la información
					almacenada a terceros, excepto de acuerdo con estos términos
					y condiciones.
				</p>
			</CardInfoBanner>
		</div>
	)
}

export default privacyPolicies
