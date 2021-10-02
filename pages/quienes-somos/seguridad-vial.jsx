import Modal from 'components/Modal'
import React, { useState } from 'react'
import { Banner } from 'components/Banner'
import styled from 'styles/seguridadvial.module.css'
import CardInfoBanner from 'components/CardInfoBanner'

const seguridadVial = () => {
	const [showModal, setShowModal] = useState(false)

	const handleModal = () => {
		setShowModal(!showModal)
	}

	return (
		<div className={`${styled.container}`}>
			<Banner url={'../vial.png'} />
			<CardInfoBanner handleModal={handleModal}>
				<p>
					LOGÍSITICA Y TRANSPORTE ATALAYA S.A.S. es una empresa
					dedicada a transporte masivo en general, pasajeros, mixto,
					especial, transporte de residuos y mercancías peligrosas,
					transporte tercerizado, transporte de mercancías licitas,
					transporte logístico portuario, aéreo, prorrateo, depósito
					de transito aduanero, importaciones, alquiler de maquinaria
					amarilla, grúas telescópicas, agrícola, tracto camiones,
					adecuaciones con camión cisterna, cama baja. Tratamiento de
					aguas residuales, asesoría y consultoría, ambiental, civil.
					Arrendamiento de todo tipo de bienes inmuebles, aserias y
					consultorías financieras.
				</p>
			</CardInfoBanner>
			{showModal && (
				<Modal handleModal={handleModal}>
					<h1>hola mundo</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Explicabo, laudantium hic consequatur porro alias
						libero fuga blanditiis eius omnis consequuntur quisquam
						eaque neque inventore, culpa asperiores quae molestiae
						tenetur modi.
					</p>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Culpa nihil sequi nisi nobis eius exercitationem
						repudiandae maxime, minima corporis voluptate enim,
						tenetur deserunt neque reprehenderit veritatis. Ipsa
						velit atque tempore. Saepe iusto similique eum, neque
						porro ipsum, maxime voluptatum dolore architecto, veniam
						hic repellat fugiat ex. Dolor eum cum alias quae
						consequatur facere consequuntur totam, fugit quisquam
						eligendi? Exercitationem, enim. Obcaecati cum repellat,
						magni voluptates commodi dolore voluptate esse in unde
						excepturi, ratione, corrupti fugit a vitae dignissimos
						incidunt optio? Libero assumenda autem totam doloremque
						in eos sit porro odio. Sit perferendis consectetur
						veritatis! Quas quae rem earum. Repellendus laboriosam
						at, cumque quos, hic, dicta enim deleniti dolor
						veritatis nulla delectus incidunt ipsam! Doloribus vero
						mollitia natus soluta repudiandae eum. Tempora
						temporibus eligendi laudantium ad nulla voluptas
						corporis, reprehenderit laborum possimus placeat tempore
						dolores dolorum animi consequuntur sequi illum natus
						assumenda. Incidunt dolor fuga ad sunt maxime. Eos,
						earum natus? At, deleniti molestias, dolorem magni velit
						incidunt dolorum quibusdam cupiditate a iste cum et. Ea
						laboriosam, cum velit a nesciunt obcaecati eius sequi
						repellat atque molestias eum ex minima corrupti.
					</p>
					<br />
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Culpa nihil sequi nisi nobis eius exercitationem
						repudiandae maxime, minima corporis voluptate enim,
						tenetur deserunt neque reprehenderit veritatis. Ipsa
						velit atque tempore. Saepe iusto similique eum, neque
						porro ipsum, maxime voluptatum dolore architecto, veniam
						hic repellat fugiat ex. Dolor eum cum alias quae
						consequatur facere consequuntur totam, fugit quisquam
						eligendi? Exercitationem, enim. Obcaecati cum repellat,
						magni voluptates commodi dolore voluptate esse in unde
						excepturi, ratione, corrupti fugit a vitae dignissimos
						incidunt optio? Libero assumenda autem totam doloremque
						in eos sit porro odio. Sit perferendis consectetur
						veritatis! Quas quae rem earum. Repellendus laboriosam
						at, cumque quos, hic, dicta enim deleniti dolor
						veritatis nulla delectus incidunt ipsam! Doloribus vero
						mollitia natus soluta repudiandae eum. Tempora
						temporibus eligendi laudantium ad nulla voluptas
						corporis, reprehenderit laborum possimus placeat tempore
						dolores dolorum animi consequuntur sequi illum natus
						assumenda. Incidunt dolor fuga ad sunt maxime. Eos,
						earum natus? At, deleniti molestias, dolorem magni velit
						incidunt dolorum quibusdam cupiditate a iste cum et. Ea
						laboriosam, cum velit a nesciunt obcaecati eius sequi
						repellat atque molestias eum ex minima corrupti.
					</p>
					<br />
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Culpa nihil sequi nisi nobis eius exercitationem
						repudiandae maxime, minima corporis voluptate enim,
						tenetur deserunt neque reprehenderit veritatis. Ipsa
						velit atque tempore. Saepe iusto similique eum, neque
						porro ipsum, maxime voluptatum dolore architecto, veniam
						hic repellat fugiat ex. Dolor eum cum alias quae
						consequatur facere consequuntur totam, fugit quisquam
						eligendi? Exercitationem, enim. Obcaecati cum repellat,
						magni voluptates commodi dolore voluptate esse in unde
						excepturi, ratione, corrupti fugit a vitae dignissimos
						incidunt optio? Libero assumenda autem totam doloremque
						in eos sit porro odio. Sit perferendis consectetur
						veritatis! Quas quae rem earum. Repellendus laboriosam
						at, cumque quos, hic, dicta enim deleniti dolor
						veritatis nulla delectus incidunt ipsam! Doloribus vero
						mollitia natus soluta repudiandae eum. Tempora
						temporibus eligendi laudantium ad nulla voluptas
						corporis, reprehenderit laborum possimus placeat tempore
						dolores dolorum animi consequuntur sequi illum natus
						assumenda. Incidunt dolor fuga ad sunt maxime. Eos,
						earum natus? At, deleniti molestias, dolorem magni velit
						incidunt dolorum quibusdam cupiditate a iste cum et. Ea
						laboriosam, cum velit a nesciunt obcaecati eius sequi
						repellat atque molestias eum ex minima corrupti.
					</p>
					<br />
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Culpa nihil sequi nisi nobis eius exercitationem
						repudiandae maxime, minima corporis voluptate enim,
						tenetur deserunt neque reprehenderit veritatis. Ipsa
						velit atque tempore. Saepe iusto similique eum, neque
						porro ipsum, maxime voluptatum dolore architecto, veniam
						hic repellat fugiat ex. Dolor eum cum alias quae
						consequatur facere consequuntur totam, fugit quisquam
						eligendi? Exercitationem, enim. Obcaecati cum repellat,
						magni voluptates commodi dolore voluptate esse in unde
						excepturi, ratione, corrupti fugit a vitae dignissimos
						incidunt optio? Libero assumenda autem totam doloremque
						in eos sit porro odio. Sit perferendis consectetur
						veritatis! Quas quae rem earum. Repellendus laboriosam
						at, cumque quos, hic, dicta enim deleniti dolor
						veritatis nulla delectus incidunt ipsam! Doloribus vero
						mollitia natus soluta repudiandae eum. Tempora
						temporibus eligendi laudantium ad nulla voluptas
						corporis, reprehenderit laborum possimus placeat tempore
						dolores dolorum animi consequuntur sequi illum natus
						assumenda. Incidunt dolor fuga ad sunt maxime. Eos,
						earum natus? At, deleniti molestias, dolorem magni velit
						incidunt dolorum quibusdam cupiditate a iste cum et. Ea
						laboriosam, cum velit a nesciunt obcaecati eius sequi
						repellat atque molestias eum ex minima corrupti.
					</p>
				</Modal>
			)}
		</div>
	)
}

export default seguridadVial
